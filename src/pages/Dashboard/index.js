import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '~/components/Button';
import Background from '~/components/Background';

import {
  Container,
  List,
  ButtonCard,
  Card,
  CardHeader,
  CardHeaderLeft,
  CardHeaderDate,
  CardHeaderResponse,
  CardContent,
  ButtonText,
} from './styles';

export default function Dashboard({ navigation }) {
  async function logout() {
    try {
      navigation.navigate('Sign');
    } catch (exception) {
      Alert.alert('Erro ao sair', 'Não foi possível fazer logout');
    }
  }

  return (
    <Background>
      <Container>
        <Button onPress={() => navigation.navigate('Map')} loading={false}>
          <ButtonText>Ver mapa</ButtonText>
        </Button>

        <Button onPress={logout} loading={false} theme="outline" width={60}>
          <Icon name="exit-to-app" size={24} color="#c7c7c7" />
        </Button>
      </Container>
    </Background>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
