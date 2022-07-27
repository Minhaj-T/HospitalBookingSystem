
import { useEffect, useState } from "react";
import "./conversation.css";
import * as api from '../../../../api/index';
import { errorHandler } from '../../../../utilities/errorMessege';
import { notification } from '../../../../utilities/notification';
import Spinner from '../../../../components/User/Spinner/Spinner';

export default function Conversation({conversations,currentUser}){
  const [Fulldata, setFulldata] = useState({ loading: false, done: false });


  useEffect(() => {
    const doctorId = conversations.members.find((m) => m !== currentUser._id);
    !Fulldata.done && getDoctor(doctorId);
  }, [conversations, currentUser]);
  const getDoctor = async (id) => {
    setFulldata((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await api.getDoctor(id);
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
  console.log("conversations", Fulldata);


  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={Fulldata.data?.profile_image}
        alt="profile_picture"
      />
      <span className="conversationName">Dr. {Fulldata.data?.name}</span>
    </div>
  );
}
