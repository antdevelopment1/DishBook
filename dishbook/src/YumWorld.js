import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import FlagCountry from './FlagCountry';
import ListOfRecipes from './ListOfRecipes';

import Canada from './images/canada-country.png';
import China from './images/china-country.png';
import England from './images/england-country.png';
import France from './images/france-country.png';
import India from './images/india.png';
import Japan from './images/japan.png';
import Mexico from './images/Mexico.png';
import Morocco from './images/morocco.png';
import Spain from './images/spain.png';
import Thailand from './images/thailand.png';
import Vietnam from './images/vietnam.png';


class YumWorld extends Component {
    constructor(props){
        super(props);
        this.state ={
            countries: [
                {
                    country: 'Canada',
                    flag: Canada,
                    recipe: [],
                    nationality: 'Canadian'
                },
                {
                    country: 'China',
                    flag: China,
                    recipe: [],
                    nationality: 'Chinese'
                },
                {
                    country: 'UnitedKingdom',
                    flag: England,
                    recipe: [],
                    nationality: 'British'
                },
                {
                    country: 'France',
                    flag: France,
                    recipe: [],
                    nationality: 'French'
                },
                {
                    country: 'India',
                    flag: India,
                    recipe: [],
                    nationality: 'Indian'
                },
                {
                    country: 'Japan',
                    flag: Japan,
                    recipe: [],
                    nationality: 'Japanese'
                },
                {
                    country: 'Mexico',
                    flag: Mexico,
                    recipe: [],
                    nationality: 'Mexican'
                },
                {
                    country: 'Morocco',
                    flag: Morocco,
                    recipe: [],
                    nationality: 'Moroccan'
                },
                {
                    country: 'Spain',
                    flag: Spain,
                    recipe: [],
                    nationality: 'Spanish'
                },
                {
                    country: 'Thailand',
                    flag: Thailand,
                    recipe: [],
                    nationality: 'Thai'
                },
                {
                    country: 'Vietnam',
                    flag: Vietnam,
                    recipe: [],
                    nationality: 'Vietnamese'
                }
            ]

        }
    }

    render() {
        return (
            <Router>
                <div>
                    <h1>Welcome</h1>
                    <h2>Pick Now</h2>
                    <Route path = "/" exact render = {(props) =>{
                        return(
                            <FlagCountry 
                                countryFlags = {this.state.countries}
                                {...props}
                            />
                        )
                    }} />       
                    <Route path="/:country" render={(props) => {
                        return (<ListOfRecipes nationality={this.state.countries} {...props}/>)
                    }}
                    />
                </div>
            </Router> 
        );
    }
}

export default YumWorld;