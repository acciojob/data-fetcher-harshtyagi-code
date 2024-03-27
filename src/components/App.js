import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred: " + error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Data Fetched from API</h1>
      {loading ? <p>Loading data...</p> : error ? <p>{error}</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};


export default App;