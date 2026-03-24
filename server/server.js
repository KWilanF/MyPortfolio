import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workoutRoutes.js';

const app = express();

// Get allowed origins from environment variable or use defaults
const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['https://kwilanf-portfolio.vercel.app', 'http://localhost:5173'];

// Manual CORS middleware
app.use((req, res, next) => {
    const origin = req.headers.origin;
    
    // Check if the origin is allowed
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
        res.header('Access-Control-Allow-Origin', origin || '*');
    } else {
        console.log(`Blocked CORS request from: ${origin}`);
    }
    
    // Allow credentials
    res.header('Access-Control-Allow-Credentials', 'true');
    
    // Allow specific methods
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    
    // Allow specific headers
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    
    next();
});

// middleware
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
    next();
});

// Health check endpoint for keep-alive and monitoring
app.get('/health', async (req, res) => {
    try {
        // Check database connection status
        const dbStatus = mongoose.connection.readyState;
        const dbStatusText = {
            0: 'disconnected',
            1: 'connected',
            2: 'connecting',
            3: 'disconnecting'
        }[dbStatus] || 'unknown';
        
        res.json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            database: {
                status: dbStatusText,
                readyState: dbStatus
            },
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            environment: process.env.NODE_ENV || 'production',
            server: 'active'
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error', 
            message: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Simple ping endpoint (even lighter weight)
app.get('/ping', (req, res) => {
    res.json({ 
        pong: true, 
        timestamp: Date.now(),
        message: 'Server is awake!'
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'API is running',
        endpoints: {
            health: '/health',
            ping: '/ping',
            workouts: '/api/workouts'
        },
        timestamp: new Date().toISOString()
    });
});

// routes
app.use('/api/workouts', workoutRoutes);

// Keep-alive function to prevent MongoDB Atlas cold starts
const keepAlive = () => {
    setInterval(async () => {
        try {
            // Check if connection is active before pinging
            if (mongoose.connection.readyState === 1) {
                await mongoose.connection.db.admin().ping();
                console.log('🔄 MongoDB keep-alive ping sent at', new Date().toTimeString());
            } else {
                console.log('⚠️ MongoDB not connected, skipping keep-alive ping');
            }
        } catch (error) {
            console.error('❌ Keep-alive ping failed:', error.message);
        }
    }, 240000); // Send ping every 4 minutes (240,000 ms)
};

// Correct MongoDB connection options (without unsupported options)
const mongoOptions = {
    maxPoolSize: 10,           // Maintain connection pool
    minPoolSize: 2,            // Keep minimum connections
    socketTimeoutMS: 45000,    // Socket timeout
    connectTimeoutMS: 10000,   // Connection timeout
    serverSelectionTimeoutMS: 5000, // Server selection timeout
    heartbeatFrequencyMS: 30000, // Check connection every 30 seconds
    // Note: keepAlive is not supported in the current MongoDB driver
    // It's enabled by default in newer versions
};

// Connect to db
mongoose.connect(process.env.MONGODB_URI, mongoOptions)
    .then(() => {
        console.log('✅ Connected to MongoDB Atlas');
        console.log('📊 Database:', mongoose.connection.db.databaseName);
        console.log('🔌 Connection pool:', {
            maxPoolSize: mongoOptions.maxPoolSize,
            minPoolSize: mongoOptions.minPoolSize
        });
        keepAlive(); // Start keep-alive pings
        
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
            console.log(`🌐 CORS allowed origins:`, allowedOrigins);
            console.log(`💚 Health check available at: /health`);
            console.log(`🏓 Ping endpoint available at: /ping`);
        });
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    });