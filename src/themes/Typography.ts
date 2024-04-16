import { responsiveSize } from './Responsive';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';

//FONT WEIGHTS
export const FONT_WEIGHTS = {
  LIGHT : '300',
  REGULAR : '400',
  BOLD : '800',
  MEDIUM : "600",
}

// FONT SIZE
export const FONT_SIZE_16 = responsiveSize(16);
export const FONT_SIZE_14 = responsiveSize(14);
export const FONT_SIZE_12 = responsiveSize(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = responsiveSize(24);
export const LINE_HEIGHT_20 = responsiveSize(20);
export const LINE_HEIGHT_16 = responsiveSize(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHTS.REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHTS.BOLD,
};