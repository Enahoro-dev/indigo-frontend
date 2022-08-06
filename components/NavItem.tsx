import type { NextPage } from 'next'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props{
    image:StaticImageData
    text:string
    link: string
}


const NavItem:NextPage<Props> = ({image,text, link}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image
                src={image}
                alt="icon"
                width={32}
                height={30}
            />
            <Link href={link}><p className='text-xs font-semibold mt-2 cursor-pointer hover:text-main'>{text}</p></Link>
            
        </div>
    )
}

export default  NavItem