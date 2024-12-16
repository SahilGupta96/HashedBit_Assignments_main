import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const movieDetails = {
  1: { title: "URI", description: "Indian army special forces execute a covert operation, avenging the killing of fellow army men at their base by a terrorist group.", image: "https://filminformation.com/wp-content/uploads/2019/01/uri.jpg" },
  2: { title: "Sam Bhadur", description: "Revolves around the high and low points of Sam Manekshaw who became the first Indian Army officer to be promoted to the rank of Field Marshal.", image: "https://im.idiva.com/content/2023/Nov/amp---2023-11-30T162852944_65686b2aee1a8.jpg" },
  3: { title: "Shershaah", description: "Shershaah is the story of PVC awardee Indian soldier Capt. Vikram Batra, whose bravery and unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999.", image: "https://static.toiimg.com/thumb/imgsize-23456,msid-81121860,width-600,resizemode-4/81121860.jpg" },
  4: { title: "3 idiots", description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them idiots.", image: "https://kayeklair23.wordpress.com/wp-content/uploads/2013/07/3idiot-33-12x9.jpg" },
  5: { title: "The Dark Knight", description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiO_S9wFhhLkCBELvGoWQKHb-g0STAPyGP1LB5aPKBoqqJbOyNvnvFgwB1WSc8Xm5kexY&usqp=CAU" },
  6: { title: "Godfather", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr569un5tNaTUzHMwJFhWKG54YQozCrJD2NDVwGNIu-heApBnS5ZCQzle-X-fLvJ5NiU&usqp=CAU" },
  7: { title: "The Matrix", description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.", image: "https://panandslam.com/wp-content/uploads/2019/09/the_matrix_0.png?w=555" },
  8: { title: "Interstellar", description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.", image: "https://images.news18.com/malayalam/uploads//2024/11/New-Project-20241118T131037024-2024-11-b8729be95e89e3edb899de7178a8d73e-3x2.jpg" },
  
};

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieDetails[id];

  return (
    // <div className="min-h-screen bg-indigo-100 flex flex-col">
    //   <h2 className="my-4 text-center text-xl font-bold">{movie.title}</h2>
    //   <img className="my-4 mx-auto rounded-md w-80 h-80" src={movie.image} alt={movie.title}/>
    //   <p className="my-4 text-center text-lg w-96 mx-auto">{movie.description}</p>
    //   <button className="my-7 text-lg rounded-lg bg-slate-950 text-white w-32 mx-auto p-2" onClick={() => navigate("/book-seat")}>
    //     Book Seat
        <div className="min-h-screen bg-gradient-to-t from-indigo-500 to-indigo-100 flex flex-col items-center justify-center py-10">
      <h2 className="my-4 text-center text-3xl font-bold text-white">{movie.title}</h2>
      <img
        className="rounded-full shadow-lg w-96 h-96 object-cover mb-8"
        src={movie.image}
        alt={movie.title}
      />
      <p className="text-center text-lg text-white w-full px-4 leading-loose">{movie.description}</p>
      <button
        className="my-7 text-lg bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-4 rounded-full text-white font-bold shadow-md hover:shadow-lg"
        onClick={() => navigate("/book-seat")}
      >
        Book Seat
      </button>
    </div>
  );
};

export default MovieDetails;
