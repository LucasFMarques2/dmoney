import styled from "styled-components";

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1180px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;    
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 .5rem;
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        background: ${({ theme }) => theme['gray-700']};

        &:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        }

        &:last-child{
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        }  
    } 
`

interface PriceHightLightProps {
    variant: 'income' | 'outcome'
}

export const PriceHightLight = styled.span<PriceHightLightProps>`
    color: ${({ variant }) => variant === 'income' ? ({theme}) => theme['green-300'] :({theme}) => theme['red-300'] }
`