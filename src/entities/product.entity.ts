import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("items")
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  name!: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  category!: string;

  @Column({ type: "numeric", precision: 10, scale: 2, nullable: false })
  price!: number;

  @Column({ type: "int", default: 0, nullable: false })
  stock!: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
