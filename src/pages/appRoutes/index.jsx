import {Routes, Route} from "react-router-dom";
import FirstPage from "../views/firstPage";
import ProtectedRoute from "./protectedRoutes";
import Visitor from "../../parts/Visitor";
import Home from "../views/visitor/home";
import {Notifications} from "../views/visitor/modules/notifications";
import NotFound from "../views/notFound";
import ViewArena from "../views/visitor/modules/viewArena";
import MyAccount from "../views/visitor/modules/myAccount";

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<FirstPage />} />
            <Route element={<ProtectedRoute requiredRole={"VISITOR"} />}>
                <Route path="visitor" element={<Visitor />}>
                    <Route path="home" element={<Home />} />
                    <Route path="myAccount" element={<MyAccount />} />
                    <Route path="view/arena/:id" element={<ViewArena />} />
                    <Route path="notifications" element={<Notifications />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;