import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/missions/Missions';
import '@testing-library/jest-dom/extend-expect';

describe('Missions', () => {
  test('renders Missions component correctly', () => {
    const tree = render(<Provider store={store}><Router><Missions /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });

  test('find text in the Missions component DOM', () => {
    render(<Provider store={store}><Router><Missions /></Router></Provider>);

    expect(screen.getByText(/Description/)).toBeInTheDocument();
  });
});
