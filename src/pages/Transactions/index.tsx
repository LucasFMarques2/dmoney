import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./style";


interface Transaction {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  useEffect(() => {
    async function loadTransictions(){
      const response = await fetch("http://localhost:3333/transactions")
      const data = await response.json()
      setTransactions(data)
    }
    loadTransictions()
  }, []);



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
