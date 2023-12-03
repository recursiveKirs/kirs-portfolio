import { Routes, Route } from "react-router-dom";
import { NotFoundPage, HomePage, ExperiencePage, GalleryPage } from "./pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
