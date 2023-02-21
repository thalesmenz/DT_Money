import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/Global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>

        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}
