import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Basic fetchBaseQuery setup without token handling
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api", // Set your base API URL here
});

export const baseApi = createApi({
  reducerPath: "baseApi", // Unique key for the API slice in the Redux store
  baseQuery, // Using the basic fetchBaseQuery directly
  endpoints: () => ({}), // Define your endpoints later
});
