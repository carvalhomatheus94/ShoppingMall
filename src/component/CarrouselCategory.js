import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const CarrouselCategory = ({
  data
}) => (
  <TouchableOpacity style={styles.row}>
    <Icon name={data.icon} size={25} color={colors.regular} />
    <Text style={styles.p}>{data.name}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  row: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: colors.regular,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'column',
  },
  p: {
    color: colors.regular,
    fontSize: 18,
  },
})

export default CarrouselCategory;
