import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <div className="container-fluid bg-dark p-5 " >
      <div className="row m-6 p-5">
      {/* <video autoPlay muted loop id="video">
  <source  src="https://www.youtube-nocookie.com/embed/5F_7rHZ7Xzc" type="video/mp4" />
</video> */}
        <iframe
        className="iframe-video"
          width="1000px"
          height="788"
          src="https://www.youtube-nocookie.com/embed/5F_7rHZ7Xzc?loop=1&mute=1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
