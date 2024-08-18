"use client";
import styles from "./Hero.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import ars_logo from "../../../../public/assets/ARS_1_Grey_cropped.png";
import vision_2030 from "../../../../public/assets/vision-2030_cropped.png";
import thumbnail1 from "../../../../public/assets/thumbnail1.png"; // Replace with actual paths
import thumbnail2 from "../../../../public/assets/thumbnail2.png";
import thumbnail3 from "../../../../public/assets/thumbnail3.png";
import thumbnail4 from "../../../../public/assets/thumbnail4.png";
import thumbnail5 from "../../../../public/assets/thumbnail5.png";
import { useState } from "react";
import NextLink from "next/link";

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState(thumbnail1);

  const thumbnails = [
    { src: thumbnail1, alt: "Thumbnail 1" },
    { src: thumbnail2, alt: "Thumbnail 2" },
    { src: thumbnail3, alt: "Thumbnail 3" },
    { src: thumbnail4, alt: "Thumbnail 4" },
    { src: thumbnail5, alt: "Thumbnail 5" },
  ];

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.hero} id="hero">
      <div className={styles.vision_div}>
        <a
          href="https://www.vision2030.gov.sa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image className="image" src={vision_2030} alt="Vision 2030" fill />
          </div>
        </a>
      </div>
      <div className={styles.hero_left}>
        <div className={styles.main_image}>
          <Image className="image" src={selectedImage} alt="Main Image" fill />
        </div>
        <div className={styles.thumbnails}>
          {thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(thumbnail.src)}
            >
              <Image
                className="thumbnail"
                src={thumbnail.src}
                alt={thumbnail.alt}
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.hero_right}>
        <h1>
          <small>Introductiong our latest AMR</small>
          PROJECT AMR 2000
          <br />
          <small>your reliable partner in automation</small>
        </h1>
        <p>
          Designed for seamless navigation in dynamic environments, the{" "}
          <strong>PROJECT AMR 2000</strong> is equipped with state-of-the-art
          sensors and intelligent mapping technology. It effortlessly maneuvers
          through your facility, optimizing workflows and increasing efficiency.
          With its compact design and user-friendly interface, deploying the{" "}
          <strong>PROJECT AMR 2000</strong> is easy and intuitive.
        </p>
      </div>
      <div className={styles.hero_bottom}>
        <NextLink href="construction">
          <button className="btn">
            Next <FaArrowRightLong className="btn-arrow" />
          </button>
        </NextLink>
      </div>
    </div>
  );
}
