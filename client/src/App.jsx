import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderSection from "./components/AppHeader";
import ArticleItem from "./components/ArticleItem";
import trips from "../../server/db";

function App() {
  const [allTrips, setAllTrips] = useState([]);
  const [searchKeywords, setSearchKeywords] = useState("");
  const [selectTags, setSelectTags] = useState([]);

  const search = (keywords) => {
    setSearchKeywords(keywords);
    fetchTrips(keywords);
  };

  const addTags = (tag) => {
    setSelectTags([...selectTags, tag]);
    const newWords = searchKeywords ? `${searchKeywords}, ${tag}` : tag;
    setSearchKeywords(newWords);
    fetchTrips(newWords);
  };

  const fetchTrips = async (keywords = "") => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?limit=10&keywords=${keywords}`
      );
      const totalTrip = response.data;
      setAllTrips(totalTrip);
    } catch (error) {
      console.log("Error fetching:", error);
    }
  };
  useEffect(() => {
    fetchTrips(searchKeywords);
  }, [searchKeywords]);

  return (
    <div className="App">
      <HeaderSection
        search={search}
        searchKeywords={searchKeywords}
        addTags={addTags}
      />
      <ArticleItem
        trips={trips}
        search={search}
        searchKeywords={searchKeywords}
      />
    </div>
  );
}

export default App;
