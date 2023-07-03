import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import ResumePage from "./pages/ResumePage";
import CryptoPage from "./pages/CryptoPage";
import PasswordValidation from "./pages/PasswordValidation";
import EmojiPage from "./pages/EmojiPage";
import WeatherPage from "./pages/WeatherPage";
import MyToDoPage from "./pages/MyToDoPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";

// import MyAppBar from './components/ResponsiveAppBar/MyAppBar'

import MyChatBot from "./pages/MyChatBot";

function App() {
  return (

    <div className="App">

      <Router>

        {/* <Navbar /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/mycryptopage" element={<CoinSearch/>}/>
          <Route path="/mytodolist" element={<MyToDoList/>}/>
          <Route path="/passwordvalidation" element={<PasswordValidation/> }/>
          <Route path="/emojigenerator" element ={<EmojiPage/>} />
        </Routes> */}


        <ResponsiveAppBar />
        {/* <MyAppBar /> */}

        <Routes>
          <Route path="Home" element={<HomePage />} />
          <Route path="My Projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="Education & Work Experiences" element={<Experience />} />
          <Route path="My Resume" element={<ResumePage />} />
          <Route path="Crypto Page" element={<CryptoPage />} />
          <Route path="ToDo List" element={<MyToDoPage />} />
          <Route path="Password Validation" element={<PasswordValidation />} />
          <Route path="Emoji Generator" element={<EmojiPage />} />
          <Route path="Weather App" element={<WeatherPage />} />

          <Route path="ChatGPT Clone"  element ={<MyChatBot />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
