import {useState,useEffect,useContext} from 'react';
import { AppContext } from './Home';
import cities from './autocomplet.json'


const BASE_URL=process.env.REACT_APP_BASE_URL;
const API_KEY=process.env.REACT_APP_API_KEY;

const Autocomplete=()=> {
    const [suggestions,setSuggestions]=useState([]);
    const {setCity,setCityKey,setCountry}=useContext(AppContext)

    const getSuggestions=(value)=>{
        console.log(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`);
        // fetch(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     setSuggestions(data)
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        setSuggestions(cities)
    }
  return (
    <div>
        <input placeholder='city search' type='text' onChange={(e)=>getSuggestions(e.target.value)}/>
        <ul>
            {
                suggestions.map((item)=>{
                    return(
                        <li key={item.Key} onClick={()=>{
                            setCityKey(item.Key);
                            setCity(item.LocalizedName);
                            setCountry(item.Country.LocalizedName)
                        }}>
                            {item.LocalizedName},{item.Country.LocalizedName}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Autocomplete