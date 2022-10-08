import "./App.css";
import Home from "./components/Home/Home"
import Gallery from "./components/Gallery/Gallery"
import About from "./components/About/About"
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LogIn from "./components/Authentication/LogIn/LogIn";
import SignUp from "./components/Authentication/SignUp/SignUp";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path="/gallery" element={
          <RequireAuth>
            <Gallery></Gallery>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
