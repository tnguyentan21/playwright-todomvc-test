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
├── allure-report/       # Generated HTML report (local only)
├── .github/workflows/   # GitHub Actions CI
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

### To view locally:

```bash
npx allure-commandline generate allure-results --clean -o allure-report
http-server allure-report -p 9999 -o
```

> or just run the `view-report.bat` script included in the repo (see below)

---

## 📊 GitHub CI Reports

This project automatically runs Playwright tests and publishes reports on every push or pull request to `main`.

### 🔗 Live Report:

- 📊 [Allure GitHub Pages Report](https://tnguyentan21.github.io/playwright-todomvc-test/)

### 🧾 Downloadable Reports:

1. Go to the [Actions tab](https://github.com/tnguyentan21/playwright-todomvc-test/actions)
2. Click on any run
3. Scroll to **Artifacts** section:
   - `allure-report.zip` — HTML report
   - `playwright-report.zip` — Built-in Playwright HTML report

### 📈 Trending Support

The workflow stores Allure history so your report includes:

- Pass/fail trend
- Test duration history
- Flaky test detection

---

## 💻 One-click Local Report Viewer

You can use the `view-report.bat` script:

```bat
:: Double-click or run in terminal
view-report.bat
```

---

## 📄 License

[MIT License](LICENSE)
