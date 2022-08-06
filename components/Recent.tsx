import type { NextPage } from 'next'
import RecentItem from './RecentItem'

interface Props{
    recents: Patient[]
}

export type Patient ={
    id: number,
    patient_record: [ ],
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



const Recent:NextPage<Props> = ({recents}) => {
  return (
    <div>
        <p className='text-sm font-semibold'>Recent</p>
        <p className='text-xs mb-4'>Select a patient to add a new note or edit existing note.</p>
        <div className='flex flex-wrap'>
        {
            recents.map((item, index) => (
                <div key={index} className='w-2/5 mr-8'><RecentItem id={item.id} firstname={item.first_name} lastname={item.last_name}/></div>
            ))
        }
        </div>
    </div>
  )
}


export default Recent
