/**
 * Declare known environment variables.
 * Enables auto-completion when using "process.env.".
 * Makes it easier to find env vars, and helps avoid typo mistakes.
 *
 * Unlisted env vars will still be usable.
 *
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_DISPATCH_TOKEN: string;
      IS_SERVER_INITIAL_BUILD: '1' | undefined;
      LOCIZE_API_KEY: string;
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_APP_BASE_URL: string;
      NEXT_PUBLIC_APP_BUILD_ID: string;
      NEXT_PUBLIC_APP_DOMAIN: string;
      NEXT_PUBLIC_APP_NAME: string;
      NEXT_PUBLIC_APP_STAGE: 'test' | 'development' | 'staging' | 'production';
      NEXT_PUBLIC_LOCIZE_PROJECT_ID: string;
      SENTRY_DSN: string;

      // Other
      TZ: string; // TimeZone (":UTC")
    }
  }
}

// Trick to make this a valid module:
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
