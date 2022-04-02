import {Routes, Route} from "react-router-dom";
import FirstPage from "../views/firstPage"
import ProtectedRoute from "./protectedRoutes"
import NavBar from "../../parts/NavBar"
import Home from "../views/visitor/home"
import NotFound from "../views/notFound"

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<FirstPage />} />
            <Route element={<ProtectedRoute requiredRole={"VISITOR"} />}>
                <Route path="visitor" element={<NavBar/>}>
                    <Route path="home" element={<Home />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;