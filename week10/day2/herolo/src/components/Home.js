import React from 'react'
import { useState, createContext } from 'react';
import Autocomplete from './Autocomplete';
import CurrentWeather from './CurrentWeather';
import FiveDaysForcast from './FiveDaysForcast';

export const AppContext = createContext(null);


const Home = () => {

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [cityKey, setCityKey] = useState('');
    return (
        <>

            <AppContext.Provider value={{ city, setCity, country, setCountry, cityKey, setCityKey }}>
                
                <div>
                    <Autocomplete />
                    <CurrentWeather />
                    <FiveDaysForcast />
                </div>
            </AppContext.Provider>
        </>
    )
}

export default Home