import React, { Component } from 'react';
import coronaImage from './images/image.jpg';
import {Cards,Chart,CountryPicker,StatePicker, StateCard,StateChart} from "./components";
import styles from "./App.module.css";
import {fetchData, fetchStates1} from './api';


export default class App extends Component {
  state = {
      data:{},
      country:"",
      stateData:{},
      st:""
  }
 
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData});
    const fetchedStates = await fetchStates1;
    this.setState({stateData:fetchedStates});
    
  }

  handleCountryChange = async(country)=>{
   const fetchedData = await fetchData(country);
   this.setState({data:fetchedData,country});
  }


  handleStateChange= async(st)=>{
    const fetchedStates= await fetchStates1(st);
    this.setState({stateData:fetchedStates,st})
  }
   
  render() {
    const {data,country} = this.state;
    const {stateData,st} = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='COVID-19'/>
        <Cards data={data} country={country} />
        {st !== ''?
        <StateCard stateData={stateData}></StateCard>:null}
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        
        {country === 'India'?
        <StatePicker handleStateChange={this.handleStateChange}/>:null}
        {st !== ''?
        <StateChart stateData={stateData} />:null} <br/><br/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}
