import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id_product: number;

  @Column()
  name_product: string;

  @Column()
  description_product: string;

  @Column()
  price_product: number;

  @Column('bytea')
  image_product: Blob;


}
