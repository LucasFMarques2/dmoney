import { MagnifyingGlass} from "phosphor-react";
import { SearchFromContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

export function SearchForm(){
  
    const searchFormSchema = z.object({
        query: z.string(),

    })

    type SearchFromInputs = z.infer<typeof searchFormSchema>

    const {register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFromInputs>({
        resolver: zodResolver(searchFormSchema)
    })
    
    async function handleSearchTransactions(data: SearchFromInputs){
        await new Promise(resolver => setTimeout(resolver, 3000))
        console.log(data)
    }

    return(
        <SearchFromContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" placeholder="Buscar" 
             {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
               <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFromContainer>
    )
}