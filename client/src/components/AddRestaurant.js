import React, { useState, useContext } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name: name,
        location: location,
        price_range: priceRange,
      });
      addRestaurants(response.data.data.restaurant);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mb-4'>
      <form action=''>
        <div className='form-row mt-4'>
          <div className='col'>
            <input
              className='form-control'
              type='text'
              placeholder='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='col'>
            <input
              className='form-control'
              type='text'
              placeholder='location'
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </div>
          <div className='col'>
            <select
              className='custom-select'
              value={priceRange}
              onChange={e => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
            </select>
          </div>
          <button onClick={handleSubmit} type='submit' className='btn btn-dark'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
