import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? undefined
    : "http://localhost:5000/api/v1/restaurants";

export default axios.create({
  baseURL,
});
