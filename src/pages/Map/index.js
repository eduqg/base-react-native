import React from 'react';
import Background from '~/components/Background';
import Button from '~/components/Button';

import {
  Container,
  List,
  CheckBar,
  CheckNumber,
  CheckDate,
  NumberCheckins,
  NumberBold,
  LoadingCheckings,
  ButtonText,
} from './styles';

export default function Map() {
  async function handleClick() {
    console.log('ola');
  }

  return (
    <Background>
      <Container>
        <Button onPress={() => handleClick()} loading={false}>
          <ButtonText>Clique</ButtonText>
        </Button>
      </Container>
    </Background>
  );
}
