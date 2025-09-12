// // // import { useState } from 'react'
// // // import './App.css'
// // // // import Home from './Components/Pages/Home';

// // // // import Parent from "./Components/Pages/parent";

// // // // import Task from "./Components/React First Task";
// // // // import Style from "./Components/globalStyles"

// // // // import Myfont from "./Components/iconsfontStyles";

// // // import CardsContainer from './Components/Pages/CardsContainer';

// // // function App() {
// // //   // const [count, setCount] = useState(0)

// // //   return (
// // //     <>
     
// // //       {/* <Task /> */}
// // //       {/* <Style /> */}
// // //       {/* <Myfont /> */}
// // //       {/* <Home /> */}
// // //       <CardsContainer />
// // //     </>
// // //   )
// // // }
// // // export default App



// // import React from 'react';
// // import CardsContainer from './Components/Pages/CardsContainer';
// // import StyleFunction from "./Components/Childs/render";
// // import Render from './Components/Childs/render';
// // import Fruits from "./Components/Childs/Fruits Task";
// // import Card from "./Components/Childs/Card Styles Task";
// // import UseStateHook from './Components/Childs/usestatehook';
// // import SimpleSlider from './Components/Childs/reactSlick';
// // import Shopping from './Components/Childs/Shopping';
// // import Event from './Components/Childs/ReactEventHadnling';
// // import Forms from './Components/Childs/ReactFormsWithOnChange';
// // import ReactLocalStorage from './Components/Childs/ReactLocalStorage';



// // import AboutUs from './Components/ISHIP BUS Project/AboutUs';
// // import RouteApplication from "./Components/ISHIP Routemap Project/RouteApplication";
// // import Full from './Components/IShip2Full/IShip2Full/Full';
// // import App2Map from './Components/ISHIP Routemap Project/app2_map';
// // import App2Attractions from './Components/ISHIP Routemap Project/app2_attractions';
// // import Welcome from './Components/WelcomePage/welcome';
// // import BusInfo from './Components/WelcomePage/busInfo';
// // import TicTacToe from './Components/TICTACTOE Project/tictactoe';

// // function App() {
// //   return (
// //     <div className="App">
//       {/* <CardsContainer /> */}
//       {/* <StyleFunction/> */}
//       {/* <Render/> */}
//       {/* <Fruits/> */}
//       {/* <Card/> */}
//       {/* <UseStateHook/> */}
//       {/* <SimpleSlider/> */}
//       {/* <Shopping/> */}
//       {/* <Event/> */}
//       {/* <Forms/> */}
//       {/* <ReactLocalStorage/> */}


//       {/* <AboutUs/> */}
//       {/* <RouteApplication/> */}
//       {/* <Full/> */}
//       {/* <App2_Boxes/> */}
//       {/* <App2Map/> */}

// {/* <App2Attractions/> */}
// {/* <Welcome/> */}
// {/* <BusInfo/> */}
// {/* <TicTacToe/> */}

// //     </div>
// //   );
// // }

// // export default App;


// // // import React from "react";

// // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // import HomePage from "./Components/navigation/homepage";
// // // import AboutPage from "./Components/navigation/aboutpage";
// // // import ContactPage from "./Components/navigation/contactpage";
// // // import Data from "./Components/navigation/homedata";
// // // // import Header from "./Components/navigation/Header";
// // // function App(){
// // //   return (
// // //     <>
// // //     <BrowserRouter>
// // //     <Routes>
// // //       <Route path="/" element={<HomePage/>}>
// // //         <Route index element={<Data/>}/>
// // //       <Route path="/out/:id" element={<AboutPage/>}/>
// // //       <Route path="/act/:id" element={<ContactPage/>}/></Route>
      
// // //     </Routes>
// // //     </BrowserRouter>
// // //     </>
// // //   )
// // // }
// // // export default App;






// // import React from "react";
// // // import HostelRules from "./Components/HostelProject/RulesPage";
// // import HostelRules1 from "./Components/HostelProject/RulesPage1";
// // // import Portfolio from "./Components/Portfolio Project/Portfolio";
// // function App(){
// //   return (
// //     <>
// //     <HostelRules1/>
// //     </>
// //   )
// // }
// // export default App;








// import React from "react";
// // import Header from "./Components/E-CommerceWebsite/Header";
// // import Task from "./Components/React First Task";
// // import RegisterPage from "./Components/Module3/register";
// // import HostelPage from "./Components/HostelProject/RulesPage1";
// import HostelStudentData from "./Components/HostelProject/StudentTable";
// function App(){
//   return (
//     <>
//     {/* <RegisterPage/> */}
//     {/* <HostelPage/> */}
//     <HostelStudentData/>
//     </>
//   )
// }
// export default App;








// // import React from 'react'
// // import Weather from './Components/WeatherApp/Weather'
// // function App() {
// //   return (
// //     <div>
// //       <div className="app">
// //         <Weather/>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App





// import React from 'react';
// import './App.css';
// import Header from './Components/ProjectSpaceProject/Header';
// import HeroSection from './Components/ProjectSpaceProject/HeroSection';
// import StatsSection from './Components/ProjectSpaceProject/StatsSection';
// import FeaturesSection from './Components/ProjectSpaceProject/FeaturesSection';
// import Footer from './Components/ProjectSpaceProject/Footer';

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <main>
//         <HeroSection />
//         <StatsSection />
//         <FeaturesSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;






// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AgriNavbar from './Components/ProjectSpaceProject/AgriNavbar';
// import AgriMainPage from './Components/ProjectSpaceProject/AgriMainPage';
// import AgriAboutMainPage from './Components/ProjectSpaceProject/AgriAboutMainPage';
// import AgriFAQSection from './Components/ProjectSpaceProject/AgriFaQPage';
// import AgriGetInTouchSection from './Components/ProjectSpaceProject/AgriGetInTouchPage';
// import AgriGalleryPage from './Components/ProjectSpaceProject/AgriGalleryPage';
// import AgriServicesSection from './Components/ProjectSpaceProject/AgriServicesPage';
// function App() {
//   return (
//     <Router>
//       <AgriNavbar /> {/* Navbar should be here, outside Routes */}
//       <Routes>
//         <Route path="/" element={<AgriMainPage />} />
//         <Route path="/about" element={<AgriAboutMainPage />} />
//         <Route path="/faq" element={<AgriFAQSection />} />
//         <Route path="/getintouch" element={<AgriGetInTouchSection />} />
//         <Route path="/gallery" element={<AgriGalleryPage />} />
//         <Route path="/services" element={<AgriServicesSection />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// Components
import AgriNavbar from './Components/ProjectSpaceProject/AgriNavbar';
import AgriMainPage from './Components/ProjectSpaceProject/AgriMainPage';
import AgriAboutMainPage from './Components/ProjectSpaceProject/AgriAboutMainPage';
import AgriFAQSection from './Components/ProjectSpaceProject/AgriFaQPage';
import AgriGetInTouchSection from './Components/ProjectSpaceProject/AgriGetInTouchPage';
import AgriGalleryPage from './Components/ProjectSpaceProject/AgriGalleryPage';
import AgriServicesSection from './Components/ProjectSpaceProject/AgriServicesPage';
import Prod_page from './Components/FERTILIZER_FRONTEND/Pspace/Product.jsx';
import ReviewPage from './Components/Farmer/Farmer/ReviewPage'; // Corrected import
import ScrollToTop from './Components/ProjectSpaceProject/ScrollToTop';
import DiseaseIdentifier from './Components/DiseasePrediction/DiseaseIdentifier.jsx';
import RecomFull from './Components/ProjectSpacePage/RecomFull';
import HomePage from './Components/MyWeather/HomePage';
import AuthPage from './Components/FarmXpertLogin/AuthPage';
import FarmXpertProfile from './Components/FarmXpertUserDashboard/UserProfile';
import ChatBot from './Components/FarmXpertChatbot/chat';
import BuyForm from './Components/FERTILIZER_FRONTEND/Pspace/BuyForm';
import OrderConfirmed from './Components/FERTILIZER_FRONTEND/Pspace/OrderConfirmed';
import NearestSoilCenter from './Components/SoilCenter/NearestSoilCenter';

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavbarPaths = [ '/login', '/buy-form', '/order-confirmed'];

  // 🔼 Global cart state
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // 🔄 Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  // 🧮 Count total items in cart
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <ScrollToTop />

      {!hideNavbarPaths.includes(location.pathname) && (
        <AgriNavbar 
          cartItemCount={cartItemCount} 
          setShowCart={setShowCart} 
        />
      )}

      <Routes>
        <Route path="/" element={<AgriMainPage />} />
        <Route path="/about" element={<AgriAboutMainPage />} />
        <Route path="/faq" element={<AgriFAQSection />} />
        <Route path="/getintouch" element={<AgriGetInTouchSection />} />
        <Route path="/gallery" element={<AgriGalleryPage />} />
        <Route path="/services" element={<AgriServicesSection />} />
        <Route
          path="/store"
          element={
            <Prod_page
              cartItems={cartItems}
              setCartItems={setCartItems}
              showCart={showCart}
              setShowCart={setShowCart}
            />
          }
        />
        <Route path="/review" element={<ReviewPage />} /> {/* Corrected route */}
        <Route path="/disease" element={<DiseaseIdentifier />} />
        <Route path="/plant/*" element={<RecomFull />} />
        <Route path="/weather" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/main" element={<AgriAboutMainPage />} />
        <Route path="/profile" element={<FarmXpertProfile />} />
        <Route path="/buy-form" element={<BuyForm />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />
        <Route path="/soil-centers" element={<NearestSoilCenter />} />
      </Routes>

      {!hideNavbarPaths.includes(location.pathname) && <ChatBot />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;










// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Components/LoginPage/Login';
// import Signup from './Components/LoginPage/Signup';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="agri-app">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;






