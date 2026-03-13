import userprof from "/user.png";
import robotprof from "/robot.png";


const ChatMessage = ({message, sender}) => {
   
   
    return(
        <>
        {sender === "robot" && (
            <img src={robotprof} alt="Robot" className="w-10" />
        )
        }
        {message}

        {sender === "user" && (
            <img src={userprof} alt="User" className="w-10" />
        )}
        </>
    );
};

export default ChatMessage;