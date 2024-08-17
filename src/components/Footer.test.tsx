import Footer from './Footer.tsx';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('<Footer />', () => {
  test('renders the component with the correct content', () => {
    render(<Footer />);
    screen.getByText('Updated', { exact: false });
  });
});
