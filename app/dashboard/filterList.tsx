"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const FilterList = () => {
  const [category, setCategory] = useState("all");
  const handleCategory = (value: string) => {
    setCategory(value);
  };
  return (
    <div className="p-3 flex items-center gap-4">
      <Button
        onClick={() => handleCategory("all")}
        variant={category == "all" ? "default" : "outline"}
        className="rounded-full"
      >
        All
      </Button>
      <Button
        onClick={() => handleCategory("top50")}
        variant={category == "top50" ? "default" : "outline"}
        className="rounded-full"
      >
        Top 50
      </Button>
      <Button
        onClick={() => handleCategory("topGainers")}
        variant={category == "topGainers" ? "default" : "outline"}
        className="rounded-full"
      >
        Top Gainers
      </Button>
      <Button
        onClick={() => handleCategory("topLosers")}
        variant={category == "topLosers" ? "default" : "outline"}
        className="rounded-full"
      >
        Top Losers
      </Button>
    </div>
  );
};

export default FilterList;
