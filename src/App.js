import { useEffect } from 'react';
import ChangePass from './assets/components/ChangePass';
import UserProfile from './assets/components/UserProfile';
import IPO_Dashboard from './assets/pages/IPO_Dashboard';
import Main_Dashboard from './assets/pages/Main_Dashboard';
import AuthHome from './screens/AuthScreens/AuthHome';
import SignUp from "./screens/AuthScreens/Components/SignUp";
import SignIn from "./screens/AuthScreens/Components/SignIn";
import ForgotPassword from "./screens/AuthScreens/Components/ForgotPassword";
import CreateNewPassword from "./screens/AuthScreens/Components/CreateNewPassword";
import Verification from "./screens/AuthScreens/Components/Verification";
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const path = document.location.pathname;

    if(path === "/")
      navigate("/signin");

    if(path === "/signin")
      document.title = "Sign In - IPO";
    else if(path === "/signup")
      document.title = "Sign Up - IPO";
    else if(path === "/forgotpassword")
      document.title = "Forgot Password - IPO";
    else if(path === "/createpassword")
      document.title = "Create Password - IPO";
    else if(path === "/verification")
      document.title = "Verification - IPO";
    else if(path === "/dashboard")
      document.title = "Dashboard - IPO";
    else if(path === "/profile")
      document.title = "Profile - IPO";
    else if(path === "/changepassword")
      document.title = "Change Password - IPO";
  });

  return (
    <div className="App">
     <Routes>
        <Route path='/dashboard' element={<Main_Dashboard screen={<IPO_Dashboard />} />} />
        <Route path='/changepassword' element={<Main_Dashboard screen={<ChangePass />} />} />
        <Route path='/profile' element={<Main_Dashboard screen={<UserProfile />} />}/>
        <Route path="/signin" element={<AuthHome screen={<SignIn />} />} />
        <Route path="/signup" element={<AuthHome screen={<SignUp />} />} />
        <Route path="/forgotpassword" element={<AuthHome screen={<ForgotPassword />} />} />
        <Route path="/verification" element={<AuthHome screen={<Verification />} />} />
        <Route path="/createnewpassword" element={<AuthHome screen={<CreateNewPassword />} />} />
      </Routes>
    </div>
  );
}

export default App;
