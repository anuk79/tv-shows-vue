import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import HorizontalList from '../HorizontalList.vue';

describe('HorizontalList', () => {
  it('renders list items properly', async () => {
    const wrapper = mount(HorizontalList, {
      props: {
        data: [
          {
            id: 1,
            name: 'show 1',
            image: {
              medium: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
            },
          },
          {
            id: 2,
            name: 'show 2',
            image: {
              medium: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
            },
          },
          {
            id: 2,
            name: 'show 3',
            image: {
              medium: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
            }
          },]
      },
    });
    wrapper.get('router-link').trigger('click');
  });
});
