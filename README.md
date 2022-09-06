# Watshi no Websito!

Personal website written in SvelteKit. You can visit it live
[here!](https://noway.moe) It also contains a prettier rendition of my
[configs'](https://codeberg.com/akemi/configs.git)
[notes](https://codeberg.org/akemi/configs.git), which non-vim users will
appreciate

## Building

I was told to use `yarn`, so here are the steps for that

```bash
please pacman -S yarn
git clone 'https://codeberg.org/akemi/website' site
cd site
yarn install
yarn dev
```

Project layout is following SvelteKit conventions as closely as possible


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
