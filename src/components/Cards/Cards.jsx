import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames'; 
//this module is use to give multiple classNames to component.
import styles from './Cards.module.css';
const Cards =({data : { confirmed,recovered,deaths,lastUpdate} })=>{
  if(!confirmed){
    return 'Loading....';
  }
  return(
     <div className={styles.container}>
       <Grid container spacing ={3} justify='center'>
        <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}> {/* In this line xs and md attribute is use to give width to card for mobile responsive(xs) and medium devoce responsive(md) respectively  */}
         <CardContent>
           <Typography color="textSecondary" gutterBottom> Infected </Typography>
           <Typography>
             <CountUp start={0} end={confirmed.value} duration={3} separator=','/>
           </Typography>
           <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
           <Typography variant="body2"> Number of active cases of Covid-19 </Typography>
         </CardContent>
        </Grid>
        <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
         <CardContent>
           <Typography color="textSecondary" gutterBottom> RECOVERED </Typography>
           <Typography>
             <CountUp start={0} end={recovered.value} duration={3} separator=','/>
           </Typography>
           <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
           <Typography variant="body2"> Number of recoveries from Covid-19 </Typography>
         </CardContent>
        </Grid>
        <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
         <CardContent>
           <Typography color="textSecondary" gutterBottom> Deaths</Typography>
           <Typography>
             <CountUp start={0} end={deaths.value} duration={3} separator=','/>
           </Typography>
           <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
           <Typography variant="body2"> Number of Deaths caused by Covid-19 </Typography>
         </CardContent>
        </Grid>
       </Grid>
      </div>


  )
}
export default Cards;
