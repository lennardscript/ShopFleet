import { IsBase64, IsInt, IsOptional, IsPositive, IsString } from "class-validator";
export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name_product?: string;

  @IsString()
  @IsOptional()
  description_product?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  price_product?: number;
  
  @IsInt()
  @IsPositive()
  quantity?: number;

  @IsBase64()
  @IsOptional()
  image_product?: Blob;
}
