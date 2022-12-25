/* eslint-disable no-process-env */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const childProcess = require('child_process');
const util = require('util');

const npmScope = 'omermorad'; // Scope means the prefix e.g. `@blnce-io` in `@blnce-io/logger`. For GitHub Packages it must match the organization name.
const githubEndpoint = 'npm.pkg.github.com';

async function runCommand(command) {
  const result = await util.promisify(childProcess.exec)(command);
  return result.stdout;
}

/**
 * We need a Classic authentication token (not fine-grained), because that's what's supported by GH Packages.
 * For consuming packages, the token needs the `read:packages` scope, and the user account must have read permission.
 * For publishing packages, the token needs the `write:packages` scope.
 */
async function getAuthTokenFromGithub() {
  if (process.env.GITHUB_TOKEN) {
    return process.env.GITHUB_TOKEN;
  }
  console.error('No Github Token found. Please put it in the "GITHUB_TOKEN" environment variable.');
  throw new Error('No Github Token');
}

/**
 * This tells NPM CLI how to authenticate with the registry.
 */
function setNpmAuthToken(authToken) {
  const command = `npm set //${githubEndpoint}/:_authToken ${authToken}`;
  return runCommand(command);
}

/**
 * This tells NPM CLI which registry to look in for resolving dependencies in that scope.
 */
function updateNpmRegistry() {
  const command = `npm set @${npmScope}:registry https://${githubEndpoint}/`;
  return runCommand(command);
}

async function updateNpmAuthToken() {
  const authToken = await getAuthTokenFromGithub();
  await setNpmAuthToken(authToken);
}

void (async () => {
  // We run serially because `npm set` isn't concurrency-safe
  await updateNpmRegistry();
  await updateNpmAuthToken();
})();
