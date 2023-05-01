import {HStack ,Image, Text} from '@chakra-ui/react';
import logo from '../assets/eagle.webp';
import ColorModeSwitch from './ColorModeSwitch';


function NavBar() {
    return (
        <HStack justifyContent='space-between' padding='10px' >
            <Image src={logo} boxSize='50px' objectFit='cover'/>
                <ColorModeSwitch/>
        </HStack >
    );
}

export default NavBar;