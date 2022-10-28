import React from 'react'
import { useAuth } from '../components/providers/authProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {

    const { state: { user } } = useAuth();
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.replace('/landing-page')
        } {
            router.replace('/dashboard')
        }
    }, [router.pathname, user])


    return (
        <div>Index</div>
    )
}

export default Index