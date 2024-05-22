import React, { useRef, useEffect, useState } from "react";

const VideoPlayer = ({ videoUrl, captions }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime);
    };
    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const getCurrentCaption = () => {
    return captions.find(
      (caption) =>
        currentTime >= caption.timestamp && currentTime < caption.timestamp + 5
    );
  };

  const currentCaption = getCurrentCaption();

  return (
    <div className="video-container position-relative">
        <video ref={videoRef} src={videoUrl} controls autoPlay></video>
        {currentCaption && <div className="caption position-absolute w-50 text-lg-center shadow-lg text-light" style={{bottom: "20px"}}>{currentCaption.text}</div>}
    </div>
);
};

export default VideoPlayer;
