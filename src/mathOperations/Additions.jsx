import React from 'react';

export default class Additions extends React.Component {
  state = {
    sum: 0
  };

  // STEP 1: create a method that adds 2 + 2, and sets state 'sum' property to result.

  // STEP 2: convert method to accept 2 numbers and adds them together, and then sets state 'sum' to result

  addTwoPlusTwo = () => console.log('method called');

  render() {
    const { sum } = this.state;
    console.log('Sum of function: ', sum);
    return <div>foobar</div>;
  }
}
