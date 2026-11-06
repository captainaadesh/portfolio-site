import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition><Home /></PageTransition>
          } />

          <Route path="/about" element={
            <PageTransition><About /></PageTransition>
          } />

          <Route path="/projects" element={
            <PageTransition><Projects /></PageTransition>
          } />

          <Route
            path="/projects/:id"
            element={
              <PageTransition>
                <ProjectDetails />
              </PageTransition>
            }/>

         
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}