import empty from './img/empty.png'
import full from './img/full.png';
import half from './img/half.png';
import ice from './img/icecube.png';
import steam from './img/steam.png'
import water from './img/water.png';
import standingOne from './img/person-standing-1.jpg';
import standingTwo from './img/person-standing-2.jpg';
import drunkOne from './img/drunk-1.png';
import drunkTwo from './img/drunk-2.png';

export const images = {
    empty,
    full,
    half,
    ice,
    steam,
    water,
    people: {
        1: {
            sober: standingOne,
            drunk: drunkOne
        },
        2: {
            sober: standingTwo,
            drunk: drunkTwo,
        },
    },
};