import React, { useCallback, useState } from 'react';
import { NextPage } from 'next';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { logIn, signUp } from '../../libs/auth';
import { sweetMixinErrorAlert } from '../../libs/sweetAlert';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import withLayoutJoin from '../../libs/components/layout/LayoutJoin';
import moment from 'moment';

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

const Join: NextPage = () => {
	const router = useRouter();
	const device = useDeviceDetect();
	const [input, setInput] = useState({ nick: '', password: '', phone: '', type: 'USER' });
	const [loginView, setLoginView] = useState<boolean>(true);

	/** HANDLERS **/
	const viewChangeHandler = (state: boolean) => {
		setLoginView(state);
	};

	const checkUserTypeHandler = (e: any) => {
		const checked = e.target.checked;
		if (checked) {
			const value = e.target.name;
			handleInput('type', value);
		} else {
			handleInput('type', 'USER');
		}
	};

	const handleInput = useCallback((name: any, value: any) => {
		setInput((prev) => {
			return { ...prev, [name]: value };
		});
	}, []);

	const doLogin = useCallback(async () => {
		console.warn(input);
		try {
			await logIn(input.nick, input.password);
			await router.push(`${router.query.referrer ?? '/'}`);
		} catch (err: any) {
			// await sweetMixinErrorAlert(err.message);
		}
	}, [input]);

	const doSignUp = useCallback(async () => {
		console.warn(input);
		try {
			await signUp(input.nick, input.password, input.phone, input.type);
			await router.push(`${router.query.referrer ?? '/'}`);
		} catch (err: any) {
			// await sweetMixinErrorAlert(err.message);
		}
	}, [input]);

	console.log('+input: ', input);

	if (device === 'mobile') {
		return <div>LOGIN MOBILE</div>;
	} else {
		return (
			<Stack className={'join-page'}>
				<Stack className={'container'}>
					<Stack className={'main'}>
						<Stack className={'login'}>
							<input
								type="text"
								placeholder={'Enter Nickname'}
								onChange={(e) => handleInput('nick', e.target.value)}
								required={true}
								onKeyDown={(event) => {
									if (event.key == 'Enter' && loginView) doLogin();
									if (event.key == 'Enter' && !loginView) doSignUp();
								}}
							/>
						</Stack>
						<Stack className={'signup'}>
							<input
								type="text"
								placeholder={'Enter Password'}
								onChange={(e) => handleInput('password', e.target.value)}
								required={true}
								onKeyDown={(event) => {
									if (event.key == 'Enter' && loginView) doLogin();
									if (event.key == 'Enter' && !loginView) doSignUp();
								}}
							/>
						</Stack>
						<Stack>
							{!loginView && (
								<div className={'input-box phone'}>
									<input
										type="text"
										placeholder={'Enter Phone'}
										onChange={(e) => handleInput('phone', e.target.value)}
										required={true}
										onKeyDown={(event) => {
											if (event.key == 'Enter') doSignUp();
										}}
									/>
								</div>
							)}
						</Stack>
						<Box className={'register'}>
							{!loginView && (
								<div className={'type-option'}>
									<span className={'text'}>I want to be registered as:</span>
									<div>
										<FormGroup>
											<FormControlLabel
												control={
													<Checkbox
														size="small"
														name={'USER'}
														onChange={checkUserTypeHandler}
														checked={input?.type == 'USER'}
													/>
												}
												label="User"
											/>
										</FormGroup>
										<FormGroup>
											<FormControlLabel
												control={
													<Checkbox
														size="small"
														name={'AGENT'}
														onChange={checkUserTypeHandler}
														checked={input?.type == 'AGENT'}
													/>
												}
												label="Agent"
											/>
										</FormGroup>
									</div>
								</div>
							)}

							{loginView && (
								<div className={'remember-info'}>
									<FormGroup>
										<FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember me" />
									</FormGroup>
									<a>Lost your password?</a>
								</div>
							)}

							{loginView ? (
								<Button
									variant="contained"
									endIcon={<img src="/img/icons/rightup.svg" alt="" />}
									disabled={input.nick == '' || input.password == ''}
									onClick={doLogin}
								>
									LOGIN
								</Button>
							) : (
								<Button
									variant="contained"
									disabled={input.nick == '' || input.password == '' || input.phone == '' || input.type == ''}
									onClick={doSignUp}
									endIcon={<img src="/img/icons/rightup.svg" alt="" />}
								>
									SIGNUP
								</Button>
							)}
						</Box>
						<Box className={'ask-info'}>
							{loginView ? (
								<p>
									Not registered yet?
									<b
										onClick={() => {
											viewChangeHandler(false);
										}}
									>
										SIGNUP
									</b>
								</p>
							) : (
								<p>
									Have account?
									<b onClick={() => viewChangeHandler(true)}> LOGIN</b>
								</p>
							)}
						</Box>
					</Stack>
					<Stack className={'footer-mini'}>
						<span>© Sneakers - All rights reserved. Sneakers {moment().year()}</span>
						<span>Privacy · Terms · Sitemap</span>
					</Stack>
				</Stack>
			</Stack>
		);
	}
};
export default withLayoutJoin(Join);