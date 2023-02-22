import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {
  ApiOperation,
  ApiParam,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Member } from 'src/members/entities/member.entity';

@Controller('members')
@ApiTags('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体API登録' })
  @ApiResponse({
    status: 201,
    description: '登録したメンバー設定を返却',
    type: Member,
  })
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '全体取得API' })
  @ApiResponse({
    status: 200,
    description: '登録したメンバー設定を複数返却',
    type: Member,
  })
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体取得API' })
  @ApiParam({
    name: 'id',
    example: 1,
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: '指定されたIDのメンバー設定を返却',
    type: Member,
  })
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体更新API' })
  @ApiParam({
    name: 'id',
    example: 1,
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: '更新後のメンバー設定を返却',
    type: Member,
  })
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体API登録' })
  @ApiParam({
    name: 'id',
    example: 1,
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: '削除されたメンバーの設定を返却',
    type: Member,
  })
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}
