import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";
import BookingConfirmation from "./components/BookingConfirmation";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <div>
        <Navbar/>
        <MovieList/>
      </div>
    },
    {
      path:'/movie/:id',
      element: <div>
        <Navbar/>
        <MovieDetails/>
      </div>
    },
    {
      path:'/book-seat',
      element: <div>
        <Navbar/>
        <BookingForm/>
      </div>
    },
    {
      path:'/confirmation',
      element: <div>
        <Navbar/>
        <BookingConfirmation/>
      </div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
