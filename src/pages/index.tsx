import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { MainDesktop } from '@/components/Desktop/Main/MainDesktop';
import { MainMobile } from '@/components/Mobile/Main/MainMobile';
import {isMobile} from 'react-device-detect';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    
    return (<>
         <main>
             <div>
                {isMobile? <MainMobile/> : <MainDesktop />}
             </div>
         </main>
    </>);
}

