import React from 'react'

import styles from './Header.module.scss'
import Image from 'next/image'
import { Toggle } from '@/shared/ui/Toggle'
import { Select } from '@/shared/ui/Select'

interface IProps {
    setText: (text: string) => void,
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void,
}

export const Header = ({setText, darkMode, setDarkMode}: IProps) => {
    return (
        <div className={styles.Header}>
            <div className={styles.div__Header}>
                <div className={styles.Header__Left}>
                    <Image src="/book.svg" width={50} height={50} alt='book' />
                </div>
                <div className={styles.Header__Right}>
                    <Select darkMode={darkMode} fonts={["sans-serif", "serif", "monospace"]} setText={setText} />
                    <div className={styles.Line}></div>
                    <Toggle DarkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </div>
        </div>
    )
}