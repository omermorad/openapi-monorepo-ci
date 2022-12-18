#!/usr/bin/env node

import axios from 'axios';

const apikey =
  'cmRtZV94bjhzOWhkYTNhMGI2OTIyM2QwM2M0YTgwYjE1ZWIxYjU0NGQ4YWYxODExMTBkZTYzM2E5NDdiMWJhMTgyZjBiNWJhOWI2Og==';

const versionToCreate = process.env.NEXT_STABLE_VERSION;
const versionToForkFrom = process.env.CURRENCT_STABLE_VERSION;
const README_API_KEY = process.env.README_API_KEY || apikey;

const httpClient = axios.create({
  baseURL: 'https://dash.readme.com/api/v1',
  headers: { Authorization: `Basic ${README_API_KEY}` },
});

/**
 * @description Creates a new version
 * @param version {String}
 * @param forkVersion {String}
 * @return The new version id
 */
async function createStableVersion(version: string, forkVersion: string): Promise<string> {
  const { data } = await httpClient.post('/version', {
    version,
    from: forkVersion,
    codename: `v${version}`,
    is_stable: true,
    is_beta: false,
    is_hidden: true,
  });

  return data._id;
}

async function publishApiSpecification(version: string) {
  const { data } = await httpClient.post('/version', {});
}

async function run() {
  const newVersionId = await createStableVersion(versionToCreate, versionToForkFrom);
  await publishApiSpecification();
}


