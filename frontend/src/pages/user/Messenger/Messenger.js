import './messenger.css';
import Header from '../../../components/User/Header/Header';
import Conversation from '../../../components/User/Chat/conversations/Conversation';
import Message from '../../../components/User/Chat/message/Message';
import ChatOnline from '../../../components/User/Chat/chatOnline/ChatOnline';

function ChatUser() {
  return (
    <>
      <Header />
      <div className="messenger ">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
              ></textarea>
              <button className="chatSubmitButton">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatUser;
