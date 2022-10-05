import "./App.css";
import Home from "./components/Home/Home"
import Gallery from "./components/Gallery/Gallery"
import About from "./components/About/About"
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/gallery' element={<Gallery></Gallery>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
