import { Providers } from "./providers/Providers";
import { App } from "./App";
import { Container } from "components";

export const RootLayout = () => (
    <Providers>
        <Container>
            <App />
        </Container>
    </Providers>
);
