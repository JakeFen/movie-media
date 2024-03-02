import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import SignIn from "../pages/sign-in/sign-in";
import NotFound from "../pages/notFound/not-found";
import { useState } from "react";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Home />}></Route>
          ) : (
            <Route path="/" element={<SignIn />}></Route>
          )}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
