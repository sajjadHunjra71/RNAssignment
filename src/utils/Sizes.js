import { Dimensions } from "react-native";

const devicesWidth = Dimensions.get('window').width;
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    heading:35,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

   devicesWidth: devicesWidth,
};

export const isMobile =  devicesWidth <= 425? true : false;
export const isWeb= devicesWidth > 425? true : false;
