import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { APOD } from '../../Type';
import ApodItem from '../components/ApodItem';

const Home = () => {

    const [apods, setApods] = useState<APOD[]>([])

    const asyncFunction = async () => {
      const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=JTHZoYrhtO23oTfWSEc0sxN1Uwomt9fdsiqmITtj&start_date='+ (moment().subtract(7, 'd').format('YYYY-MM-DD') +'&end_date='+ moment().format('YYYY-MM-DD')))
        setApods(res.data)
        console.log(apods)
    } 

    useEffect(()=>{   
      //console.log('https://api.nasa.gov/planetary/apod?api_key=JTHZoYrhtO23oTfWSEc0sxN1Uwomt9fdsiqmITtj&start_date='+ (moment().subtract(7, 'd').format('YYYY-MM-DD') +'&end_date='+ moment().format('YYYY-MM-DD')))
      asyncFunction();
    }, [])

  return ( 
      <SafeAreaView>      
      <StatusBar barStyle="light-content" />
        {apods.length != 0 &&
          <ApodItem apods={apods} />}
      </SafeAreaView>
  );
}

export default Home  