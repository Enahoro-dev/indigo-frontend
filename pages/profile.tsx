import type { NextPage } from 'next'
import Container from '../components/formcontainer'

const profile:NextPage = () => {
  return (
    <div className='ml-8'>
        <div className='mt-4 flex items-center'>
            <div>
                <p className='text-sm font-semibold'>Add New Patient</p>
                <p className='text-xs'>Fill out the form below to add a new patient to the system.</p>
            </div>      
        </div>
        <Container/>
    </div>
    
  )
}

export default profile