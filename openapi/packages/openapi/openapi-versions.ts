import { version } from './package.json';

/**
 * Remove prerelease suffix (e.g. 1.1.0-next.0)
 * Take the major and minor only
 */
const [MAJOR_VERSION, MINOR_VERSION] = version.split('-')[0].split('.');

export type OpenApiVersions = 'V1_0' | 'Next';

export const OpenApiVersion: Record<OpenApiVersions, string> = {
  V1_0: '1',
  Next: `${MAJOR_VERSION}.${Number(MINOR_VERSION) + 1}`,
};

export type OpenApiVersion = typeof OpenApiVersion[keyof typeof OpenApiVersion];

export const NEXT_OPENAPI_VERSION = `${MAJOR_VERSION}.${Number(MINOR_VERSION) + 1}`;
