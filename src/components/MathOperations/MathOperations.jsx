import React from 'react';
import { Additions, Subtractions, Divisions, Multiplications } from './index';

export default class MathOperations extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Additions />
        <Subtractions />
        <Divisions />
        <Multiplications />
      </React.Fragment>
    );
  }
}
