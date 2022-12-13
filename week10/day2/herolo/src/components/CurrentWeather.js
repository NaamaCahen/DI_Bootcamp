import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './Home'
import current from './currentWeather.json'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;



const CurrentWeather = (props) => {
    const [currentWeather, setCurrentWeather] = useState([])
    const { city, cityKey, country } = useContext(AppContext)
    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorites')).includes(cityKey)? false:true);

    useEffect(() => {
        if (cityKey) {
            getCurrentWeather(cityKey);
        }
        setFavorite(JSON.parse(localStorage.getItem('favorites')).includes(cityKey)? true:false);

    }, [cityKey])

    const favoritesManager = () => {
        let arrFav=JSON.parse(localStorage.getItem('favorites'));
        if (!favorite) {
            setFavorite(true);
            console.log(localStorage.getItem('favorites'));
            if(!arrFav.includes(cityKey)){
                arrFav.push(cityKey);
            }
        } else {
            setFavorite(false);
            console.log('remove');
            arrFav=arrFav.filter(item=>item!==cityKey)
        }
        localStorage.setItem('favorites',JSON.stringify(arrFav))
        console.log(localStorage.getItem('favorites'));
    }

    const getCurrentWeather = (key) => {
        // fetch(`${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     setCurrentWeather(data);
        // })
        // .catch(e=>{
        //     console.log(e);
        // })
        setCurrentWeather(current)
    }
    if (currentWeather.length === 0) return null;
    return (
        <div>
            <h4>{city ? 'Current Weather' : null}</h4>
            <button onClick={() => favoritesManager()}>{favorite ? 'remove from favorites' : 'add to favorites'}</button>
            <p>{city}<br /> {country}</p>
            <p>{currentWeather[0].Temperature.Metric.Value}</p>
            <p>{currentWeather[0].WeatherText}</p>
            <p><img src={`https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon < 10 ? '0' + currentWeather[0].WeatherIcon : currentWeather[0].WeatherIcon}-s.png`} /></p>
        </div>
    )
}

export default CurrentWeather