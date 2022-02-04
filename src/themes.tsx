import {extendTheme, ThemeConfig} from '@chakra-ui/react'
import {createBreakpoints} from '@chakra-ui/theme-tools'
import {Button} from "./components/Button";
import mainTheme from '../output/main.json';
import otherTheme from '../output/other.json';
import mainThemeDark from '../output/main-dark.json';
import otherThemeDark from '../output/other-dark.json';


const fonts = {mono: `'Menlo', monospace`}

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
})
const main = {light: {}, dark: {}};
main.light = extendTheme({
    colors: {
        ...mainTheme.color
    },
    fonts,
    breakpoints,
    radii: {
        ...mainTheme.borderRadius
    },
    config,
    styles: {
        global: {
            'html, body': {
                background: '#fff',
            },
        },
    },
    components: {
        Button,
    },
})

main.dark = extendTheme({
    colors: {
        ...mainThemeDark.color
    },
    fonts,
    breakpoints,
    radii: {
        ...mainThemeDark.borderRadius
    },
    config,
    styles: {
        global: {
            'html, body': {
                background: '#000',
            },
        },
    },
    components: {
        Button,
    },
})

const other = {light: {}, dark: {}};
other.light = extendTheme({
    colors: {
        ...otherTheme.color
    },
    fonts,
    breakpoints,
    radii: {
        ...otherTheme.borderRadius
    },
    config,
    styles: {
        global: {
            'html, body': {
                background: '#fff',
            },
        },
    },
    components: {
        Button,
    },
})
other.dark = extendTheme({
    colors: {
        ...otherThemeDark.color
    },
    fonts,
    breakpoints,
    radii: {
        ...mainThemeDark.borderRadius
    },
    config,
    styles: {
        global: {
            'html, body': {
                background: '#000',
            },
        },
    },
    components: {
        Button,
    },
})

export const themes = {
    main,
    other
};
