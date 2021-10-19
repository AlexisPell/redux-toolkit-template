import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from '../constants/url';
import { IPost } from '../interfaces/post';
import { userSlice } from '../store/reducers/userSlice';

export const postApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], { limit: number }>({
      query: ({ limit }) => ({
        url: '/posts',
        params: { limit },
      }),
      providesTags: (result) => ['Post'],
      // async onQueryStarted(id, { dispatch, queryFulfilled }) {
      // dispatch(userSlice.actions.setUsers([]))
      //   try {
      //     const { data } = await queryFulfilled
      //   } catch (err) {
      // }
      // }
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: build.mutation<IPost, string>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
