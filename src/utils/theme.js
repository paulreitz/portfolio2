import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

export default createMuiTheme({
    palette: {
        common: {
            lighterBlue: colors.light_font,
            darkerBlue: colors.darker_background,
            offWhite: colors.lighter_font
        },
        primary: {
            main: `${colors.dark_background}`
        },
        secondary: {
            main: `${colors.title_font}`
        },
        background: {
            default: `${colors.lighter_background}`
        }
    },
    typography: {
    }
});