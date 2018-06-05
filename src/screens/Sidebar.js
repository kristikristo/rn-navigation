import React from 'react';
import { View, Text } from 'react-native';

class Presentational extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Sidebar
        </Text>
      </View>
    );
  }
}

export default Presentational;