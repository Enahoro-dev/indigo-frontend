import type {NextPage} from 'next'
import Link from 'next/link'


const login:NextPage = () => {
    return (
        <div className='flex flex-col w-full h-full items-center justify-center'>
            <div className='flex flex-col justify-start w-1/4 mb-4 mt-36'>
                <h2 className='font-bold text-xl mb-2'>Sign In</h2>
                <p className='text-xs font-semibold'>Welcome back! Enter your details below to continue.</p>
            </div>
            <div className='flex flex-col justify-start w-1/4'>
                <div className='flex flex-col justify-start mb-2'>
                    <label className='my-2 font-bold text-xs'>Email</label>
                    <input className='focus:outline-none focus:ring focus:border-blue-300 h-8 pl-2 text-sm border'/>
                </div>
                <div className='flex flex-col justify-start mb-4'>
                    <label className='my-2 font-bold text-xs'>Password</label>
                    <input className='focus:outline-none focus:ring focus:border-blue-300 h-8 pl-2 text-sm border'/>
                </div>
                <Link href='/'><button className='bg-main text-xs text-white h-10 rounded-sm hover:text-blue-300'>Sign in</button></Link>
            </div>
        </div>
    )
}

export default login
 