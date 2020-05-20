import React from 'react';

import Cards from './components/Cards';
import Charts from './components/Chart';
import CountryPicker from './components/CountryPicker';

import { fetchData } from './service/api';

import coronaImg from './images/virus.svg';

import './App.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount (){
    const fetchedData = await fetchData();

    this.setState({data: fetchedData})
    
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({data: fetchedData, country: country});

  }

  render(){
    let { data, country } = this.state;
    

  return (
    <div className='container_app'>
      <h1>C<img alt='virus' className='image' src={coronaImg}/>VID-19</h1>
      <h2>{country ? country : "Mundo" }</h2>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Charts data={data} country={country}/>
    </div>
    
  );
  }
}

export default App;

