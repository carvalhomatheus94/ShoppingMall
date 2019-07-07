import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { Input } from '../../component/Input';
import colors from '../../styles/colors';
import { Content } from '../../styles/general';
import {
  Container,
  Header,
  H1,
  Facebook,
  TextFacebook,
  FramePhoto,
  Button,
  TextButton,
  Form
} from "./styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Register = ({}) => {
  const [ name, setName ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ sexo, setSexo ] = useState(0);
  const [ cpf, setCpf ] = useState('');

  return (
    <Content>
      <KeyboardAvoidingView>
        <ScrollView>
          <Container>
            <Header>
              <H1>Cadastre-se</H1>
            </Header>
            <Facebook>
              <Icon name='facebook-f' color={colors.white} size={25} />
              <TextFacebook>entrar pelo facebook</TextFacebook>
            </Facebook>

            <FramePhoto>
              <Icon name="camera" color={colors.lighter} size={25} />
            </FramePhoto>
          </Container>
          <Form>
            <Input
              placeholder="Nome"
              value={name}
              placeholderTextColor={colors.darker}
              onChangeText={txt => setName(txt)}
            />
            <Input
              placeholder="Telefone"
              value={telefone}
              placeholderTextColor={colors.darker}
              onChangeText={txt => setTelefone(txt)}
            />
            <Input
              placeholder="E-mail"
              value={email}
              placeholderTextColor={colors.darker}
              onChangeText={txt => setEmail(txt)}
            />
            <Input
              placeholder="CPF"
              value={email}
              placeholderTextColor={colors.darker}
              onChangeText={txt => setEmail(txt)}
            />
            <Button>
              <TextButton>entrar</TextButton>
            </Button>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
      </Content>
  );
};

export default Register;
