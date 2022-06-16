import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-gray font-body p-8'>
      <h1 className='font-bold text-gray-800 text-4xl py-4'>Hello World</h1>
        <p className="text-base text-body text-gray-600">
            Welcome to my humble block for which you can navigate and enjoy.
        </p>
    </div>
  )
}
