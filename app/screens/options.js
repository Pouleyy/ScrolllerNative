import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default class Options extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handleParameterPress = parameterLocation => {
    this.props.navigation.navigate(parameterLocation);
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.handleParameterPress('Themes')}>
          <Text>VERS LISTE DES COULEURS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
