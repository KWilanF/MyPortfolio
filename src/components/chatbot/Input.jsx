function Input() {
    
    return (
        <div>
            <input className="border border-gray-400 p-2 rounded-lg mr-4" placeholder="send message"
                size="30"></input>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
                Send
            </button>
        </div>
    )
}

export default Input;