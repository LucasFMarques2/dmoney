import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const newTransactionFromSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
 // type: z.enum(['income' , 'outcome']),
})

type NewTransacionFormInputs = z.infer<typeof newTransactionFromSchema>

export function NewTransactionModal() {
  const {register, handleSubmit } = useForm<NewTransacionFormInputs>({
    resolver: zodResolver(newTransactionFromSchema)
  })

  function handleCreateNewTransaction(data: NewTransacionFormInputs){
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder="Descrição" 
            required
            {...register('description')}
          />
          <input 
            type="number
            " placeholder="Preço" 
            required
            {...register('price', {valueAsNumber: true})}
          />
          <input 
            type="text" 
            placeholder="Categoria" 
            required
            {...register('category')}
          />

          <TransactionType>
            <TransactionTypeButton $variant='income' value='income'>
              <ArrowCircleUp size={24}/>
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton $variant='outcome' value='outcome'>
              <ArrowCircleDown size={24}/>
              Saida
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}