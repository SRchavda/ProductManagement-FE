import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:7236/api/",
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const api = createApi({
  baseQuery,
  //tagTypes: ["Time", "Posts", "Counter"],
  endpoints: () => ({}),
});

// export const enhancedApi = api.enhanceEndpoints({
//   endpoints: () => ({
//     getPost: () => "test",
//   }),
// });
