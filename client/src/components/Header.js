import React from "react";

const Header = ({ text, subText }) => {
  return (
    <div>
      <h1 className='font-weight-light display-4 text-center'>{text}</h1>
      <img className='yelp-logo' alt='yelp-logo' src='/images/yelp-logo.jpg' />
      <h5 className='font-weight-light text-center'>{subText}</h5>
    </div>
  );
};

export default Header;
