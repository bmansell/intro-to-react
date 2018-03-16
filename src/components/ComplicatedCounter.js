import React, { Component } from 'react';
import PropTypes from 'prop-types';

import drunk from '../img/drunk.png';
import standing from '../img/standing.jpg';

class ComplicatedCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currTrack: this.props.startAmount,
        };

        this.renderImage = this.renderImage.bind(this);
        this.decreaseCondition = this.decreaseCondition.bind(this);
        this.increaseCondition = this.increaseCondition.bind(this);
    }

    render() {
        return (
            <div>
                {this.renderImage()}
                <h2>{this.state.currTrack}{this.props.units}</h2>

                <button onClick={this.decreaseCondition}>
                    {this.props.decreaseButtonText}
                </button>

                <button onClick={this.increaseCondition}>
                    {this.props.increaseButtonText}
                </button>

                <div>
                    {this.renderPerson()}
                </div>
            </div>
        )
    }

    renderImage() {
        const currTrack = this.state.currTrack;
        const {lowLimit, lowPicture, mediumPicture, highLimit, highPicture} = this.props;

        let image = <img src={mediumPicture} alt='medium'/>;

        if (currTrack >= highLimit) {
            image = <img src={highPicture} alt='high'/>;
        } else if (currTrack <= lowLimit) {
            image = <img src={lowPicture} alt='low'/>;
        }

        return image;
    }

    renderPerson() {
        let image = null;

        if (this.props.type === 'beer') {
            image = this.state.currTrack <= 0 ? <img src={drunk} alt='drunk'/> : <img src={standing} alt={'not drunk'}/>;
        }

        return image;
    }

    decreaseCondition() {
        let newTrack = this.state.currTrack;
        newTrack -=this.props.increment;

        if (newTrack >= this.props.lowLimit) {
            this.setState({
                currTrack: newTrack,
            });
        }
    }

    increaseCondition() {
        let newTrack = this.state.currTrack;
        newTrack +=this.props.increment;

        if (newTrack <= this.props.highLimit) {
            this.setState({
                currTrack: newTrack,
            });
        }
    }
}

ComplicatedCounter.propTypes = {
    type: PropTypes.string,
    startAmount: PropTypes.number,
    units: PropTypes.string,

    decreaseButtonText: PropTypes.string,
    increaseButtonText: PropTypes.string,

    increment: PropTypes.number,
    lowLimit: PropTypes.number,
    highLimit: PropTypes.number,

    lowPicture: PropTypes.string,
    mediumPicture: PropTypes.string,
    highPicture: PropTypes.string,
};

export default ComplicatedCounter;