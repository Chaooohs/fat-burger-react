import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./postsApi";
import { burgersAPI } from "./burgersAPI";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [burgersAPI.reducerPath]: burgersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat([
      postsApi.middleware,
      burgersAPI.middleware
    ]),
});
