import { useSearchParams } from "react-router-dom";



const VideoPlay = () => {
  const [searchParams] = useSearchParams();
  

  // Default to "dQw4w9WgXcQ" if no video ID
  const videoId = searchParams.get("v");
  console.log(searchParams.get("v"));
  console.log("videoId in VideoPlay:", videoId);


  return (
    <div>
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlay;
