
const VideoCard = ({ video }) => {

  return (
    <>
      <div className="rounded-xl mb-2 mt-8 mx-1">
        <img className="rounded-xl" src={video.thumbnil} />
      </div>
      <div className="flex ">
        <div className="m-2">
          <img className="rounded-full" src={video.logo} />
        </div>
        <div className="truncate mt-2 mr-6">
          <div className="font-semibold text-lg">
            {video.title}
          </div>
          <div className="text-gray-700 text-base">
            {video.description}
            <div className="flex gap-2">
              <p>{video.viewCount}</p>
              <p>{video.timeStamp}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </div>

      </div>
    </>
  )
}

export default VideoCard;
