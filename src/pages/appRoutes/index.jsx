import {Routes, Route} from "react-router-dom";
import FirstPage from "../views/firstPage"
import ProtectedRoute from "./protectedRoutes"
import NavBar from "../../parts/NavBar"
import Home from "../views/visitor/home"
import {Notifications} from "../views/visitor/modules/notifications"
import NotFound from "../views/notFound"

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<FirstPage />} />
            <Route element={<ProtectedRoute requiredRole={"VISITOR"} />}>
                <Route path="visitor" element={<NavBar />}>
                    <Route path="home" element={<Home />} />
                    <Route path="notifications" element={<Notifications />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;