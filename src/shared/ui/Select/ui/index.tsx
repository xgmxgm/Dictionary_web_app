import styles from './Select.module.scss'

interface IProps {
    fonts: string[],
    setText: (text: string) => void,
    darkMode: boolean,
}

export const Select = ({fonts, setText, darkMode}: IProps) => {
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectValue = event.target.value;
        setText(selectValue)
    }

    return (
        <>
            <select onChange={selectChange} className={darkMode ? styles.select_css : styles.select_css_light}>
                {
                    fonts.map((font, index) => (
                        <option className={styles.Option} key={index} value={font}>{font}</option>
                    ))
                }
            </select>
        </>
    )
}