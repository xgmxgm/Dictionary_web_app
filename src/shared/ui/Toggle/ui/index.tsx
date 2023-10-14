import styles from './Toggle.module.scss'

interface IProps {
    DarkMode: boolean,
    setDarkMode: (DarkMode: boolean) => void,
}

export const Toggle = ({ DarkMode, setDarkMode }: IProps) => {
    return (
        <>
            <input onClick={() => setDarkMode(!DarkMode)} type="checkbox" className={styles.Input} id="switch" /><label className={styles.Label} htmlFor="switch">Toggle</label>
        </>
    )
}