import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { colors } from '../styles';

const Header = ({ navigation }) => (
  <ViewHeader>
    <Button onPress={() => navigation.toggleDrawer()}>
      <Icon name="bars" size={30} color={colors.white} />
    </Button>
    <Title>Home</Title>
    <Button onPress={() => console.log('clcik')}>
      <Icon name="search" size={30} color={colors.white} />
    </Button>
  </ViewHeader>
);


export const ViewHeader = styled.View`
  height: 85px;
  flex-direction: row;
  align-items: center;
  background: ${colors.primary};
  width: 100%;
  padding: 0 15px;
`;

export const Button = styled.TouchableOpacity`
  flex-grow: 1;
`;

export const Title = styled.Text`
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
  width: 80%;
  color: ${colors.white}
`;

export default Header;
