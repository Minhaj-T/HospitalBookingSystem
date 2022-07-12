import axios from "axios";

export const UploadImage =async  (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const formData = new FormData();
      formData.append("file", pics);
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      formData.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
     const {data} = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,formData)
     if(data){
        return data;
     }
    } else {
      return console.log("picture is not uploaded");
    }
  };