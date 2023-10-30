import { Route, Routes } from "react-router-dom";
import { About } from "../About/About";
import { ROUTES } from "../../utils/routes";
import { Education } from "../Education/Education";
import { Experience } from "../Experience/Experience";
import { Projects } from "../Projects/Projects";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<About />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.EDUCATION} element={<Education />} />
            <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />
        </Routes>
    )
}