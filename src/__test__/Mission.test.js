import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Mission from '../components/missions/Mission';
import '@testing-library/jest-dom/extend-expect';

describe('Missions', () => {
  test('renders component correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <table>
            <thead />
            <tbody>
              <Mission />
            </tbody>
          </table>
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders Missions component', () => {
    render(
      <Provider store={store}>
        <Router>
          <table>
            <thead />
            <tbody>
              <Mission />
            </tbody>
          </table>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Join Mission/)).toBeInTheDocument();
  });
});
