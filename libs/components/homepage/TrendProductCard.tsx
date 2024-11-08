import React from 'react';
import { Stack, Box, Divider, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../types/product/product';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { REACT_APP_API_URL } from '../../config';
import { useRouter } from 'next/router';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '../../../apollo/store';

interface TrendProductCardProps {
	product: Product;
	likeProductHandler: any;
}

const TrendProductCard = (props: TrendProductCardProps) => {
	const { product, likeProductHandler } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const user = useReactiveVar(userVar);

	/** HANDLERS **/
	const pushDetailHandler = async (productId: string) => {
		console.log('ID:', productId);
		await router.push({
			pathname: '/product/detail',
			query: { id: productId },
		});
	};

	if (device === 'mobile') {
		return (
			<Stack className="trend-card-box" key={product?._id}>
				<Box
					component={'div'}
					className={'card-img'}
					style={{
						backgroundImage: `url(${REACT_APP_API_URL}/${product?.productImages[0]})`,
					}}
					onClick={() => {
						pushDetailHandler(product?._id);
					}}
				>
					<div>${product?.productPrice}</div>
				</Box>
				<Box component={'div'} className={'info'}>
					<strong
						className={'title'}
						onClick={() => {
							pushDetailHandler(product?._id);
						}}
					>
						{product?.productTitle}
					</strong>
					<p className={'desc'}>{product?.productDesc ?? 'no description'}</p>
					<div className={'options'}>
						<div className="mob">
							<img src="/img/icons/season.svg" alt="" />
							<span>{product?.productSeason} season</span>
						</div>
						<div className="mob">
							{/* <img src="/img/icons/color.svg" alt="" className="color-img" /> */}
							<span>{product?.productColor} color</span>
						</div>
						<div className="mob">
							<img src="/img/icons/expand.svg" alt="" />
							<span>{product?.productSize} size</span>
						</div>
					</div>
					<Divider sx={{ mt: '15px', mb: '17px' }} />
					<div className={'bott'}>
						<div className="view-like-box">
							<IconButton color={'default'}>
								<RemoveRedEyeIcon />
							</IconButton>
							<Typography className="view-cnt">{product?.productViews}</Typography>
							<IconButton color={'default'} onClick={() => likeProductHandler(user, product?._id)}>
								{product?.meLiked && product?.meLiked[0]?.myFavorite ? (
									<FavoriteIcon style={{ color: 'red' }} />
								) : (
									<FavoriteIcon />
								)}
							</IconButton>
							<Typography className="view-cnt">{product?.productLikes}</Typography>
						</div>
					</div>
				</Box>
			</Stack>
		);
	} else {
		return (
			<Stack className="trend-card-box" key={product?._id}>
				<Box
					component={'div'}
					className={'card-img'}
					style={{
						backgroundImage: `url(${REACT_APP_API_URL}/${product?.productImages[0]})`,
					}}
					onClick={() => {
						pushDetailHandler(product?._id);
					}}
				></Box>
				<Box component={'div'} className={'info'}>
					<strong
						className={'title'}
						onClick={() => {
							pushDetailHandler(product?._id);
						}}
					>
						{product?.productTitle}
					</strong>
					<p className={'desc'}>{product?.productDesc ?? 'no description'}</p>
					<div className={'option-season'}>
						{/* <img src="/img/icons/season.png" alt="" /> */}
						<span>For {product?.productSeason} season</span>
					</div>
					<div className={'options'}>
						<div>
							<img src="/img/icons/color.svg" alt="" />
							<span>{product?.productColor} color</span>
						</div>
						<div>
							<img src="/img/icons/size.webp" alt="" />
							<span>size: {product?.productSize}</span>
						</div>
					</div>
					<Divider sx={{ mt: '15px', mb: '17px' }} />
					<div className={'bott'}>
						<div className={'price'}>₩ {product?.productPrice}</div>

						<div className="view-like-box">
							<IconButton color={'default'}>
								<RemoveRedEyeIcon />
							</IconButton>
							<Typography className="view-cnt">{product?.productViews}</Typography>
							<IconButton color={'default'} onClick={() => likeProductHandler(user, product?._id)}>
								{product?.meLiked && product?.meLiked[0]?.myFavorite ? (
									<FavoriteIcon style={{ color: 'red' }} />
								) : (
									<FavoriteIcon />
								)}
							</IconButton>
							<Typography className="view-cnt">{product?.productLikes}</Typography>
						</div>
					</div>
				</Box>
			</Stack>
		);
	}
};

export default TrendProductCard;
