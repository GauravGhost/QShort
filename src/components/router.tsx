import {
    createBrowserRouter,
} from "react-router-dom";

import App from '../App';
import Redirect from "./Redirect/Redirect";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>not found</div>
    },
    {
        path: "/:url",
        element: <Redirect />
    }
]);


export default router;