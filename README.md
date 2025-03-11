# GitHub PR Viewer

This project is a **React-based** application that fetches and displays pull requests (PRs) from a GitHub repository using GitHub's REST API v3. Users can filter PRs by labels and view details.

## 🚀 Features
- Fetch and display PRs from a GitHub repository
- Show PR details including title, labels, date opened, and a link to the PR
- Filter PRs by labels
- Pagination for better UX
- Loading and error handling states
- Fully responsive UI using **Material UI**
- TypeScript for type safety

## 📌 Tech Stack
- **React 18** (with Vite)
- **TypeScript**
- **React Query** (for data fetching & caching)
- **Axios** (for API requests)
- **Material UI** (for UI components)
- **React Testing Library & Jest** (for unit tests)

---

## 🔧 Setup & Installation
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/shafi2019/github-prs-viewer
cd github-prs-viewer
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```
_(If you face dependency issues, try `npm install --legacy-peer-deps`)_


### 4️⃣ **Run the Development Server**
```sh
npm run dev
```
This starts the app at `http://localhost:5173/`

### 5️⃣ **Run Tests**
```sh
npm test
```

---

## 📁 Project Structure
```
/src
  ├── components/        # Reusable UI components
  │     ├── PRList.tsx    # Displays list of PRs
  │     ├── PRFilter.tsx  # Filters PRs by label
  │     ├── Loader.tsx    # Loading indicator
  │     ├── ErrorMessage.tsx # Handles API errors
  ├── hooks/
  │     ├── usePullRequests.ts # React Query hook to fetch PRs
  ├── pages/
  │     ├── Home.tsx      # Main page with PR list and filter
  ├── services/
  │     ├── githubApi.ts  # Axios service for API requests
  ├── styles/
  │     ├── global.css    # Global styles
  ├── types.ts            # TypeScript types
  ├── tests/              # Unit tests
  ├── main.tsx            # Entry point
  ├── App.tsx             # Main app component
```

## ✅ Improvements & Future Enhancements
- **Infinite Scroll** instead of pagination
- **Dark Mode**
- **GraphQL API Support**
- **More advanced filtering (e.g., by author, date range, status)**


## 🎯 Author
Developed by **Shafi Masoumi** - [GitHub](https://github.com/shafi2019)