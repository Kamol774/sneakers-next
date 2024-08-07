import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import TopProductCard from './TopProductCard';
import { ProductsInquiry } from '../../types/product/product.input';
import { Product } from '../../types/product/product';
import { GET_PRODUCTS } from '../../../apollo/user/query';
import { useMutation, useQuery } from '@apollo/client';
import { T } from '../../types/common';
import { LIKE_TARGET_PRODUCT } from '../../../apollo/user/mutation';
import { Message } from '../../enums/common.enum';
import { sweetMixinErrorAlert, sweetTopSmallSuccessAlert } from '../../sweetAlert';

interface TopProductsProps {
	initialInput: ProductsInquiry;
}

const TopProducts = (props: TopProductsProps) => {
	const { initialInput } = props;
	const device = useDeviceDetect();
	const [topProducts, setTopProducts] = useState<Product[]>([]);

	/** APOLLO REQUESTS **/
	const [likeTargetProduct] = useMutation(LIKE_TARGET_PRODUCT);

	const {
		loading: getProductsLoading, //-> loading jarayoni yani backend dan data olish jarayonida qanaqadur animatsiyalarni korsatishimiz mumkun.
		data: getProductsData, //-> data kirib kelgandan keyin onComplete etapi ishga tushadi.
		error: getProductsError, //-> data kirib kelgunga qadar qandaydur errorlar hosil bolsa errorni korsatish.
		refetch: getProductsRefetch,
	} = useQuery(GET_PRODUCTS, {
		fetchPolicy: 'cache-and-network', //->
		variables: { input: initialInput }, //-> variable lar bu qaysi turdagi malumotlarni serverga yuborish
		notifyOnNetworkStatusChange: true, //-> va qayta malumotlar ozgarganda update qilishda bu mantiq ishlatiladi. va bullar hammasi options ichida mujassam boladi.
		onCompleted: (data: T) => {
			setTopProducts(data?.getProducts?.list); //-> backend dan birinchi data olinganda onComplete ishga tushadi.
		},
	});
	/** HANDLERS **/

	const likeProductHandler = async (user: T, id: string) => {
		try {
			if (!id) return;
			if (!user._id) throw new Error(Message.NOT_AUTHENTICATED);
			//execute likeTargetProduct Mutation
			await likeTargetProduct({ variables: { input: id } });

			// execute getProductsRefetch
			await getProductsRefetch({ input: initialInput });

			await sweetTopSmallSuccessAlert('success', 800);
		} catch (err: any) {
			console.log('Error, on likeTargetProduct', err.message);
			sweetMixinErrorAlert(err.message).then();
		}
	};

	if (device === 'mobile') {
		return (
			<Stack className={'top-products'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<span>Top products</span>
					</Stack>
					<Stack className={'card-box'}>
						<Swiper
							className={'top-product-swiper'}
							slidesPerView={'auto'}
							centeredSlides={true}
							spaceBetween={15}
							modules={[Autoplay]}
						>
							{topProducts.map((product: Product) => {
								return (
									<SwiperSlide className={'top-product-slide'} key={product?._id}>
										<TopProductCard product={product} likeProductHandler={likeProductHandler} />
									</SwiperSlide>
								);
							})}
						</Swiper>
					</Stack>
				</Stack>
			</Stack>
		);
	} else {
		return (
			<Stack className={'top-products'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							<span>Top products</span>
							<p>Check out our Top Products</p>
						</Box>
						<Box component={'div'} className={'right'}>
							<div className={'pagination-box'}>
								<WestIcon className={'swiper-top-prev'} />
								<div className={'swiper-top-pagination'}></div>
								<EastIcon className={'swiper-top-next'} />
							</div>
						</Box>
					</Stack>
					<Stack className={'card-box'}>
						<Swiper
							className={'top-product-swiper'}
							slidesPerView={'auto'}
							spaceBetween={15}
							modules={[Autoplay, Navigation, Pagination]}
							navigation={{
								nextEl: '.swiper-top-next',
								prevEl: '.swiper-top-prev',
							}}
							pagination={{
								el: '.swiper-top-pagination',
							}}
						>
							{topProducts.map((product: Product) => {
								return (
									<SwiperSlide className={'top-product-slide'} key={product?._id}>
										<TopProductCard product={product} likeProductHandler={likeProductHandler} />
									</SwiperSlide>
								);
							})}
						</Swiper>
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

TopProducts.defaultProps = {
	initialInput: {
		page: 1,
		limit: 8,
		sort: 'productRank',
		direction: 'DESC',
		search: {},
	},
};

export default TopProducts;
