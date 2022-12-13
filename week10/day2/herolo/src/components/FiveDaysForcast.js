import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './Home'
import fiveDaysJson from './fiveDaysForecast.json'

const BASE_URL=process.env.REACT_APP_BASE_URL;
const API_KEY=process.env.REACT_APP_API_KEY;


function FiveDaysForcast() {
    const { city, cityKey, country } = useContext(AppContext)
    const [fiveDays,setFiveDays]=useState(fiveDaysJson)

    const getFiveDays=(cityKey)=>{
        // fetch(`${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     setFiveDays(data);
        // })
        // .catch(e=>console.log(e))
        setFiveDays(fiveDaysJson);
    }

    useEffect(()=>{
        if(cityKey){
            getFiveDays(cityKey);
        }
    },[cityKey])
    

    if (city&&fiveDays) {
        return (
            <div>
                <h2>Five Days Forcast:</h2>
                
                {
                    
                    fiveDays.DailyForecasts.map((item)=>{
                        return(
                            <div>
                                <h4>{new Date(item.Date).getDate()}/{new Date(item.Date).getMonth()}</h4>
                                <p>min temp:{((item.Temperature.Maximum.Value-32)*(5/9)).toFixed()}C</p>
                            </div>
                        )
                    })
                 }
            </div>
        )
    }
   
}

export default FiveDaysForcast