import React, { useCallback, useEffect, useState } from 'react';
import {
	Stack,
	Typography,
	Checkbox,
	OutlinedInput,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Tooltip,
	IconButton,
} from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { ProductBrand, ProductColor, ProductSeason, ProductType } from '../../enums/product.enum';
import { ProductsInquiry } from '../../types/product/product.input';
import { useRouter } from 'next/router';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { productSize } from '../../config';
import RefreshIcon from '@mui/icons-material/Refresh';

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: '200px',
		},
	},
};

interface FilterType {
	searchFilter: ProductsInquiry;
	setSearchFilter: any;
	initialInput: ProductsInquiry;
}

const Filter = (props: FilterType) => {
	const { searchFilter, setSearchFilter, initialInput } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const [productBrand, setProductBrand] = useState<ProductBrand[]>(Object.values(ProductBrand));
	const [productColor, setProductColor] = useState<ProductColor[]>(Object.values(ProductColor));
	const [productType, setProductType] = useState<ProductType[]>(Object.values(ProductType));
	const [productSeason, setProductSeason] = useState<ProductSeason[]>(Object.values(ProductSeason));
	const [searchText, setSearchText] = useState<string>('');
	const [showMore, setShowMore] = useState<boolean>(false);

	/** LIFECYCLES **/
	useEffect(() => {
		if (searchFilter?.search?.brandList?.length == 0) {
			delete searchFilter.search.brandList;
			setShowMore(false);
			router
				.push(
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,

					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.typeList?.length == 0) {
			delete searchFilter.search.typeList;
			router
				.push(
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.colorsList?.length == 0) {
			delete searchFilter.search.colorsList;
			router
				.push(
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.options?.length == 0) {
			delete searchFilter.search.options;
			router
				.push(
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.seasonList?.length == 0) {
			delete searchFilter.search.seasonList;
			router
				.push(
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.brandList) setShowMore(true);
	}, [searchFilter]);

	/** HANDLERS **/
	const productBrandSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								brandList: [...(searchFilter?.search?.brandList || []), value],
							},
						})}`,
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								brandList: [...(searchFilter?.search?.brandList || []), value],
							},
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.brandList?.includes(value)) {
					await router.push(
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								brandList: searchFilter?.search?.brandList?.filter((item: string) => item !== value),
							},
						})}`,
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								brandList: searchFilter?.search?.brandList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.typeList?.length == 0) {
					alert('error');
				}

				console.log('productBrandSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, productBrandSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const productTypeSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/product?input=${JSON.stringify({
							...searchFilter, // spread operator orqali amalga oshirib yangi referencega togrilab olyabmiz
							search: {
								...searchFilter.search,
								typeList: [...(searchFilter?.search?.typeList || []), value],
							},
						})}`,
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								typeList: [...(searchFilter?.search?.typeList || []), value],
							},
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.typeList?.includes(value)) {
					await router.push(
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								typeList: searchFilter?.search?.typeList?.filter((item: string) => item !== value),
							},
						})}`,
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								typeList: searchFilter?.search?.typeList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.typeList?.length == 0) {
					alert('error');
				}

				console.log('productTypeSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, productTypeSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const productColorSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								colorsList: [...(searchFilter?.search?.colorsList || []), value],
							},
						})}`,
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								colorsList: [...(searchFilter?.search?.colorsList || []), value],
							},
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.colorsList?.includes(value)) {
					await router.push(
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								colorsList: searchFilter?.search?.colorsList?.filter((item: string) => item !== value),
							},
						})}`,
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								colorsList: searchFilter?.search?.colorsList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.typeList?.length == 0) {
					alert('error');
				}

				console.log('productColorSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, productColorSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const productSeasonSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/product?input=${JSON.stringify({
							...searchFilter, // spread operator orqali amalga oshirib yangi referencega togrilab olyabmiz
							search: {
								...searchFilter.search,
								seasonList: [...(searchFilter?.search?.seasonList || []), value],
							},
						})}`,
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								seasonList: [...(searchFilter?.search?.seasonList || []), value],
							},
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.seasonList?.includes(value)) {
					await router.push(
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								seasonList: searchFilter?.search?.seasonList?.filter((item: string) => item !== value),
							},
						})}`,
						`/product?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								seasonList: searchFilter?.search?.seasonList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.seasonList?.length == 0) {
					alert('error');
				}

				console.log('productSeasonSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, productSeasonSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const productSizeHandler = useCallback(
		async (e: any, type: string) => {
			const value = e.target.value;

			if (type == 'start') {
				await router.push(
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							sizesRange: {
								...searchFilter.search.sizesRange,
								start: value,
							},
						},
					})}`,
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							sizesRange: {
								...searchFilter.search.sizesRange,
								start: value,
							},
						},
					})}`,
					{ scroll: false },
				);
			} else {
				await router.push(
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							sizesRange: { ...searchFilter.search.sizesRange, end: value },
						},
					})}`,
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							sizesRange: { ...searchFilter.search.sizesRange, end: value },
						},
					})}`,
					{ scroll: false },
				);
			}
		},
		[searchFilter],
	);

	const productPriceHandler = useCallback(
		async (value: number, type: string) => {
			if (type == 'start') {
				await router.push(
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: {
								...searchFilter.search.pricesRange,
								start: value * 1,
							},
						},
					})}`,
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: {
								...searchFilter.search.pricesRange,
								start: value * 1,
							},
						},
					})}`,
					{ scroll: false },
				);
			} else {
				await router.push(
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: {
								...searchFilter.search.pricesRange,
								end: value * 1,
							},
						},
					})}`,
					`/product?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: {
								...searchFilter.search.pricesRange,
								end: value * 1,
							},
						},
					})}`,
					{ scroll: false },
				);
			}
		},
		[searchFilter],
	);

	const refreshHandler = async () => {
		try {
			setSearchText('');
			await router.push(
				`/product?input=${JSON.stringify(initialInput)}`,
				`/product?input=${JSON.stringify(initialInput)}`,
				{ scroll: false },
			);
		} catch (err: any) {
			console.log('ERROR, refreshHandler:', err);
		}
	};

	if (device === 'mobile') {
		return <div>PRODUCTS FILTER</div>;
	} else {
		return (
			<Stack className={'filter-main'}>
				<Stack className={'find-your-sneakers'} mb={'40px'}>
					<Typography className={'title-main'}>Find Your Sneakers</Typography>
					<Stack className={'input-box'}>
						<OutlinedInput
							value={searchText}
							type={'text'}
							className={'search-input'}
							placeholder={'What are you looking for?'}
							onChange={(e: any) => setSearchText(e.target.value)}
							onKeyDown={(event: any) => {
								if (event.key == 'Enter') {
									setSearchFilter({
										...searchFilter,
										search: { ...searchFilter.search, text: searchText },
									});
								}
							}}
							endAdornment={
								<>
									<img src={'/img/icons/search_icon.png'} alt={''} />
									<CancelRoundedIcon
										onClick={() => {
											setSearchText('');
											setSearchFilter({
												...searchFilter,
												search: { ...searchFilter.search, text: '' },
											});
										}}
									/>
								</>
							}
						/>
						<Tooltip title="Reset">
							<IconButton onClick={refreshHandler}>
								<RefreshIcon />
							</IconButton>
						</Tooltip>
					</Stack>
				</Stack>
				<Stack className={'find-your-sneakers'} mb={'30px'}>
					<p className={'title'} style={{ textShadow: '0px 3px 4px #b9b9b9' }}>
						Brand
					</p>
					<Stack
						className={`product-brand`}
						style={{ height: showMore ? '283px' : '115px' }}
						onMouseEnter={() => setShowMore(true)}
						onMouseLeave={() => {
							if (!searchFilter?.search?.brandList) {
								setShowMore(false);
							}
						}}
					>
						{productBrand.map((brand: string) => {
							return (
								<Stack className={'input-box'} key={brand}>
									<Checkbox
										id={brand}
										className="product-checkbox"
										color="default"
										size="small"
										value={brand}
										checked={(searchFilter?.search?.brandList || []).includes(brand as ProductBrand)}
										onChange={productBrandSelectHandler}
									/>
									<label htmlFor={brand} style={{ cursor: 'pointer' }}>
										<Typography className="product-type">{brand}</Typography>
									</label>
								</Stack>
							);
						})}
					</Stack>
				</Stack>
				<Stack className={'find-your-sneakers shoes-type'} mb={'30px'}>
					<p className={'title'} style={{ textShadow: '0px 3px 4px #b9b9b9' }}>
						Product Type
					</p>
					{productType.map((type: string) => (
						<Stack className={'input-box'} key={type}>
							<Checkbox
								id={type}
								className="product-checkbox"
								color="default"
								size="small"
								value={type}
								onChange={productTypeSelectHandler}
								checked={(searchFilter?.search?.typeList || []).includes(type as ProductType)}
							/>
							<label style={{ cursor: 'pointer' }}>
								<Typography className="product_type">{type}</Typography>
							</label>
						</Stack>
					))}
				</Stack>
				<Stack className={'find-your-sneakers shoes-color'} mb={'30px'}>
					<p className={'title'} style={{ textShadow: '0px 3px 4px #b9b9b9' }}>
						Colors
					</p>
					<Stack
						className={`p-color`}
						style={{ height: showMore ? '430px' : '115px' }}
						onMouseEnter={() => setShowMore(true)}
						onMouseLeave={() => {
							if (!searchFilter?.search?.colorsList) {
								setShowMore(false);
							}
						}}
					>
						{productColor.map((color: string) => {
							return (
								<Stack className={'input-box'} key={color}>
									<Checkbox
										id={color}
										className="product-checkbox"
										color="default"
										size="small"
										value={color}
										checked={(searchFilter?.search?.colorsList || []).includes(color as ProductColor)}
										onChange={productColorSelectHandler}
									/>
									<label htmlFor={color} style={{ cursor: 'pointer' }}>
										<Typography className="product-color">{color}</Typography>
									</label>
								</Stack>
							);
						})}
					</Stack>
				</Stack>
				<Stack className={'find-your-sneakers'} mb={'30px'}>
					<p className={'title'} style={{ textShadow: '0px 3px 4px #b9b9b9' }}>
						Choose the Season
					</p>
					{productSeason.map((season: string) => (
						<Stack className={'input-box'} key={season}>
							<Checkbox
								id={season}
								className="product-checkbox"
								color="default"
								size="small"
								value={season}
								onChange={productSeasonSelectHandler}
								checked={(searchFilter?.search?.seasonList || []).includes(season as ProductSeason)}
							/>
							<label style={{ cursor: 'pointer' }}>
								<Typography className="product_season">{season}</Typography>
							</label>
						</Stack>
					))}
				</Stack>
				{/* <Stack className={'find-your-sneakers'} mb={'30px'}>
					<Typography className={'title'}>Size Range</Typography>
					<Stack className="size-input">
						<FormControl>
							<InputLabel id="demo-simple-select-label">Min</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={searchFilter?.search?.sizesRange?.start ?? 0}
								label="Min"
								onChange={(e: any) => productSizeHandler(e, 'start')}
								MenuProps={MenuProps}
							>
								{productSize.map((size: number) => (
									<MenuItem value={size} disabled={(searchFilter?.search?.sizesRange?.end || 0) < size} key={size}>
										{size}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<div className="central-divider"></div>
						<FormControl>
							<InputLabel id="demo-simple-select-label">Max</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={searchFilter?.search?.sizesRange?.end ?? 46}
								label="Max"
								onChange={(e: any) => productSizeHandler(e, 'end')}
								MenuProps={MenuProps}
							>
								{productSize.map((size: number) => (
									<MenuItem value={size} disabled={(searchFilter?.search?.sizesRange?.start || 0) > size} key={size}>
										{size}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Stack>
				</Stack> */}
				<Stack className={'find-your-sneakers'}>
					<Typography className={'title'}>Price Range</Typography>
					<Stack className="square-input">
						<input
							type="number"
							placeholder="$ min"
							min={0}
							value={searchFilter?.search?.pricesRange?.start ?? 0}
							onChange={(e: any) => {
								if (e.target.value >= 0) {
									productPriceHandler(e.target.value, 'start');
								}
							}}
						/>
						<div className="central-divider"></div>
						<input
							type="number"
							placeholder="$ max"
							value={searchFilter?.search?.pricesRange?.end ?? parseInt('2000000')}
							onChange={(e: any) => {
								if (e.target.value >= 0) {
									productPriceHandler(e.target.value, 'end');
								}
							}}
						/>
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

export default Filter;
