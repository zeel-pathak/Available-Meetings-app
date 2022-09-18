import { Routes, Route } from "react-router-dom";

import {
  Register,
  Home,
  Login,
  Dashboard,
  BookEvent,
  NotFound,
} from "./screens";

import { Header, Footer } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book/:username" element={<BookEvent />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
