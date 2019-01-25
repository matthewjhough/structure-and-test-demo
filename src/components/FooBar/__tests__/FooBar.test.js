import React from 'react';
import FooBar from '../FooBar';
import { render } from 'enzyme';

describe('<FooBar />', () => {
  it('Renders without throwing an error.', () => {
    render(<FooBar />);
  });
});
