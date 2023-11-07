import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {

  @IsNotEmpty()
  @IsString()
  name_category: string

}
