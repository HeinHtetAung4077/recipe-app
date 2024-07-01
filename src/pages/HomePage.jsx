import { Search } from "lucide-react";
import React from "react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  return (
    <div className="bg-[#faf9fb] flex-1 p-10">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>
        <p className="font-bold mt-4 text-3xl md:text-5xl">
          Recommended Recipes
        </p>
        <p className="text-slate-500 text-sm text-semibold ml-1 my-2 tracking-tight">
          Popular choices
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* 1st Recipe */}
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
