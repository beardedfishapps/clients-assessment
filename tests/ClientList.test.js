import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ClientList from '../components/ClientList.vue'

/** cspell:disable */
const clients = [
  {
    name: 'Brendon Taylor',
    title: 'Supervisor',
    avatar:
      'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Surprised&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Brown',
    quote: 'I am a super-visor!',
    nationality: 'New Zealand',
  },
  {
    name: 'Ed Joyce<sup>TM</sup>',
    title: 'Chief Technical Officer',
    avatar:
      'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Prescription02&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Yellow',
    quote: null,
    nationality: 'Ireland',
  },
  {
    name: 'Mithali Raj',
    title: 'Data Scientist',
    avatar:
      'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Tongue&skinColor=Tanned',
    quote: 'Here I go scraping "again"',
    nationality: 'India',
  },
  {
    name: 'Laura Fallon',
    title: 'Chief Financial Officer',
    avatar:
      'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=Red&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Tanned',
    quote: 'That costs too much $.',
  },
  {
    name: 'Alan Taylor',
    title: 'Lead Engineer',
    avatar:
      'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Blank&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Cry&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Tanned',
    quote: '80% of the time it works every time',
    nationality: 'France',
  },
]
/** cspell:enable */

/**
 * I normally would write several test functions to test different parts of the component,
 * passing different parameters, verifying the component mounts, etc.
 *
 * However it appears that the testing utils with Nuxt3 are not ready to be used, and I spent
 * too much time trying to get Jest to work. Previously I have written several dozen test cases
 * for Vue2/Nuxt2, so I am at a bit of a loss as to how this is the way it is.
 */
describe('Clients Assessment Tests', async () => {
  test('test that ClientList component renders', () => {
    const wrapper = mount(ClientList, {
      props: {
        clients,
      },
    })
    expect(wrapper.find('.flex.flex-row.items-center').exists()).toBe(true)
  })

  test('test that modal works', async () => {
    const wrapper = mount(ClientList, {
      props: {
        clients,
      },
    })

    await wrapper.find('.flex.flex-row.items-center').trigger('click')

    expect(wrapper.find('dialog').exists()).toBe(true)
  })
})
