import React from "react";
import Footer from "../Footer";
import ListResep from "../ListResep";
import Navbar from "../Navbar";


const HomePage = () => {
    return (
        <>
            <Navbar />            
            <ListResep />
            <Footer />

        </>
    )
}

export default HomePage;