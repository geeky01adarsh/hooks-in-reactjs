import React, { useRef } from "react";
import "./KittyGallery.css";

const KittyGalary = () => {
  const galleryRef = useRef(null);
  const index = useRef(0);

  const showNextImg = () => {
    const imageList = galleryRef.current.querySelectorAll(".image");
    index.current = (index.current + 1) % 3;
    imageList[index.current].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      {/* <section> */}
      <h1>Kitty Galary</h1>
      <ul className="gallery" ref={galleryRef}>
        <li className="image">
          <img src="http://placekitten.com/200/300" alt="" />
        </li>
        <li className="image">
          <img src="http://placekitten.com/200/250" alt="" />
        </li>
        <li className="image">
          <img src="http://placekitten.com/300/300" alt="" />
        </li>
      </ul>
      <button onClick={showNextImg}>Next</button>
      {/* </section> */}
    </>
  );
};

export default KittyGalary;
