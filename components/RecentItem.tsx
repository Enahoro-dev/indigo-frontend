import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface Props{
  id:number,
  firstname:string,
  lastname:string
}

const RecentItem:NextPage<Props> = ({id, firstname, lastname}) => {
  return (
    <div className='flex items-center justify-between bg-white p-2 rounded mb-4 h-12 w-full'>
        <Image
            src='/images/profile.png'
            alt="avi"
            width={30}
            height={30}
        />
        <p className='text-xs'>{firstname} {lastname}</p>
        <Link href='/records/[id]' as={`/records/${id}`}><p className='text-xs cursor-pointer text-main'>View</p></Link>
    </div>
  )
}

export default RecentItem