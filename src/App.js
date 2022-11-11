import React from "react";

import { Route, Routes } from "react-router-dom";

import AllFilms from "./components/content/pages/AllFilms";
import Favorite from "./components/content/pages/favoritePage/Favorite";
import Navigation from "./components/content/Header/Navigation";
import { Login } from "./components/content/pages/login/Login";
import { Registration } from "./components/content/pages/register/Registration.jsx";

function App() {
  // const [items, setItems] = React.useState([]);


  // React.useEffect(() => {
  //   axios
  //     .get(`https://63591e97ff3d7bddb99970b9.mockapi.io/item`)
  //     .then((res) => {
  //       setItems(res.data);
  //     });
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="wrapper">
      <Navigation />
      <div className="content">
        <Routes>
          <Route
            path="/allfilms"
            element={<AllFilms/>}
          />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
