import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { userInputs, productInputs } from "./formInputs";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style/dark.scss";
function App() {
  const state = useSelector((state) => state.dark);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`app ${state}`}>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home isOpen={isOpen} onClick={() => setIsOpen(true)}></Home>
            }
          ></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="users">
            <Route index element={<List></List>}></Route>
            <Route path=":username" element={<Single></Single>}></Route>
            <Route path="new" element={<New inputs={userInputs}></New>}></Route>
          </Route>
          <Route path="products">
            <Route index element={<List></List>}></Route>
            <Route path=":productId" element={<Single></Single>}></Route>
            <Route
              path="new"
              element={<New inputs={productInputs}></New>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
