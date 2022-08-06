import type { NextPage } from 'next'
import Numbers from '../components/Numbers'
import Recent,{Patient} from '../components/Recent'

interface Props{
  recents: Patient[]
  patient_length:number 
  record_length:number
}

const Home:NextPage<Props> = ({recents, patient_length, record_length}) => {
  return (
    <div className='ml-4'>
      <h2 className='font-bold'>Hello, Dr Abu.</h2>
      <Numbers patients={patient_length} records={record_length}/>
      <Recent recents={recents}/>
    </div>
  )
}


export async function getServerSideProps() {
  const [patientRes, recordRes] = await Promise.all([
    fetch(`https://indigo-emr.herokuapp.com/api/patients/`), 
    fetch(`https://indigo-emr.herokuapp.com/api/records/`)
  ]);
  const [patients, records] = await Promise.all([
    patientRes.json(), 
    recordRes.json()
  ]);
  const patient_length= patients.length
  const record_length= records.length
  const recents = patients.splice(0,8)
  
  return { props: { patient_length, record_length, recents } };
}

export default Home
