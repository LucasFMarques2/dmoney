import { Header } from "../../components/header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./style";

export function Transactions(){
    return(
        <>
           <Header/>
           <Summary/>
           <TransactionsContainer>
            <SearchForm/>
            <TransactionsTable>
                <tbody>
                  <tr>
                    <td width='50%'>Desenvolvimento de site</td>
                    <td>
                        <PriceHightLight variant="income">
                            R$ 12.000,00
                        </PriceHightLight>
                    </td>
                    <td>Venda</td>
                    <td>13/04/2022</td>
                  </tr>
                  <tr>
                    <td width='50%'>Desenvolvimento de site</td>
                    <td>
                        <PriceHightLight variant="outcome">
                          - R$ 12.000,00
                        </PriceHightLight>
                    </td>
                    <td>Alimentacao</td>
                    <td>13/04/2022</td>
                  </tr>
                </tbody>
            </TransactionsTable>
           </TransactionsContainer>
        </>
    )
}