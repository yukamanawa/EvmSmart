// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EvmSmartRunner title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EvmSmartRunner/i);
    expect(titleElement).toBeInTheDocument();
});
