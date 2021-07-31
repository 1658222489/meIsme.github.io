import { shallowMount } from '@vue/test-utils'
import index from '@/components/index.vue'

describe('index.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(index, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
