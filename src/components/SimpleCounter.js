import React, {Component} from 'react';

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
            <div className='container'>
                <div className='grid'>
                    <div className='grid-item'>
                        <h2 className='counter'>{this.state.currTrack}</h2>
                    </div>

                    <div className='grid-item'>
                        <button className='btn' onClick={this.decreaseCondition}>
                            Decrease
                        </button>

                        <button className='btn' onClick={this.increaseCondition}>
                            Increase
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    decreaseCondition() {
        let newTrack = this.state.currTrack;
        newTrack -= 1;

        this.setState({
            currTrack: newTrack,
        });
    }

    increaseCondition() {
        let newTrack = this.state.currTrack;
        newTrack += 1;

        this.setState({
            currTrack: newTrack,
        });
    }
}

export default SimpleCounter;
