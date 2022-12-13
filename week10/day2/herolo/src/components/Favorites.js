import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { AppContext } from './Home'
import CurrentWeather from './CurrentWeather';



function Favorites() {
    const { city,cityKey, setCityKey, country } = useContext(AppContext);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')));

    useEffect(() => {
        setCityKey(favorites[0])
    }, [])
    
    if (cityKey) {
        return (
            <>
                <div>Favorites:</div>
                {
                    favorites.map(item => {
                        setCityKey(item)
                        return (
                            <CurrentWeather />
                        )
                    })
                }
            </>

        )
    }
    else{
        return(
            <h2>favorites not found...</h2>
        )
    }

}

export default Favorites