'use client'

import { useEffect, useState } from 'react'

import { Search } from '@/shared/ui/Search'
import styles from './Main.module.scss'
import { GetData } from '@/components/GetData'
import { IDataWord } from '@/components/GetData/types'
import { Loading } from '@/widgets/Loading'
import { Button } from '@/shared/ui/Button'
import Image from 'next/image'

interface IProps {
    darkMode: boolean,
}

export const Main = ({ darkMode }: IProps) => {
    const [inputData, setInputData] = useState<string>('');
    const [outputData, setOutputData] = useState<IDataWord | null>(null);
    const [isLoading, setIsLoading] = useState<null | boolean>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    let urlsArray: string[] = []
    const [urls, setUrls] = useState<string[] | null>(null)

    const playSound = (url: string) => {
        const audio = new Audio(url);
        audio.play();
        setIsPlaying(true);

        audio.addEventListener('ended', () => {
            setIsPlaying(false);
        })
    }

    useEffect(() => {
        GetData("keyboard", setInputData, setOutputData)
    }, [])

    const handleFunc = () => {
        setIsLoading(true)
        GetData(inputData, setInputData, setOutputData).finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        setUrls(null)
        outputData?.phonetics.map((url) => url.audio && urlsArray.push(url.audio))
        setUrls(urlsArray)
    }, [outputData])

    return (
        <div className={styles.Main}>
            <Search darkMode={darkMode} inputData={inputData} setInputData={setInputData} setOutputData={setOutputData} funcForInput={handleFunc} />
            { isLoading ? <div className={styles.Loading__Main}><Loading /></div> : outputData ?
            <div className={styles.div__Main}>
                <div className={styles.word}>
                    <div className={styles.word__Left}>
                        <h2 className={styles.h2}>{outputData?.word}</h2>
                        <h3 className={styles.h3}>{outputData?.phonetic}</h3>
                    </div>
                    <div className={styles.word__Right}>
                        {urls && urls.length > 0 && <Button onClick={() => playSound(urls[0])} disabled={isPlaying}><Image src="/play_mini.svg" width={30} height={30} alt='play' /></Button>}
                    </div>
                </div>
                {outputData?.meanings.map((item, index) => 
                    <div key={index} className={styles.meanings}>
                        <div className={styles.meanings__title}>
                            <h4 className={styles.h4}>{item.partOfSpeech}</h4>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.meanings__info}>
                            <h5 className={styles.h5}>Meaning</h5>
                            <ul className={styles.ul}>
                                {item.definitions.map((items, index) => <li className={styles.li} key={index}>{items.definition}<p className={styles.p}>{items.example}</p></li>)}
                            </ul>
                        </div>
                        <div className={styles.synonyms__main}>
                            {item.synonyms.length > 0 && <div className={styles.synonyms}><p className={styles.p}>Synonyms</p><div className={styles.synonym__div}>{item.synonyms.map((synonym, index) => (
                                <h4 className={styles.h4} key={index}>{synonym}</h4>
                            ))}</div></div>}
                            {item.antonyms.length > 0 && <div className={styles.synonyms}><p className={styles.p}>Antonyms</p><div className={styles.synonym__div}>{item.antonyms.map((antonyms, index) => (
                                <h4 className={styles.h4} key={index}>{antonyms}</h4>
                            ))}</div></div>}
                        </div>
                    </div> 
                )}
                { outputData?.sourceUrls && <div className={styles.Source__Main}>
                    <div className={styles.line}></div>
                    <div className={styles.Source}>
                        <h2 className={styles.h2}>Source</h2>
                        <a className={styles.a} target='blank' href={outputData.sourceUrls[0]}>{outputData.sourceUrls[0]}</a>
                    </div>
                </div>}
            </div>
            : 
            <div className={styles.NotFound}>
                <Image className={styles.Image} src='/sad.png' width={80} height={80} alt='sad' />
                <p>No Definitions Found !</p>
            </div>
            }
        </div>
    )
}