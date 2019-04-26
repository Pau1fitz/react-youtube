import { createGlobalStyle } from 'styled-components/macro'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
	${normalize()};

	body {
		font-family: 'Roboto', sans-serif;
	}

	html, body, div, span,
	h1, h2, p, a, ul, li,
	header, main, section,
	button {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	html {
		height: 100%;
		touch-action: manipulation;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-tap-highlight-color: transparent;
		-ms-overflow-style: -ms-autohiding-scrollbar;
	}

	body {
		display: flex;
		flex-direction: column;
		height: 100%;
		font-size: 16px;
		line-height: 1.345;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	#root {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	a {
		color: inherit;
	}

	button {
		font-family: inherit;
		line-height: normal;
		border-radius: 0;
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;
	}

	input {
		font-family: inherit;
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;
	}
`;
