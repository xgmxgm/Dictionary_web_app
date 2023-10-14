import Image from 'next/image'
import styles from './Search.module.scss'

interface IProps {
    inputData: string,
    setInputData: (inputData: string) => void,
    setOutputData: (outputData: null) => void,
    funcForInput: (inputData: string, setInputData: (inputData: string) => void, setOutputData: (outputData: null) => void) => void,
    darkMode: boolean,
}

export const Search = ({inputData, setInputData, setOutputData, funcForInput, darkMode}: IProps) => {
    const handleGetData = () => {
        funcForInput(inputData, setInputData, setOutputData)
    }

    return (
        <>
        <div className={darkMode ? styles.div_main : styles.div_main_light}>
            <input
                type="text"
                placeholder='Search for any word...'
                className={darkMode ? styles.Input : styles.Input_light}
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                onKeyDown={(e) => {
                    e.key === "Enter" && handleGetData()
                }}
            />
            <button className={darkMode ? styles.Button : styles.Button_light} onClick={() => handleGetData()}><Image src="/search.svg" width={25} height={25} alt='search' /></button>
        </div>
        </>
    )
}