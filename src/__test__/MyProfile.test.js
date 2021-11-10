import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from '../components/myprofile/MyProfile';
import '@testing-library/jest-dom/extend-expect';

describe('MyProfile', () => {
  test('renders MyProfile component correctly', () => {
    const tree = render(<Provider store={store}><Router><MyProfile /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });

  test('find text in the MyProfile component DOM', () => {
    render(<Provider store={store}><Router><MyProfile /></Router></Provider>);

    expect(screen.getByText(/Missions/)).toBeInTheDocument();
  });
});