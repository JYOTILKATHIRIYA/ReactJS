import { Route, Routes, Link } from "react-router-dom";
import SearchAnimal from "../SearchAnimal/SearchAnimal";
import AnimalPage from "../Animal/Animal";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home"

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