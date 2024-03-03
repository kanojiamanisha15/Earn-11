"use client"
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Image, Text } from '@chakra-ui/react';

function SideBar({list}) {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    

    return (
        <>
            <Image src='menu.svg' onClick={showDrawer} display={{ base: 'block', lg: 'none' }} />
            <Drawer onClose={onClose} open={open} style={{ background: '#6F2DBD', color: 'white' }}>
                {list.map((li) => (
                    <Text fontSize={{ base: '16px', lg: '17px' }} mb='32px'>{li}</Text>
                ))}
            </Drawer>
        </>

    )
}

export default SideBar