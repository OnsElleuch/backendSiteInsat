import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('ProjetRecherche')
export class ProjetRechercheEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  public cadre: string;

  @ApiProperty()
  @Column()
  public anneeCreation: string;
  @ApiProperty()
  @Column()
  public code: string;
  @ApiProperty()
  @Column()
  public titre: string;

  @ApiProperty()
  @Column()
  public responsable: string;
}
