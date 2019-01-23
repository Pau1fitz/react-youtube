import React, { useEffect, useState } from "react";
import { normalize } from "polished";

const API_KEY = "AIzaSyAXo-YsLg3RfGrQ3NWIX4D2DYyMF-aleO4";
const App = () => {
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState("redux");
  useEffect(
    () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}`
      ).then(res => {
        console.log(res);
      });
    },
    [query]
  );
  return (
    <div>
      <h4>You Tube</h4>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button onClick={() => setQuery(search)}>Search</button>
    </div>
  );
};

export default App;
