import React, { useState } from "react";
import VideoForm from "./components/VideoForm";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  return (
    <div className="container text-white m-3 p-2">
      <div>
        <h1>Add Captions To Your Videos</h1>
        <VideoForm
          onAddCaption={handleAddCaption}
          onSetVideoUrl={setVideoUrl}
        />
      </div>
      <div>
        {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}
      </div>
    </div>
  );
};

export default App;
