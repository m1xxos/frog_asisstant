import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Bot {
    @PrimaryColumn({type: 'text'})
    keyword: string;
    @Column({nullable: true})
    info: string;
    @Column("simple-array", {nullable: true})
    additionalInfo: string[];
}
