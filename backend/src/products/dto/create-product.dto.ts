import { IsBase64, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator'

export class CreateProductDto {

  @IsNotEmpty()
  @IsString()
  name_product: string;

  @IsString()
  @IsOptional()
  description_product?: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  price_product: number;

  @IsBase64()
  @IsOptional()
  image_product?: Blob;

}
