import type { NextPage } from 'next'
import Image from 'next/image'
import NavItem from './NavItem'
import {navModel} from './navmodel'
import Link from 'next/link'


const Nav:NextPage = () => {
    return (
        <div className='bg-white w-36 h-nav flex flex-col pt-8 items-center rounded'>
            {
                navModel.map((nav,index) =>(
                    <div key={index} className='mb-8'>
                        <NavItem image={nav.image} text={nav.text} link={nav.link}/>
                    </div>
                ))
            }
            <hr className='w-3/5' />
            <div className='flex justify-center items-center mt-4'>
                <Image
                    src='/images/logout.png'
                    alt="logout"
                    width={23}
                    height={18}
                />
                <Link href='/login'><p className='text-xs font-medium ml-2 cursor-pointer hover:text-main'>Logout</p></Link>
            </div>
        </div>
    )
}

export default  Nav
