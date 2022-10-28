import React, { useState } from 'react'
import PickAvatarComponent from '../../components/pick-avatar/pick-avatar'
import styles from './login.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../../components/providers/authProvider'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const router = useRouter()
    const { actions: { login } } = useAuth()

    async function onSubmit(ev) {
        ev.preventDefault()

        if (validateForm()) {
            try {
                const result = await login(email, password)
                console.log(result)
                router.push('/dashboard')
            } catch (error) {
                console.error(error)
            }
        }
    }

    function validateForm() {
        let errors = []
        setErrors(errors)
        return errors.length === 0
    }

    function hasError(key) {
        return errors.indexOf(key) !== -1;
    }

    return (
        <div className="container offset-app-header px-4">
            <div className={`mt-4 ${styles.container}`}>
                <div className="w-50">
                    <h1 className="h2 color-primary">Welcome back!</h1>
                </div>
                <h2 className="h4 color-dark">We are glad to have you back.</h2>

                <form onSubmit={onSubmit} className='mt-4'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            value={email} onChange={e => setEmail(e.currentTarget.value)}
                            required={true}
                            type="email" className="form-control"
                            id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            value={password} onChange={e => setPassword(e.currentTarget.value)}
                            required={true}
                            type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className='d-flex justify-content-between pt-4'>
                    <span className='color-dark'>Don't have an account yet ?</span>
                    <Link href={'/login'}>
                        <a className='color-primary'>Sign up</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login