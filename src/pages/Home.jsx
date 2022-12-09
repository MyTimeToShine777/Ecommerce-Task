import React from "react";

import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Details from "../components/details/Details";
import Grid from "../components/grid/Grid";
import List from "../components/list/List";
import DealerSlider from "../components/dealerSlider/DealerSlider";
import Footer from "../components/footer/Footer";

const Home = () => {
  const store = {
    h5: "Sri Ganesan Furniture Works",
    h1: "Best Furniture Shop in Pondicherry",
    p: "We offer a clearly defined home furniture with a wide assortment in all types furniture such as Sofa sets, Cots, Dining tables, Teapoy,Mattress etc.",
  };
  const products = {
    h5: "FURNITURE COLLECTIONS",
    h1: "Featured Products",
    p: "Furniture at our showroom",
  };
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=600",
      h1: "3 SEATERS WODDERN SOFA SET",
      p: "5 PRODUCTS",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=600",
      h1: "TABLE",
      p: "6 PRODUCTS",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/4203100/pexels-photo-4203100.jpeg?auto=compress&cs=tinysrgb&w=600",
      h1: "CHAIR",
      p: "2 PRODUCTS",
    },
  ];
  const crendetials = [
    {
      id: 1,
      img: "https://sriganesanfurniture.com/wp-content/uploads/2019/01/Sri-quaa_Cert-2.png",
    },
    {
      id: 2,
      img: "https://sriganesanfurniture.com/wp-content/uploads/2019/01/SriKrishna_Cert.png",
    },
    {
      id: 3,
      img: "https://sriganesanfurniture.com/wp-content/uploads/2019/01/Grinde_Cert.png",
    },
    {
      id: 4,
      img: "https://sriganesanfurniture.com/wp-content/uploads/2019/01/Epione_Cert.png",
    },
  ];

  return (
    <div className="">
      <Header />
      <Navbar />
      <Slider />
      <Details store={store} />
      <List data={data} />
      <Details store={products} />
      <Grid />
      <DealerSlider />
      <div className="container">
        <h6
          style={{ textAlign: "center", fontWeight: "bold", padding: "20px" }}
        >
          CREDENTIALS
        </h6>
        <div>
          <hr style={{ padding: "10px" }} />
        </div>
      </div>
      <List data={crendetials} />
      <Footer />
    </div>
  );
};

export default Home;
