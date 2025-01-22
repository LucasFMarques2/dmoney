import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../server/api";

interface Transaction {
    id: number
    description: string
    price: number
    type: 'income' | 'outcome'
    category: string
    createdAt: string
  }
  

interface TransactionContextType{
    transactions: Transaction[]
}

interface TransactionsProviderProps{
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionsProviderProps){
     const [transactions, setTransactions] = useState<Transaction[]>([])
      
      useEffect(() => {
        async function loadTransictions(){
          const response = await api('transactions')
          const data = await response.data
          setTransactions(data)
        }
        loadTransictions()
      }, []);

    return(
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}