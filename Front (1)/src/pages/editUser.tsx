import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'

const SignupForm = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnSubmit = async () => {
    console.log(username)
        try {
            let response = await axios.post(`http://localhost:9000/signup`,
                { username, email, password }
            )
            if (response.data) {
                console.log(response.data)
                Router.push('/user')
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <section className="bg-grey-lighter min-h-screen border-teal-400 flex flex-col">
            <div className="container max-w-sm mx-auto   flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleOnSubmit()
                }}
                    className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        placeholder="User name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full text-center py-3 border-slate-400 rounded bg-lime-500 text-white  focus:outline-none my-1"
                        onSubmit={handleOnSubmit}
                    >
                        Create Account
                    </button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </form>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link href="/" className="no-underline border-b border-blue text-blue"> Log in</Link>
                </div>
            </div>
        </section>
    )
}

export default SignupForm