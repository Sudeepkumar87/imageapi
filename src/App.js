import React, { useEffect, useState } from "react";
import SearchBar from "../src/component/SearchBar";
import { useDebounce } from 'use-debounce';
import Home from "./component/Home";
function App() {
  const [selectedDescription, setSelectedDescription] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); 
  const [value] = useDebounce(searchTerm, 500);

  const handlerFunction = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await response.json();


      const filteredData = data.filter((item) => item.image);

      setSelectedDescription(filteredData);

      console.log("Filtered Data:", filteredData);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    handlerFunction();
  }, []);

  const handlerSearchTerm = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); 
    setVisibleCount(10);
  };


  const filteredDescriptions = selectedDescription.filter((item) =>
    item.name?.toLowerCase().includes(value) 
  );

 
  const visibleItems = filteredDescriptions.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); 
  };

  return (
    <>
    <SearchBar handlerSearchTerm={handlerSearchTerm} />
    <Home handlerSearchTerm={handlerSearchTerm} visibleItems={visibleItems} loadMore ={loadMore }visibleCount={visibleCount} filteredDescriptions={filteredDescriptions}/>
  
    </>
  );
}

export default App;
