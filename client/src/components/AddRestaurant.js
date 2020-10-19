import React from "react";

const AddRestaurant = () => {
  return (
    <div className='mb-4'>
      <form action=''>
        <div className='form-row mt-4'>
          <div className='col'>
            <input className='form-control' type='text' placeholder='name' />
          </div>
          <div className='col'>
            <input
              className='form-control'
              type='text'
              placeholder='location'
            />
          </div>
          <div className='col'>
            <select className='custom-select'>
              <option disabled>Price Range</option>
              <option vlaue='1'>$</option>
              <option vlaue='2'>$$</option>
              <option vlaue='3'>$$$</option>
              <option vlaue='4'>$$$$</option>
            </select>
          </div>
          <button className='btn btn-dark'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
