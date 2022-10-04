import React from "react";

import { Box, Container, Text, Flex } from "../atoms";

const Header = () => {
    return <Box className="organism-header" padding={10}>
        <Container>
            <Flex>
                <Text color="white" type="title">Proof Audit</Text>
                <Flex>
                    <Text>Home</Text>
                    <Text>Security Audit</Text>
                    <Text>KYC</Text>
                    <Text>About US</Text>
                    <Text>Contact Us</Text>
                    <Text>Projects</Text>
                    <Flex>
                        <Text>Telegram</Text>
                        <Text>Github</Text>
                        <Text>Twitter</Text>
                    </Flex>                    
                </Flex>
            </Flex>
        </Container>
    </Box>
};

export default Header;