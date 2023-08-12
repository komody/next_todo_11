import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Todo #11',
  description: 'Next Todo by Team Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}