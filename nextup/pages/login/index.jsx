import React, { useState } from 'react'
import PickAvatarComponent from '../../components/pick-avatar/pick-avatar'
import styles from './login.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Login = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const router = useRouter()

    async function onSubmit(ev) {
        ev.preventDefault()

        if (validateForm()) {
            router.push('/dashboard')
        }
    }

    function validateForm() {
        if(password !== confirmPassword){
            return false
        }

        return true
    }

    return (
        <div className="container offset-app-header px-4">
            <div className={`mt-4 ${styles.container}`}>
                <h1 className="h2 color-primary">Hello!</h1>
                <h2 className="h4 color-dark">Get started with your free account today.</h2>

                <div className="mt-4 text-center">
                    <PickAvatarComponent onImagePicked={() => { }} />
                </div>
                <form onSubmit={onSubmit} className='mt-4'>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <label for="firstName" className="form-label">First name</label>
                                <input
                                    required={true}
                                    type="text" className="form-control" id="firstName" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label for="lastName" className="form-label">Last name</label>
                                <input
                                    required={true}
                                    type="text" className="form-control" id="lastName" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            required={true}
                            type="email" className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input
                            required={true}
                            type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label for="confirmPassword" className="form-label">Confirm password</label>
                        <input
                            required={true}
                            type="password" className="form-control" id="confirmPassword" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign up</button>
                </form>
                <div className='d-flex justify-content-between pt-4'>
                    <span className='color-dark'>Already have an account ?</span>
                    <Link href={'/login'}>
                        <a className='color-primary'>Sign in</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login