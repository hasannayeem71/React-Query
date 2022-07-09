import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
const SuperHeros = () => {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios
      .get(`http://localhost:4000/superheroes`)
      .then((res) => {
        setIsLoading(false)
        setHeros(res.data)});
  }, []);
  if (isLoading) {
    return(<>
        <Navigation />
        <h2>Loading...</h2>
    </>
    ) 
    
  }
  return (
    <>
      <Navigation />
      <h2>Super Heroes Page</h2>
      {heros.map(hero => {
        return <div>{hero.name}</div>
      })}
    </>
  );
};

export default SuperHeros;
