import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 20px 20px;
  padding-top: ${getStatusBarHeight()}px;
  background: ${colors.background};
  margin: 0 auto;
  width: 100%;
`;

export const Header = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const H1 = styled.Text`
  font-size: 21px;
  color: ${colors.white};
  font-weight: bold;
  margin: 0 auto 15px;
  text-align: center;
`;

export const Facebook = styled.TouchableOpacity`
  width: 100%;
  border-radius: 20px;
  max-height: 70px;
  background: ${colors.facebook};
  color: ${colors.white};
  padding: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

export const TextFacebook = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  text-align: center;
  margin-left: 15px;
`;


export const FramePhoto = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 3px solid ${colors.lighter};
  justify-content: center;
  align-items: center;
  margin: 20px auto 0;
`;

export const Button = styled.TouchableOpacity`
  max-height: 70px;
  background: ${colors.primary};
  width: 100%;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  text-align: center;
  margin-left: 0;
`;
export const Form = styled.View`
  padding: 0;
  background: ${colors.white};
  border-radius: 10px;
  width: 90%;
  margin: 20px auto;
`;