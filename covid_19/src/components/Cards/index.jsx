import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import './styles.css';
import loadingImg from '../../images/load.gif'

const Cards =  ({data:{confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return <img src={loadingImg}width={80} alt="loading"/>;
        
    }
    return(
        <div className='container_cards'>
            <Grid container spacing={3} justify="center"> 
                <Grid item component={Card} xs={12} md={3} className={cx('card', 'infected')}>
                    <CardContent>
                        <Typography style={{ color:' #8E44AD',fontSize: 20, fontWeight: 900, fontFamily:'Monospace', textAlign:'center'}} gutterBottom>Infectados</Typography>
                        <Typography  style={{fontWeight: 900, fontSize: 30, color:'#95A5A6' }} >
                            <CountUp 
                             start={0}
                             end={confirmed.value}
                             duration={2.5}
                             separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" >{
                            new Date(lastUpdate).toLocaleDateString()
                        }</Typography>
                        <Typography style={{fontWeight: 500,color:'#95A5A6' }}>Número de infectados pelo COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx('card', 'recovered')}>
                    <CardContent>
                        <Typography style={{ color:' #26C281',fontSize: 20, fontWeight: 900, fontFamily:'Monospace', textAlign:'center'}} gutterBottom>Recuperados</Typography>
                        <Typography  style={{fontWeight: 900, fontSize: 30, color:'#95A5A6' }}>
                            <CountUp 
                             start={0}
                             end={recovered.value}
                             duration={2.5}
                             separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" >{
                            new Date(lastUpdate).toLocaleDateString()
                        }</Typography>
                        <Typography style={{fontWeight: 500,color:'#95A5A6' }}>Número de curados do COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx('card', 'deaths')}>
                    <CardContent>
                        <Typography style={{ color:' #C93756',fontSize: 20, fontWeight: 900, fontFamily:'Monospace', textAlign:'center'}} gutterBottom>Mortos</Typography>
                        <Typography style={{fontWeight: 900, fontSize: 30, color:'#95A5A6' }} >
                            <CountUp 
                             start={0}
                             end={deaths.value}
                             duration={2.5}
                             separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" >{
                            new Date(lastUpdate).toLocaleDateString()
                        }</Typography>
                        <Typography style={{fontWeight: 500,color:'#95A5A6' }}>Número de mortos pelo COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            
        </div>
    
      
    )
} 
export default Cards;