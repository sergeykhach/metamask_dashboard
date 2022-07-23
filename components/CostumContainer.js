import { Box } from "@chakra-ui/react";

export default function CostumContainer({children}){
    return(
        <Box bg="white" wigth="full" height="full" px="20" py="10" rounded="lg" shadow="lg" textAlign="left">
            {children}
        </Box>
    )
}