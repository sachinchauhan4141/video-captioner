import React, { useState } from "react";
import VideoForm from "./components/VideoForm";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  const handleAddCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  return (
    <div className="container mt-5 text-white">
      <h1 className="text-center mb-4">Add Caption To Your Video</h1>
      <VideoForm
        onAddCaption={handleAddCaption}
        onSetVideoUrl={setVideoUrl}
        onShowVideo={setShowVideo}
      />

      {showVideo && (
        <div
          className="modal fade show d-block"
          id="videoModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="videoModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowVideo(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <VideoPlayer videoUrl={videoUrl} captions={captions} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
