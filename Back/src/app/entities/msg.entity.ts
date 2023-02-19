import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Msg {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "uuid"})
    userId: string;

    @Column({type: "uuid"})
    receiverId: string;
    
    @Column()
    text: string;
    
    @CreateDateColumn()
    createdAt: Date;
}
