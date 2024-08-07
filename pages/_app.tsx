import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { light } from '../scss/MaterialTheme';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';
import { useState } from 'react';
import '../scss/app.scss';
import '../scss/pc/main.scss';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }: AppProps) => {
	//@ts-ignore
	const [theme, setTheme] = useState(createTheme(light));
	//@ts-ignore
	const client = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />;
			</ThemeProvider>
		</ApolloProvider>
	);
};
export default appWithTranslation(App);

// next-i18 multiple language  integration helper

// Apollo -> server va client side oraligida graphql connection ni amalga oshirib beruvchi package
