import { describe, expect, it } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import button from '../src/index.vue'

describe('button', () => {
    it('create', () => {
        const wrapper = mount(button, {
            props: {
                type: 'primary',
            },
        })
        expect(wrapper.classes()).toContain('ke-button-primary')
    })
    it('handle click', async () => {
        const wrapper = mount(button)
        await wrapper.trigger('click')
        expect(wrapper.emitted()).toBeDefined()
    })
    it('handle click inside', async () => {
        const wrapper = shallowMount(button)
        const div = document.createElement('div')
        div.classList.add('inside-slot')
        wrapper.element.appendChild(div)
        wrapper.find('.inside-slot').trigger('click')
        expect(wrapper.emitted()).toBeDefined()
    })
    it('render text', () => {
        const keButton = mount(button, {
            slots: {
                default: 'Hello World',
            },
        })
        expect(keButton.text()).toBe('Hello World')
    })
    it('size', () => {
        const wrapper = mount(button, {
            props: {
                size: 'large',
            },
        })
        expect(wrapper.classes()).toContain('ke-button-large')
    })
    it('round', () => {
        const wrapper = mount(button, {
            props: {
                round: true,
            },
        })
        expect(wrapper.classes()).toContain('ke-button-round')
    })
    it('circle', () => {
        const wrapper = mount(button, {
            props: {
                circle: true,
            },
        })
        expect(wrapper.classes()).toContain('ke-button-circle')
    })
    it('disabled', async () => {
        const wrapper = mount(button, {
            props: {
                disabled: true,
            },
        })
    
        expect(wrapper.classes()).toContain('ke-button-disabled')
        await wrapper.trigger('click')
        expect(wrapper.emitted('click')).toBeUndefined()
    })
    it('plain', () => {
        const wrapper = mount(button, {
            props: {
                plain: true,
            },
        })
        expect(wrapper.classes()).toContain('ke-button-plain')
    })
    it('icon', () => {
        const wrapper = mount(button, {
            props: {
                icon: 'rili',
            },
        })
        expect(wrapper.find('.ke-icon').classes()).toContain('ke-icon-rili')
    })
})