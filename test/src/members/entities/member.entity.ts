import { ApiProperty } from '@nestjs/swagger';

export class Member {
  @ApiProperty({ example: 1, description: 'メンバーid' })
  id: number;

  @ApiProperty({ example: '田中太郎', description: 'メンバーの氏名' })
  name: string;

  @ApiProperty({ example: 24, description: 'メンバーの年齢' })
  age: number;
}
