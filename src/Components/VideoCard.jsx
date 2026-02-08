import {Link} from "react-router"

const VideoCard = ({channelTitle, publishedAt, thumbnails, title, viewCount,videoId})=>{
    return(
        <>
        <Link to={`/videoplay?v=${videoId}`}>
        <div className=" rounded-lg shadow hover:shadow-lg transition">
            <div>
                <img src={thumbnails?.medium?.url} alt=""  className="rounded-lg"/>

            </div>
            <div className="p-2">
              <p className="text-md font-semibold">{title}</p>
                <p className="text-sm text-gray-800">{channelTitle}</p>
                <div className="flex gap-1 text-sm text-gray-600">
                    <p>{publishedAt}</p>
                
                <p className="">{viewCount} views</p></div>
                
            </div>
        </div>
        </Link>
        
        </>
    )
}

export default VideoCard