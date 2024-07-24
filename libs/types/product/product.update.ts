import {
  ProductType,
  ProductStatus,
  ProductBrand,
  ProductColor,
  ProductSeason,
} from "../../enums/product.enum";

export interface ProductUpdate {
  _id: string;
  productType?: ProductType;
  productStatus?: ProductStatus;
  productBrand?: ProductBrand;
  productTitle?: string;
  productPrice?: number;
  productSize?: number;
  productColor?: ProductColor;
  productSeason?: ProductSeason;
  productImages?: string[];
  productDesc?: string;
  soldAt?: Date;
  deletedAt?: Date;
}
