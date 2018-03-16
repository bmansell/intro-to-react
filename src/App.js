import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleCounter from './components/SimpleCounter';
import ComplicatedCounter from "./components/ComplicatedCounter";

import ice from './img/icecube.png';
import water from './img/water.png';
import steam from './img/steam.png'

import full from './img/full.png';
import half from './img/half.png';
import empty from './img/empty.png'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Intro to React!</h1>
                </header>

                <SimpleCounter/>

                <hr/>
                <br/>

                <ComplicatedCounter
                    type='water'
                    startAmount={50}
                    units='°C'

                    decreaseButtonText='Cool'
                    increaseButtonText='Heat'

                    increment={25}
                    lowLimit={0}
                    highLimit={100}

                    lowPicture={ice}
                    mediumPicture={water}
                    highPicture={steam}
                />

                <hr/>
                <br/>

                <ComplicatedCounter
                    type='beer'
                    startAmount={300}
                    units='ml'

                    decreaseButtonText='Drink'
                    increaseButtonText='Fill'

                    increment={100}
                    lowLimit={0}
                    highLimit={500}

                    lowPicture={empty}
                    mediumPicture={half}
                    highPicture={full}
                />
            </div>
        );
    }
}

export default App;
