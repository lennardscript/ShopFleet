import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id_category: number;

  @Column({ type: 'varchar', nullable: true })
  name_category: string;

  @OneToMany(() => Product, product => product.category)
  products: Product[];
}
