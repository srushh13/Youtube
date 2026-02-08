import { BARS_URL, User_icon, Youtube_logo } from "../utils/Constants"
import {Link} from "react-router"

const Header = ()=>{
    return(
        <div className="flex justify-between p-4 shadow-xl items-center sticky top-0 z-50 bg-white" >
            <div className="flex gap-3">
                <img src={BARS_URL} className="h-8  cursor-pointer" />

                <Link to="/"><img src={Youtube_logo} alt="youtube-logo"
                className="h-7  cursor-pointer"/></Link>
            </div>

           <div className="w-full max-w-2xl flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"/>
                <button className="px-5 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200  cursor-pointer">
                    <i className="fa-solid fa-magnifying-glass text-gray-600"></i>
                </button>
            </div>

            <div>
                <img src={User_icon}
                className="h-8  cursor-pointer"/>
            </div>
        </div>
    )
}

export default Header