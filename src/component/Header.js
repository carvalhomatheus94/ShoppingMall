import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors } from '../styles';

const Header = ({ navigation }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.flexGrow} onPress={() => navigation.toggleDrawer()}>
      <Icon name="bars" size={30} color={colors.white} />
    </TouchableOpacity>
    <Text style={styles.h1}>Home</Text>
    <TouchableOpacity style={styles.navIcon} onPress={() => console.log('clcik')}>
      <Icon name="search" size={30} color={colors.white} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.background,
  },
  flexGrow: {
    flexGrow: 1,
    // position: 'absolute',
    // left: 15,
  },
  h1: {
    flexGrow: 1,
    fontSize: 20,
    color: colors.white,
  },
})

export default Header;
