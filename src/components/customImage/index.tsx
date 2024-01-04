// "use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  img1: string;
  img2: string;
};

const CustomImage = ({ img1, img2 }: Props) => {
  //   const [image, setImage] = useState(img1);

  //   const onMouseEnter = () => {
  //     setImage(img2);
  //   };

  //   const onMouseLeave = () => {
  //     setImage(img1);
  //   };

  return (
    <div
      style={{ "--image-url1": `url(${img1})`, "--image-url2": `url(${img2})` }}
      className="bg-[image:var(--image-url1)] hover:bg-[image:var(--image-url2)] h-36 w-64 bg-cover"
    ></div>
  );
};

export default CustomImage;
