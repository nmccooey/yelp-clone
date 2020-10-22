import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";

const RestaurantList = props => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  // Delete Handler
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter(restaurant => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Edit Handler
  const handleEdit = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/edit`);
  };

  // Restaurant select handler.
  const handleRestaurantSelect = id => {
    history.push(`/restaurants/${id}`);
  };

  const renderRating = restaurant => {
    if (!restaurant.count) {
      return <span className='text-warning'>0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.average_rating} />
        <span className='text-warning ml-1'>({restaurant.count})</span>
      </>
    );
  };

  return (
    <div className='list-group'>
      <table className='table table-hover table-dark table-borderless'>
        <thead>
          <tr className='yelp-theme'>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map(restaurant => {
              return (
                <tr
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                  className='restaurant-list-item'
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={e => handleEdit(e, restaurant.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={e => handleDelete(e, restaurant.id)}
                    >
                      <i className='fas fa-trash-alt'></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
