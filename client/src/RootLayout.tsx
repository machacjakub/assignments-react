import { Container } from "./components/Container";
import { Providers } from "./components/providers/Providers";
import { App } from "./App";

export const RootLayout = () => (
    <Providers>
        <Container>
            <App />
        </Container>
    </Providers>
);
