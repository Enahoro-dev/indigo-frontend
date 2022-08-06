import type { NextPage, GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import RecordItem from '../../../components/RecordItem'
import {Patient} from '../../../components/Recent'

export type Record ={
  id?: number,
  note: string,
  date?: string,
  created_at?: string,
  updated_at?:string,
  patient?: number
}

interface Props{
  records:Record[]
  patient:Patient
}

const records:NextPage<Props> = ({records,patient}) => {
  return (
    <div className='h-full'>
        <div className='flex items-center  mb-12'>
            <div className='bg-white w-3/4 h-20 pl-4 flex flex-col justify-center rounded'>
                <p className='text-sm font-semibold'>{patient.first_name} {patient.last_name}</p>
                <p  className='text-xs'>{patient.patient_number}</p>
            </div>
            <Link href='/records/[id]/new' as={`/records/${patient.id}/new`}><button className='bg-main text-white hover-text-blue-300 ml-8 p-1 h-10 w-32 rounded text-xs'>+Add new record</button></Link>
            
        </div>
        <RecordItem records={records}/>
    </div>
  )
}

export const getServerSideProps = async(context:GetServerSidePropsContext) =>{
  const res = await fetch(`https://indigo-emr.herokuapp.com/api/patient/${context.params?.id}/`)
  const patient = await res.json() 
  const record_list = patient.patient_record
  const records = record_list.splice(0,6)
  return{
    props:{records,patient}
  }
}

export default records