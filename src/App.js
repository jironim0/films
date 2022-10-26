import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AllFilms from "./components/content/AllFilms";
import Favorite from "./components/content/Favorite";
import { useSelector } from "react-redux";

import Navigation from "./components/Navigation";

function App() {
  const [items, setItems] = React.useState([]);
  const {favoritItems} = useSelector(state => state.films)

  React.useEffect(() => {
    axios
      .get(`https://63591e97ff3d7bddb99970b9.mockapi.io/item`)
      .then((res) => {
        setItems(res.data);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <Navigation />
      <div className="content">
        <Routes>
          <Route
            path="/allfilms"
            element={
              <AllFilms
                items={items}
              />
            }
          />
          <Route path="/favorite" element={<Favorite items={favoritItems} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
