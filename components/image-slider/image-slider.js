'use client'

import Image from "next/image";
import styles from "./styles.module.css";
import { images } from "./data";
import { useState } from "react";

export default function ImageSlider() {
  const [visibleImage, setVisibleImage] = useState({index: 0, data: images[0]});

  function changeVisibleImage() {
    const nextIndex = visibleImage.index + 1;
  
    if(nextIndex < images.length) {
      setVisibleImage({index: nextIndex, data: images[nextIndex]});
    } else {
      setVisibleImage({index: 0, data: images[0]});
    }
  }

  return (
    <Image 
      onAnimationIteration={changeVisibleImage}
      className={styles["image-slider"]} 
      alt={visibleImage.data.alt} 
      src={visibleImage.data.image} 
    />
  );
}