import styled from "styled-components";

export const SearchFromContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${({theme}) => theme['gray-900']};
        color: ${({theme}) => theme['gray-300']};
        padding: 1rem;

        &::placeholder{
            color: ${({theme}) => theme['gray-500']};
        }
    }

    button {
        display: flex;
        align-items: center;
        padding: .5rem 1.5em;
        
        background-color: transparent;
        color: ${({theme}) => theme['green-300']};
        
        border: 1px solid ${({theme}) => theme['green-300']};
        border-radius: 6px;

        font-weight: bold;
        gap: .75rem;
        transition: background 0.2s, color 0.2s, border 0.2s;
        cursor: pointer;

        &:hover{
         background-color: ${({theme}) => theme['green-500']};
         border: ${({theme}) => theme['green-500']};
         color: ${({theme}) => theme['white']};
        }
    }
`