import React from 'react'
import { Google, GitHub } from '@mui/icons-material';
import { signIn } from 'next-auth/react';

const SocialLogin = () => {
   
    return (
        <div > or login with
            <Google className='ml-2 cursor-pointer' onClick={() => signIn("google")} />
            <GitHub className='ml-2 cursor-pointer' onClick={() => signIn("github")} />
        </div>
    )
}

export default SocialLogin