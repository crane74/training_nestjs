import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { CreateMemberDto } from 'src/members/dto/create-member.dto';
import { UpdateMemberDto } from 'src/members/dto/update-member.dto';

const { readFile } = promises;

@Injectable()
export class MembersService {
  create(createMemberDto: CreateMemberDto) {
    return 'This action adds a new member';
  }

  findAll() {
    return `This action returns all members`;
  }

  async findOne(id: number) {
    const contests = await readFile('src/members/members.json', 'utf-8');
    const json = JSON.parse(contests);
    let tmp = null;

    json.members.forEach((member: { id: number }) => {
      if (member.id == id) {
        tmp = member;
      }
    });

    return tmp;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
