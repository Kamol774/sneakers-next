import React from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Box, Stack } from '@mui/material';

const Socials = () => {
	const device = useDeviceDetect();

	if (device == 'mobile') {
		return <Stack className={'video-frame'}></Stack>;
	} else {
		return (
			<Stack className={'big-frame'}>
				<Stack className={'container'}>
					<a href="https://www.instagram.com/khalilov.93/">
						<img src="/img/icons/instagram.svg" alt="" />
					</a>
					<a href="https://www.facebook.com/kamoliddin.xalilov?locale=ru_RU">
						<img src="/img/icons/facebook.svg" alt="" />
					</a>
					<a href="youtube.com">
						<img src="/img/icons/youtube1.svg" alt="" />
					</a>
					<a href="https://telegram.me/kkhalilov93">
						<img src="/img/icons/telegram.svg" alt="" />
					</a>
					<a href="twitter.com">
						<img src="/img/icons/twitter.svg" alt="" />
					</a>
				</Stack>
			</Stack>
		);
	}
};

export default Socials;
