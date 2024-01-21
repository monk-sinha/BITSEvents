import React from 'react'
import styles from '../style'

const Home = () => {
  return (
    <>
    <section id='home' className={`flex md:flex-row h-full flex-col ${styles.paddingY} mt-20 mb-20`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 font-["Poppins"] sm:px-16 px-6`}>
        <div className='flex flex-row w-full justify-center text-center py-[6px] px-4  font-semibold text-gray-600'>
          FOR BITSIANS, BY BITSIANS
        </div>
        <div className='flex flex-row w-full justify-center text-center py-3'>
          <h1 className='inline font-semibold ss:text-[72px] text-[56px]'> Your life at BITS
          <p className=' inline text-gradient px-3.5'>made easier</p>
          </h1>
        </div>
        <p className='flex flex-row w-full justify-center text-center text-zinc-500 text-3xl mt-2 font-normal'>Get notified about the latest campus events here, with a unified dashboard.</p>
      </div>
    </section>
    <div className='flex flex-row w-full justify-center text-center py-5'>
      <button className='bg-gradient-to-br from-blue-700 to-pink-600 mb-20 font-["Poppins"] px-4 py-3 text-2xl rounded-md'>
      <a href={`/${'login'}`}>Get started</a>
        </button>
    </div>
    </>
  )
}

export default Home