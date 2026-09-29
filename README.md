# 📸 Photo Gallery (React + Vite)

A responsive photo gallery built with React and Vite. Data comes from
[JSONPlaceholder](https://jsonplaceholder.typicode.com/photos) using `fetch()` (no Axios).

## Features
- Fetches data with `fetch()` inside `useEffect`, stored with `useState`
- Displays the first 100 photos using `map()`
- Components: `Header`, `PhotoGallery`, `PhotoCard`, `Footer`
- Data passed via props (`PhotoGallery` → `PhotoCard`)
- Each card shows photo, Photo ID, Album ID and title
- Bonus: Search, Album filter, Dark mode, View Details modal
- Responsive CSS

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── PhotoCard.jsx
│   └── PhotoGallery.jsx
├── App.jsx
├── App.css
└── main.jsx
```
