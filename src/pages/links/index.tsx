import React from "react";
import LinkCard from "../../components/links/linkcard";
import SearchBar from "../../components/links/searchbar";

const Links: React.FC = () => {
  return (
    <div className="h-full px-9 ">
      <SearchBar />
      <div className="grid grid-cols-3 gap-5 py-12">
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
};

export default Links;
