import { lightTheme } from './light';

const defaultTheme = { ...lightTheme, name: 'default' };

export { lightTheme } from './light';

export default defaultTheme;

export type ThemeType = typeof defaultTheme;
