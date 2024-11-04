import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import BgImage from '../../components/appImage/BgImage';

describe('BgImage', () => {
  it('renders with the correct background image style', () => {
    render(
      <BgImage path="test-image.jpg" className="test-class">
        <div>Child Content</div>
      </BgImage>
    );
    const backgroundImageDiv = screen.getByTestId('background-image');
    expect(backgroundImageDiv).toHaveStyle(`background-image: url(http://mockimage.server/w1280/test-image.jpg)`);
  });

  it('renders children correctly', () => {
    render(
      <BgImage path="test-image.jpg" className="test-class">
        <div>Child Content</div>
      </BgImage>
    );
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});