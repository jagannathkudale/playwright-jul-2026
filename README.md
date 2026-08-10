# Playwright Automation Framework

A comprehensive Playwright Automation Testing Framework built using TypeScript, following industry-standard automation practices including Page Object Model (POM), Fixtures, Hooks, Data-Driven Testing, Reporting, Cross-Browser Execution, CI/CD, and Environment Configuration.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub
- Jenkins
- Excel Data-Driven Testing
- Page Object Model (POM)

---

## Project Structure

```text
tests
├── 01-locators
├── 02-actions
├── 03-assertions
├── 04-dropdowns
├── 05-frames
├── 06-windows
├── 07-api
├── 08-pom
├── 09-fixtures
├── 10-hooks
├── 11-data-driven-testing
├── 12-reports
├── 13-parallel-execution
├── 14-cross-browser
├── 15-git-github
├── 16-jenkins
├── 17-full-framework
├── 18-utils
├── 19-common-functions
├── 20-base-framework
├── 21-excel-data-driven
├── 22-ci-cd
├── 23-advanced-fixtures
├── 24-best-practices
└── resource
```

## Features Implemented

### Core Playwright Concepts

- Locators
- Actions
- Assertions
- Dropdown Handling
- Frames Handling
- Window Handling
- API Testing

### Framework Design

- Page Object Model (POM)
- Fixtures
- Advanced Fixtures
- Hooks
- Base Framework
- Utility Classes
- Common Functions

### Data Driven Testing

- JSON Data Driven Testing
- Excel Data Driven Testing

### Reporting

- HTML Reports
- Screenshots on Failure
- Video Recording on Failure
- Trace Collection

### Execution

- Parallel Execution
- Cross Browser Execution
- Environment Configuration (DEV / QA / UAT)

### DevOps

- Git & GitHub
- Jenkins
- CI/CD Integration

---

## Environment Execution

Run tests against DEV:

```bash
$env:TEST_ENV="dev"
npx playwright test
```

Run tests against QA:

```bash
$env:TEST_ENV="qa"
npx playwright test
```

Run tests against UAT:

```bash
$env:TEST_ENV="uat"
npx playwright test
```

---

## Browser Execution

Run on Chromium:

```bash
npx playwright test --project=chromium
```

Run on Firefox:

```bash
npx playwright test --project=firefox
```

Run on WebKit:

```bash
npx playwright test --project=webkit
```

Run on Microsoft Edge:

```bash
npx playwright test --project="Microsoft Edge"
```

---

## Generate Report

```bash
npx playwright show-report
```

---

## Install Dependencies

```bash
npm install
```

Install Browsers:

```bash
npx playwright install
```

---

## Author

**Jagannath Popat Kudale**

Automation Test Engineer

Skills:
- Playwright
- Selenium
- Java
- TypeScript
- REST Assured
- API Testing
- Jenkins
- Git
- Agile Testing

---

## Learning Journey Completed

- Playwright Fundamentals
- Automation Framework Development
- POM Framework
- Fixtures & Hooks
- Reporting
- Cross Browser Testing
- Environment Configuration
- Excel Data Driven Framework
- CI/CD Integration
- Advanced Framework Concepts
