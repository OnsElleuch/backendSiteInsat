import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rendez-vous')
export class RendezVousEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date: Date;

    @Column()
    photoUrl: string;


}