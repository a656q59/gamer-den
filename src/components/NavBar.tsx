import {HStack ,Image, Text} from '@chakra-ui/react';
import logo from '../assets/eagle.webp';


function NavBar() {
    return (
        <HStack >
            <Image src={logo} boxSize='50px' objectFit='cover'/>
            <Text>NavBar</Text>
        </HStack >
    );
}

export default NavBar;