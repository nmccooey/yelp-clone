import React from "react";
import AddRestaurant from "../components/AddRestaurant";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <>
      <div className='container'>
        <Header text={"Yelp Clone"} subText={"Restaurant Finder"} />
        <main>
          <AddRestaurant />
          <RestaurantList />
        </main>
      </div>
    </>
  );
};

export default Home;
