import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames'; 
//this module is use to give multiple classNames to component.
import styles from './Cards.module.css';
const StateCard =({stateData:{loc,confirmedCasesIndian,discharged,deaths,confirmedCasesForeign,totalConfirmed} })=>{
  const dt= new Date().toString();
  const index = dt.lastIndexOf(':')+3;
  if(!totalConfirmed){
    return 'Loading....';
  }
  return(
     <div className={styles.container}>
       <Grid container spacing ={3} justify='center'>
        <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
          {/* In this line xs and md attribute is use to give width to card for mobile responsive(xs) and medium devoce responsive(md) respectively */}
          <Typography color="textPrimary" gutterBottom>{loc}</Typography>
        <CardContent>
           <Typography color="textSecondary" gutterBottom> INFECTED </Typography>
           <Typography>
             <CountUp start={0} end={confirmedCasesIndian+confirmedCasesForeign} duration={3} separator=','/>
           </Typography>
           <Typography color="textSecondary">{dt.substring(0,index)}</Typography>
           <Typography variant="body2"> Number of active cases of Covid-19 </Typography>
         </CardContent>
        </Grid>
        <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
           <Typography color="textPrimary" gutterBottom>{loc}</Typography>
         <CardContent>
           <Typography color="textSecondary" gutterBottom> RECOVERED</Typography>
           <Typography>
             <CountUp start={0} end={discharged} duration={3} separator=','/>
           </Typography>
           <Typography color="textSecondary">{dt.substring(0,index)}</Typography>
           <Typography variant="body2"> Number of recoveries from Covid-19 </Typography>
         </CardContent>
        </Grid>
        <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
        <Typography color="textPrimary" gutterBottom>{loc}</Typography>
         <CardContent>
           <Typography color="textSecondary" gutterBottom> DEATHS</Typography>
           <Typography>
             <CountUp start={0} end={deaths} duration={3} separator=','/>
           </Typography>
           <Typography color="textSecondary">{dt.substring(0,index)}</Typography>
           <Typography variant="body2"> Number of Deaths caused by Covid-19 </Typography>
         </CardContent>
        </Grid>
       </Grid>
      </div>
  )
 };
export default StateCard;