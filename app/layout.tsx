import './globals.css'
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMN Consultora Informatica',
  description: 'Sitio web de AMN Consultora Informatica',
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='dark'>
      <link rel="icon" href="/iso1.svg" sizes="any" />
      <body className={`${font.className} bg-slate-950/95 overflow-y-scroll overflow-x-hidden mx-auto`}>
        <div className='flex flex-col mx-auto'>
          <Navbar />
          <main className='flex-grow border-b-2 pb-10 px-3 mx-auto w-full max-w-[1640px] relative mt-28 lg:mt-40'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
