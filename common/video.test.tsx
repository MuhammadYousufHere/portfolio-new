import { render } from '@testing-library/react';
import React from 'react';
import Video, { type IVideoProps } from './Video';

function renderVideo({ ...propsOverrides }: Partial<IVideoProps> = {}) {
   return render(<Video {...propsOverrides} src="" />);
}

describe('<Video />', () => {
   it('should be defined', () => {
      expect(Video).toBeDefined();
   });
   it('renders correctly', () => {
      const { container } = render(<Video src="" />);
      expect(container).toMatchSnapshot();
      renderVideo();
   });
});
