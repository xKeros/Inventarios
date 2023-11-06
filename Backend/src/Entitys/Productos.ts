import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()

export class Productos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Barcode: String

    @Column()
    nombre: String

    @Column()
    descripcion: String

    @Column()
    cantidad: String

    @Column()
    idcategoria: String

    @Column()
    timestamps: String
}