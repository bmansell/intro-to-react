import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {images} from '../images';

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
            <div className='container'>
                <div className='grid'>
                    <div className='grid-item'>
                        {this.renderPerson(1)}
                        {this.renderImage()}
                        {this.renderPerson(2)}
                    </div>

                    <div className='grid-item'>
                        <h2>{this.state.currTrack}{this.props.units}</h2>
                    </div>

                    <div className='grid-item'>
                        <button className='btn' onClick={this.decreaseCondition}>
                            {this.props.decreaseButtonText}
                        </button>

                        <button className='btn' onClick={this.increaseCondition}>
                            {this.props.increaseButtonText}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderImage() {
        const currTrack = this.state.currTrack;
        const {lowLimit, lowPicture, mediumPicture, highLimit, highPicture} = this.props;

        let image = <img src={mediumPicture} alt='Medium'/>;

        if (currTrack >= highLimit) {
            image = <img src={highPicture} alt='High'/>;
        } else if (currTrack <= lowLimit) {
            image = <img src={lowPicture} alt='Low'/>;
        }

        return image;
    }

    renderPerson(index) {
        let image = null;

        if (this.props.type === 'beer') {
            image = this.state.currTrack === 0
                ? <img src={images.people[index].drunk} alt='Drunk person'/>
                : <img src={images.people[index].sober} alt='Sober person'/>;
        }

        return image;
    }

    decreaseCondition() {
        let newTrack = this.state.currTrack;
        newTrack -= this.props.increment;

        if (newTrack >= this.props.lowLimit) {
            this.setState({
                currTrack: newTrack,
            });
        }
    }

    increaseCondition() {
        let newTrack = this.state.currTrack;
        newTrack += this.props.increment;

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
