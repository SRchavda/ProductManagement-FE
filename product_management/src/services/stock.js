import { api } from "./api";

export const stockApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllStock: build.query({
      query: () => "Stocks",
      providesTags: ["Stock"],
    }),
    getStockById: build.mutation({
      query(id) {
        return {
          url: `Stocks/${id}`,
          method: "GET",
        };
      },
      invalidatesTags: ["Stock"],
    }),
    addStock: build.mutation({
      query(newStock) {
        return {
          url: `Stocks`,
          method: "POST",
          body: { newStock },
        };
      },
      invalidatesTags: ["Stock"],
    }),
    updateStock: build.mutation({
      query(updatedStock) {
        return {
          url: `Stocks`,
          method: "POST",
          body: { updatedStock },
        };
      },
      invalidatesTags: ["Stock"],
    }),
    deleteStock: build.mutation({
      query(id) {
        return {
          url: `Stocks/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Stock"],
    }),
  }),
});

export const {
  useDeleteStockMutation,
  useAddStockMutation,
  useGetAllStockQuery,
  useUpdateStockMutation,
  useGetStockByIdMutation,
} = stockApi;
