import { Box, Grid, GridItem, Image, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React, { FC, memo } from 'react'

const UserManagement: FC = memo(() => {
  return (

    <Wrap>
      <WrapItem>
        <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md">
          <Stack textAlign="center">
            <Image borderRadius="full" boxSize="160px" src='https://source.unsplash.com/random' />
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>

    // <Grid templateColumns={{ base: "repeat(1,1fr)", sm: "repeat(1,1fr)", md: "repeat(3,1fr)", lg: "repeat(5,1fr)" }}
    //   gap={4}
    //   px={5}
    // >
    //   <GridItem w="100%" h='10' bg='blue.500' />
    //   <GridItem w="100%" h='10' bg='blue.500' />
    //   <GridItem w="100%" h='10' bg='blue.500' />
    //   <GridItem w="100%" h='10' bg='blue.500' />
    //   <GridItem w="100%" h='10' bg='blue.500' />
    // </Grid>


  )
})

export default UserManagement