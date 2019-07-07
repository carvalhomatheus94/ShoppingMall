import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 35px 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${colors.white};
  border-radius: 10px;
  width: 90%;
  margin: 0 auto;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.darker};
  font-weight: bold;
  margin-bottom: 15px;
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

export const Footer = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 30px auto;
`;

export const TextFooter = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ButtonCadastre = styled.TouchableOpacity`
  max-height: 70px;
  background: ${colors.white};
  width: 60%;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const TextButtonCadastre = styled.Text`
  font-size: 18px;
  color: ${colors.darker};
  text-align: center;
  margin-left: 0;
`;
