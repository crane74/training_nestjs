import { Module } from '@nestjs/common';
import { MembersController } from 'src/members/members.controller';
import { MembersService } from 'src/members/members.service';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
