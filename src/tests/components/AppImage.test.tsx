import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AppImage from '../../components/appImage';

describe('AppImage', () => {
  it('renders an img element with the correct src and class', () => {
    render(
      <AppImage path="test.jpg" className="example-class" />
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'http://mockimage.server/w500/test.jpg');
    expect(img).toHaveAttribute('class', 'example-class');
  });
});