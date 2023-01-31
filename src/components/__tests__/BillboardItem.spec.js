import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BillboardItem from '../BillboardItem.vue'

describe('AppHeader',  () => {
  it('renders properly', async () => {
    const wrapper = mount(BillboardItem, { props: {
      highlightedShow: {
        id: 1,
        name: 'test show name',
        runtime: 30,
        genres: ['genre 1', 'genre 2'],
        language: 'English',
        image: {
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
        }
      },
      showInfo: true
    }});
    expect(wrapper.text()).toContain('test show name');
    expect(wrapper.text()).toContain('30m - English');
    expect(wrapper.text()).toContain('genre 1, genre 2');

    await wrapper.get('router-link').trigger('click');
    expect(wrapper.text()).toContain('test show name');

  })

  it('navigates properly when show name is clicked', async () => {
    const wrapper = mount(BillboardItem, { props: {
      highlightedShow: {
        id: 1,
        name: 'featured show name',
        runtime: 30,
        genres: ['genre 1', 'genre 2'],
        language: 'English',
        image: {
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg'
        }
      },
      showInfo: true
    }});

    await wrapper.get('router-link').trigger('click');
    
    expect(wrapper.text()).toContain('featured show name');
  })
})
