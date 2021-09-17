import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { MovieItem } from '../../src/components/MovieItem';

describe('MovieItem', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      const dummyMovie = {
        id: '123',
        title: 'Godfather',
        original_title: 'Godfather',
        poster_path: 'https://image.tmdb.org/t/p/w400',
        overview: 'Test Overview',
      };
      wrapper = shallow(<MovieItem item={dummyMovie} />);
    });

    it('should render a View', () => {
      expect(wrapper).not.toBeNull();
    });
  });
});
