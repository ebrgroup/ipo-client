import { useEffect, useState } from 'react';

import './App.css'
import ChangePass from './screens/ChangePassword/ChangePass';
import UserProfile from './screens/User-Profile/UserProfile';
import IPO_Dashboard from './screens/Dashboard/components/IPO_Dashboard';
import Main_Dashboard from './screens/Dashboard/Main_Dashboard';
import AuthHome from './screens/AuthScreens/AuthHome';
import SignUp from "./screens/AuthScreens/Components/SignUp";
import SignIn from "./screens/AuthScreens/Components/SignIn";
import ForgotPassword from "./screens/AuthScreens/Components/ForgotPassword";
import CreateNewPassword from "./screens/AuthScreens/Components/CreateNewPassword";
import Verification from "./screens/AuthScreens/Components/Verification";
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import NotFoundPage from './screens/Notfound-Page/NotFoundPage';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer } from "react-toastify";
import RegisterIPO from './screens/RegisterIPO/RegisterIPO';
import ConfirmProfile from './screens/global-components/ConfirmProfile/ConfirmProfile';
import ReviewApplication from './screens/RegisterIPO/Trademark/ReviewApplication/ReviewApplication';
import Classification from './screens/RegisterIPO/Trademark/Classification/Classification';
import IPMenus from './screens/RegisterIPO/Trademark-Registration/IPMenus';
import Selfshowcase from './screens/RegisterIPO/Trademark-Registration/Selfshowcase';
import Registraionflow from './screens/RegisterIPO/Registraionflow';
import PatentFlow from './screens/PatentFlow/PatentFlow';
import LogoDetails from './screens/RegisterIPO/Trademark-Registration/LogoDetails';
import SearchIP from './screens/Search-IP/SearchIP';
import TrackIIP from './screens/Track-IP/TrackIIP';
// import ConfirmationScreen from './screens/RegisterIPO/components/Confirmation-for-continuation/ConfirmationScreen';
import OwnerDetails from './screens/RegisterIPO/components/Owner-details/OwnerDetails';
import FeeSubmission from './screens/RegisterIPO/components/FeeSubmission/FeeSubmission';
import { resetIpStates } from './assets/states/actions/IP-Lookup-actions/Tabledata-action';
import Successpayment from './screens/global-components/Success payment component/Successpayment';
import { registerIPHelp } from './assets/states/actions/Helpdesk-Content';
import { logout } from './assets/states/actions/user-action';
import { resetDetails } from './assets/states/actions/Trademark registration/Trademark-action';
import { resetcount } from './assets/states/actions/Count IP actions/countTrademark_action';
import { resetSidebar } from './assets/states/actions/Toggle-Sidebar';
import Form1 from './screens/PatentFlow/components/Form1/Form1';
import PriorityClaims from './screens/PatentFlow/components/PriorityClaims/PriorityClaims';
import Documents from './screens/PatentFlow/components/Documentation/Documents';
import PatentReviewApplication from './screens/PatentFlow/components/ReviewApplication/PatentReviewApplication';
import DesignClassification from './screens/RegisterIPO/Design/Classification/DesignClassification';
import DesignDetails from './screens/RegisterIPO/Design/Classification/DesignDetails';
import DesignReview from './screens/RegisterIPO/Design/Classification/DesignReview';
import ConfirmationScreen from './screens/global-components/Confirmation-for-continuation/ConfirmationScreen';
import Copyright_published from './screens/RegisterIPO/Copyright-Registrtion/Published/Copyright_published';
import Copyright_SelfRole from './screens/RegisterIPO/Copyright-Registrtion/Selfshowcase/Step-1/Copyright_SelfRole';
import Owner_Assignment from './screens/RegisterIPO/Copyright-Registrtion/Selfshowcase/Step-2/Owner_Assignment';
import Owner_Extent from './screens/RegisterIPO/Copyright-Registrtion/Selfshowcase/Step-3/Owner_Extent';
import SelectWork from './screens/RegisterIPO/Copyright-Registrtion/Select Work/SelectWork';
import Copyright_Classification from './screens/RegisterIPO/Copyright-Registrtion/Artistic flow/Copyright_Classification';
import Applicant_Details from './screens/RegisterIPO/Copyright-Registrtion/Artistic flow/Applicant_Details';
import Work_Details from './screens/RegisterIPO/Copyright-Registrtion/Artistic flow/Work Details/Step-1/Work_Details';
import ArtisticGoodsServices from './screens/RegisterIPO/Copyright-Registrtion/Artistic flow/Work Details/Step-2/ArtisticGoodsServices';
import AdvertisedWork from './screens/RegisterIPO/Copyright-Registrtion/Artistic flow/Work Details/Step-3/AdvertisedWork';
import Review from './screens/RegisterIPO/Copyright-Registrtion/Artistic flow/Reveiw Details/Review';
import Affidevit from './screens/RegisterIPO/Copyright-Registrtion/Artistic flow/Required Documents/Affidevit';
import Advertised from './screens/RegisterIPO/Copyright-Registrtion/Artistic flow/Required Documents/Advertised';


function App() {

  const path = document.location.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.userReducer?.isLoggedIn);

  const authRoutes = ["/signin", "/signup", "/forgotpassword",]
  const verifiRoutes = ["/verification", "/createnewpassword"]

  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState("");

  const loadingProgress = (progress) => {
    setProgress(progress)
  }

  useEffect(() => {

    if (path === "/")
      navigate("/signin");

    if (path === "/*") {
      navigate("*")
    }
    else if (!isLogin && (!authRoutes.includes(path) || verifiRoutes.includes(path))) {
      navigate("/signin");
    }
    else if (isLogin && authRoutes.includes(path)) {
      navigate("/dashboard");
    }

    if (path != '/searchip' && path != '/trackip') {

      dispatch(resetIpStates())
    }

    if (path === '/registeripo') {
      dispatch(registerIPHelp())
    }

    if (path === "/signin") {
      document.title = "Sign In - IPO";

      //Reset all redux states
      dispatch(resetIpStates())
      dispatch(logout());
      dispatch(resetDetails())
      dispatch(resetcount())
      // dispatch(resetSidebar())

    }
    else if (path === "/signup")
      document.title = "Sign Up - IPO";
    else if (path === "/forgotpassword")
      document.title = "Forgot Password - IPO";
    else if (path === "/createpassword")
      document.title = "Create Password - IPO";
    else if (path === "/verification")
      document.title = "Verification - IPO";
    else if (path === "/dashboard")
      document.title = "Dashboard - IPO";
    else if (path === "/registeripo")
      document.title = "Register - IPO"
    else if (path === "/profile")
      document.title = "Profile - IPO";
    else if (path === "/changepassword")
      document.title = "Change Password - IPO";
    else if (path == "/registerip")
      document.title = "Register IP - IPO";
    else if (path == "/confirmationScreen")
      document.title = "Confirmation Screen - IPO";
    else if (path == "/selfshowcase")
      document.title = "Self Showcase - IPO";
    else if (path == "/classification")
      document.title = "Trademark Classification - IPO";
    else if (path == "/ownerDetails")
      document.title = "Owner and Business Details - IPO"
    else if (path == "/logodetails")
      document.title = "Logo Details - IPO"
    else if (path == "/feesubmission")
      document.title = "Fee Submission - IPO"
    else if (path == "/successpayment/:*")
      document.title = "Payment Success - IPO"
    else if (path == "/reviewapplication")
      document.title = "Review Application - IPO";
    else if (path == "/searchip")
      document.title = "Search IP - IPO"
    else if (path == "/trackip")
      document.title = "Track My IP - IPO"
    setTitle(document.title.replace(" - IPO", ""));
  }, [path]);

  return (
    <div className="App">
      < LoadingBar
        color='#f11946'
        progress={progress}
        loaderSpeed={500}
        height={2}
      />
      <Routes>
        <Route path='/dashboard' element={<Main_Dashboard screen={<IPO_Dashboard Progress={loadingProgress} />} title={title} />} />
        <Route path='/searchip' element={<Main_Dashboard screen={<SearchIP Progress={loadingProgress} />} title={title} />} />
        <Route path='/trackip' element={<Main_Dashboard screen={<TrackIIP Progress={loadingProgress} />} title={title} />} />
        <Route path='/registeripo' element={<Main_Dashboard screen={<RegisterIPO screen={<IPMenus Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/patentflow' element={<Main_Dashboard screen={<PatentFlow screen={<Form1 Progress={loadingProgress} />} />} />} />
        <Route path='/patentflow/priorityClaims' element={<Main_Dashboard screen={<PatentFlow screen={<PriorityClaims Progress={loadingProgress} />} />} />} />
        <Route path='/patentflow/documents' element={<Main_Dashboard screen={<PatentFlow screen={<Documents Progress={loadingProgress} />} />} />} />
        <Route path='/patentflow/reviewApplication' element={<Main_Dashboard screen={<PatentFlow screen={<PatentReviewApplication Progress={loadingProgress} />} />} />} />
        <Route path='/confirmationScreen' element={<Main_Dashboard screen={<RegisterIPO screen={<ConfirmationScreen />} Progress={loadingProgress} />} title={title} />} />
        <Route path='/confirmprofile' element={<Main_Dashboard screen={<RegisterIPO screen={<ConfirmProfile Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/selfshowcase' element={<Main_Dashboard screen={<RegisterIPO screen={<Selfshowcase Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/classification' element={<Main_Dashboard screen={<Registraionflow screen={<Classification Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/ownerDetails' element={<Main_Dashboard screen={<Registraionflow screen={<OwnerDetails Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/logodetails' element={<Main_Dashboard screen={<Registraionflow screen={<LogoDetails Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/reviewapplication' element={<Main_Dashboard screen={<Registraionflow screen={<ReviewApplication Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/feesubmission' element={<Main_Dashboard screen={<Registraionflow screen={<FeeSubmission Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/successpayment/:trackId' element={<Main_Dashboard screen={<Successpayment Progress={loadingProgress} />} title={title} />} />
        <Route path='/changepassword' element={<Main_Dashboard screen={<ChangePass Progress={loadingProgress} />} title={title} />} />
        <Route path='/profile' element={<Main_Dashboard screen={<UserProfile Progress={loadingProgress} />} title={title} />} />
        <Route path="/signin" element={<AuthHome screen={<SignIn Progress={loadingProgress} />} />} />
        <Route path="/signup" element={<AuthHome screen={<SignUp Progress={loadingProgress} />} />} />
        <Route path="/forgotpassword" element={<AuthHome screen={<ForgotPassword Progress={loadingProgress} />} />} />
        <Route path="/verification" element={<AuthHome screen={<Verification Progress={loadingProgress} />} />} />
        <Route path="/createnewpassword" element={<AuthHome screen={<CreateNewPassword Progress={loadingProgress} />} />} />
        <Route path="/createnewpassword/:userToken" element={<AuthHome screen={<CreateNewPassword Progress={loadingProgress} />} />} />

        {/* Copyright flow routes defines here */}
        <Route path='/copyright/confirmation' element={<Main_Dashboard screen={<RegisterIPO screen={<ConfirmationScreen type={'copyright'} />} />} title={title} />} />
        <Route path='/copyright/profile' element={<Main_Dashboard screen={<RegisterIPO screen={<ConfirmProfile />} />} title={title} />} />
        <Route path='/copyright/published' element={<Main_Dashboard screen={<RegisterIPO screen={<Copyright_published Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/self' element={<Main_Dashboard screen={<RegisterIPO screen={<Copyright_SelfRole Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/owner/assignment' element={<Main_Dashboard screen={<RegisterIPO screen={<Owner_Assignment Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/owner/extent' element={<Main_Dashboard screen={<RegisterIPO screen={<Owner_Extent Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/work' element={<Main_Dashboard screen={<RegisterIPO screen={<SelectWork Progress={loadingProgress} />} />} title={title} />} />

        {/* Artistic Work flow */}
        <Route path='/copyright/artistic/classification' element={<Main_Dashboard screen={<Registraionflow screen={<Copyright_Classification Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/artistic/ownerDetails' element={<Main_Dashboard screen={<Registraionflow screen={<Applicant_Details Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/artistic/logodetails' element={<Main_Dashboard screen={<Registraionflow screen={<Work_Details Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/artistic/logodetails/advertised' element={<Main_Dashboard screen={<Registraionflow screen={<AdvertisedWork Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/artistic/logodetails/services' element={<Main_Dashboard screen={<Registraionflow screen={<ArtisticGoodsServices Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/artistic/reviewapplication' element={<Main_Dashboard screen={<Registraionflow screen={<Review Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/artistic/affidevit' element={<Affidevit />} />
        <Route path='/copyright/artistic/advertised' element={<Advertised />} />
        <Route path='/copyright/feesubmission' element={<Main_Dashboard screen={<Registraionflow screen={<FeeSubmission Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/successpayment/:trackId' element={<Main_Dashboard screen={<Successpayment Progress={loadingProgress} />} title={title} />} />

        {/* Literally Work flow */}
        <Route path='/copyright/literary/classification' element={<Main_Dashboard screen={<Registraionflow screen={<Copyright_Classification Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/literary/ownerDetails' element={<Main_Dashboard screen={<Registraionflow screen={<Applicant_Details Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/literary/logodetails' element={<Main_Dashboard screen={<Registraionflow screen={<Work_Details Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/literary/reviewapplication' element={<Main_Dashboard screen={<Registraionflow screen={<Review Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/literary/affidevit' element={<Affidevit />} />



        {/* Cinematographic work flow */}
        <Route path='/copyright/cinema/classification' element={<Main_Dashboard screen={<Registraionflow screen={<Copyright_Classification Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/cinema/ownerDetails' element={<Main_Dashboard screen={<Registraionflow screen={<Applicant_Details Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/cinema/logodetails' element={<Main_Dashboard screen={<Registraionflow screen={<Work_Details Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/cinema/reviewapplication' element={<Main_Dashboard screen={<Registraionflow screen={<Review Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/cinema/affidevit' element={<Affidevit />} />


        {/* Record work flow */}
        <Route path='/copyright/record/classification' element={<Main_Dashboard screen={<Registraionflow screen={<Copyright_Classification Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/record/ownerDetails' element={<Main_Dashboard screen={<Registraionflow screen={<Applicant_Details Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/record/logodetails' element={<Main_Dashboard screen={<Registraionflow screen={<Work_Details Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/record/reviewapplication' element={<Main_Dashboard screen={<Registraionflow screen={<Review Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/copyright/record/affidevit' element={<Affidevit />} />


        {/* Copyright flows routes end here */}


        <Route path='*' element={<NotFoundPage Progress={loadingProgress} />} />
        
        <Route path='/designClassification' element={<Main_Dashboard screen={<Registraionflow screen={<DesignClassification Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/designdetails' element={<Main_Dashboard screen={<Registraionflow screen={<DesignDetails Progress={loadingProgress} />} />} title={title} />} />
        <Route path='/designreview' element={<Main_Dashboard screen={<Registraionflow screen={<DesignReview Progress={loadingProgress} />} />} title={title} />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ marginTop: "5vh" }}
      />
    </div >
  );
}

export default App;
