import { Route, Routes, Link } from "react-router-dom";
/*Layout*/
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
/*Pages*/
import Home from "../Pages/Home"
import AnimalPage from "../Pages/Animal";
import SearchAnimal from "../Pages/SearchAnimal";

/*Setting Routes*/
export default function AppRoutes() {
  const links = {
    searchAnimal: "/SearchAnimal",
    animal: "/Animal",
    home: "/"
  }
  return (
    <>
      <Header links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchAnimal" element={<SearchAnimal />} />
        <Route path="/Animal" element={<AnimalPage />} />
      </Routes>
      <Footer />
    </>
  )
}