# React Portfolio Cleanup & Optimization TODO

Status: In Progress

## 1. Backup Project ✅

- [x] `git add . && git commit -m "backup: pre-blackboxai-cleanup"`

## 2. Delete Unused Files

- [ ] Delete CRA boilerplate:
  - `src/App.test.js`
  - `src/setupTests.js`
  - `src/logo.svg`
  - `src/reportWebVitals.js`
- [ ] Delete duplicate: `personal-portfolio/` entire folder

## 3. Project Structure Optimization

- [ ] Create `src/utils/ErrorBoundary.jsx`
- [ ] Verify folder structure:
  ```
  src/
  ├── components/
  ├── context/
  ├── data/
  ├── utils/
  └── ...
  ```

## 4. Code Enhancements

- [ ] App.js: Add React.lazy/Suspense + ErrorBoundary
- [ ] Projects.jsx: Add memoization + API cache
- [ ] Static components: Add React.memo (About, Education, Skills)

## 5. Package Cleanup

- [ ] package.json: Remove test deps (`@testing-library/*`)
- [ ] `npm install`

## 6. Validation

- [ ] `npm start` → Zero console errors
- [ ] Check all sections render (Hero/About/Skills/Experience/Education/Projects/Certifications/Contact/Footer)
- [ ] `npm run build` → No warnings
- [ ] Responsive + dark mode test

## 7. Finalize

- [ ] Commit changes: `blackboxai/portfolio-optimized`
- [ ] attempt_completion
