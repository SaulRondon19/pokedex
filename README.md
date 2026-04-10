# Modern Pokedex - React 19 + TS

> **Live Demo:** [https://pokedex-azure-two-55.vercel.app/](https://pokedex-azure-two-55.vercel.app/)

A modern Pokedex app built with React, Tailwind and Typescript. Consuming Pokeapi to display the data (Name, ID, types, images etc), with optimizated pagination and lazy loading. 

## Key funcionalities

- **Load More Pagination:** On-demand loading system with data persistence. The existing list remains visible while fetching new Pokemon, ensuring seamless navigation.
- **Debounced Search:** Optimized search filter by name that waits for the user to finish typing, preventing unnecessary API requests and PokeAPI saturation.
- **Skeleton Loading:** Implementation of animated loading screens (skeletons) that maintain the app's visual structure while data is being processed.
- **Responsive Design:** Fully adaptive interface for mobile, tablet, and desktop devices using modern CSS Grid and Flexbox.
## Tech stack

- **React 19.2.4** (Hooks, Custom Hooks, and Concurrency)
- **TypeScript 5.9.3** (Strict typing for API models)
- **Tailwind CSS 4.2.2** (Latest generation utility-first engine)
- **Vite 8.0.1** (Ultra-fast build tool and bundler)


## Instalation and use

1. **Clone the repository:**
  ```bash 
  git clone [https://github.com/rondonsaul10/pokedex.git](https://github.com/rondonsaul10/pokedex.git)
  ```


2. **Install the dependencies**
```
npm install
```

3. **Start developer server**

```
npm run dev
```

