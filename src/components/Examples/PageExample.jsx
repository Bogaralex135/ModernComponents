/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KAznIaSypfp
 */
import Link from 'next/link'
import { TextReveal } from '../TextEffects/TextReveal'

export default function PageExample() {
  return (
    <div className='flex flex-col min-h-screen text-black'>
      <header className='py-6 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>Family Holding Company</h1>
        </div>
      </header>
      <main className='flex-1 flex items-center justify-center'>
        <section className='w-full max-w-2xl p-4 sm:p-6 lg:p-8'>
          <div className='text-center space-y-4'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>
              Welcome to our Family Holding Company
            </h2>
            <p className='text-lg sm:text-xl lg:text-2xl text-gray-600'>
              We strive for excellence and simplicity. Let&aposs discuss how we
              can work together.
            </p>
            <TextReveal
              bgTextColor='hsla(0, 0%, 100%, 0.5)'
              textColor='#000'
              className='font-bold text-2xl'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              dolorum iste, atque ab, ipsam tempore vero molestiae quasi tenetur
              velit fuga ad incidunt, eaque exercitationem aut? Ipsum esse
              consectetur natus!
            </TextReveal>
            <Link
              className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-navy hover:bg-navy-light focus:shadow-outline focus:outline-none'
              href='#'>
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <footer className='py-6 px-4 sm:px-6 lg:px-8 text-center'>
        <p className='text-base text-gray-400'>
          © 2024 Family Holding Company. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
