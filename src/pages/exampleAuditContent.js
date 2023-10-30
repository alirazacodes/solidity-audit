import React from 'react';
import { Box, Heading, UnorderedList, ListItem, Text, Code } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const SecurityAuditPage = () => {
    const data = [
        { name: 'Bugs', value: 10 },
        { name: 'Clean', value: 90 },
    ];
    const COLORS = ['red', 'green'];

    return (
        <>
            <Navbar />
            <Box maxW="1200px" margin="auto" padding="2rem" mt="4rem" bgColor="yourPreferredBgColor" color="yourPreferredTextColor">

                <Heading as="h1">Smart Contract Security Review: Angel Crowd Funding Project</Heading>

                <Box display="flex" flexDirection="row" mt="2rem">
                    <Box width="30%" marginRight="10px">
                        <Heading as="h2">Table of Contents</Heading>
                        <UnorderedList spacing={3}>
                            <ListItem><a href="#overview">Overview</a></ListItem>
                            <ListItem><a href="#scope">Scope</a></ListItem>
                            <ListItem><a href="#functionality">Functionality</a></ListItem>
                            <ListItem>
                                <a href="#bugs">Bugs</a>
                                <UnorderedList spacing={3}>
                                    <ListItem><a href="#critical-bugs">Critical Bugs</a></ListItem>
                                    <ListItem><a href="#high-impact-bugs">High Impact Bugs</a></ListItem>
                                    {/* ... Add other categories as needed ... */}
                                </UnorderedList>
                            </ListItem>
                            <ListItem><a href="#future-improvements">Future Improvements</a></ListItem>
                            <ListItem><a href="#disclaimer">Disclaimer</a></ListItem>
                        </UnorderedList>
                    </Box>

                    <Box width="70%">
                        <ResponsiveContainer width="100%" height={350}>
                            <PieChart>
                                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={140} fill="#8884d8" label>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <text x="30%" y="50%" textAnchor="middle" fill="green">
                                    Clean
                                </text>
                                <text x="70%" y="50%" textAnchor="middle" fill="red">
                                    Bugs
                                </text>
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>
                </Box>

                <Heading as="h2" mt="2rem" id="overview">Overview:</Heading>
                <Text mt="1rem">
                    The Angel crowdfunding platform is a decentralized ecosystem designed to revolutionize project funding and community engagement. Leveraging blockchain technology, the platform introduces the AngelDollar (ADT) and AngelGovernanceToken (AGT) contracts, providing users with a secure and transparent environment for supporting various projects and participating in governance decisions. With the AngelDollar serving as the native token for transactions and contributions, participants can seamlessly engage in fundraising activities while earning rewards. The AngelGovernanceToken enables users to actively contribute to platform governance, fostering a collaborative and inclusive decision-making process. The LockTokens contract facilitates the seamless conversion of AngelDollar tokens to AngelGovernanceToken tokens, enhancing user accessibility and promoting a vibrant and dynamic community-driven ecosystem. With its innovative approach to crowdfunding and community empowerment, the platform aims to foster a more inclusive and transparent funding landscape for diverse projects and initiatives.
                </Text>

                <Heading as="h2" mt="2rem" id="scope">Scope:</Heading>
                <Text mt="1rem">
                    The below 3 solidity smart contracts were reviewed:
                </Text>
                <UnorderedList spacing={3} ml="2rem">
                    <ListItem>
                        <a href="https://github.com/0xBcamp/Sept23_Crowdfunding/blob/master/contracts/AngelDollar.sol" target="_blank" rel="noopener noreferrer">AngelDollar.sol</a>
                        <Text mt="1rem">
                            This contract represents the native token of the crowdfunding platform. It serves as a medium of exchange within the ecosystem and can be used for various purposes, including supporting projects, participating in fundraising campaigns, or receiving rewards for contributions. The contract allows for the creation, transfer, and management of the AngelDollar token.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/0xBcamp/Sept23_Crowdfunding/blob/master/contracts/AngelGovernanceToken.sol" target="_blank" rel="noopener noreferrer">AngelGovernanceToken.sol</a>
                        <Text mt="1rem">
                            The AngelGovernanceToken is an essential component for platform governance. Holders of this token are granted voting rights and may participate in decision-making processes related to the crowdfunding platform. The contract enables minting, burning, and transferring of the governance tokens, ensuring that participants have the necessary resources to influence platform decisions.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/0xBcamp/Sept23_Crowdfunding/blob/master/contracts/LockTokens.sol" target="_blank" rel="noopener noreferrer">LockTokens.sol</a>
                        <Text mt="1rem">
                            This contract facilitates the exchange of AngelDollar tokens for AngelGovernanceToken tokens at a predetermined swap ratio. It ensures a mechanism for users to convert their AngelDollars into governance tokens, enabling them to engage in platform governance activities. The contract provides the functionality to update the swap ratio, giving the platform flexibility to adjust the conversion rate based on various factors.
                        </Text>
                    </ListItem>
                </UnorderedList>

                {/* ... Continue with the rest of your content ... */}

            </Box>
        </>
    );
};

export default SecurityAuditPage;
