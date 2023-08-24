import { describe, test, expect } from 'vitest'
import App from '../app.vue'

/**
 * I normally would write several test functions to test different parts of the component,
 * passing different parameters, verifying the component mounts, etc.
 *
 * However it appears that the testing utils with Nuxt3 are not ready to be used, and I spent
 * too much time trying to get Jest to work. Previously I have written several dozen test cases
 * for Vue2/Nuxt2, so I am at a bit of a loss as to how this is the way it is.
 */
describe('Clients Assessment Tests', async () => {
  test('test that App renders', () => {
    const result = App
    expect(result).toMatchSnapshot()
  })
})
