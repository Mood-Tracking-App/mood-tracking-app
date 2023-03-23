import React from 'react'

const SignupPage = () => {
    return (
        <div
            className="bg-grey min-h-screen flex flex-col bg-no-repeat bg-cover"
        >
            <header class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
                <h1 class="text-4xl">Mood</h1>
            </header>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <h1 class="text-4xl">Sign Up</h1>
                <div className="bg-grey px-6 py-8 rounded-xl shadow-md text-black w-full ">
                    <p>E-mail:</p>
                    <input
                        type={"email"}
                        className="block border border-black w-full p-2 rounded mb-0 mt-2"
                        name={"email"}
                        placeholder={"mood@example.com"}
                    />
                    <p className='pt-3'>Password:</p>
                    <input
                        type={"password"}
                        className="block border border-black w-full p-2 rounded mb-0 mt-2"
                        name={"password"}
                        placeholder={"*********"}
                    />
                    <p className='pt-3'>Re-enter Password:</p>
                    <input
                        type={"password"}
                        className="block border border-black w-full p-2 rounded mb-0 mt-2"
                        name={"password"}
                        placeholder={"*********"}
                    />
                    <p className='pt-3'>User Name:</p>
                    <input
                        type={"username"}
                        className="block border border-black w-full p-2 rounded mb-0 mt-2"
                        name={"username"}
                        placeholder={"Mood"}
                    />
                    <div class="flex pt-3 w-full items-center justify-center">
                        <button class="bg-black text-white rounded h-10 w-20">SUBMIT</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignupPage