# 🎯 Playwright TodoMVC Tests

[![CI](https://github.com/tnguyentan21/playwright-todomvc-test/actions/workflows/playwright.yml/badge.svg)](https://github.com/tnguyentan21/playwright-todomvc-test/actions)
[![Allure Report](https://img.shields.io/badge/Allure-Report-blue)](https://tnguyentan21.github.io/playwright-todomvc-test/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-brightgreen)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Automated E2E tests for the [TodoMVC React app](https://todomvc.com/examples/react/dist/) using Playwright and the Page Object Model (POM).  
This project demonstrates a clean automation framework for CI, reporting, and modern testing practices.

---

## 🧰 Tech Stack

| Tool / Tech        | Description                                |
|--------------------|--------------------------------------------|
| [Playwright](https://playwright.dev/)         | Headless browser automation framework |
| [Allure](https://docs.qameta.io/allure/)      | Test report and history with trends    |
| GitHub Actions     | Continuous Integration with test artifacts |
| Node.js 20.x       | Runtime for Playwright tests               |
| JavaScript (ESM)   | Language and modern module syntax          |

---

## 🖼️ Test Run Preview

> Sample test run (recorded locally)

![Test Run Preview](docs/test-run.gif)

> _Optional:_ Use a screenshot instead:
> `<img src="docs/screenshot.png" width="600"/>`

---

## 📂 Project Structure

```
playwright-todomvc-test/
├── pages/                  # Page Object Models
│   └── TodoPage.js
├── tests/                  # All test specs
│   └── add-todo.spec.js
├── playwright.config.js    # Playwright config
├── .github/workflows/      # GitHub Actions workflow
│   └── playwright.yml
├── allure-report/          # HTML test report (CI generated)
├── README.md
```

---

## 🚀 Live Report

View the latest Allure report from CI on GitHub Pages:  
👉 **[Click here to open report](https://tnguyentan21.github.io/playwright-todomvc-test/)**

---

## 🔗 Author

Created by **Tan Nguyen**  
GitHub: [@tnguyentan21](https://github.com/tnguyentan21)  
Portfolio: _Add your portfolio or LinkedIn link here_

---
