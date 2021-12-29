import {DefaultTheme} from 'styled-components';

const colors = {
  bgColor: 'white',
  textColor: '#291E5F',
  cardColor: '#f7f1e3',
  btnColor: '#291E5F',
};

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

const theme: DefaultTheme = {
  colors,
  shadow,
};

export type TypeColor = typeof colors;
export type TypeShadow = typeof shadow;

export default theme;
