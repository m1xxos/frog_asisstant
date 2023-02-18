import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Bot {
    @PrimaryColumn({type: 'text'})
    keyword: string;
    @Column()
    info: string;
    @Column("simple-array")
    additionalInfo: string[];
}
