import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

import logo from '~/assets/logo.png';

import { Container, ImageSign, ButtonText } from './styles';

export default function Sign({ navigation }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    try {
      setUser('');
      setPassword('');
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Falha ao entrar', 'Usuário não encontrado');
    }
  }

  return (
    <Background>
      <Container>
        <ImageSign source={logo} />
        <Input
          placeholder="Seu email"
          autoCapitalize="none"
          autoCorrect={false}
          value={user}
          onChangeText={setUser}
        />
        <Input
          secureTextEntry
          placeholder="Sua senha"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={handleLogin} loading={false}>
          <ButtonText>Entrar no sistema</ButtonText>
        </Button>
      </Container>
    </Background>
  );
}

Sign.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
