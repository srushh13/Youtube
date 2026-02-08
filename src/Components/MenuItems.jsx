import {Link} from 'react-router'
const   MenuItems = () =>{
    return (<>
    <div className="p-4">
        <div className="p-4">
            <ul className="space-y-3 text-gray-800 text-md font-semibold">
                <Link to="/">
                <li className="flex items-center gap-4 cursor-pointer">
                    <i className="fa-solid fa-house"></i>Home
                </li>
                </Link>
                <Link>
                <li className="flex items-center gap-4 cursor-pointer">
                    <i className="fa-solid fa-bolt"></i>Shorts
                </li>
                </Link>
                <li className="flex items-center gap-4 cursor-pointer">
                    <i className="fa-solid fa-square-caret-right"></i>Subscription
                </li>
            </ul>
        </div>

        <hr className="text-gray-200"></hr>

        <div className="p-4">
            <ul className="space-y-3 text-gray-800">
                <li className="font-semibold text-lg">Library 
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    History
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-solid fa-music"></i>
                    Playlists
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-regular fa-clock"></i>
                    Watch later
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-regular fa-thumbs-up"></i>
                    Liked Videos
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-solid fa-download"></i>
                    Downloads
                </li>
            </ul>
        </div>

        <hr className="text-gray-200"></hr>


        <div className="p-4">
            <ul className="space-y-3 text-gray-800">
                <li className="font-semibold text-lg">Explore
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-solid fa-bag-shopping"></i>
                    Shopping
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-solid fa-trophy"></i>
                    Sports
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-solid fa-clapperboard"></i>
                    Movies
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-regular fa-thumbs-up"></i>
                    Live
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-solid fa-gamepad"></i>
                    Gamings
                </li>
            </ul>
        </div>

         <div className="p-4">
            <ul className="space-y-3 text-gray-800">
                <li className="font-semibold text-lg cursor-pointer">Explore
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-solid fa-bag-shopping"></i>
                    Shopping
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-solid fa-trophy"></i>
                    Sports
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-solid fa-clapperboard"></i>
                    Movies
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-regular fa-thumbs-up"></i>
                    Live
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-solid fa-gamepad"></i>
                    Gamings
                </li>
            </ul>
        </div>

         <div className="p-4">
            <ul className="space-y-3 text-gray-800">
                <li className="font-semibold text-lg">Explore
                </li>
                <li className="flex items-center gap-5">
                    <i className="fa-solid fa-bag-shopping cursor-pointer"></i>
                    Shopping
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-solid fa-trophy"></i>
                    Sports
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-solid fa-clapperboard"></i>
                    Movies
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-regular fa-thumbs-up"></i>
                    Live
                </li>
                <li className="flex items-center gap-5 cursor-pointer">
                    <i className="fa-solid fa-gamepad"></i>
                    Gamings
                </li>
            </ul>
        </div>
</div>
    </>
    )
}

export default MenuItems