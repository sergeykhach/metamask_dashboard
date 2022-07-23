import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({user, logout, isLoggingOut}) {
    return(
        <header>
            <Flex px="10" py="5" justifyContent="space-between" bg="orange.400" color="white">
                <Center>
                    <Text fontSize="xl" fontWeight="bold" >Dashboard</Text>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button ml="4" colorScheme="pink" onClick={logout} disabled={isLoggingOut}>Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}