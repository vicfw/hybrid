import React, { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

interface TSearchPosts {
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchPosts = ({ handleSearchChange }: TSearchPosts) => {
  return (
    <div className="py-3">
      <Input
        onChange={handleSearchChange}
        placeholder="Search posts by title..."
      />
    </div>
  );
};

export default SearchPosts;
