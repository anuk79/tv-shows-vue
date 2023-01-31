import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import LoaderComponent from '../LoaderComponent.vue';

describe('LoaderComponent', () => {
  it('renders properly', async () => {
    const wrapper = mount(LoaderComponent)
    expect(wrapper.text()).toContain('Loading...');
  });
});
