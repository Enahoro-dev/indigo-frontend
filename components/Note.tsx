import type {NextPage} from 'next'
import React,{useState, useEffect, FormEvent} from 'react'
import Router from 'next/router'
import {Patient} from './Recent'
import {Record} from '../pages/records/[id]'

interface Props{
    patient:Data
}

export type Data ={
    id: number,
    patient_record: Record[ ],
    first_name: string,
    last_name: string,
    sex: string,
    patient_number: number,
    age: number,
    address: string,
    phone_number: number,
    created_at: string,
    updated_at: string
}



const Note:NextPage<Props> = ({ patient}) => {
    const [note, setNote] = useState('')
    const [submit, setSubmit] = useState(false)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        setSubmit(true)
    }

    const handleSave =  async () => {
        for (let i=0; i < patient['patient_record'].length; i++){
            delete patient['patient_record'][i].patient
        }
        patient['patient_record'].push({note:note})
        fetch(`https://indigo-emr.herokuapp.com/api/patient/${patient.id}/update/`, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(patient)
        })
        setTimeout(()=>{
            Router.push(`/records/${patient.id}`)
        },3000)
    }

    useEffect(() => {
        if(submit){
            handleSave()
        }
        
    }, [submit])

    return (
            <form onSubmit={onSubmit} className='h-4/5'>
                <textarea onChange={(e) => {setNote(e.target.value)}} value={note} className='focus:outline-none focus:ring focus:border-blue-300 rounded w-3/4 h-4/5 pl-2 pt-2 shadow-lg resize-none' placeholder='Add text.'/>
                <div> <button type='submit' className='bg-main mt-4 p-1 h-8 w-16 rounded text-white hover:text-blue-300 text-xs'>Save</button></div>
            </form>          
    )
}

export default Note


