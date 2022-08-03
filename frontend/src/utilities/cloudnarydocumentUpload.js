import axios from "axios";
import { notification } from "./notification";

export const UploadDocument =async  (docs) => {
    if (docs.type === "application/pdf" || docs.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      const formData = new FormData();
      formData.append("file", docs);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      formData.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
     const {data} = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,formData)
     if(data){
        return data;
     }
    } else {
      return notification.error("only accept jpeg and png files");
    }
  };