import { API_ENDPOINT } from "./api";
import axiosInst from "./axios";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const responce = await axiosInst.post(
      API_ENDPOINT.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return responce.data;
  } catch (error) {
    console.error("Error Uploading The Image", error);
    throw error;
  }
};

export default uploadImage;
