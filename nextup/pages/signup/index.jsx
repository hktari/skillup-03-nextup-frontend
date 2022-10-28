import React, { useState } from 'react'
import PickAvatarComponent from '../../components/pick-avatar/pick-avatar'
import styles from './signup.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import authApi from '../../common/services/authApi'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [imageBase64, setImageBase64] = useState(null)
    const [errors, setErrors] = useState([])
    const router = useRouter()

    async function onSubmit(ev) {
        ev.preventDefault()

        if (validateForm()) {
            try {
                const result = await authApi.signup(email, firstName, lastName, password, imageBase64)
                console.log(result)
                router.push('/dashboard')
            } catch (error) {
                console.error(error)
            }
        }
    }

    function validateForm() {
        let errors = []
        if (password !== confirmPassword) {
            errors.push('confirmPassword')
        }

        setErrors(errors)
        return errors.length === 0
    }
    
    function hasError(key) {
        return errors.indexOf(key) !== -1;
    }

    return (
        <div className="container offset-app-header px-4">
            <div className={`mt-4 ${styles.container}`}>
                <h1 className="h2 color-primary">Hello!</h1>
                <h2 className="h4 color-dark">Get started with your free account today.</h2>

                <div className="mt-4 text-center">
                    <PickAvatarComponent onImagePicked={(image) => setImageBase64(image)} />
                </div>
                <form onSubmit={onSubmit} className='mt-4'>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input
                                    value={firstName} onChange={e => setFirstName(e.currentTarget.value)}
                                    required={true}
                                    type="text" className="form-control" id="firstName" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input
                                    value={lastName} onChange={e => setLastName(e.currentTarget.value)}
                                    required={true}
                                    type="text" className="form-control" id="lastName" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            value={email} onChange={e => setEmail(e.currentTarget.value)}
                            required={true}
                            type="email" className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            value={password} onChange={e => setPassword(e.currentTarget.value)}
                            required={true}
                            type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                        <div class={`input-group has-validation`}>
                            <input
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.currentTarget.value)}
                                required={true}
                                type="password" 
                                className={`form-control ${hasError('confirmPassword') ? 'is-invalid' : ''}`} id="confirmPassword" />
                            <div class="invalid-feedback">
                                Passwords don't match.
                            </div>
                        </div>
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

export default Signup