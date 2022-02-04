import {ChakraProvider, Switch} from '@chakra-ui/react'
import {themes} from '../themes'
import { AppProps } from 'next/app'
import {useState} from "react";
type ColorMode = "light" | "dark";

function MyApp({ Component, pageProps }: AppProps) {
    const [mode, setMode] = useState<ColorMode>("dark")
    const toggleMode = () => setMode(mode === "light" ? "dark" : "light");
    const isDark = mode === 'dark';
    return (
    <ChakraProvider theme={themes.main[mode]}>
        <Switch
            position="fixed"
            top="1rem"
            right="1rem"
            color="green"
            isChecked={isDark}
            onChange={toggleMode}
        />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
