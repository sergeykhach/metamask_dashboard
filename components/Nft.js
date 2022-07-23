import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNFTBalances } from "react-moralis";
import CostumContainer from "./CostumContainer";

export default function Nft({user}) {

    const {getNFTBalances, data} = useNFTBalances()

    useEffect(() => {
       getNFTBalances({
        params: {
            chain: "ropsten",
            address: user.get('ethAddress')
        }
    }) 
    }, [])

    console.log(data)

    return(
        <CostumContainer>
            <Text fontSize="xl" fontWeight="bold">My NFTs</Text>
            {data && data.result.map(nft => (
                <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="md" key={nft.token.token_uri}>
                    {nft.image && <Image src={nft.image} />}
                    <p>{nft.token_uri}</p>
                </Box>
            ))}
        </CostumContainer>
    )
}