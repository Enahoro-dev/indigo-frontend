import type { NextPage, GetServerSidePropsContext } from 'next'
import UpdateNote from '../../../../../components/UpdateNote'
import {Patient} from '../../../../../components/Recent'
import {Record} from '../../index'

interface Props{
    patient:Patient
    record_id:number
}

const update:NextPage<Props> = ({patient, record_id}) => {
  return (
    <div className='h-full'>
        <div className='flex items-center  mb-12'>
            <div className='bg-white w-3/4 h-20 pl-4 flex flex-col justify-center rounded'>
                <p className='text-sm font-semibold'>{patient.first_name} {patient.last_name}</p>
                <p  className='text-xs'>{patient.patient_number}</p>
            </div>
    
        </div>
        <UpdateNote record_id={record_id} patient={patient} />
    </div>
  )
}

export const getServerSideProps = async(context:GetServerSidePropsContext) =>{
  const res = await fetch(`https://indigo-emr.herokuapp.com/api/patient/${context.params?.id}/`)
  const patient = await res.json()
  const record_array = patient.patient_record
  const record_id = record_array.findIndex((obj:Record )=> {return obj.id == context.params?.rec})
  return{
    props:{patient, record_id}
  }
}

export default update