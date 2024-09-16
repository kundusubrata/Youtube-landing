import VideoGrid from "../components/VideoGrid";
import AppBar from "../components/AppBar";
import LeftBar from "../components/LeftBar";

export const Landing = () => {
  return (
    <>
      <AppBar />
      <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </>
  );
}

