import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import * as consts from '../consts';

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

  }

  async onNavigatorEvent(event) {
    if (event.id === 'bottomTabSelected' || event.id === 'bottomTabReselected') {
      this.props.navigator.toggleDrawer({
        side: 'right',
        animated: true,
        to: 'open'
      });

      /*
        Get last selected tab from asyncstorage, and switch to that one.
      */
      try {
        const value = await AsyncStorage.getItem(consts.SELECTED_TAB);
        this.props.navigator.switchToTab({
          tabIndex: value !== null ? Number(value) : 1
        });
      } catch (error) {
        console.log('error', error);
      }
    }
  }

  render() {
    return (
      <View />
    );
  }
}

export default Presentational;