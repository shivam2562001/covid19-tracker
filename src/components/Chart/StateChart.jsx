import React from 'react';
import {Card} from '@material-ui/core';
import {Bar,defaults} from 'react-chartjs-2';
import styles from './Chart.module.css';

defaults.global.maintainAspectRatio = false; //for making responsive chartjs

const StateChart =({stateData:{loc,confirmedCasesIndian,discharged,deaths,confirmedCasesForeign,totalConfirmed}})=>{

const barChart = (
    totalConfirmed
    ?(<Card className={styles.Card} variant='outlined'>
      <Bar
      data={{
       labels : ['Confirmed','Recovered','Deaths'],
       datasets:[{
         label:`people`,
         backgroundColor : 
         ['rgba(0,0,255,0.5)',
         'rgba(0,255,0,0.5)',
         'rgba(255,0,0,0.4)'
         ],
         borderColor:'rgba(0,0,255,0)',
         borderWidth: 5,
         fontColor:"black",
         data:[totalConfirmed,discharged,deaths]
       }]
      }}
      options={{
        title:{
          display:true,
          text:`Cases in ${loc}`,
          fontSize:36,
          fontFamily: 'Script MT Bold',
          fontColor:'#ff0028'
        },
        legend:{
          display:true
        }
      }}
      /></Card>
    ):null
  );

  return(
    <div className={styles.container}>
      {loc ? barChart : null}
    </div>
   )
 }
 export default StateChart;