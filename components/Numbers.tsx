import type { NextPage } from 'next'
import Image from 'next/image'

interface Props{
    patients:number
    records:number
}

const Numbers:NextPage<Props> = ({patients,records}) => {
  return (
    <div className='w-full mt-10 mb-8'>
        <p className='text-sm mb-4 font-semibold'>Numbers</p>
        <div className='bg-white w-num h-20 flex items-center justify-around rounded'>
            <div className='flex items-center h-full'>
                <Image
                    src='/images/patients.png'
                    alt="icon"
                    width={40}
                    height={40}
                />
                <div className='ml-2'>
                    <p className='text-sm font-medium'>Total Patients</p>
                    <p className='text-xs'>{patients}</p>
                </div>
            </div>
            <div className='flex items-center h-full'>
                <Image
                    src='/images/folder.png'
                    alt="icon"
                    width={40}
                    height={40}
                />
                <div className='ml-2'>
                    <p className='text-sm font-medium'>Total Records</p>
                    <p className='text-xs'>{records}</p>
                </div>
            </div>
            <div className='flex items-center h-full'>
                <Image
                    src='/images/doctor.png'
                    alt="icon"
                    width={40}
                    height={40}
                />
                <div className='ml-2'>
                    <p className='text-sm font-medium'>Total Doctors</p>
                    <p className='text-xs'>1</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Numbers