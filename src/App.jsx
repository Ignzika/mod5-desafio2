import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
