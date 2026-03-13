import Input from "./Input";
import ChatMessage from "./ChatMessage";


const Chatbot = () => {

    return (
        <div className="flex flex-col gap-4 bg-gray-100 border border-red-300 w-128 h-[450px] rounded-lg p-4 mx-4">
          
           <div className="flex flex-col gap-4">
             <ChatMessage message="hello chatbot" sender="user" />
            <ChatMessage message="hi how can i help you?" sender="robot" />
            <ChatMessage message="what day is today" sender="user" />
            <ChatMessage message="today is" sender="robot" />
           </div>

           <div className="mt-auto flex justify-center">
             <Input />
           </div>

        </div>
    )
};

export default Chatbot;