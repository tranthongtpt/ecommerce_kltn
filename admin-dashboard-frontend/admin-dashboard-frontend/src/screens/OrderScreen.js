import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import OrderMain from "../components/orders/OrderMain";

const OrderScreen = ({match}) => {
  const keyword =match.params.keyword
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderMain keyword={keyword}/>
      </main>
    </>
  );
};

export default OrderScreen;
