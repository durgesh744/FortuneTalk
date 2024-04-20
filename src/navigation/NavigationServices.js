import {NavigationAction} from '@react-navigation/native';

let _navigator;

export const setTopLevelNavigator = navigationRef => {
  _navigator = navigationRef;
};

export const navigate = (routeName, params) => {
  _navigator.navigate(routeName, params);
};

export const goBack = () => {
  _navigator.dispatch(NavigationAction);
};
