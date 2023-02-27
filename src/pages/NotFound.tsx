import { Center, Heading, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box>
      <Center>
        <Heading as="h1" size="4xl" noOfLines={1}>
          404 - NotFound!
        </Heading>
      </Center>
      <Center>
        <Link to="/">Home</Link>
      </Center>
    </Box>
  );
}

export default NotFound;
