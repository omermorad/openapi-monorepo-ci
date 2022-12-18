// import fs, { existsSync } from 'fs';
// // import { VersioningType } from '@nestjs/common';
// // import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// // import { NestFactory } from '@nestjs/core';
// // import { ApplicationRootModule } from './application-root.module';
// // import { BalanceOpenApiModule } from './balance-openapi/v1/balance-openapi-module';
// import { BalanceApiVersion } from '../src/common/constants/api-version.constants';
//
// const FOLDER_NAME = process.env.OPENAPI_FOLDER || 'openapi-specs';
//
// async function createApiSpecFile() {
//   // const app = await NestFactory.create(ApplicationRootModule, { logger: false });
//
//   if (!existsSync(FOLDER_NAME)) {
//     fs.mkdirSync(FOLDER_NAME);
//   }
//
//   const versions = Object.values<string>(BalanceApiVersion);
//
//   versions.forEach((version) => {
//     // const document = SwaggerModule.createDocument(
//     //   app.enableVersioning({
//     //     type: VersioningType.HEADER,
//     //     defaultVersion: version,
//     //     header: 'v',
//     //   }),
//     //   new DocumentBuilder()
//     //     .setVersion(version)
//     //     .setTitle('Balance OpenAPI')
//     //     .addServer('https://api.sandbox.getbalance.com', 'sandbox')
//     //     .addServer('https://api.getbalance.com', 'production')
//     //     .build(),
//     //   {
//     //     deepScanRoutes: true,
//     //     include: [BalanceOpenApiModule],
//     //   },
//     // );
//
//     fs.writeFileSync(`${FOLDER_NAME}/openapi-spec-v${version}.json`, JSON.stringify([]));
//   });
//
//   process.exit(0);
// }
//
// void createApiSpecFile();
console.log('Exported');
