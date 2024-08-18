import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Banner from '@/components/Banner';

describe('<Banner />', () => {
  test('renders the component with the correct title', () => {
    render(<Banner />);
    screen.getByText('Adrià Gomis');
  });

  test('renders the avatar fallback', () => {
    render(<Banner />);
    screen.getByTestId('avatar-fallback');
  });
});
