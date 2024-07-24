import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import Head from 'next/head';
import Top from '../Top';
import Footer from '../Footer';
import { Stack } from '@mui/material';
import { getJwtToken, updateUserInfo } from '../../auth';
import Chat from '../Chat';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '../../../apollo/store';
import { useTranslation } from 'next-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const withLayoutBasic = (Component: any) => {
	return (props: any) => {
		const router = useRouter();
		const { t, i18n } = useTranslation('common');
		const device = useDeviceDetect();
		const [authHeader, setAuthHeader] = useState<boolean>(false);
		const user = useReactiveVar(userVar);

		const memoizedValues = useMemo(() => {
			let title = '',
				desc = '',
				bgImage = '';

			switch (router.pathname) {
				case '/product':
					title = 'Product Search';
					desc = 'You can find all our products here!';
					bgImage = '/img/banner/product2.png';
					break;
				case '/agent':
					title = 'Agents';
					desc = 'Dealers / Sellers';
					bgImage = '/img/banner/about.png';
					break;
				case '/agent/detail':
					title = 'Agent Page';
					desc = 'Home / For Rent';
					bgImage = '/img/banner/my.jpg';
					break;
				case '/mypage':
					title = 'my page';
					desc = 'Profile / Info';
					bgImage = '/img/banner/mypage.jpg';
					break;
				case '/community':
					title = 'Community';
					desc = 'Recommendations / News';
					bgImage = '/img/banner/product.webp';
					break;
				case '/community/detail':
					title = 'Community Detail';
					desc = 'Detail / info';
					bgImage = '/img/banner/product.webp';
					break;
				case '/cs':
					title = 'Customer Service';
					desc = 'We always ready to help you!';
					bgImage = '/img/banner/cs.jpg';
					break;
				case '/member':
					title = 'Member Page';
					desc = 'Detail / Info';
					bgImage = '/img/banner/member.jpg';
					break;
				case '/about':
					title = 'About Us';
					desc = 'We are glad to see you!';
					bgImage = '/img/banner/main-ban.jpg';
				default:
					break;
			}

			return { title, desc, bgImage };
		}, [router.pathname]);

		/** LIFECYCLES **/
		useEffect(() => {
			const jwt = getJwtToken();
			if (jwt) updateUserInfo(jwt);
		}, []);

		/** HANDLERS **/

		if (device == 'mobile') {
			return (
				<>
					<Head>
						<title>Sneakers</title>
						<meta name={'title'} content={`Sneakers`} />
					</Head>
					<Stack id="mobile-wrap">
						<Stack id={'top'}>
							<Top />
						</Stack>

						<Stack id={'main'}>
							<Component {...props} />
						</Stack>

						<Stack id={'footer'}>
							<Footer />
						</Stack>
					</Stack>
				</>
			);
		} else {
			return (
				<>
					<Head>
						<title>Sneakers</title>
						<meta name={'title'} content={`Sneakers`} />
					</Head>
					<Stack id="pc-wrap">
						<Stack id={'top'}>
							<Top />
						</Stack>

						<Stack
							className={`header-basic ${authHeader && 'auth'}`}
							style={{
								backgroundImage: `url(${memoizedValues.bgImage})`,
								backgroundSize: 'cover',
								boxShadow: 'inset 10px 40px 150px 40px rgb(24 22 36)',
							}}
						>
							<Stack className={'container'}>
								<strong>{t(memoizedValues.title)}</strong>
								<span>{t(memoizedValues.desc)}</span>
							</Stack>
						</Stack>

						<Stack id={'main'}>
							<Component {...props} />
						</Stack>

						<Chat />

						<Stack id={'footer'}>
							<Footer />
						</Stack>
					</Stack>
				</>
			);
		}
	};
};

export default withLayoutBasic;
