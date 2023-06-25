import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import ResumePage from "./pages/ResumePage";
// import CoinSearch from "./components/CoinSearch/CoinSearch";
import CryptoPage from "./pages/CryptoPage";
import MyToDoList from "./pages/MyTodoList.js";
import PasswordValidation from "./pages/PasswordValidation";
import EmojiPage from "./pages/EmojiPage";

// import Navbar from "./components/Navbar";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
// import HomePage from "./pages/HomePage";
// import NotFound from "./NotFound";



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
        <Routes>
          {/* <Route path='*' element={<NotFound />} /> */}
          {/* <Route path="/" element={<Home />} /> */}

          <Route path="Home" element={<HomePage />} />

          <Route path="My Projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="Education & Work Experiences" element={<Experience />} />
          <Route path="My Resume" element={<ResumePage />} />
          <Route path="My Crypto Page" element={<CryptoPage />} />
          <Route path="My ToDo List" element={<MyToDoList />} />
          <Route path="Password Validation" element={<PasswordValidation />} />
          <Route path="Emoji Generator" element={<EmojiPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
