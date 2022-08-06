import type {NextPage} from 'next'
import React, { useState,useEffect, ChangeEvent, FormEvent } from 'react'
import Router from 'next/router'
import { FormData} from './reducer'
import {formItems} from './formmodel'


interface Props {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  formData: FormData
  initialFormData:FormData
}

type Errors = {
    field?:string
}

type Data = {
    patient_record:[]
    first_name: string,
    last_name: string,
    age: number,
    sex:string,
    patient_number: number,
    address: string,
    phone_number: number

}

const Form:NextPage<Props> = ({ onInputChange, formData, initialFormData }) => {
    const [formErrors, setFormErrors ] = useState<Errors>({})
    const [isSubmitted, setIsSubmitted] =  useState<boolean>(false)
    const [success, setSuccess] = useState<string>('hidden')

    const data:Data = {
        patient_record:[],
        first_name: formData['user']['first_name'],
        last_name: formData['user']['last_name'],
        age: formData['user']['age'],
        sex: formData['user']['sex'],
        patient_number: formData['user']['patient_number'],
        address: formData['user']['address'],
        phone_number: formData['user']['phone_number']
    }


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        setFormErrors(validate(data))
        setIsSubmitted(true)
    }

    let submitProfile = async () => {
        fetch(`https://indigo-emr.herokuapp.com/api/patient/new/`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
        })
        setTimeout(()=>{
            Router.push(`/`)
        },3000)
    }    


    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmitted){
            submitProfile()
            setSuccess('')
        }
    }, [formErrors, isSubmitted])

    let validate = (data:Data) => {
        const errors:Errors = {};
        if (data.first_name === '' || data.age === 0 || data.last_name === '' || data.address === '' || data.sex === '' || data.patient_number === 0 || data.phone_number === 0 ){
            errors.field = 'Please fill all fields'
        }
        return errors
       
    };

  return (
    <form onSubmit={onSubmit} className='w-5/6 mt-4'>
        <div className=' flex flex-wrap'>
            {
            formItems.map((form, index)=>(
            <div key={index} className='flex flex-col my-2 w-2/5 mr-10'>
                <label className='my-2 font-semibold text-xs'>{form.label}</label>
                <input onChange={onInputChange} className='focus:outline-none focus:ring focus:border-blue-300 h-8 pl-2 text-sm border border-gray-400' type={form.type} name={form.name}/>
            </div>  
            ))
            }
        </div>
       
      <p className='text-red-500 mt-2 text-xs'>{formErrors.field}</p>
      <button type='submit' className='bg-main mt-4 p-1 h-8 w-16 rounded text-xs text-white hover:text-blue-300'>Save</button>
    </form>
  )
}

export default Form
