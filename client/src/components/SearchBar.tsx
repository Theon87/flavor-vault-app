import React from "react";
import { useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import "../index.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/api/recipes/${query}`);
    setQuery("");
  };
  return (
    <section id="home">
      <div className="overlay">
        <div className="container px-5 py-24 mx-auto text-dark-grey">
          <p className="text-center mb-5 text-md-">
            Discover amazing recipes and learn how to make them. If you like a
            recipe, just add it to your favorites!
          </p>

          <div className="w-full lg:w-2/3 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex border-2 border-green-600 rounded-full px-4 py-2 text-lg"
            >
              <input
                type="text"
                className=" w-full bg-transparent outline-none search-bar"
                placeholder="Search Recipe..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <Button
                className="flex w-max gap-4 text-dark-grey"
                variant="filled"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
