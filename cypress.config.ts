import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    "retries": {
      "runMode": 2,
      "openMode": 1
    },
    specPattern: 'cypress/e2e/**/*.spec.ts'
  }
})