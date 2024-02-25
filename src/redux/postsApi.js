import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getSinglePost: builder.query({
      query: (id = "") => `posts/${id}`,
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: "/posts",
        method: "post",
        body,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'delete',
      }),
    }), 
    getUsers: builder.query({
      query: () => '/users',
    })
  }),
});

export const { useGetPostsQuery, useGetSinglePostQuery, useAddPostMutation, useDeletePostMutation, useGetUsersQuery } = postsApi;
