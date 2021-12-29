/**
 * @format
 */

import 'react-native';
import React from 'react';
import InputTest from '../testingCode/InputTest';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

test('examples of some things', async () => {
  const {getByTestId, getByText, queryByTestId, toJSON} = render(<InputTest />);
  const famousProgrammerInHistory = 'Ada Lovelace';

  const input = getByTestId('input');
  fireEvent.changeText(input, famousProgrammerInHistory);

  const button = getByText('Print Username');
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId('printed-username')).toBeTruthy());

  expect(getByTestId('printed-username').props.children).toBe(
    famousProgrammerInHistory,
  );
  expect(toJSON()).toMatchSnapshot();
});
