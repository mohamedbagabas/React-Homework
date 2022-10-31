
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import img1 from "../Components/Course.jpg"
  import img2 from "../Components/Tuwiq.jpg"

  
  export default function SocialProfileWithImage(props) {
    
    let Stats ;
    let color ;
    var today = new Date(props.startdate);
    var today2 = new Date(props.enddate);
 
    if (today.getTime() < today2.getTime()) {
        
        Stats = "Course is open";
        color = "blue";
    }
    else{
     Stats = "Course is close";
     color = "black";
    }
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={img1}
            
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={img2}
              
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {props.name}
              </Heading>
              <Text color={'gray.500'}>{props.Course}</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{props.startdate}</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Start
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{props.enddate}</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                 Ends
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue(color)}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              {(Stats)}
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }