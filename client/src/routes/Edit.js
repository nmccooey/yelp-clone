import React from "react";
import EditRestaurant from "../components/EditRestaurant";
import Header from "../components/Header";

const Edit = () => {
  return (
    <>
      <div className='container'>
        <main>
          <Header text={"Edit Restaurant"} subText={""} />
          <EditRestaurant />
        </main>
      </div>
    </>
  );
};

export default Edit;
