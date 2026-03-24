import Chatbot from "../components/chatbot/Chatbot";
import Header from "../components/common/Header";
import { useState } from "react";

const Contact = () => {
    const [chatbot, setChatbot] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen bg-white sm:px-6 lg:px-8">
           
            <Header />
                      
            <div className="h-128 flex justify-end items-start">
                <button className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setChatbot(!chatbot)}>
                    {chatbot ? "Close" : "OpenChat"}
                </button>
                {chatbot && <Chatbot />}
            </div>

             <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(0)}>Reset</button>
        </div>

    );
}

export default Contact;