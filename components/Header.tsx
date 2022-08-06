import type { NextPage } from 'next'
import Image from 'next/image'


const Header:NextPage = () => {
    return (
        <div className='bg-white flex flex-row items-center w-full h-header'>
            <div className='float-left ml-4'>
                <Image
                src='/images/logo.png'
                alt="logo"
                width={100}
                height={40}
                />
            </div>
            <div className='flex flex-row items-center float-right ml-auto mr-6'>
                <div className='mr-2 flex items-center'>
                    <Image
                    src='/images/avi.png'
                    alt="avi"
                    width={30}
                    height={30}
                    />
                </div>
                <div className='text-xs'>
                    <div><h3 className='font-semibold mb-0 text-sm'>Dr Mina Abu</h3></div>
                    <div><p className='text-xs'>Resident</p></div>
                </div>
            </div>
        </div>
    )
}

export default  Header
