import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowDetails from '../ShowDetails.vue'

describe('ShowDetails',  () => {
  it('renders properly', async () => {
    const wrapper = mount(ShowDetails, { props: {
      show: {
        id: 1,
        name: 'show 1',
        language: 'English',
        runtime: 60,
        type: 'documentary',
        summary: 'lorem ipsum summary about the show',
        genres: ['sci-fi'],
        _embedded: {
          cast: [{
            person: {
              id: 123,
              name: 'John Doe',
              image: {
                medium: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
              }
            }
          }]
        },
        image: {
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
        }
      },
    }});
    expect(wrapper.text()).toContain('show 1');
    expect(wrapper.text()).toContain('English - 60m - documentary');
    expect(wrapper.text()).toContain('sci-fi');
    expect(wrapper.text()).toContain('lorem ipsum summary about the show');
    expect(wrapper.text()).toContain('John Doe');
  })
})
