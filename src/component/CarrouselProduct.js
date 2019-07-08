import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const CarrouselProduct = ({
  data
}) => (
  <Button>
    <Picture source={data.img} />
    <Content>
      <P>{data.name}</P>
      <Price>{data.price}</Price>
    </Content>
  </Button>
);

export const Button = styled.TouchableOpacity`
  width: 190px;
  padding-bottom: 10px;
  border-width: 1px;
  border-color: ${colors.background};
  border-radius: 10px;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5px;
  overflow: hidden;
  flex-direction: column;
`;

export const Picture = styled.Image`
  width: 100%;
  height: 150px;
`;

export const Content = styled.View`
  padding: 15px 0
`;

export const P = styled.Text`
  color: ${colors.regular};
  font-size: 18px;
`;

export const Price = styled.Text`
  color: ${colors.primary};
  font-size: 18px;
`;

export default CarrouselProduct;
