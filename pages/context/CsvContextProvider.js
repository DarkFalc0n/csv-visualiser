import { useState, createContext } from 'react'

export const CsvFileContext = createContext([]);
export function CsvFileProvider(props) {

    const [csvFile, setCsvFile] = useState(null);
    return (
        <CsvFileContext.Provider value={[csvFile, setCsvFile]}>
            {props.children}
        </CsvFileContext.Provider>
    );
}