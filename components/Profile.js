import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import CostumContainer from "./CostumContainer";

export default function Profile({user}) {
    const [input, setInput] = useState('')
    const {setUserData, isUserUpdating} = useMoralis()
    return(
        <CostumContainer>
            <Text><b>Username:</b> {user.getUsername()}</Text>
            <Text><b>Wallet Address:</b> {user.get('ethAddress')}</Text>
            <form onSubmit={e => {
                e.preventDefault()
                if(input.trim() !== '') {
                    setUserData({
                        username: input,
                    }).then(() => setInput(''))
                }
            }} >
                <FormControl mt="5" mb="5">
                    <FormLabel htmlFor="username">Set a new username</FormLabel>
                    <Input id ="username" type="text" placeholder="your name" value={input} onChange={e => setInput(e.target.value)} />
                </FormControl>
                <Button type="submit" colorScheme="orange" disabled={isUserUpdating}>Change Username</Button>
            </form>
        </CostumContainer>
    )
}