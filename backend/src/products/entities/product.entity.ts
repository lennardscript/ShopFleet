import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id_product: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name_product: string;

  @Column({ type: 'text', nullable: true })
  description_product: string;

  @Column({ type: 'text', nullable: true })
  category: string;

  @Column({ type: 'int', nullable: false })
  price_product: number;

  @Column({type: 'bytea', nullable: true })
  image_product: Blob;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

}
