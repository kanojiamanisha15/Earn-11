// import styles from "./page.module.css";
import HomePage from '../app/HomePage'
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}
