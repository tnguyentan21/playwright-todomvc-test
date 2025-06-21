# 🎯 Playwright TodoMVC Tests ![CI](https://github.com/tnguyentan21/playwright-todomvc-test/actions/workflows/playwright.yml/badge.svg)

This repository contains Playwright tests for the [TodoMVC React app](https://todomvc.com/examples/react/dist/), using the **Page Object Model (POM)** pattern.

> ✅ Built for practicing and showcasing modern E2E automation with Playwright, Allure, GitHub Actions, and CI reporting.

---

## 📁 Project Structure

```
playwright-todomvc-test/
├── tests/               # Test specs
├── pages/               # Page Object classes
├── playwright.config.js # Playwright config
├── .github/workflows/   # CI setup (GitHub Actions)
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run tests

```bash
# Run tests headlessly
npm test

# Run with browser UI
npm run test:headed

# View last HTML report
npm run test:report
```

---

## 🧪 Allure Reporting (Local)

After test run:

```bash
# Generate and open Allure HTML report (if using Allure)
npx allure generate allure-results --clean -o allure-report && npx allure open allure-report
```

> You need to install Allure CLI for this:  
> https://docs.qameta.io/allure/#_installing_a_commandline

---

## 🛰 CI / GitHub Actions

This project runs all tests automatically on every push to `main`.

### 🔍 See reports:

1. Go to the **[Actions tab](https://github.com/tnguyentan21/playwright-todomvc-test/actions)** of this repo
2. Click on the latest workflow run
3. Scroll to the bottom to see:

- ✅ **HTML Report** (under `playwright-report` artifact)
- ✅ **Allure Results** (under `allure-results` artifact)

---

## 📄 License

[MIT License](LICENSE)
