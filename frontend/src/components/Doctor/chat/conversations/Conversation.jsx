import { useEffect, useState } from 'react';
import '../../../User/Chat/conversations/conversation.css';
import * as api from '../../../../api/index';
import { errorHandler } from '../../../../utilities/errorMessege';
import { notification } from '../../../../utilities/notification';
import Spinner from '../../../../components/User/Spinner/Spinner';

export default function Conversation({ conversations, currentUser }) {
  const [Fulldata, setFulldata] = useState({ loading: false, done: false });

  useEffect(() => {
    const userId = conversations.members.find((m) => m !== currentUser._id);
    !Fulldata.done && getUser(userId);
  }, [conversations, currentUser]);
  const getUser = async (id) => {
    setFulldata((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await api.getUser(id);
      if (data) {
        setFulldata((prev) => ({
          ...prev,
          ...data,
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
    <div className="conversation">
      <img
        className="conversationImg"
        src={Fulldata.data?.profile_image}
        alt="profile_picture"
      />
      <span className="conversationName">{Fulldata.data?.name}</span>
    </div>
  );
}
