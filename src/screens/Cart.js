import React from 'react';
import { View, Text } from 'react-native';
import { navigationWrapper } from '../hoc';

const Presentational = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>
      Cart
    </Text>
  </View>
);

export default navigationWrapper(Presentational);