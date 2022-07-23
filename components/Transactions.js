import { Divider, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import CostumContainer from "./CostumContainer";

export default function Transactions({user}){
    
    const Web3Api = useMoralisWeb3Api()
    const BASE_URL = "https://ropsten.etherscan.io/tx/"

    const [transactions, setTransactions] = useState([])

    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "ropsten",
            address: user.get('ethAddress'),
            limit: 10
        })
        if(data){
            setTransactions(data.result)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return(
        <CostumContainer>
            <Text fontSize="xl" mb="5" fontWeight="bold">Last 10 transactions of mine (Ropsten)</Text>
            {transactions && transactions.map(transaction => (
                <div key={transaction.hash}>
                    <Link href={`${BASE_URL}${transaction.hash}`} isExternal>🢂&nbsp; {transaction.hash}</Link>
                    <Divider />
                </div>
            ))}
        </CostumContainer>
    )
}