import React from 'react'

const LoginPage = () => {
    return (
        <div
            className="bg-grey min-h-screen flex flex-col bg-no-repeat bg-cover"
        >
            <header class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
                <h1 class="text-4xl">Mood</h1>
            </header>
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <h1 class="text-4xl">Log in</h1>
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
                    <div class="flex-row">
                        <button class="bg-black text-white rounded mt-3 ml-10 h-10 w-16">signup</button>
                        <button class="bg-black text-white rounded mt-3 ml-28 h-10 w-16">login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage