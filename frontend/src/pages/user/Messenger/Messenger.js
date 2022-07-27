import './messenger.css';
import Header from '../../../components/User/Header/Header';
import Conversation from '../../../components/User/Chat/conversations/Conversation';
import Message from '../../../components/User/Chat/message/Message';
import ChatOnline from '../../../components/User/Chat/chatOnline/ChatOnline';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as api from '../../../api/messenger';
import { errorHandler } from '../../../utilities/errorMessege';
import { notification } from '../../../utilities/notification';
import Spinner from '../../../components/User/Spinner/Spinner';

function ChatUser() {
  const [Fulldata, setFulldata] = useState({ loading: false, done: false });
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    !Fulldata.done && getConversations();
  }, []);
  const getConversations = async () => {
    setFulldata((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await api.getConversation(user?._id);
      if (data) {
        setFulldata((prev) => ({
          ...prev,
          conversations:[...data],
          loading: false,
          done: true,
        }));
      }
    } catch (error) {
      return notification.error(errorHandler(error));
    }
  };

  // Loading page
  if (Fulldata.loading) {
    return <Spinner />;
  }


  return (
    <>
      <Header />
      <div className="messenger ">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {Fulldata?.conversations 
            && Fulldata.conversations.map((c)=>(
            <Conversation key={c._id} conversations={c} currentUser={user} />
            ))}
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
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatUser;
