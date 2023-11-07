import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const category = await this.categoryRepository.findOneBy({
      name_category: createProductDto.category,
    });

    if (!category) {
      throw new BadRequestException('Category not found');
    }

    const product = this.productRepository.create({
      name_product: createProductDto.name_product,
      description_product: createProductDto.description_product,
      category,
      price_product: createProductDto.price_product,
      image_product: createProductDto.image_product,
    });
    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({ id_product: id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOneBy({ id_product: id });

    if (!product) {
      throw new BadRequestException('Product not found');
    }

    let category;
    if (updateProductDto.category) {
      category = await this.categoryRepository.findOneBy({
        name_category: updateProductDto.category,
      });

      if (!category) {
        throw new BadRequestException('Category not found');
      }
    }

    return await this.productRepository.save({
      ...product,
      ...updateProductDto,
      ...category,
    });
  }

  async remove(id: number) {
    return await this.productRepository.softDelete({ id_product: id });
  }
}
