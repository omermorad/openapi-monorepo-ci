export const OpenApiVersion: Record<'V1' | 'V1_1' | 'V1_2', string> = {
  V1: '1.0.0',
  V1_1: '1.1.0',
  V1_2: '1.2.0',
};

export type OpenApiVersion = typeof OpenApiVersion[keyof typeof OpenApiVersion];

export const LATEST_OPENAPI_VERSION = OpenApiVersion.V1;
