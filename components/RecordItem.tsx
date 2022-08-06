import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {Record} from '../pages/records/[id]/index'

interface Props{
  records:Record[]
}

const RecordItem:NextPage<Props> = ({records}) => {
  return (
    <div>
      {
        records.map((record, index) => (
          <div key={index} className='flex items-center bg-white p-2 rounded mb-4 h-12 w-3/5'>
            <Image
                src='/images/clock.png'
                alt="avi"
                width={15}
                height={15}
            />
            <p className='text-xs ml-2'>{record.date}</p>
            <Link href='/records/[id]/update/[rec]' as={`/records/${record.patient}/update/${record.id}`}><p className='text-xs text-main ml-auto mr-4 cursor-pointer'>View</p></Link>
          </div>
        ))
      }
    </div>
    
  )
}

export default RecordItem