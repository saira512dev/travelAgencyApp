import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";
import { defineConfig } from "vite";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-7pz",
  project: "travel-agency-app",

  // An auth token is required for uploading source maps.
  authToken:
    "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", // ...
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/],
    },
  };
});
