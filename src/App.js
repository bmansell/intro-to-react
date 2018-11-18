import React, {Component} from 'react';

import "react-tabs/style/react-tabs.css";
import logo from './logo.svg';
import './App.css';

import SimpleCounter from './components/SimpleCounter';
import ComplicatedCounter from "./components/ComplicatedCounter";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {images} from './images';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Intro to React</h1>
                </header>
                <Tabs>
                    <TabList>
                        <Tab>
                            <span role='img' aria-label='Number inputs'>&nbsp;&#x1F522;</span>
                        </Tab>
                        <Tab>
                            <span role='img' aria-label='Water wave'>&nbsp;&#x1F30A;</span>
                        </Tab>
                        <Tab>
                            <span role='img' aria-label='Beer mug'>&nbsp;&#x1F37A;</span>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <SimpleCounter/>
                    </TabPanel>

                    <TabPanel>
                        <ComplicatedCounter
                            type='water'
                            startAmount={50}
                            units='°C'

                            decreaseButtonText='Cool'
                            increaseButtonText='Heat'

                            increment={25}
                            lowLimit={0}
                            highLimit={100}

                            lowPicture={images.ice}
                            mediumPicture={images.water}
                            highPicture={images.steam}
                        />
                    </TabPanel>

                    <TabPanel>
                        <ComplicatedCounter
                            type='beer'
                            startAmount={300}
                            units='ml'
                            decreaseButtonText='Drink'
                            increaseButtonText='Fill'

                            increment={100}
                            lowLimit={0}
                            highLimit={500}

                            lowPicture={images.empty}
                            mediumPicture={images.half}
                            highPicture={images.full}
                        />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default App;
