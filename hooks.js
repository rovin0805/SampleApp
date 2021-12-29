import {shallowEqual, useSelector} from 'react-redux';

export const useMySelector = selector => useSelector(selector, shallowEqual);
