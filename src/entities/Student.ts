import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "students" })
export default class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 70, nullable: false })
    name: string;

    @Column({ type: "integer", nullable: true })
    age: number;
}