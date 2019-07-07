import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input } from '../../component/Input';
import colors from '../../styles/colors';
import { ContentBg } from '../../styles/general';
import { Container, Title, Facebook, TextFacebook, Button, TextButton, Footer, ButtonCadastre, TextButtonCadastre, TextFooter } from './styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Login = ({}) => {
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <ContentBg>
      <Container>
        <Input
          placeholder='e-mail'
          value={login}
          placeholderTextColor={colors.darker}
          onChangeText={txt => setLogin(txt)}
        />
        <Input
          placeholder='senha'
          value={password}
          secureTextEntry
          placeholderTextColor={colors.darker}
          onChangeText={txt => setPassword(txt)}
        />

        <Button>
          <TextButton>entrar</TextButton>
        </Button>
        <Title>ou</Title>
        <Facebook>
          <Icon name='facebook-f' color={colors.white} size={25} />
          <TextFacebook>
            entrar pelo facebook
          </TextFacebook>
        </Facebook>

      </Container>
      
      <Footer>
        <TextFooter>Não é cadastrado ainda?</TextFooter>
        <ButtonCadastre>
          <TextButtonCadastre>cadastre-se</TextButtonCadastre>
        </ButtonCadastre>
      </Footer>
    </ContentBg>
  );
};

export default Login;
