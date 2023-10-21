import { IsBase64, IsInt, IsOptional, IsPositive, IsString } from 'class-validator'

export class CreateProductDto {

  @IsString()
  name_product: string;

  @IsString()
  @IsOptional()
  description_product?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsInt()
  @IsPositive()
  price_product: number;

  @IsBase64()
  @IsOptional()
  image_product?: Blob;

}
