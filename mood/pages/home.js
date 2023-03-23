import React from "react";

const HomePage = () => {
  return (
    <div>
      <header class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
        <h1 class="text-4xl">Mood</h1>
      </header>
      <header class="flex-none flex  bg-gray-100 px-4 items-center">
        <p>March 4, 2023</p>
      </header>
      <div class="p-0.5 bg-black"></div>

      <ul class="flex flex-col bg-gray-100 p-4">
        <div class="flex justify-center">
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />
            <button
              class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              Search
            </button>
          </div>
        </div>
        <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-2  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Do Homework</div>
            </div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0.2 px-4 border border-gray-400 rounded shadow">
              START
            </button>
          </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-2  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Prepare Exam</div>
            </div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0.2 px-4 border border-gray-400 rounded shadow">
              START
            </button>
          </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-2  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Write Essay</div>
            </div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0.2 px-4 border border-gray-400 rounded shadow">
              START
            </button>
          </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-2  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Make PPT</div>
            </div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0.2 px-4 border border-gray-400 rounded shadow">
              START
            </button>
          </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-2  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Coding</div>
            </div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0.2 px-4 border border-gray-400 rounded shadow">
              START
            </button>
          </div>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
          <div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">Organize Data</div>
            </div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-0.2 px-4 border border-gray-400 rounded shadow">
              START
            </button>
          </div>
        </li>
      </ul>

      <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full w-full grid-cols-2 mx-auto">
          <button
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Home
            </span>
          </button>

          <button
            type="button"
            class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              ></path>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
