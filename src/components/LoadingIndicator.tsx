import styled from 'styled-components/macro';
import { parseToRgb } from 'polished';
import { RgbaColor } from 'polished/lib/types/color';

// IMPORTANT:
// Adapts the [data-loading-indicator] CSS implementation in public/critical.css based on props

type Props = {
	size?: number;
	delay?: number;
	color?: string;
};

export const defaultProps = {
	size: 32,
	delay: 300,
	color: 'rgba(0,0,0,0.25)',
	'data-loading-indicator': true,
	title: 'Loading...',
};

const LoadingIndicator = styled.div<Props>`
	border-width: ${props => (props.size as number) / 10}px;
	border-color: ${props => getBackgroundBorderColor(props.color as string)};
	border-left-color: ${props => props.color};
	animation-delay: ${props => props.delay}ms;

	&,
	&:after {
		width: ${props => props.size}px;
		height: ${props => props.size}px;
	}
`;

// derives the background border color so it looks nice at different main color alphas
function getBackgroundBorderColor(color: string) {
	const { red, green, blue, alpha = 1 } = parseToRgb(
		color as string
	) as RgbaColor;

	// the brighter the color, the higher the contrast with main color
	const a = alpha - alpha * Math.pow(0.03, 0.1);

	return `rgba(${red},${green},${blue},${a})`;
}

LoadingIndicator.defaultProps = defaultProps;

export default LoadingIndicator;
