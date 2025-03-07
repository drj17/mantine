import { createStyles, MantineTheme } from '@mantine/styles';
import type { TitleSize } from './Title';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleStylesParams {
  element: HeadingElement;
  size: TitleSize;
  weight: React.CSSProperties['fontWeight'];
}

function getFontSize(size: TitleSize, element: HeadingElement, theme: MantineTheme) {
  if (typeof size !== 'undefined') {
    return size in theme.headings.sizes ? theme.headings.sizes[size].fontSize : size;
  }

  return theme.headings.sizes[element].fontSize;
}

function getLineHeight(size: TitleSize, element: HeadingElement, theme: MantineTheme) {
  if (typeof size !== 'undefined' && size in theme.headings.sizes) {
    return theme.headings.sizes[element].lineHeight;
  }

  return theme.headings.sizes[element].lineHeight;
}

export default createStyles((theme, { element, weight, size }: TitleStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    fontFamily: theme.headings.fontFamily,
    fontWeight: weight || theme.headings.sizes[element].fontWeight || theme.headings.fontWeight,
    fontSize: getFontSize(size, element, theme),
    lineHeight: getLineHeight(size, element, theme),
    margin: 0,
  },
}));
