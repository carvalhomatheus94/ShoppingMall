import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { colors } from '../styles';

const DrawerSidebar = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.facebook }} forceInset={{ bottom: 'never' }}>
      <Text style={{ color: colors.white }}> teste </Text>
    </SafeAreaView>
  );
}

export default DrawerSidebar;
