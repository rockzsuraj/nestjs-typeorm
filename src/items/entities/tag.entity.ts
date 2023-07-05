import { AbstractEntity } from "../../database/AbstractEntity";
import { Column, Entity } from "typeorm";

@Entity()
export class Tag extends AbstractEntity<Tag>{
    @Column()
    content: string;
}