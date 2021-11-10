import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/rockets/rocket';
import '@testing-library/jest-dom/extend-expect';

describe('Rocket testing', () => {
  test('renders Rocket component correctly', () => {
    const tree = render(<Provider store={store}><Router><Rocket /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });

  test('find text in the Rocket component DOM', () => {
    render(<Provider store={store}><Router><Rocket /></Router></Provider>);

    expect(screen.getByText(/reserve rocket/)).toBeInTheDocument();
  });
});