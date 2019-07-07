import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from './colors';

export const ContentBg = styled.View`
  flex: 1;
  background: ${colors.background};
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContentScroll = styled.ScrollView`
  flex: 1;
  justify-content: center;
`;

export const Container = styled.View`
  padding: 20px;
`;
