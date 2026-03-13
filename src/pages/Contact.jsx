import Chatbot from "../components/chatbot/Chatbot";
import Header from "../components/Header";
import { useState } from "react";

const Contact = () => {
    const [chatbot, setChatbot] = useState(false);
    
    return (
        <div className="min-h-screen bg-white sm:px-6 lg:px-8">
           
            <Header />
            
            <div className="max-w-4xl mx-auto px-2 py-2">
                <div className="text-center ">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Contact Me
                    </h1>
                    <div className="w-24 h-1 bg-black mx-auto mb-8"></div>

                </div>
            </div>
            <div className="h-128 flex justify-end items-start">
                <button className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setChatbot(!chatbot)}>
                    {chatbot ? "Close" : "OpenChat"}
                </button>
                {chatbot && <Chatbot />}
            </div>
        </div>

    );
}

export default Contact;