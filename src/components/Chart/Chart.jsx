import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Card} from '@material-ui/core';
import {Line,Bar,defaults} from 'react-chartjs-2';
import styles from './Chart.module.css';
defaults.global.defaultColor= 'rgb(250, 250,250)';
defaults.global.maintainAspectRatio = false; //for making responsive chartjs

const Chart =({data:{confirmed,deaths,recovered},country})=>{
  const [dailyData,setDailyData] = useState([]);
  useEffect(()=>{
    const fetchAPI = async()=>{
      setDailyData(await fetchDailyData());
    }
    fetchAPI();
  },[]);
  
  const lineChart = (
    dailyData.length  //if array is empty retun false otherwise true.
    ? (<Card className={styles.Card} variant='outlined'><Line 
      data={{
        labels:dailyData.map(({date})=> date),
        datasets:[{
         data: dailyData.map(({confirmed})=> confirmed),
         label: 'Infected',
         borderColor:'#3333ff',
         fill: true,
        },{
          data: dailyData.map(({deaths})=> deaths),
          label: 'Deaths',
          borderColor:'red',
          backgroundColor:'rgba(255,0,0,0.5)',
          fill: true
         }]
      }}
      options={{
        title:{
          display:true,
          text:'Cases in Global',
          fontSize:36,
          fontFamily:'Bodoni MT Black',
          fontColor:'#ff414e'
        },
        legend:{
          display:true,
        }
      }}
      
    /></Card>): null
  );
  const barChart = (
    confirmed
    ?(<Card className={styles.Card} variant='outlined'>
      <Bar
      data={{
       labels : ['Infected','Recovered','Deaths'],
       datasets:[{
         label:'People',
         backgroundColor : 
         ['rgba(0,0,255,0.5)',
         'rgba(0,255,0,0.5)',
         'rgba(255,0,0,0.5)'
         ],
         fontColor:"black",
         data:[confirmed.value,recovered.value,deaths.value]
       }]
      }}
      options={{
        title:{
          display:true,
          text:`Cases in ${country}`,
          fontSize:36,
          fontFamily: 'Engravers MT',
          fontColor:'#FF5733'
        },
        legend:{
          display:true
        }
      }}
      /></Card>
    ): null
  );
   
   return(
   <div className={styles.container}>
     {country ? barChart : lineChart}
   </div>
  )
}
export default Chart;