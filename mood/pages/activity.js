import React from 'react'
import { useRouter } from 'next/router';

const ActivityPage = ({ activity, action }) => {
    return (

        <div>
            <a class="flex bg-gray-100 px-4" href={`/home`}>{"< Back"}</a>
            <header class="flex-none flex h-16 bg-gray-100 px-4 items-center">

                <h1 class="text-4xl">Mood</h1>

            </header>
            <header class="flex-none flex  bg-gray-100 px-4 items-center">

                <p>Activity: {activity}</p>
            </header>
            <div class="p-0.5 bg-black"></div>
            <div class='container max-2xl h-full flex flex-col mx-auto items-center'>
                <div className="flex items-center justify-center h-auto max-w-lg pt-10 rounded-lg">
                    <img class="h-40 w-56" src={'../default.jpg'} alt="Default image" />
                </div>
                <div className='pt-5'>
                    <button
                        type="button"
                        className="py-2 px-2 mr-2 w-32 h-10 bg-[#FF0000] hover:bg-[#D10000] focus:ring-[#FF0000] focus:ring-offset-none text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                        onClick={action}
                    >
                        █ STOP
                    </button>
                </div>
                <div class="w-96 mt-5 bg-orange-300 border-solid border-2 border-black rounded-md flex flex-1 items-center p-2">
                    <div class="flex-1 pl-10 mr-16 text-lg">
                        <div class="font-lg">Emotion: </div>
                    </div>
                    <div class="flex-1 pl-1 mr-16 w-28 h-16 text-lg ">
                        <div class="pt-4 px-7 font-lg">Sad</div>
                    </div>
                </div>
                <div class="w-96 bg-orange-300 border-solid border-2 border-black rounded-md flex flex-1 items-center p-2">
                    <div class="flex-1 pl-10 mr-16 text-lg">
                        <div class="font-lg">Degree: </div>
                    </div>
                    <div class="flex-1 pl-1 mr-16 w-28 h-16 text-lg">
                        <div class="pt-4 px-7 font-lg">1</div>
                    </div>
                </div>
            </div>
            <div class='container max-2xl px-3 h-full flex flex-col mx-auto'>
                <header class="flex-none flex h-16 border-t items-center">

                    <h1 class="text-2xl">Suggestions</h1>

                </header>
                <div class="p-px bg-black"></div>
                <ul class="flex flex-col bg-emerald-300 p-4">
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div class="bg-white rounded-md flex flex-1 items-center p-3">
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">Here is a long suggestion for you.</div>
                            </div>
                        </div>
                    </li>
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div class="bg-white rounded-md flex flex-1 items-center p-3">
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">Here is a long suggestion for you.</div>
                            </div>
                        </div>
                    </li>
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div class="bg-white rounded-md flex flex-1 items-center p-3">
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium">Here is a long suggestion for you.</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


    )
}

export default ActivityPage