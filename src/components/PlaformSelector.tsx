import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface Props{
    onSelectPlatform:(platform:Platform) => void
    selectedPlatform:Platform|null;
}


const  PlaformSelector=({onSelectPlatform, selectedPlatform}:Props) =>{

    const {data,error} = usePlatforms();
    console.log(selectedPlatform);
    if(error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name||'Platforms'}</MenuButton>
            <MenuList>
                {data.map(platform=><MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
                
            </MenuList>
        </Menu>
    );
}

export default PlaformSelector;