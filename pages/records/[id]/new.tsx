import type { NextPage, GetServerSidePropsContext } from 'next'
import Note from '../../../components/Note'
import {Patient} from '../../../components/Recent'

interface Props{
    patient:Patient
}

const create:NextPage<Props> = ({patient}) => {
  return (
    <div className='h-full'>
        <div className='flex items-center  mb-12'>
            <div className='bg-white w-3/4 h-20 pl-4 flex flex-col justify-center rounded'>
                <p className='text-sm font-semibold'>{patient.first_name} {patient.last_name}</p>
                <p  className='text-xs'>{patient.patient_number}</p>
            </div>
    
        </div>
        <Note patient={patient}/>
    </div>
  )
}

export const getServerSideProps = async(context:GetServerSidePropsContext) =>{
  const res = await fetch(`https://indigo-emr.herokuapp.com/api/patient/${context.params?.id}/`)
  const patient = await res.json() 

  return{
    props:{patient}
  }
}

export default create