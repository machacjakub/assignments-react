import React, { PropsWithChildren } from "react";
import { olive, grass, blue, red, blackA } from "@radix-ui/colors";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import { GlobalStyle } from "../styles/GlobalStyle";

const theme = {
    colors: {
        ...blackA,
        ...olive,
        ...grass,
        success: {
            background: grass.grass7,
            hover: grass.grass5,
        },
        primary: {
            background: blue.blue7,
            hover: blue.blue5,
        },
        danger: {
            background: red.red7,
            hover: red.red5,
        },
    },
};

export const ThemeProvider = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <ThemeProviderStyled theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProviderStyled>
    );
};
