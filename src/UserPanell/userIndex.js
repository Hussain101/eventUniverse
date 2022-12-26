import React from "react";
import Events from "./componenets/events";
import Footer from "./componenets/footer";
import Herosection from "./componenets/herosection";
import Navbar from "./componenets/navbar";
import Tickets from "./componenets/tickets";

const UserIndex = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Events />
      <Tickets />
      <Footer />
    </div>
  );
};

export default UserIndex;
