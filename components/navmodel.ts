import dashboard from '../public/images/dashboard.png'
import profile from '../public/images/profile.png'
import notes from '../public/images/notes.png'
import records from '../public/images/records.png'
import { StaticImageData } from 'next/image'

export type Nav  = {
    id:number
    text:string
    image:StaticImageData
    link:string
}

export const navModel = [
    {
        id:1,
        text:'Dashboard',
        image:dashboard,
        link:'/'
    },{
        id:2,
        text:'Profile',
        image:profile,
        link:'/profile'
    },{
        id:3,
        text:'Records',
        image:records,
        link:'/'
    },{
        id:4,
        text:'Notes',
        image:notes,
        link:'/'
    }
]