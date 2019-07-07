import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import colors from '../styles/colors';

const CarrouselProduct = ({
  data
}) => (
  <TouchableOpacity style={styles.row}>
    <Image source={data.img} style={styles.img} />
    <View style={styles.content}>
      <Text style={styles.p}>{data.name}</Text>
      <Text style={styles.price}>{data.price}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    width: 190,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: colors.background,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 5,
    overflow: 'hidden',
    flexDirection: 'column',
  },
  img: {
    width: '100%',
    height: 150,
  },
  content: {
    paddingVertical: 15,
  },
  p: {
    color: colors.regular,
    fontSize: 18,
  },
  price: {
    color: colors.primary,
    fontSize: 18,
  }
})

export default CarrouselProduct;
