import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/rockets/rockets';
import '@testing-library/jest-dom/extend-expect';

describe('Rockets testing', () => {
  test('renders Rockets component correctly', () => {
    const tree = render(<Provider store={store}><Router><Rockets /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});