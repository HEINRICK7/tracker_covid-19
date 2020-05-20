import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../service/api';

import './styles.css';
export default function CountryPicker ({handleCountryChange}){
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
      const fetchApi = async () => {
           setFetchedCountries(await fetchCountries());
        };

        fetchApi();

    }, [setFetchedCountries]);

    return(
        <FormControl className='formControl'>
            <NativeSelect defaultValue ="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}> {country} </option>)}
            </NativeSelect>
        </FormControl>
    )
}