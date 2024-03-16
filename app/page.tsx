// import styles from "./page.module.css";
import HomePage from '../app/HomePage'
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      <HomePage />
    </ChakraProvider>
  );
}
