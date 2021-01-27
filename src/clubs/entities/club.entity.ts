import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";



@Entity('club')
export class ClubEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    clubName : string;

    @Column()
    clubDescription : string;

    @Column()
    president : string;

    @Column()
    photo_url : string;


}