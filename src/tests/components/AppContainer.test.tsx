import { it, describe, expect, afterEach } from "viTest";
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import AppContainer from '../../components/appContainer';

describe('AppContainer', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the children passed to it', () => {
    const testMessage = 'Test child content';
    render(
      <AppContainer>
        <div>{testMessage}</div>
      </AppContainer>
    );

    expect(screen.getByText(testMessage)).toBeVisible();
  });

  it('contains the correct container structure', () => {
    const testMessage = 'Structure test';
    const { container } = render(
      <AppContainer>
        <div>{testMessage}</div>
      </AppContainer>
    );

    const outerDiv = container.firstChild;
    const innerDiv = outerDiv!.firstChild;

    expect(outerDiv).toHaveClass('w-full flex justify-center');
    expect(innerDiv).toHaveClass('w-full max-w-7xl mt-4 p-4');
  });
});