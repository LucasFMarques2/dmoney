import { MagnifyingGlass} from "phosphor-react";
import { SearchFromContainer } from "./style";

export function SearchForm(){
    return(
        <SearchFromContainer>
            <input type="text" placeholder="Buscar" />
            <button type="submit">
               <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFromContainer>
    )
}