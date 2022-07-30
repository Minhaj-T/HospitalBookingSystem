import './messenger.css';
import Header from '../../../components/User/Header/Header';
import Conversation from '../../../components/User/Chat/conversations/Conversation';
import Message from '../../../components/User/Chat/message/Message';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import * as api from '../../../api/messenger';
import { errorHandler } from '../../../utilities/errorMessege';
import { notification } from '../../../utilities/notification';
import Spinner from '../../../components/User/Spinner/Spinner';
import { io } from 'socket.io-client';
import Footer from '../../../components/Footer/Footer';

function ChatUser() {
  const [Fulldata, setFulldata] = useState({
    loading: false,
    done: false,
    currentChat: null,
  });
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const scrollRef = useRef();
  const { user } = useSelector((state) => state.auth);
  const socket = useRef();
  //create a tocken
  const { token } = user ? user : '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      Fulldata['currentChat']?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, Fulldata['currentChat']]);

  useEffect(() => {
    socket.current.emit('addUser', user._id);
    socket.current.on('getUsers', (users) => {
      setOnlineUsers(users);
    });
  }, []);

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
          conversations: [...data],
          loading: false,
          done: true,
        }));
      }
    } catch (error) {
      return notification.error(errorHandler(error));
    }
  };

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await api.getMessage(Fulldata['currentChat']?._id);
        setMessages(res.data);
      } catch (error) {
        return notification.error(errorHandler(error));
      }
    };
    getMessages();
  }, [Fulldata['currentChat']]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: Fulldata['currentChat']?._id,
    };

    const receiverId = Fulldata['currentChat'].members.find(
      (member) => member !== user._id
    );

    socket.current.emit('sendMessage', {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await api.savedMessage(message);
      setMessages([...messages, res?.data]);
      setNewMessage('');
    } catch (error) {
      return notification.error(errorHandler(error));
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Loading page
  if (Fulldata.loading) {
    return <Spinner />;
  }

  console.log('Message');

  return (
    <>
      <Header />
      <div className="messenger ">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <div className="serchSection">
              <input
                placeholder="Search for friends"
                className="chatMenuInput"
              />
            </div>
            {Fulldata?.conversations &&
              Fulldata.conversations.map((c) => (
                <div
                  key={c._id}
                  onClick={() =>
                    setFulldata((prev) => ({ ...prev, currentChat: c }))
                  }
                >
                  <Conversation conversations={c} currentUser={user} />
                </div>
              ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {Fulldata['currentChat'] ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChatUser;
