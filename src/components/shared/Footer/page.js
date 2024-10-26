import React from 'react';
import Image from "next/image";
import img1 from "@/assests/icons/youtube.png";
import img2 from "@/assests/icons/instagram.png";
import img3 from "@/assests/icons/linkedin.png";
import img4 from "@/assests/icons/twitter.png";
import img5 from "@/assests/icons/facebook.png";


const images = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
  ];

const Footer = () => {
    return (
        <footer className='bg-black text-white py-10'>
            <h1>Footer</h1>
            <div className="flex items-center gap-2">
            {images.map(({ img }, index) => (
              <Image
                key={index}
                className="w-[15px]"
                src={img}
                alt="social_media_photo"
              />
            ))}
          </div>
        </footer>
    );
};

export default Footer;