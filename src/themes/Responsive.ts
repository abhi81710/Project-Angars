import {Platform} from 'react-native';
import normalize from 'react-native-normalize/src/index';
import {DEVICE_PLATFORMS} from '../constants/Platforms'


const responsiveFont = (value : number, based ?: 'width' | 'height' | undefined) => {
    let fontSize = (Platform.OS === DEVICE_PLATFORMS.ANDROID) ? value + 1 : value;
    return responsiveSize(fontSize, based);
};


const responsiveSize = (value : number, based ?: 'width' | 'height' | undefined) => {
    if (based) {
        return normalize(value, based);
    }
    return normalize(value);
};



export {
    responsiveFont,
    responsiveSize
}
