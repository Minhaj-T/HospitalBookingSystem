import axios from "axios";

export const UploadImage =async  (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const formData = new FormData();
      formData.append("file", pics);
      formData.append("upload_preset", "carewell");
      formData.append("cloud_name", "da9lhwgia");
     const {data} = await axios.post("https://api.cloudinary.com/v1_1/da9lhwgia/image/upload",formData)
     if(data){
        return data;
     }
    } else {
      return console.log("picture is not uploaded");
    }
  };