import type { NextPage } from 'next'
import Header from './Header'
import Nav from './Nav'
import Search from './Search'

interface Props {
    children:JSX.Element
}


const Layout:NextPage<Props> = ({children}) => {
    return (
        <div className='fixed h-screen w-screen bg-main font-semibold flex items-center justify-center z-10 tablet:hidden'><h2>Please open this website on a larger screen (laptop or desktop) to view it.</h2>
            <div className='w-screen h-screen hidden tablet:block'>
                <Header/>
                <div className='h-layout pl-8 bg-back flex items-center'>
                    <Nav/>
                    <div className='h-layout w-3/5 mx-12'>{children}</div>
                    <Search/>
                </div>            
            </div>
        </div>
    )
}

export default Layout
