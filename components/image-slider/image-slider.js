import Image from "next/image";
import { images } from "./data";
import { useState } from "react";

export default function ImageSlider() {
  const [visibleImage, setVisibleImage] = useState({index: 0, data: images[0]});

  setInterval(() => {
    const nextIndex = visibleImage.index + 1;

    if(nextIndex < lastImageIndex) {
      setVisibleImage({index: nextIndex, data: images[nextIndex]});
    } else {
      setVisibleImage({index: 0, data: images[0]});
    }
  }, 5000);

  return (
    <Image src={visibleImage.data.image} alt={visibleImage.data.alt} />
  );
}