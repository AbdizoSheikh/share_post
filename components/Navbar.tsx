import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {
    const session=true
    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 gap-10 flexStart '>
                <Link href='/'>
                    <Image
                        src='./logo.svg'
                        width={115}
                        height={43}
                        alt='Flexibble'

                    />
                </Link>
                <ul className='lg:flex hidden text-small gap-8 '>
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='flexCenter gap-4'>
                {session ? (
                
                    <>
                        UserProfile
                        <Link href='/create-project'>
                            Share Work
                        </Link>
                    </>
                ) : (
                        <AuthProviders />
                )}


            </div>

        </nav>
    )
}

export default Navbar
