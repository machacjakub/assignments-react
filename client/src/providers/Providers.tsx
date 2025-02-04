import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./ThemeProvider";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient()

export const Providers = ({children}: PropsWithChildren) => {
  return(
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
          {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}