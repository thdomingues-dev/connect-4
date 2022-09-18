import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'connect-4',
  viewportWidth: 1000,
  viewportHeight: 1000,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.e2e-spec.{ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
  },
})
