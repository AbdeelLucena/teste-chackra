import React from 'react';
import { ChakraProvider, Flex, Box, Text, Stack, Avatar, AvatarBadge, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function home() {
  return (
    <ChakraProvider>
      <Flex height="100vh">
        {/* Barra de navegação vertical */}
        <Box
          width="200px"
          bg="rgba(255, 255, 240, 0.8)" // Cor off-white com opacidade
          backdropFilter="blur(5px)" // Efeito de desfoque
          boxShadow="md"
          p={4}
        >
          <Stack spacing={4}>
            <Text fontSize="xl" fontWeight="bold" color="black">Navegação</Text>
            <Text fontSize="lg" color="black"><a href="#menu">Menu</a></Text>
            <Text fontSize="lg" color="black"><a href="#cardapio">Cardápio</a></Text>
            <Text fontSize="lg" color="black"><a href="#pedidos">Pedidos</a></Text>
          </Stack>
        </Box>

        {/* Conteúdo principal */}
        <Box flex="1" p={4}>
          <Stack direction='row' spacing={4}>
            <Avatar>
              <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>
            <Avatar>
              <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
            </Avatar>
          </Stack>

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  colorScheme="teal"
                  variant="outline"
                  size="md"
                  mt={4}
                >
                  {isOpen ? 'Fechar' : 'Abrir'}
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem onClick={() => alert('Kagebunshin')}>Criar uma cópia</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>

        {/* Título à direita da barra de navegação */}
        <Box
          width="300px"
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          boxShadow="md"
          p={4}
          color="white"
          textAlign="center"
        >
          <Text
            fontSize='4xl'
            fontWeight='extrabold'
          >
           Oq te traz aqui?
          </Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default home;
