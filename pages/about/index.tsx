import React from 'react';
import { NextPage } from 'next';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';
import withLayoutBasic from '../../libs/components/layout/LayoutBasic';
import { Stack, Box } from '@mui/material';

const About: NextPage = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>ABOUT PAGE MOBILE</div>;
	} else {
		return (
			<Stack className={'about-page'}>
				<Stack className={'intro'}>
					<Stack className={'container'}>
						<Stack className={'left'}>
							<strong>We're on a Mission to Change View of Sneakers Brands.</strong>
						</Stack>
						<Stack className={'right'}>
							<p>
								Sneakers are versatile shoes designed for both casual wear and sports, characterized by their flexible
								rubber soles and comfortable build1. They have evolved from simple athletic footwear to a significant
								cultural phenomenon, influencing fashion and lifestyle trends worldwide.
								<br />
								<br />
								Sneakers can be worn for various activities, from casual outings to sports, making them a practical and
								stylish option. Their breathable materials also help keep feet cool and dry, enhancing overall foot
								health.
							</p>
							<Stack className={'boxes'}>
								<div className={'box'}>
									<div>
										<img src="/img/icons/garden.svg" alt="" />
									</div>
									<span>Modern style</span>
									<p>Color-blocked and brightly-colored sneakers are in vogue, adding a vibrant touch to any outfit.</p>
								</div>
								<div className={'box'}>
									<div>
										<img src="/img/icons/securePayment.svg" alt="" />
									</div>
									<span>Secure Payment</span>
									<p>
										Digital wallets like Apple Pay, Google Pay, and PayPal offer additional layers of security, such as
										encryption and tokenization, which help protect your financial information.
									</p>
								</div>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
				<Stack className={'statistics'}>
					<Stack className={'container'}>
						<Stack className={'banner'}>
							<img src="/img/banner/sneakers.png" alt="" />
						</Stack>
						<Stack className={'info'}>
							<Box component={'div'}>
								<strong>4M</strong>
								<p>Award Winning</p>
							</Box>
							<Box component={'div'}>
								<strong>12K</strong>
								<p>Product Ready</p>
							</Box>
							<Box component={'div'}>
								<strong>20M</strong>
								<p>Happy Customer</p>
							</Box>
						</Stack>
					</Stack>
				</Stack>
				<Stack className={'agents'}>
					<Stack className={'container'}>
						<span className={'title'}>Our Exclusive Agents</span>
						<p className={'desc'}>Aliquam lacinia diam quis lacus euismod</p>
						<Stack className={'wrap'}></Stack>
					</Stack>
				</Stack>
				<Stack className={'options'}>
					<img src="/img/banner/main-banner.jpg" alt="" className={'about-banner'} />
					<Stack className={'container'}>
						<strong>Let’s find the right selling option for you</strong>
						<Stack>
							<div className={'icon-box'}>
								<img src="/img/icons/security.svg" alt="" />
							</div>
							<div className={'text-box'}>
								<span>Product Management</span>
								<p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
							</div>
						</Stack>
						<Stack>
							<div className={'icon-box'}>
								<img src="/img/icons/keywording.svg" alt="" />
							</div>
							<div className={'text_-box'}>
								<span>Product Management</span>
								<p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
							</div>
						</Stack>
						<Stack>
							<div className={'icon-box'}>
								<img src="/img/icons/investment.svg" alt="" />
							</div>
							<div className={'text-box'}>
								<span>Product Management</span>
								<p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
							</div>
						</Stack>
						<Stack className={'btn'}>
							Learn More
							<img src="/img/icons/rightup.svg" alt="" />
						</Stack>
					</Stack>
				</Stack>
				<Stack className={'partners'}>
					<Stack className={'container'}>
						<span>Trusted bu the world's best</span>
						<Stack className={'wrap'}>
							<img src="/img/icons/brands/amazon.svg" alt="" />
							<img src="/img/icons/brands/amd.svg" alt="" />
							<img src="/img/icons/brands/cisco.svg" alt="" />
							<img src="/img/icons/brands/dropcam.svg" alt="" />
							<img src="/img/icons/brands/spotify.svg" alt="" />
						</Stack>
					</Stack>
				</Stack>
				<Stack className={'help'}>
					<Stack className={'container'}>
						<Box component={'div'} className={'left'}>
							<strong>Need help? Talk to our expert.</strong>
							<p>Talk to our experts or Browse through more products.</p>
						</Box>
						<Box component={'div'} className={'right'}>
							<div className={'white'}>
								Contact Us
								<img src="/img/icons/rightup.svg" alt="" />
							</div>
							<div className={'black'}>
								<img src="/img/icons/call.svg" alt="" />
								88 246 7774
							</div>
						</Box>
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

export default withLayoutBasic(About);
