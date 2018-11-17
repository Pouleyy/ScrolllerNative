import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundView = styled.View`
  background-color: #1b252e;
  flex: 1;
`;

export default class BackgroundImage extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children } = this.props;
    return <BackgroundView>{children}</BackgroundView>;
  }
}
