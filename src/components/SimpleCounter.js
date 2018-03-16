import React, { Component } from 'react';

class SimpleCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currTrack: 25
        };

        this.decreaseCondition = this.decreaseCondition.bind(this);
        this.increaseCondition = this.increaseCondition.bind(this);
    }

    render() {
        return (
            <div>
                <h2>{this.state.currTrack}</h2>

                <button onClick={this.decreaseCondition}>
                    Decrease
                </button>

                <button onClick={this.increaseCondition}>
                    Increase
                </button>
            </div>
        )
    }

    decreaseCondition() {
        let newTrack = this.state.currTrack;
        newTrack -=1;

        this.setState({
            currTrack: newTrack,
        });
    }

    increaseCondition() {
        let newTrack = this.state.currTrack;
        newTrack +=1;

        this.setState({
            currTrack: newTrack,
        });
    }
}

export default SimpleCounter;