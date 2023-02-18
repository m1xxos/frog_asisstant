import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Msg {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    userId: number;

    @Column()
    receiverId: number;
    
    @Column()
    text: string;
    
    @CreateDateColumn()
    createdAt: Date;
}
