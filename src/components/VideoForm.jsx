import React, { useState } from "react";

const VideoForm = ({ onAddCaption, onSetVideoUrl }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captionText, setCaptionText] = useState("");
  const [captionTimestamp, setCaptionTimestamp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSetVideoUrl(videoUrl);
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
      <div className="mb-3">
        <label htmlFor="video-url" className="form-label">
          Video URL:
        </label>
        <input
          className="form-control"
          type="text"
          id="video-url"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="caption-text" className="form-label">
          Caption Text:
        </label>
        <textarea
          id="caption-text"
          className="form-control"
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
          rows="4"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="caption-timestamp" className="form-label">
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
          onClick={handleAddCaption}
          className="btn btn-secondary"
        >
          Add Caption
        </button>
        <button type="submit" className="btn btn-success mx-2">
          Load Video
        </button>
      </div>
    </form>
  );
};

export default VideoForm;
