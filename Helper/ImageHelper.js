import * as ImageManipulator from 'expo-image-manipulator'
import { Image } from 'react-native';
export const checkImageSize = (image,selectImage,setSelectImage) => {
  if(image[0].width > 1920  || image[0].height > 1080) compressImage(image,selectImage,setSelectImage,true);
  else compressImage(image,selectImage,setSelectImage,false);
};

export const compressImage = async (image,selectImage,setSelectImage,isResize) => {
 
  const newSelectImage = [...selectImage]
  if(!isResize)
    {
      const manipResultNonResize = await ImageManipulator.manipulateAsync(
        image[0].uri,
        [{ resize: { width: image[0].width ,height:image[0].height} }],
        { base64:true, compress: 0.7, format: ImageManipulator.SaveFormat.JPEG },
      );
      newSelectImage.push(manipResultNonResize)
      setSelectImage(newSelectImage)
    }
    else{
      const manipResult = await ImageManipulator.manipulateAsync(
        image[0].uri,
        [{ resize: { width: 1920 ,height:1080} }],
        { base64:true, compress: 0.7, format: ImageManipulator.SaveFormat.JPEG },
      );
      console.log(manipResult)
      newSelectImage.push(manipResult)
      setSelectImage(newSelectImage)
    
  }
};

export const getImageSizeAndRatio = (imageUrl) => {
  return new Promise((resolve, reject) => {
    Image.getSize(
      imageUrl,
      (width, height) => {
        const ratio = width / height;
        resolve(ratio);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
