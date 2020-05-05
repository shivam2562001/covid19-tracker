import React,{useState,useEffect} from 'react';
import{NativeSelect,FormControl,Card} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchstates} from '../../api'
const StatePicker =({handleStateChange})=>{
  const [fetchedStates, setFetchedStates] = useState([]);
  useEffect(()=>{
    const fetchAPI = async()=>{
       setFetchedStates(await fetchstates());
    }
    fetchAPI();
  },[setFetchedStates]);

  return(
    <FormControl className={styles.formControl}>
      <Card>
      <NativeSelect defaultValue="" onChange={(e)=>{handleStateChange(e.target.value)}}>
      <option value="">choose state</option>
      {fetchedStates.map((state,i)=><option key={i} value={state}>{state}</option>)}
      </NativeSelect>
      </Card>
    </FormControl>
  )
}
export default StatePicker;