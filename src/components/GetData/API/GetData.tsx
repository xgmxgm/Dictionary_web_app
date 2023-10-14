import axios from "axios"

export const GetData = async (inputData: string, setInputData: (inputData: string) => void, setOutputData: (outputData: any) => void) => {
    try {
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputData}`)
        setInputData('')
        setOutputData(res.data[0])
    } catch (error) {
        setInputData('')
        setOutputData(null)
    }
}