import React from "react";
import "./Card.css";

export const Card =(props)=>{
  const {data}=props;
  return(<div class="card">

        <h2>{data.name}</h2>
        <h3>{data.weather[0].main}<span>Wind {data.wind.speed}km/h <span class="dot">•</span> Humid {data.main.humidity}</span></h3>
        <h1>{Math.round(data.main.temp)}°</h1>
        <div class="sky">
            <div class="sun"></div>
            <div class="cloud">
                <div class="circle-small"></div>
                <div class="circle-tall"></div>
                <div class="circle-medium"></div>
            </div>
        </div>
                <h3><span>Feels Like {data.main.feels_like}° <span class="dot">•</span> Pressure {data.main.pressure}</span> </h3>
                 <h3><span>Min Temp {data.main.temp_min}° <span class="dot">•</span> Max Temp {data.main.temp_max}°</span> </h3>
    </div>)
}