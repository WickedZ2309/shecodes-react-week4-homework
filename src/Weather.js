import React from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'

export default function Weather(props) {
  function handleresponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}ºC`)
  }

  let apiKey = `2684689779a1e8c6910997393908cda2`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleresponse);
  
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}