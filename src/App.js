import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import Projects from "./pages/Projects";
import ExperiencePage from "./pages/ExperiencePage";
import Footer from "./components/Footer/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import ResumePage from "./pages/ResumePage";
import CryptoPage from "./pages/CryptoPage";
import PasswordValidation from "./pages/PasswordValidation";
import EmojiPage from "./pages/EmojiPage";
import WeatherPage from "./pages/WeatherPage";
import MyToDoPage from "./pages/MyToDoPage";
import TextSeparator from "./components/TextSeparator/TextSeparator";
import MyChatBotPage from "./pages/MyChatBotPage";

import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";

function App() {
  return (

    <div className="App">
      <Router>
        <ResponsiveAppBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Home" element={<HomePage />} />

          <Route path="My Projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="Education & Work Experiences" element={<ExperiencePage />} />
          <Route path="My Resume" element={<ResumePage />} />
          <Route path="Crypto Page" element={<CryptoPage />} />
          <Route path="ToDo List" element={<MyToDoPage />} />
          <Route path="Password Validation" element={<PasswordValidation />} />
          <Route path="Emoji Generator" element={<EmojiPage />} />
          <Route path="Weather App" element={<WeatherPage />} />
          <Route path="Text Separator" element={<TextSeparator />} />
          <Route path="ChatGPT Clone" element={<MyChatBotPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
