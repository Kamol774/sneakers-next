import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Stack, Box, Modal, Divider, Button } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { productSize } from '../../config';
import { ProductBrand, ProductColor, ProductType } from '../../enums/product.enum';
import { ProductsInquiry } from '../../types/product/product.input';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'auto',
	bgcolor: 'background.paper',
	borderRadius: '12px',
	outline: 'none',
	boxShadow: 24,
};

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: '200px',
		},
	},
};

interface HeaderFilterProps {
	initialInput: ProductsInquiry;
}

const HeaderFilter = (props: HeaderFilterProps) => {
	const { initialInput } = props;
	const device = useDeviceDetect();
	const { t, i18n } = useTranslation('common');
	const [searchFilter, setSearchFilter] = useState<ProductsInquiry>(initialInput);
	const brandRef: any = useRef();
	const typeRef: any = useRef();
	const colorsRef: any = useRef();
	const router = useRouter();
	const [openAdvancedFilter, setOpenAdvancedFilter] = useState(false);
	const [openBrand, setOpenBrand] = useState(false);
	const [openType, setOpenType] = useState(false);
	const [openColors, setOpenColors] = useState(false);
	const [productType, setProductType] = useState<ProductType[]>(Object.values(ProductType));
	const [productBrand, setProductBrand] = useState<ProductBrand[]>(Object.values(ProductBrand));
	const [productColor, setProductColor] = useState<ProductColor[]>(Object.values(ProductColor));

	/** LIFECYCLES **/
	useEffect(() => {
		const clickHandler = (event: MouseEvent) => {
			if (!brandRef?.current?.contains(event.target)) {
				setOpenBrand(false);
			}

			if (!typeRef?.current?.contains(event.target)) {
				setOpenType(false);
			}

			if (!colorsRef?.current?.contains(event.target)) {
				setOpenColors(false);
			}
		};

		document.addEventListener('mousedown', clickHandler);

		return () => {
			document.removeEventListener('mousedown', clickHandler);
		};
	}, []);

	/** HANDLERS **/
	const advancedFilterHandler = (status: boolean) => {
		setOpenBrand(false);
		setOpenColors(false);
		setOpenType(false);
		setOpenAdvancedFilter(status);
	};

	const brandStateChangeHandler = () => {
		setOpenBrand((prev) => !prev);
		setOpenColors(false);
		setOpenType(false);
	};

	const typeStateChangeHandler = () => {
		setOpenType((prev) => !prev);
		setOpenBrand(false);
		setOpenColors(false);
	};

	const colorsStateChangeHandler = () => {
		setOpenColors((prev) => !prev);
		setOpenType(false);
		setOpenBrand(false);
	};

	const disableAllStateHandler = () => {
		setOpenColors(false);
		setOpenType(false);
		setOpenBrand(false);
	};

	const productBrandSelectHandler = useCallback(
		async (value: any) => {
			try {
				setSearchFilter({
					...searchFilter,
					search: {
						...searchFilter.search,
						brandList: [value],
					},
				});
				typeStateChangeHandler();
			} catch (err: any) {
				console.log('ERROR, productBrandSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const productTypeSelectHandler = useCallback(
		async (value: any) => {
			try {
				setSearchFilter({
					...searchFilter,
					search: {
						...searchFilter.search,
						typeList: [value],
					},
				});
				colorsStateChangeHandler();
			} catch (err: any) {
				console.log('ERROR, productTypeSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const productColorSelectHandler = useCallback(
		async (value: any) => {
			try {
				setSearchFilter({
					...searchFilter,
					search: {
						...searchFilter.search,
						colorsList: [value],
					},
				});
				setOpenColors(false);
			} catch (err: any) {
				console.log('ERROR, productColorSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const resetFilterHandler = () => {
		setSearchFilter(initialInput);
	};

	const pushSearchHandler = async () => {
		try {
			if (searchFilter?.search?.brandList?.length == 0) {
				delete searchFilter.search.brandList;
			}

			if (searchFilter?.search?.typeList?.length == 0) {
				delete searchFilter.search.typeList;
			}

			if (searchFilter?.search?.colorsList?.length == 0) {
				delete searchFilter?.search.colorsList;
			}

			if (searchFilter?.search?.options?.length == 0) {
				delete searchFilter.search.options;
			}

			if (!searchFilter?.search?.sizesRange) {
				delete searchFilter.search.sizesRange;
			}

			await router.push(
				`/product?input=${JSON.stringify(searchFilter)}`,
				`/product?input=${JSON.stringify(searchFilter)}`,
			);
		} catch (err: any) {
			console.log('ERROR, pushSearchHandler:', err);
		}
	};

	if (device === 'mobile') {
		return <div>HEADER FILTER MOBILE</div>;
	} else {
		return (
			<>
				<Stack className={'search-box'}>
					<Stack className={'select-box'}>
						<Box component={'div'} className={`box ${openBrand ? 'on' : ''}`} onClick={brandStateChangeHandler}>
							<span>{searchFilter?.search?.brandList ? searchFilter?.search?.brandList[0] : t('Brand')} </span>
							<ExpandMoreIcon />
						</Box>
						<Box component="div" className={`box ${openType ? 'on' : ''}`} onClick={typeStateChangeHandler}>
							<span> {searchFilter?.search?.typeList ? searchFilter?.search?.typeList[0] : t('Product type')} </span>
							<ExpandMoreIcon />
						</Box>
						<Box component="div" className={`box ${openColors ? 'on' : ''}`} onClick={colorsStateChangeHandler}>
							<span>
								{searchFilter?.search?.colorsList ? `${searchFilter?.search?.colorsList[0]} color` : t('Colors')}
							</span>
							<ExpandMoreIcon />
						</Box>
					</Stack>

					{/*MENU */}
					<div className={`filter-brand ${openBrand ? 'on' : ''}`} ref={brandRef}>
						{productBrand.map((brand: string) => {
							return (
								<div onClick={() => productBrandSelectHandler(brand)} key={brand}>
									<img src={`img/banner/brands/${brand}.svg`} alt="" />
									<span>{brand}</span>
								</div>
							);
						})}
					</div>

					<div className={`filter-type ${openType ? 'on' : ''}`} ref={typeRef}>
						{productType.map((type: string) => {
							return (
								<div onClick={() => productTypeSelectHandler(type)} key={type}>
									{' '}
									<img src={`/img/banner/types/${type.toLowerCase()}.jpg`} alt="" />
									<span>{type}</span>
								</div>
							);
						})}
					</div>
					<Divider className={'divider'} sx={{ mt: '20px', mb: '20px' }} />

					<div className={`filter-colors ${openColors ? 'on' : ''}`} ref={colorsRef}>
						{productColor.map((color: string) => {
							return (
								<span onClick={() => productColorSelectHandler(color)} key={color}>
									<img src={`/img/banner/colors/${color.toLowerCase()}.png`} alt="" />
									{/* <span>{color}</span> */}
								</span>
							);
						})}
					</div>

					<div className={'search-input-box'}>
						<img src="/img/icons/search.svg" alt="" />
						<input
							value={searchFilter?.search?.text ?? ''}
							type="text"
							placeholder={'What kind of sneakers looking for ?'}
							onChange={(e: any) => {
								setSearchFilter({
									...searchFilter,
									search: {
										...searchFilter.search,
										text: e.target.value,
									},
								});
							}}
						/>
					</div>
					<Divider className={'divider'} sx={{ mt: '20px', mb: '20px' }} />
					<div className={'bottom'}>
						<div onClick={resetFilterHandler}>
							<img src="/img/icons/reset.svg" alt="" />
							<span>Reset all filters</span>
						</div>
						<Button
							startIcon={<img src={'/img/icons/search.svg'} />}
							className={'search-btn'}
							onClick={pushSearchHandler}
						>
							Search
						</Button>
					</div>
				</Stack>
			</>
		);
	}
};

HeaderFilter.defaultProps = {
	initialInput: {
		page: 1,
		limit: 9,
		search: {
			sizesRange: {
				start: 18,
				end: 46,
			},
			pricesRange: {
				start: 0,
				end: 2000000,
			},
		},
	},
};

export default HeaderFilter;
