import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../service/api';
import { Line, Bar } from 'react-chartjs-2';

import './styles.css';

export default function Chart ({data:{confirmed, recovered, deaths}, country}){
    const [ dailyData, setDailyData ] = useState([]);

    useEffect(() => {
        const fetchApi = async () =>{
            setDailyData(await fetchDailyData());
        }

        fetchApi();
        
    }, []);

    const lineChart = (
      dailyData.length 
        ? (
        <Line 
            data={{
                labels: dailyData.map(({date})=> date),
                datasets: [{
                    data: dailyData.map(({confirmed})=> confirmed),
                    label: 'Infectados',
                    borderColor: '#3333ff',
                    fill: true
                }, 
                {
                    data: dailyData.map(({ deaths })=> deaths),
                    label: 'Mortos',
                    borderColor: 'red',
                    backgroundColor: 'rgba(225, 0, 0, 0.5)',
                    fill: true

                }],
            }}
        />):null

    );

    const barChart = (
        confirmed
            ?(
                <Bar 
                    data={{
                        labels: [ 'Infectados', 'Recuperados', 'Mortos'],
                        datasets:[{
                            label:'Pessoas',
                            backgroundColor: [
                                'rgb(0, 0, 225, 0.5)',
                                'rgb(100, 225, 0, 0.5)',
                                'rgb(225, 0, 0, 0.5)',
                            ],

                            data: [confirmed.value, recovered.value, deaths.value]

                        }]
                    }}
                    options={{
                        legend: {display: 'false'},
                        title: {display: true, text:`Current state in ${country}`}
                    }}
                />
            ): null
    )

    return(
        <div className='container_chart'>
          { country ? barChart : lineChart }
        </div>
    )    
}