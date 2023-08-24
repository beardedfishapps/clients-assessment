import { describe, test, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Client from '../components/Client.vue'

/**
 * I normally would write several test functions to test different parts of the component,
 * passing different parameters, verifying the component mounts, etc.
 *
 * However it appears that the testing utils with Nuxt3 are not ready to be used, and I spent
 * too much time trying to get Jest to work. Previously I have written several dozen test cases
 * for Vue2/Nuxt2, so I am at a bit of a loss as to how this is the way it is.
 */
describe('Clients Assessment Tests', async () => {
  test('test that Client component renders', () => {
    const wrapper = shallowMount(Client, {
      props: {
        client: {
          name: 'Ed Joyce<sup>TM</sup>',
          title: 'Chief Technical Officer',
          avatar:
            'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription02&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Yellow',
          quote: null,
          nationality: 'Ireland',
        },
      },
    })
    expect(wrapper.text()).toContain('Ed Joyce')
  })
})
