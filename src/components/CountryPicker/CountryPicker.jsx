import React,{useState,useEffect} from 'react';
import{NativeSelect,FormControl,Card} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchcountries} from '../../api'
const CountryPicker =({handleCountryChange})=>{
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(()=>{
    const fetchAPI = async()=>{
       setFetchedCountries(await fetchcountries());
    }
    fetchAPI();
  },[setFetchedCountries]);

  return(
    <FormControl className={styles.formControl }>
      <Card><NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
      <option value="">Global</option>
      {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
      </NativeSelect></Card>
   
    </FormControl>
  )
}
export default CountryPicker;