/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TMessage } from "@/types/message.types";

const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add a new message
    addMessage: builder.mutation({
      query: (messageData: TMessage) => ({
        url: "/messages",
        method: "POST",
        body: messageData,
      }),
    }),

    // Get all messages
    getAllMessages: builder.query({
      query: () => ({
        url: "/messages",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response.data,
        };
      },
    }),

    // Delete a message by ID
    deleteMessage: builder.mutation({
      query: (id: string) => ({
        url: `/messages/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddMessageMutation,
  useDeleteMessageMutation,
  useGetAllMessagesQuery
} = messageApi;
