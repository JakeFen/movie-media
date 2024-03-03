import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

// Pages
import Home from "../pages/home/home";
import SignIn from "../pages/sign-in/sign-in";
import NotFound from "../pages/notFound/not-found";

function AppRouter() {
  const { user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {user ? (
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
