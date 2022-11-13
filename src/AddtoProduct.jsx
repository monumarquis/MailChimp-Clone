import { CheckIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Divider, Heading, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {BsCart3} from"react-icons/bs"

const AddtoProduct = () => {
    let [productImage,setimage]=useState()
    let [productPrice,setprice]=useState("")
    let [productName,setName]=useState("")
    let [quantity,setquantity]=useState(0)
    console.log(productImage)
   const  imageChange=(e)=>{
    if(e.target.files && e.target.files.length>0)
    setimage(URL.createObjectURL(e.target.files[0]))
    }
  return (
   <Container centerContent maxW="90%" pt="20" zIndex={0}>
     <Stack  direction={{"base":"column","sm":"column","md":"column","lg":"row"}} spacing="40" mb="10" >
             <VStack w={["100%","100%","100%","40%"]} spacing="20">
                <Heading fontWeight={400} color='gray.800'>Now let’s add your first product:</Heading>
                <Input zIndex={0}pos="sticky"  onChange={imageChange} type="file" borderColor={"gray"} padding="20" backgroundColor={"gray.50"} border="Dotted"/>
                
               <Box w="100%">
                    <Text mb="2"color="black" fontWeight={600} >Product Name</Text>
                    <Input pos="sticky"  value={productName} onChange={(e)=>setName(e.target.value)} type="text" placeholder=' e.g. Illumimati Sheet Mask' borderColor={"black"} />
               </Box>
               <Box w="100%">
                <Text mb="2" fontWeight={600} color="black">Price</Text>
                <InputGroup>
                    <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                    />
                   
                    <Input pos="sticky" placeholder='0' borderColor={"black"}  value={productPrice}  onChange={(e)=>setprice(e.target.value)} />
                    <InputRightElement children={<CheckIcon color={productPrice===""? "gray.300" :'green.600'} />} />
                </InputGroup>
                </Box>
               <HStack w="100%" spacing={3} border="0.2px" borderColor={"gray"} p="6">
                   <input type="checkbox" pos="sticky"   />
                    <Text mb="2"  color="black" fontWeight={600} >This product is taxt-exempt</Text>
               </HStack>
               
               <Box w="100%">
                    <Text mb="2"color="black" fontWeight={600} >Product description</Text>
                    <Input type="text" pos="sticky"  placeholder='An optional description of your product' borderColor={"black"} py="20" />
               </Box>

               <Button colorScheme='blue' pos="-moz-initial" variant='solid' ml="-20px">Save Product</Button>
             </VStack>
             <VStack  border="1px" borderColor={"black"} w={["100%","100%","100%","50%"]} h='400px' mt="60px">
                <Divider color='gray.100' mt='10'/>
             <Container centerContent maxW="90%">

              <HStack spacing={80} mb="10" >
                <Text color="black" fontWeight={600} fontSize="27">Masai</Text>
                <BsCart3/>
              </HStack>

              <HStack spacing={[10,10,10,20]} maxW="100%">
                {productImage===undefined ? <Box w="300px" h="200px" border="1px dotted gray" backgroundColor={"#e5e7eb"}></Box>:<Image src={productImage} w="60%" h="200px" alt='monu'/>}
                <Box w="40%">
               { productName==="" ? <Text color="black" fontWeight={600} >Product Name </Text>:<Text color="black" fontWeight={600} >{productName}</Text>}
               { productPrice==="" ? <Text color="black" fontWeight={600} >$00.00</Text>:<Text color="black" fontWeight={600} >${productPrice}.00</Text>}
 
                <Box mt="10">
                <Text color="gray">Quantity: <span style={{"color":"black"}}>{quantity ? quantity:0}</span></Text>
                <Input type={"text"} pos="sticky" w="50px" value={quantity} onChange={(e)=>setquantity(e.target.value)}/>
                </Box>
                
                {/* This is add to cart button  */}
                <Button zIndex={0} pos="-moz-initial" mt="10" colorScheme='orange' variant='solid' ml="-20px">Add to cart</Button>
                </Box>
              </HStack>
              </Container>
             </VStack>
     </Stack>
   </Container>
  )
}

export default AddtoProduct