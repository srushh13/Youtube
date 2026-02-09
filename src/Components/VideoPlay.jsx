import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";

const API_KEY = "AIzaSyDOtxNGSvVnc7W7uysy87AdtLrrH4bWvQ4"; // ⚠️ Put your key here

const VideoPlay = () => {

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [videoInfo, setVideoInfo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);


  // Fetch Video Details
  const getVideoDetails = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );

      const data = await res.json();

      setVideoInfo(data.items?.[0] || null);

    } catch (err) {
      console.log("Video info error:", err);
    }
  };


  // Fetch Related Videos
  const getRelatedVideos = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&relatedToVideoId=${videoId}&key=${API_KEY}`
      );

      const data = await res.json();

      setRelatedVideos(data.items || []);

    } catch (err) {
      console.log("Related error:", err);
      setRelatedVideos([]);
    }
  };


  useEffect(() => {
    if (videoId) {
      getVideoDetails();
      getRelatedVideos();
    }
  }, [videoId]);


  if (!videoInfo) return <p className="p-5">Loading...</p>;


  const { snippet, statistics } = videoInfo;


  return (
    <div className="flex gap-5 p-4">

      {/* LEFT SIDE */}
      <div className="flex-1">

        {/* Video */}
        <iframe
          className="rounded-xl w-full"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          allowFullScreen
        ></iframe>


        {/* Title */}
        <h1 className="mt-3 text-lg font-bold">
          {snippet.title}
        </h1>


        {/* Channel + Buttons */}
        <div className="flex justify-between items-center mt-3">

          {/* Channel */}
          <div className="flex items-center gap-3">

            <img
              src={snippet.thumbnails.default.url}
              className="rounded-full h-10"
              alt=""
            />

            <div>
              <p className="font-semibold">
                {snippet.channelTitle}
              </p>

              <p className="text-xs text-gray-500">
                {Number(statistics.subscriberCount || 0).toLocaleString()} subscribers
              </p>
            </div>

            <button className="ml-3 bg-black text-white px-4 py-1 rounded-full">
              Subscribe
            </button>

          </div>


          {/* Buttons */}
          <div className="flex gap-2">

            <button className="bg-gray-200 px-4 py-1 rounded-full">
              👍 {Number(statistics.likeCount).toLocaleString()}
            </button>

            <button className="bg-gray-200 px-4 py-1 rounded-full">
              🔗 Share
            </button>

          </div>

        </div>


        {/* Views + Date */}
        <div className="mt-3 bg-gray-100 p-3 rounded-xl text-sm">

          <p className="font-semibold">
            {Number(statistics.viewCount).toLocaleString()} views •{" "}
            {new Date(snippet.publishedAt).toDateString()}
          </p>

            {/* <p className="mt-2 text-gray-700">
              {snippet.description.slice(0, 200)}...
            </p> */}

        </div>

      </div>


      {/* RIGHT SIDE (Suggestions) */}
      <div className="w-[350px] space-y-4">

        {relatedVideos.map((video) => (

          <VideoCard
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
            thumbnails={video.snippet.thumbnails}
            publishedAt={video.snippet.publishedAt}
          />

        ))}

      </div>

    </div>
  );
};

export default VideoPlay;
