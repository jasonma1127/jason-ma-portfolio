import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogPage from "./Pages/BlogPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={
          <>
            <div className="nav-bar">
              <NavigationBar page="home"/>
            </div>
            <div className="main-content">
              <HomePage />
            </div>
          </>
        } />
        <Route path={process.env.PUBLIC_URL + "/about"} element={
          <>
            <div className="nav-bar">
              <NavigationBar page="about"/>
            </div>
            <div className="main-content">
              <AboutPage />
            </div>
          </>
        } />
        <Route path={process.env.PUBLIC_URL + "/portfolios"} element={
          <>
            <div className="nav-bar">
              <NavigationBar page="portfolios"/>
            </div>
            <div className="main-content">
              <PortfoliosPage />
            </div>
          </>
        } />
        <Route path={process.env.PUBLIC_URL + "/blog"} element={
          <>
            <div className="nav-bar">
              <NavigationBar page="blog"/>
            </div>
            <div className="main-content">
              <BlogPage />
            </div>
          </>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
