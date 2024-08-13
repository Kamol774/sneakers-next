import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Box, Container, Stack } from '@mui/material';
import { brown, green } from '@mui/material/colors';
import { NextPage } from 'next';
import withLayoutMain from '../libs/components/layout/LayoutHome';
import Socials from '../libs/components/homepage/Socials';
import TrendProducts from '../libs/components/homepage/TrendProducts';
import Advertisement from '../libs/components/homepage/Advertisement';
import useDeviceDetect from '../libs/hooks/useDeviceDetect';
import TopAgents from '../libs/components/homepage/TopAgents';
import PopularProducts from '../libs/components/homepage/PopularProducts';
import TopProducts from '../libs/components/homepage/TopProducts';
import CommunityBoards from '../libs/components/homepage/CommunityBoards';
import Events from '../libs/components/homepage/Events';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});
const Home: NextPage = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return (
			<Stack>
				<Stack flexDirection={'column'}>
					<Stack>
						<Socials />
						<TrendProducts />
						<PopularProducts />
					</Stack>
				</Stack>
			</Stack>
		);
	} else {
		return (
			<Stack className={'home-page'}>
				<Socials />
				<TrendProducts />
				<PopularProducts />
				<Advertisement />
				<TopProducts />
				<TopAgents />
				<Events />
				<CommunityBoards />
			</Stack>
		);
	}
};

export default withLayoutMain(Home);
