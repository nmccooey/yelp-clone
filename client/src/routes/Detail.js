import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../api/RestaurantFinder";
import Header from "../components/Header";

const Detail = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <Header
            text={selectedRestaurant.restaurant.name}
            subText={"Restaurant Details"}
          />
          <div className='text-center'>
            Star Rating
            <span className='text-warning ml-1'>
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : "(0)"}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
