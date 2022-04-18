import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Blog from "./component/Blog/Blog";
import Checkout from "./component/Checkout/Checkout";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Notfound from "./component/Notfound/Notfound";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Service from "./component/Service/Service";
import Signup from "./component/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/blog" element={<Blog />}></Route>{" "}
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
