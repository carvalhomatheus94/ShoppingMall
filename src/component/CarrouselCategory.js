import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const CarrouselCategory = ({
  data
}) => (
  <Button>
    <Icon name={data.icon} size={25} color={colors.regular} />
    <P>{data.name}</P>
  </Button>
);

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-width: 1px;
  border-color: ${colors.regular};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  flex-direction: column
`;

export const P = styled.Text`
  color: ${colors.regular};
  font-size: 18px;
`;

export default CarrouselCategory;
