import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';

describe('App', () => {
  it('Renders HomePage', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/homepage/i);
  });

  it('render Simple Test Page Ok', () => {
    render(
      <MemoryRouter initialEntries={['/simple-test-page']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/testpage/i);
  });

  it('render not found', () => {
    render(
      <MemoryRouter initialEntries={['/asasas']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/404 - notfound/i);
  });
});
