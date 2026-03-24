// src/components/KeepAlive.jsx
import { useEffect, useRef, useState } from 'react';

const KeepAlive = () => {
    const pingCount = useRef(0);
    const [lastPingStatus, setLastPingStatus] = useState(null);
    
    useEffect(() => {
        let isMounted = true;
        
        const pingBackend = async () => {
            try {
                // Use your actual backend URL
                const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://myportfolio-1-l4xy.onrender.com';
                
                // Ping the health endpoint (add timestamp to prevent caching)
                const response = await fetch(`${backendUrl}/health?_=${Date.now()}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                
                if (isMounted && response.ok) {
                    const data = await response.json();
                    pingCount.current++;
                    console.log(`✅ Keep-alive ping #${pingCount.current} at ${new Date().toTimeString()}`);
                    console.log(`   Database: ${data.database?.status || 'unknown'}, Uptime: ${Math.floor(data.uptime)}s`);
                    setLastPingStatus('success');
                    
                    // Reset status after 2 seconds
                    setTimeout(() => {
                        if (isMounted) setLastPingStatus(null);
                    }, 2000);
                } else if (isMounted) {
                    console.log(`⚠️ Keep-alive ping failed with status: ${response?.status}`);
                    setLastPingStatus('error');
                }
            } catch (error) {
                // Silent fail - this is expected during cold starts
                if (isMounted) {
                    console.log(`⏳ Keep-alive ping (server waking up) - ${error.message}`);
                    setLastPingStatus('waking');
                }
            }
        };

        // Ping immediately when component mounts
        pingBackend();
        
        // Ping every 10 minutes (600,000 ms) - more frequent for better wake-up
        const interval = setInterval(pingBackend, 600000);
        
        // Also ping when page becomes visible again (user returns to tab)
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                console.log('📱 Tab became visible - sending keep-alive ping');
                pingBackend();
            }
        };
        
        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        // Cleanup
        return () => {
            isMounted = false;
            clearInterval(interval);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
    
    // Optional: Add a visual indicator for development
    if (process.env.NODE_ENV === 'development' && lastPingStatus) {
        return (
            <div style={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                backgroundColor: lastPingStatus === 'success' ? '#10b981' : 
                               lastPingStatus === 'error' ? '#ef4444' : '#f59e0b',
                color: 'white',
                zIndex: 9999,
                opacity: 0.8,
                pointerEvents: 'none'
            }}>
                {lastPingStatus === 'success' ? '✓ Server Active' : 
                 lastPingStatus === 'error' ? '✗ Server Error' : '⏳ Waking Server'}
            </div>
        );
    }
    
    return null;
};

export default KeepAlive;