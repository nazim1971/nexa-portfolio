/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TBlog } from "@/types/blog.types";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBlog: builder.mutation ({
      query: (userInfo) => ({
        url: "/blogs",
        method: "POST",
        body: userInfo,
      }),
    }),

    getAllBlog: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response.data
        };
      },
    }),

    getBlogById: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
    }),
    updateBlog: builder.mutation<
      any,
      { id: string; blogData: Partial<TBlog> }
    >({
      query: ({ id, blogData }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: blogData,
      }),
    }),
  }),
});

export const {
useAddBlogMutation,
useGetAllBlogQuery,
useGetBlogByIdQuery,
useDeleteBlogMutation,
useUpdateBlogMutation
} = blogApi;
