import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Datum {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column()
    username: string
    @Column({ default: true })
    isActive: boolean;
}
