import React from 'react'
  
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

<li class="border-gray-400 flex flex-row mb-2">
<div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
<div class="flex-1 pl-1 mr-16">
 <div class="font-medium">Company A</div>
</div>
<div class="text-red-500 ">↑ 3.45%</div>
</div>
</li>
<li class="border-gray-400 flex flex-row mb-2">
<div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
<div class="flex-1 pl-1 mr-16">
 <div class="font-medium">Company B</div>

</div>
<div class="text-gray-500 ">- 0.0%</div>
</div>
</li>
    <li class="border-gray-400 flex flex-row mb-2">
<div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
<div class="flex-1 pl-1 mr-16">
 <div class="font-medium">Company C</div>
</div>
<div class="text-blue-500 ">↓ 56.78%</div>
</div>
</li>
<li class="border-gray-400 flex flex-row mb-2">
<div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
<div class="flex-1 pl-1 mr-16">
 <div class="font-medium">Company A</div>
</div>
<div class="text-red-500 ">↑ 3.45%</div>
</div>
</li>
<li class="border-gray-400 flex flex-row mb-2">
<div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
<div class="flex-1 pl-1 mr-16">
 <div class="font-medium">Company A</div>
</div>
<div class="text-red-500 ">↑ 3.45%</div>
</div>
</li>
<li class="border-gray-400 flex flex-row mb-2">
<div class="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
<div class="flex-1 pl-1 mr-16">
 <div class="font-medium">Company A</div>
</div>
<div class="text-red-500 ">↑ 3.45%</div>
</div>
</li>

</ul>
</div>


  )
}
  
export default HomePage