import axios from 'axios';
const url = "https://covid19.mathdro.id/api";
const stateurl="https://api.rootnet.in/covid19-in/stats/latest";

export const fetchData = async (country)=>{
  let changeableUrl = url;
  if(country){
    changeableUrl =`${url}/countries/${country}`;
  }
  try {
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
    return { confirmed,recovered,deaths,lastUpdate};
  } catch (error) {
    console.log(error);
  }
}

export const fetchDailyData = async()=>{
  try{
  const {data} = await axios.get(`${url}/daily`);
  const modifiedData = data.map((dailyData)=>({
   confirmed: dailyData.confirmed.total, 
   deaths: dailyData.deaths.total, 
   date: dailyData.reportDate
  }));
  
  return modifiedData;
  }catch(error){
    console.log(error);

  }
}

export const fetchcountries=async()=>{
  try {
    const {data:{countries}}= await axios.get(`${url}/countries`);
    return countries.map((country)=> country.name);
  } catch (error) {
    console.log(error);
  }
}

export const fetchstates=async()=>{
  try {
   
  const states = await axios.get(stateurl);
  const stat = states.data.data.regional.map(state=>state.loc);
    return (stat);
} catch (error) {
    console.log(error);
  }
}


export const fetchStates1 = async (st)=>{
  try {
    const states = await axios.get(stateurl);
    const {data:{data:{regional}}} = states;
    for(let i=0;i<regional.length;i++){
      if(regional[i].loc === st ){
        var regdata= regional[i];
        return regdata;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
