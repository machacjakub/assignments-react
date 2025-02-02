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
            background: grass.grass6,
        },
        primary: {
            background: blue.blue6,
        },
        danger: {
            background: red.red6,
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
