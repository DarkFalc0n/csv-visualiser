import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import styles from '../styles/Home.module.css'
import { CsvFileProvider, CsvFileContext } from './context/CsvContextProvider';
import supportedMIMETypes from './utils/supportedMIMETypes.json'


export default function Home() {
  const { csvFile, setCsvFile } = useContext(CsvFileContext);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file && supportedMIMETypes.types.includes(file.type)
    ) {
      console.log(file.type);
      setCsvFile(file);
    } else {
      alert('Please select a valid CSV file.');
    }
  }

  function handleFileSubmit(e) {
    e.preventDefault();
    if (file) {
      console.log(csvFile);
    } else {
      alert('Please select a CSV file');
    }
  }

  return (
    <CsvFileProvider>
      <form onSubmit={handleFileSubmit}>
        <input type="file" accept=".csv" onChange={handleFileChange}></input>
        <button type="submit">
          Import CSV
        </button>
      </form>
    </CsvFileProvider >
  )
}
