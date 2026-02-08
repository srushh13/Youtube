import VideoCard from "./VideoCard";
import { useState,useEffect } from "react";
import { API_URL } from "../utils/Constants";

const VideoContainer = () =>{
    const [videos, setVideos] = useState([])
    
        const getYoutubeData = async()=>{
            try{
                const response = await fetch(API_URL);
                // if(!response.ok)
                //     throw new Error("something went wrong")
                // }
                const json = await response.json();
                console.log("JSON",json?.items)
                setVideos(json?.items || [])
                
            }
            catch(err){
                console.log("error",err)
            }
        }
    
        useEffect(()=>{
            getYoutubeData()
        },[])


    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       {
        videos.map((video , index)=>{
            return(
                <VideoCard 
               key= {index}
               videoId={video.id}
            {...video?.snippet}
            {...video?.statistics}
            />
            )
            
        }) 
       }</div>
        </>
    )
}

export default VideoContainer