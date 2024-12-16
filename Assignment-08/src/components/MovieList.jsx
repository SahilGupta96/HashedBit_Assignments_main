import React from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  { id: 1, title: "URI", image: "https://filminformation.com/wp-content/uploads/2019/01/uri.jpg" },
  { id: 2, title: "Sam Bahadur", image: "https://im.idiva.com/content/2023/Nov/amp---2023-11-30T162852944_65686b2aee1a8.jpg" },
  { id: 3, title: "Shershaah", image: "https://static.toiimg.com/thumb/imgsize-23456,msid-81121860,width-600,resizemode-4/81121860.jpg" },
  { id: 4, title: "3 idiots", image: "https://kayeklair23.wordpress.com/wp-content/uploads/2013/07/3idiot-33-12x9.jpg" },
  { id: 5, title: "The Dark Knight", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiO_S9wFhhLkCBELvGoWQKHb-g0STAPyGP1LB5aPKBoqqJbOyNvnvFgwB1WSc8Xm5kexY&usqp=CAU" },
  { id: 6, title: "Godfather", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr569un5tNaTUzHMwJFhWKG54YQozCrJD2NDVwGNIu-heApBnS5ZCQzle-X-fLvJ5NiU&usqp=CAU/300" },
  { id: 7, title: "The Matrix", image: "https://panandslam.com/wp-content/uploads/2019/09/the_matrix_0.png?w=555" },
  { id: 8, title: "Interstellar", image: "https://images.news18.com/malayalam/uploads//2024/11/New-Project-20241118T131037024-2024-11-b8729be95e89e3edb899de7178a8d73e-3x2.jpg" },
];

const MovieList = () => {
  const navigate = useNavigate();

  return (
    // <div className="p-5 bg-indigo-100 grid grid-cols-4 place-items-center gap-4 rounded-lg w-full h-64 object-cover">
    <div className="p-4 bg-gray-900 text-white grid grid-cols-4 gap-4  ">
      {movies.map((movie) => (
        <div className="overflow-hidden" key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
          <img className=" cursor-pointer rounded-md w-80 h-80 object-cover hover:scale-105 duration-500  ease rounded-full" src={movie.image} alt={movie.title} />
          <h3 className="hover:font-bold cursor-pointer text-center my-5">{movie.title}</h3>
        </div>
))}
    </div>
  );
};

export default MovieList;

