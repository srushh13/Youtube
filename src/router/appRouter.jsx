import { createBrowserRouter } from "react-router";
import App from "../App";
import Body from "../Components/Body"
import VideoPlay from "../Components/VideoPlay";

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
        {
        path: "/",
        Component: Body,
        },

        {
        path: "/videoplay",
        Component: VideoPlay,
        },
     
    ]
  },
]);

export default appRouter;