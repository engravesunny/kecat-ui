import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import scrollbar from '../src/index.vue'

describe('scrollbar', () => {
    it('test height', () => {
        const wrapper = mount(scrollbar, {
            props: {
                height: '100px',
            },
        })
        expect((wrapper.find('.ke-scrollbar-viewer').element as any).style._values.height).toBe('100px')
    })
})
