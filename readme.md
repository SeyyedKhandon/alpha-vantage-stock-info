# Stock Market Info App

Alpha Vantage provides enterprise-grade financial market data through a set of powerful and developer-friendly data APIs and spreadsheets. From traditional asset classes (e.g., stocks, ETFs, mutual funds) to economic indicators, from foreign exchange rates to commodities, from fundamental data to technical indicators, Alpha Vantage is your one-stop-shop for real-time and historical global market data delivered through cloud-based APIs, Excel, and Google Sheets.

Stock Market Info is web app that you can use to see any stock information and it's daily time series close price via a chart.

Here is the online demo: [Stock Market Info App](https://alpha-vantage-stock-info.netlify.app/)

<a href="https://alpha-vantage-stock-info.netlify.app/" target="_blank">
<img src="/public/app-screen2.png"/>
</a>

# How to run:

1. Clone the project or download it as a zip file
2. Create `.env` file in the root of the project and put your api key that you have got from `https://www.alphavantage.co/support/#api-key` inside of it with below format: `VITE_API_KEY=yourkey`
3. Run `npm i` or `pnpm i`
4. run `npm run dev` or `pnpm dev`
5. open `http://localhost:5173/`
6. enter a symbol and click on submit button or hit `enter` button to open the info page

<img src="/public/form.png"/>

# How to test:

- Running test `npm run test`
- Web based test runner report `npm run test:ui`
- Test coverage `npm run coverage`

## Other Scripts

- Development `npm run dev`
- Build `npm run build`
- Lint `npm run lint`

# Project Overview

- [x] React
- [x] Typescript
- [x] Tailwind
- [x] Mobile-First
- [x] Axios, React-Query
- [x] Async Client Side Cache using IndexDB
- [x] React-Router
- [x] Vite
- [x] Vitest - Jest - React Testing Library - MSW
- [x] Test Coverage > 80%
- [x] Prettier
- [x] Eslint
- [x] Pnpm
- [x] ZOD
- [x] Import Path Sugar - `@/`
- [x] Netlify- Deploy Online Version
- [x] Charts using rechart
- [x] Dark Theme
- [ ] Multi Language
- [ ] Husky - Commit Lint
- [ ] Login - Authentication
- [ ] Sentry
- [ ] SonarQube
- [ ] Jest preview
