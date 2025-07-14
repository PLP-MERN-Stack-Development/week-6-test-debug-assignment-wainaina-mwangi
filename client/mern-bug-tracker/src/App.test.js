import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('socket.io-client', () => {
  return {
    __esModule: true,
    default: () => ({
      on: jest.fn(),
      emit: jest.fn(),
      disconnect: jest.fn(),
    }),
  };
});

test('renders App without crashing', () => {
  render(<App />);
  expect(screen.getByText(/app/i)).toBeInTheDocument();
});
