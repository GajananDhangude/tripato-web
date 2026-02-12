import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import Layout from "./components/Layout";

export default function App() {
  return(
    <Router>
      <Layout>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/listings" element={<Listings/>} />
        <Route path="/listings/:id" element={<ListingDetail/>} />
      </Routes>
      </Layout>
    </Router>
  )
}
