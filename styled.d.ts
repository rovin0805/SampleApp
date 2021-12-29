import 'styled-components';
import {TypeColor, TypeShadow} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: TypeColor;
    shadow: TypeShadow;
  }
}
