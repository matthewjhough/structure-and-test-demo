import React from 'react';
import Additions from '../Additions';
import { render, shallow } from 'enzyme';
import { headers, body, headers2, body2 } from '../__mocks__';

// STEP 1: create a method that adds 2 + 2, and sets state 'sum' property to result.

// STEP 2: convert method to accept 2 numbers and adds them together, and then sets state 'sum' to result

// STEP 3: take the excel data, and add the body values together.

describe('<Additions />', () => {
  it('Renders without throwing an error.', () => {
    render(<Additions />);
  });

  // Integration

  // This test doesn't care about any state or method besides that when you call addTwoPlusTwo, you're getting
  // a value other components probably depend on.
  it('should invoke callback with accurate value of sum after button clicked', () => {
    const someCallbackMock = jest.fn;
    const additions = shallow(<Additions someCallback={someCallbackMock} />);
    additions.instance().addTwoPlusTwo();

    expect(someCallbackMock).toHaveBeenCalledWith(4);
    // callback OR you can look for the dom tree to be in correct format ex: was toast rendered.
    // expect(additions.find('whatever-element').length).toBe(1)
  });

  // After you modify everything to handle excel and n array values of adding,
  // you simply check the callback with the ultimate addition value you're
  // looking for.

  // React Unit Testing

  // Built to test *exactly* what you want to build, you knew this structure
  // was desired early on, and knew this is the way you wanted to implement it.
  // If this changes in the future, you're going to change this test to "break"
  // the test, and then implement your solution in the code.
  it('Should have a state.sum property with a result of 4 after method called.', () => {
    const additions = shallow(<Additions />);
    additions.instance().addTwoPlusTwo();
    expect(additions.state().val1).toBe(2);
    expect(additions.state().val2).toBe(2);
    expect(additions.state().sum).toBe(4);
  });

  /* 
  Next, you would write this test (or in this case just un-comment), and then write the code
  to make this test work.
  it('Has addNumbers() that accepts two numbers and sets state.sum with result' () => {
    const additions = shallow(<Additions />);
    additions.instance().addNumbers(1, 2);
    expect(additions.state().sum).toBe(4);
  })
  */

  /*
    Finally, you write this test with desired results, but in doing so you realize
    you could refactor your previous test. So only when you *need* to change your test,
    you go back and "break" your previous test, and then implement the new features to
    make both tests work.

    it('should accept an excel object and add body values together', () => {
      const additions = shallow(<Additions />);
      const flatArr = additions.instance().flattenArray(body);
      additions.instance().addNumbers(flatArr);
      expect(additions.state().sum).toBe();
    })
  */
});
