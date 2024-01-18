import React from "react";
import bgVideo from "../assets/video/bg-video.mp4";

const BackgroundVideo = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute -z-10 h-full w-full object-cover brightness-75"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
