This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Developed on Node v20.7.0, so it's recommended to use the same version

## Getting Started

First, run the development server:

```bash
npm i
# or
yarn i
# then
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## General Functionality

This app deals with mock data that is persisted locally to user's localStorage.

On first launch of the app, the user will be routed to a mock login page.

User is required to fill out the login information (password won't be persisted to localStorage)

All subsequent launches of the app will route to the app booking page.

From the booking page the user has the ability to go to the profile page and back to the booking page.

The user can book dog walks on the booking page and they can edit their profile information and add their own dogs on the profile page.

