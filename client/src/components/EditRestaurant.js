import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import RestaurantFinder from "../api/RestaurantFinder";

const EditRestaurant = () => {
  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    history.push("/");
  };

  return (
    <div>
      <form action=''>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            id='name'
            className='form-control'
            type='text'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input
            value={location}
            onChange={e => setLocation(e.target.value)}
            id='location'
            className='form-control'
            type='text'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price_range'>Price Range</label>
          <select
            className='custom-select'
            value={priceRange}
            id='price_range'
            onChange={e => setPriceRange(e.target.value)}
          >
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$$</option>
          </select>
        </div>
        <button
          onClick={() => {
            history.push("/");
          }}
          className='btn btn-danger mr-2'
        >
          Cancel
        </button>
        <button type='submit' onClick={handleSubmit} className='btn btn-dark'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditRestaurant;
