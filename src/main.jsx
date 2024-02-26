import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux";

import Root from "./routes/root";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import HomePage from "./routes/HomePage/HomePage";
import AboutPage from "./routes/AboutPage/AboutPage";
import PostsPage from "./routes/PostsPage/PostsPage";
import PostPage from "./routes/PostPage/PostPage";
import PostEditPage from "./routes/PostEditPage/PostEditPage";
import PostCreatePage from "./routes/PostCreatePage/PostCreatePage";
import BurgersPage from "./routes/BurgersPage/BurgersPage";
import BurgerPage from "./routes/BurgerPage/BurgerPage";
import LoginPage from "./routes/Loginpage/LoginPage";
import PrivatRoute from "./routes/PrivatRoute/PrivatRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
      <Route path="/posts" element={<PrivatRoute />}>
        <Route path=":id/new" element={<PostCreatePage />} />
        <Route path=":id/edit" element={<PostEditPage />} />
      </Route>
      <Route path="/burgers" element={<BurgersPage />} />
      <Route path="/burgers/:id" element={<BurgerPage />} />
      <Route path="login" element={<LoginPage />} />
    </Route >
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode >
);
