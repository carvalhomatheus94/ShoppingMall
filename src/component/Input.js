import React from 'react';
import { View } from 'react-native';

import styled from 'styled-components';
import colors from '../styles/colors';
import { Platform } from 'react-native';

export const Input = ({
    ...props,
}) => {
  return (
    <Row>
      <InputText 
        {...props}
      />
    </Row>
  );
};

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const InputText = styled.TextInput`
  max-height: 70px;
  border: 1px solid #ccc;
  width: 100%;
  background: ${colors.white};
  font-size: 18px;
  z-index: 5;
  padding: 15px;
  color: ${colors.darker};
  border-radius: 20px;
`;
