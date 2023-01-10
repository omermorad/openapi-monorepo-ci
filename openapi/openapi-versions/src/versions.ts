export const OpenApiVersion: Record<'V1' | 'V1_1', string> = {
  V1: '1.0.0',
  V1_1: '1.1.0',
};

export type OpenApiVersion = typeof OpenApiVersion[keyof typeof OpenApiVersion];

export const LATEST_OPENAPI_VERSION = OpenApiVersion.V1;
