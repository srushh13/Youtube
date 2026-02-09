import VideoCard from "./VideoCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/Constants";

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);

  const getYoutubeData = async (pageToken = "") => {

    // Prevent multiple calls at same time
    if (loading) return;

    setLoading(true);

    try {

      const url = pageToken
        ? `${API_URL}&pageToken=${pageToken}`
        : API_URL;

      const response = await fetch(url);
      const json = await response.json();

      console.log("JSON", json);

      // Append new videos
      setVideos((prev) => [...prev, ...(json?.items || [])]);

      // Save next token
      setNextPageToken(json?.nextPageToken);

    } catch (err) {
      console.log("error", err);

    } finally {
      setLoading(false);
    }
  };

  // First load
  useEffect(() => {
    getYoutubeData();
  }, []);

  // Infinite Scroll Logic
  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // If user reached bottom
      if (scrollTop + windowHeight >= fullHeight - 100) {

        if (nextPageToken && !loading) {
          getYoutubeData(nextPageToken);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);

  }, [nextPageToken, loading]);

  return (
    <>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {videos.map((video, index) => {
          return (
            <VideoCard
              key={video.id || index}
              videoId={video.id}
              {...video?.snippet}
              {...video?.statistics}
            />
          );
        })}

      </div>

      {/* Loading Text */}
      {loading && (
        <p className="text-center my-6 text-gray-600">
          Loading more videos...
        </p>
      )}

    </>
  );
};

export default VideoContainer;
