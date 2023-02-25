import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import * as path from 'path';
import { AppModule } from 'src/app.module';
import { dump } from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Members API Docs')
    .setDescription('MembersのAPI仕様書です')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const outputParh = path.resolve(process.cwd(), 'openapi.yml');
  writeFileSync(outputParh, dump(document, {}));
  await app.listen(3000);
}
bootstrap();
