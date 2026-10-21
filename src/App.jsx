import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Catagory from "./Components/Catagory";
import Products from "./Components/Products";
import Why from "./Components/Why";
import CatgTwo from "./Components/Catagories-two";
import Everything from "./Components/Everything";
import SeeAll from "./Components/SeeAll";
import Demo from "./Components/Demo";
import Favorites from "./Components/favorites";
import Example from "./Components/Ex";
import Shadow from "./Components/useContext";
import Fetch from "./Components/fetching";
// import Card from "./Components/Card-detial";
import SeeAllDetials from "./Components/SeeAllDeaile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <SeeAllDetials>
      <Example>
        <BrowserRouter basename="/first-react">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Products />
                  <Why />
                  <Catagory />
                  <Everything />
                </>
              }
            />

            <Route path="/:id" element={<CatgTwo />} />
            <Route path="/seeAll" element={<SeeAll />} />
            <Route path="/seeAll/:demo" element={<Demo />} />
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/example" element={<Fetch />}></Route>
            {/* <Route path="/donkey/:name" element={<Card />}></Route> */}
          </Routes>
        </BrowserRouter>
      </Example>
    </SeeAllDetials>
  );
}

export default App;
