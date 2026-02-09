import { Link } from "react-router"

const formatViews = (views) => {
    if (!views) return "0";

    const num = Number(views);

    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    }

    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }

    if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }

    return num.toString();
};

const VideoCard = ({ channelTitle, publishedAt, thumbnails, title, viewCount, videoId }) => {
    return (
        <>
            <Link to={`/videoplay?v=${videoId}`}>
                <div className=" h-[300px] rounded-lg shadow-gray-400 hover:shadow-lg transition">
                    <div>
                        <img src={thumbnails?.medium?.url} alt="" className="rounded-lg" />

                    </div>
                    <div className="p-2">
                        <p className="text-md font-semibold">{title}</p>
                        <p className="text-sm text-gray-800">{channelTitle}</p>
                        <div className="flex justify-between text-xs text-gray-600 mt-1">
                            <span>{publishedAt}</span>
                            <span>{formatViews(viewCount)} views</span>
                        </div></div>
                </div>
            </Link>

        </>
    )
}

export default VideoCard