import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";


@Entity('news')
export class NewsEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @Column()
    description : string;

    @Column()
    date : string;

    @Column()
    photo_url: string;

   

}