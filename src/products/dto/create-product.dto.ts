import { Type } from 'class-transformer';
import { IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString({
    message: 'El nombre del producto es requerido',
  })
  public name: string;
  @Min(0, {
    message: 'El precio del producto debe ser mayor a cero',
  })
  @Type(() => Number)
  public price: number;
}
