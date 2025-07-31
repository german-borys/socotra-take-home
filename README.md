# Socotra App

## Getting Started


###  Clone Repository

```sh
git clone git@github.com:german-borys/socotra-take-home.git
```

### 1. Install Dependencies

```sh
npm install
```

### 2. Run the Development Server

```sh
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Running Tests

This project uses **Jest** and **React Testing Library** for unit testing.

### 1. Run All Tests

```sh
npm test
```
or
```sh
npx jest
```

### 2. Run a Specific Test File

```sh
npx jest src/components/ComponentName.test.tsx
```

### 3. Watch Mode

To run tests in watch mode (re-runs tests on file changes):

```sh
npm test -- --watch
```

---

## Notes

- Tests are located alongside components as `*.test.tsx` files.
- Most tests use the real `AppContext` provider for context-dependent components.
- If you add new components, create corresponding test files and use the same context pattern for consistency.
