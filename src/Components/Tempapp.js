import React, {useEffect, useState} from "react";
import "./Tempapp.css";


const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Lahore");
    useEffect ( () =>{
      const fetchApi = async ()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=67b222b7691ff867196650cb6cabd3ac`
        const response = await fetch(url);
        const resJson = await response.json();
        // console.log(resJson)
        setCity(resJson.main);
      };
      fetchApi();
    }, [search])


  return (
    <>
      <div className="tomp">
        <div className="box">
          <div className="input">
            <input
              type="search"
              className='="inputFeild'
              placeholder="Enter City Here"
              onChange={(event) => {setSearch(event.target.value) } }
            />
          </div>
        </div>
        {!city ? (
          <p>No Data found</p>
        ) : (
          <>
          <div className="info">
          <h2 className="location">
            <i className="fas fa-street-view"></i> {search}
          </h2>
          <h1 className="temp">{city.temp}* Cel</h1>
          <h3 className="tempin_max">Min : {city.temp_min}*Cel | Max : {city.temp_max}*Cel</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </>
        )}

      </div>
    </>
  );
};

export default Tempapp;
