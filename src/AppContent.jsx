import { Routes, Route } from "react-router-dom";
import { ErrorPage, HomePage, ExperiencePage, GalleryPage } from "./pages";

export const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
};
