import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useMediaQuery } from "react-responsive";

// Pages
import Home from "../pages/home/home";
import SignIn from "../pages/sign-in/sign-in";
import NotFound from "../pages/notFound/not-found";
import Profile from "../pages/profile/profile";
import Search from "../pages/search/search";

// Components
import Header from "../components/header/header";
import MobileNav from "../components/mobileNav/mobile-nav";

function AppRouter() {
  const { user } = useAuthContext();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      <BrowserRouter>
        {user && !isMobile && <Header />}
        <Routes>
          {user ? (
            <Route path="/" element={<Home />}></Route>
          ) : (
            <Route path="/" element={<SignIn />}></Route>
          )}

          {user && <Route path="/search" element={<Search />}></Route>}
          {user && <Route path="/profile" element={<Profile />}></Route>}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {user && isMobile && <MobileNav />}
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
