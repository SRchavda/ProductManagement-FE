import { api } from "./api";

export const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllOrder: build.query({
      query: () => "Orders",
      providesTags: ["Order"],
    }),
    getOrderById: build.mutation({
      query(id) {
        return {
          url: `Orders/${id}`,
          method: "GET",
        };
      },
      invalidatesTags: ["Order"],
    }),
    addOrder: build.mutation({
      query(newOrder) {
        return {
          url: `Orders`,
          method: "POST",
          body: { newOrder },
        };
      },
      invalidatesTags: ["Order"],
    }),
    updateOrder: build.mutation({
      query(updatedOrder) {
        return {
          url: `Orders`,
          method: "POST",
          body: { updatedOrder },
        };
      },
      invalidatesTags: ["Order"],
    }),
    deleteOrder: build.mutation({
      query(id) {
        return {
          url: `Orders/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useDeleteOrderMutation,
  useAddOrderMutation,
  useGetAllOrderQuery,
  useUpdateOrderMutation,
  useGetOrderByIdMutation,
} = orderApi;
