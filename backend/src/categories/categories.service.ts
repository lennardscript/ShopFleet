import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto)
    return this.categoryRepository.save(category);
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: number) {
    return await this.categoryRepository.findOneBy({ id_category: id });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepository.findOneBy({ id_category: id });
  }

  async remove(id: number) {
    return await this.categoryRepository.softDelete({ id_category: id });
  }
}
