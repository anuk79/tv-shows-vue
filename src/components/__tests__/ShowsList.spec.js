import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowsList from '../ShowsList.vue'

describe('ShowsList',  () => {
  it('renders properly', async () => {
    const wrapper = mount(ShowsList, { props: {
      genres: ['genre-1', 'genre-2'],
      showsByGenre: {
        'genre-1': [
          {
            id: 1,
            name: 'show 1',
            image: {
              original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
            }
          }
        ],
        'genre-2': [
          {
            id: 111,
            name: 'show 2',
            image: {
              original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
            }
          }
        ]
      },
      showInfo: true
    }});
    expect(wrapper.text()).toContain('genre-1');
    expect(wrapper.text()).toContain('genre-2');
  })
})
