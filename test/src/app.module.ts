import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { MembersModule } from 'src/members/members.module';

@Module({
  imports: [MembersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
