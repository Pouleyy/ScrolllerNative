import { Image } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import ParameterImage from '../static/images/parameter.png';

const BackgroundView = styled.View`
  flex: 1;
`;
const ContentContainer = styled.View`
  background-color: #1b252e;
  flex: 5;
  justify-content: center;
  align-items: center;
`;

const ParameterContainer = styled.View`
  background-color: #2e241b;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ParameterTouchableOpacity = styled.TouchableOpacity``;

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  state = {
    counterNb: 0
  };

  decrementCounter = () => {
    this.setState({ counterNb: this.state.counterNb - 1 });
  };

  // handle navigation
  handleCharactersButtonPress = () => {
    this.props.navigation.navigate('Characters');
  };

  handleParameterButtonPress = () => {
    this.props.navigation.navigate('Options');
  };

  incrementCounter = () => {
    this.setState({ counterNb: this.state.counterNb + 1 });
  };

  render() {
    return (
      <BackgroundView>
        <ContentContainer />
        <ParameterContainer>
          <ParameterTouchableOpacity onPress={this.handleParameterButtonPress}>
            <Image source={ParameterImage} />
          </ParameterTouchableOpacity>
        </ParameterContainer>
      </BackgroundView>
    );
  }
}
