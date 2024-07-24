import { ProductType, ProductStatus, ProductBrand, ProductColor, ProductSeason } from '../../enums/product.enum';
import { Direction } from '../../enums/common.enum';

export interface ProductInput {
	productType: ProductType;
	productBrand: ProductBrand;
	productTitle: string;
	productPrice: number;
	productSize: number;
	productColor: ProductColor;
	productSeason: ProductSeason;
	productImages: string[];
	productDesc?: string;
	memberId?: string;
}

interface Range {
	start?: number;
	end?: number;
}

interface PISearch {
	memberId?: string;
	typeList?: ProductType[];
	options?: string[];
	pricesRange?: Range;
	sizesRange?: Range;
	brandList?: ProductBrand[];
	colorsList?: ProductColor[];
	seasonList?: ProductSeason[];
	text?: string;
}

export interface ProductsInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: PISearch;
}

interface APISearch {
	productStatus?: ProductStatus;
}

export interface AgentProductsInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: APISearch;
}

interface ALPISearch {
	productStatus?: ProductStatus;
	productBrandList?: ProductBrand[];
}

export interface AllProductsInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: ALPISearch;
}

interface OrdinaryInquiry {
	page: number;
	limit: number;
}
