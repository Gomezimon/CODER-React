import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import './RandomImage.css'


const RandomImage = () => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchRandomImage = async () => {
      const db = getFirestore()
      const imagesCollection = collection(db, 'images')
      const imageSnapshot = await getDocs(imagesCollection)

      const imageList = imageSnapshot.docs.map(doc => doc.data())
      if (imageList.length > 0) {
        const randomIndex = Math.floor(Math.random() * imageList.length)
        setImage(imageList[randomIndex].url)
      }
    };

    fetchRandomImage()
  }, [])

  return (
    <div className="RandomImg">
      {image ? (
        <img src={image} alt="Imagen aleatoria" />
      ) : (
        <p>Cargando imagen...</p>
      )}
    </div>
  );
};

export default RandomImage;

