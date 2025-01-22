import { useContext } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./style";
import { TransactionContext } from "../../context/TransactionsContext";


export function Transactions() {
 const {transactions} = useContext(TransactionContext)


  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return(
                <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHightLight $variant={transaction.type}>{transaction.price}</PriceHightLight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
              )
            })}
           
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
