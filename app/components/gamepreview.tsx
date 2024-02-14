"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";

const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
    "/image9.jpg",
    "/image10.jpg",
    "/image11.jpg",
    "/image12.jpg",
]
const GamePreview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    /*const handleDotClick = (index) => {
        setCurrentIndex(index);
    };*/

    return (
        <main>
            <div className="games-preview relative" style={{width:"100vw", height:"calc(100vh)"}}>
                {images.map((image, index) => (
                  <Image
                      key={index}
                      src={image}
                      alt={`image${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      style={{opacity: index === currentIndex ? 1 : 0, transition: "opacity 1s ease-in-out" }}
                  />
                ))}
            </div>
            {/*<div style={{ textAlign: "center", position: "relative", bottom: "10px", left: "50%", transform: "translateX(-50%)", zIndex: 2}}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                        style={{ backgroundColor: index === currentIndex ? "#717171" : "#bbb" }}
                    ></span>
                ))}
            </div>*/}
        </main>
    );
};

export default GamePreview;