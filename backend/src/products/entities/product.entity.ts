import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id_product: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name_product: string;

  @Column({ type: 'text', nullable: true })
  description_product: string;

  @ManyToOne(() => Category, category => category.id_category, {
    eager: true,
  })
  category: Category;

  @Column({ type: 'int', nullable: false })
  price_product: number;

  @Column({ type: 'bytea', nullable: true })
  image_product: Blob;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
