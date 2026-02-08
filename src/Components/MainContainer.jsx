import Filters from "./Filters";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    const List = ["All", "Live", "Gaming","Watched","New to you","Unwatched","Popular" ,"Music","Podcasts","Foodies","Film","Theatre","Vlog"];

     
    return (
        <>
        <div className="flex flex-col w-full max-w-6xl p-5 gap-4 h-screen bg-white border-r border-gray-200 scroller">
      
            <div className="flex flex-wrap gap-2">
                {List.map((item, index) => (
                <Filters key={index} name={item} />
                ))}
            </div>

      
            <div className="">
                <VideoContainer />
            </div>
    </div>
   
        </>
    );
};

export default MainContainer;
