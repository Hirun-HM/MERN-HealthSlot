/* eslint-disable no-undef */

import { Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Payment from "./pages/payment";

const stripePromise = loadStripe('pk_test_51QeSZf03USBqC0b7Q9nzgegZGknnqVxKxAiLcQyNRr6rbpumvicanD4fVF78hLeu4h2dwfBkMUnyWVu7Wcf6ViIv007ihG3GBo');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="mx-4 sm:mx-[10%]">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          {/* <Route path="/appointment/payment" element={<Payment />} /> */}
        </Routes>
        <Footer />
      </div>
    </Elements>
  );
};

export default App;
