import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'



export default function Home() {
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file && file.type === 'text/csv') {
      setFile(file);
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
    <div>
      <form onSubmit={handleFileSubmit}>
        <input type="file" accept=".csv" onChange={handleFileChange}></input>
        <button type="submit">
          Import CSV
        </button>
      </form>
    </div >
  )
}
