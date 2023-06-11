import { render } from '@testing-library/react';
import React from 'react';
import { Logo } from './Logo';

describe('Logo', () => {
   it('renders correctly', () => {
      const { container } = render(<Logo />);
      expect(container).toMatchSnapshot();
   });
});
