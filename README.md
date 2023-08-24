# Clients Application Assessment

For this application, I focused on simplicity and clean UI. The design choices were intended to make the colors pop but remain pleasant to view. I am colorblind so my design choices may not be the most appealing to everyone but that's why we work on teams to design applications!

As with everything with front-end development, I worked to make sure that the application was accessible. With this application specifically, I was simply striving for 100% on the Lighthouse ranking. There are places where I could have added aria tags, like where the modal opens, to alert a disabled user of state changes to the page.

Another choice I could have made but didn't see a strong benefit to doing it, though if this was a larger scale application I would have, is making the `dialog` a standalone component.

I had the option of sticking with Vue3 or implementing this with Nuxt3 and I chose to go with Nuxt3. I have worked extensively with Vue2/Nuxt2 and have within the last couple of years been dabbling in Nuxt3 but I failed to recall that there was such a drastic change in the testing library. Unfortunately the Nuxt3 testing library is still in development so I was unable to develop the full suite of tests that I wanted to.

If I had the time to do it, I would rewrite this with just Vue3 or use Vue2/Nuxt2 to be able to write tests for it. For now I have to submit this as is.

-- Andrew Augusto

---

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
