import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../api/RestaurantFinder";
import Header from "../components/Header";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

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
        <div className='container'>
          <Header
            text={selectedRestaurant.restaurant.name}
            subText={"Reviews"}
          />
          <div className='text-center'>
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className='text-warning ml-1'>
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : "(0)"}
            </span>
          </div>
          <div className='mt-4'>
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </div>
      )}
    </div>
  );
};

export default Detail;
