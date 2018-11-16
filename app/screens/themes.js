import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { themeBlue, themeRed, themeGreen } from '../config/themes';
import allTheActions from '../actions';

const ThemesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

class Themes extends Component {
  static propTypes = {
    actions: PropTypes.object,
    navigation: PropTypes.object
  };

  handleThemePress = theme => {
    const { actions } = this.props;
    actions.themes.changeTheme(theme);
    this.props.navigation.popToTop();
  };

  render() {
    console.log('MapStateToProps', this.props);
    return (
      <ThemesContainer>
        <TouchableOpacity onPress={() => this.handleThemePress(themeBlue)}>
          <Text>Palette bleu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleThemePress(themeRed)}>
          <Text>Palette rouge</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleThemePress(themeGreen)}>
          <Text>Palette vert</Text>
        </TouchableOpacity>
      </ThemesContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    themes: state.themes.currentTheme
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    themes: bindActionCreators(allTheActions.themes, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Themes);
