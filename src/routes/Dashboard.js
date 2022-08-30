import React from 'react'
import { FaWallet } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";

import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
  pieChartData,
  pieChartOptions
} from "../variables/charts";
import "../dashboard.css"
import { 
  SimpleGrid,
  Box,
  Text,
  Icon
 } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <Box
    bg="rgb(24, 23, 23)"
    w="60%"
    h="35rem"
    my="5rem"
    mx="20%"
    borderRadius="15px"
    boxShadow="dark-lg"
    p="2rem"
    >
      <SimpleGrid
      columns={{sm: 2, md: 3}}
      spacing={8}
      mb="3rem"
      >
        <SimpleGrid
        rounded="lg"
        p="0.5rem"
        templateColumns="70% 30%"
        color="blackAlpha.600"
        >
          <Box bg="gray.50" px="0.5rem" sx={{"borderRadius": "8px 0 0 8px"}}>
            <Text pb="0.4rem">Current Savings</Text>
            <Text color="blackAlpha.900" fontWeight="bold" >$50,000.00</Text>
          </Box>
          <Box sx={{"justifySelf": "end", "borderRadius": "0 8px 8px 0"}} bgGradient="linear(to-br, rgb(72, 0, 72), rgb(0, 83, 83))" w="100%">
            <Icon as={FaWallet} color="blackAlpha.700" w="1.5rem" h="1.5rem" m="15px 25px" />
          </Box>
        </SimpleGrid>
        <SimpleGrid
        rounded="lg"
        p="0.5rem"
        templateColumns="70% 30%"
        color="blackAlpha.600"
        >
          <Box bg="gray.50" px="0.5rem" sx={{"borderRadius": "8px 0 0 8px"}}>
            <Text pb="0.4rem">Total Amount Saved</Text>
            <Text color="blackAlpha.900" fontWeight="bold" >$150,000.00</Text>
          </Box>
          <Box sx={{"justifySelf": "end"}} bgGradient="linear(to-br, rgb(72, 0, 72), rgb(0, 83, 83))" w="100%" rounded="lg">
          <Icon as={MdAccountBalanceWallet} color="blackAlpha.700" w="1.5rem" h="1.5rem" m="15px 25px" />
          </Box>
        </SimpleGrid>
        <SimpleGrid
        rounded="lg"
        p="0.5rem"
        templateColumns="70% 30%"
        color="blackAlpha.600"
        >
          <Box bg="gray.50" px="0.5rem" sx={{"borderRadius": "8px 0 0 8px"}}>
            <Text pb="0.4rem">Amount Withdrawn</Text>
            <Text color="blackAlpha.900" fontWeight="bold" >$100,000.00</Text>
          </Box>
          <Box sx={{"justifySelf": "end"}} bgGradient="linear(to-br, rgb(72, 0, 72), rgb(0, 83, 83))" w="100%" rounded="lg">
            <Icon as={GiWallet} color="blackAlpha.700" w="1.5rem" h="1.5rem" m="15px 25px" />
          </Box>
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid
      templateColumns="60% 40%"
      >
        <Box bg="gray.50" borderRadius="12px 0 0 12px">
          <BarChart 
            chartData={barChartDataDailyTraffic}
            chartOptions={barChartOptionsDailyTraffic}
          />
        </Box>
        <Box bg="gray.50" borderRadius="0 12px 12px 0" >
          <PieChart
            chartData={pieChartData} 
            chartOptions={pieChartOptions}
          />
        </Box>
      </SimpleGrid>
    </Box>
  )
}
