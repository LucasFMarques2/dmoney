import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./context/TransactionsContext";

export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider >
        <Transactions/>
      </TransactionProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}