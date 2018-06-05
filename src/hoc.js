import React from 'react';
import { Navigation } from 'react-native-navigation';
import { AsyncStorage } from 'react-native';
import * as consts from './consts';

/**
 * Higher Order Component
 * Description: The reason is that this HOC will wrap all the tabs,
 * and this way it will store the last selected index.
 * @param {*} WrappedComponent 
 */
export const navigationWrapper = (WrappedComponent) => {
  return class NavigationAbstraction extends React.Component {
    constructor(props) {
      super(props);
      props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }


    async onNavigatorEvent(event) {
      if (event.id === 'bottomTabSelected') {
        try {
          await AsyncStorage.setItem(consts.SELECTED_TAB, `${event.selectedTabIndex}`);
        } catch (error) {
          console.log('An error ocurred while saving data');
        }
      }
    }

    render() {
      return (
        <WrappedComponent />
      )
    }
  }
}