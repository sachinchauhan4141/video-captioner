import React, { useState } from "react";

const VideoForm = ({ onAddCaption, onSetVideoUrl, onShowVideo }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captionText, setCaptionText] = useState("");
  const [captionTimestamp, setCaptionTimestamp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSetVideoUrl(videoUrl);
    onShowVideo(true);
  };

  const handleAddCaption = () => {
    if (captionText && captionTimestamp) {
      onAddCaption({
        text: captionText,
        timestamp: parseFloat(captionTimestamp),
      });
      setCaptionText("");
      setCaptionTimestamp("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="video-url">Video URL:</label>
        <input
          type="text"
          className="form-control"
          id="video-url"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="caption-text">Caption Text:</label>
        <textarea
          className="form-control"
          id="caption-text"
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
          rows="4"
        ></textarea>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="caption-timestamp">
          Caption Timestamp (in seconds):
        </label>
        <input
          type="number"
          className="form-control"
          id="caption-timestamp"
          value={captionTimestamp}
          onChange={(e) => setCaptionTimestamp(e.target.value)}
          min="0"
        />
      </div>
      <div className="mb-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddCaption}
        >
          Add Caption
        </button>
        <button
          type="submit"
          className="btn btn-success mx-2"
          data-toggle="modal"
          data-target="#videoModal"
        >
          Load Video
        </button>
      </div>
    </form>
  );
};

export default VideoForm;
