import { Videos } from "../Videos.js";
import VideoCard from "./VideoCard";

const VideoGrid = () => {
  return (
    <>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-8">
        {Videos.map((video, index) => (
          <div key={index}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </>
  )
}

export default VideoGrid;
