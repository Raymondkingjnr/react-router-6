import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SingleProduct from "./pages/SingleProduct";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayoutProduct from "./pages/SharedLayoutProduct";
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>

            <Route path="products" element={<SharedLayoutProduct />}>
              <Route index element={<Products />} />
              <Route path=":productId" element={<SingleProduct />} />
            </Route>

            <Route path="login" element={<Login setUser={setUser} />}></Route>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
