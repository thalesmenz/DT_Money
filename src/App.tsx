import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Transactions />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}
