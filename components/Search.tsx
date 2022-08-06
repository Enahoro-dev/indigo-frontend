import type { NextPage } from 'next'
import Link from 'next/link'
import SearchItem from './SearchItem'
import React,{useState, useEffect} from 'react'
import {Patient} from './Recent'

const Search:NextPage = () => {
  const[term, setTerm] = useState('')
  const[results, setResults] = useState<Patient[]>([])
  const[hidden, setHidden] = useState('hidden')


  let getSearch  = async(term:string) => {
    let response = await fetch(`https://indigo-emr.herokuapp.com/api/search-patient/?search=${term}`)
    let data  = await response.json()
    const searched = data.splice(0,5)
    setResults(searched)
  }

  useEffect(() => {
    if (term !== ''){
      getSearch(term)
      setHidden('')
    }else if (term === ''){setHidden('hidden')}

  },[term])

  
  return (
    <div className='w-1/5 h-layout pt-2 rounded'>
        <h3 className='text-sm ml-4 mb-2 mt-14 font-semibold'>Search Patients</h3>
        <input type="text" placeholder="Search patient's name" onChange={(e) => {setTerm(e.target.value)}} value={term} className='w-5/6 ml-4 h-8 mb-4 rounded-sm text-sm pl-2 border border-gray-400 focus:outline-none focus:ring focus:border-blue-300' />
        <div className='w-5/6 flex flex-col justify-center items-center mt-2 ml-4'>
          {
            results.map((result,index) => (
              <div key={index} className={`w-full ${hidden}`} ><SearchItem firstname={result.first_name} lastname={result.last_name} id={result.id}/></div>
            ))
          }  
          <Link href='/profile'><button className='bg-main p-1 text-xs text-white hover:text-blue-500 w-full h-8 rounded'>+Add new patient</button></Link>
          </div>
    </div>
  )
}

export default Search