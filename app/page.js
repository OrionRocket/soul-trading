'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Laptop,
  Server,
  Shield,
  Code,
  Users,
  ChevronRight,
  Menu,
  Phone,
  Mail,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-16 flex items-center bg-white shadow-sm'>
        <Link className='flex items-center justify-center' href='#'>
          <Code className='h-6 w-6 text-indigo-600' />
          <span className='ml-2 text-xl font-bold text-gray-900'>
            Soul Trading
          </span>
        </Link>
        <button
          className='ml-auto lg:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className='h-6 w-6 text-gray-600' />
        </button>
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:flex absolute top-16 left-0 right-0 bg-white shadow-md lg:shadow-none flex-col lg:flex-row gap-4 p-4 lg:p-0 lg:static lg:ml-auto`}
        >
          <Link
            className='text-sm font-medium hover:text-indigo-600'
            href='#services'
          >
            Services
          </Link>
          <Link
            className='text-sm font-medium hover:text-indigo-600'
            href='#about'
          >
            About
          </Link>
          <Link
            className='text-sm font-medium hover:text-indigo-600'
            href='#testimonials'
          >
            Testimonials
          </Link>
          <Link
            className='text-sm font-medium hover:text-indigo-600'
            href='#contact'
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-indigo-50'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-indigo-800'>
                  Innovative IT Solutions for Your Business
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-600 md:text-xl text-sm sm:text-base'>
                  Empowering businesses with cutting-edge technology since 2010.
                  Transform your operations with Soul Trading.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'>
                <Button className='bg-indigo-600 text-white hover:bg-indigo-700'>
                  Get Started
                </Button>
                <Button
                  variant='outline'
                  className='text-indigo-600 border-indigo-600 hover:bg-indigo-50'
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id='services' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6   mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 md:mb-12 text-gray-900'>
              Our Services
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg'>
                <Laptop className='h-12 w-12 mb-4 text-indigo-600' />
                <h3 className='text-xl font-bold mb-2 text-gray-900'>
                  IT Consulting
                </h3>
                <p className='text-gray-600 text-sm sm:text-base'>
                  Strategic technology planning and implementation guidance for
                  your business growth.
                </p>
              </div>
              <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg'>
                <Server className='h-12 w-12 mb-4 text-indigo-600' />
                <h3 className='text-xl font-bold mb-2 text-gray-900'>
                  Cloud Solutions
                </h3>
                <p className='text-gray-600 text-sm sm:text-base'>
                  Secure and scalable cloud infrastructure to enhance your
                  operational efficiency.
                </p>
              </div>
              <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg'>
                <Shield className='h-12 w-12 mb-4 text-indigo-600' />
                <h3 className='text-xl font-bold mb-2 text-gray-900'>
                  Cybersecurity
                </h3>
                <p className='text-gray-600 text-sm sm:text-base'>
                  Comprehensive security solutions to protect your valuable
                  digital assets.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id='about'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-50'
        >
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='grid items-center gap-6 lg:grid-cols-2 lg:gap-12'>
              <img
                alt='Soul Trading team'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                height='310'
                src='/placeholder.jpg'
                width='550'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900'>
                    About Soul Trading
                  </h2>
                  <p className='max-w-[600px] text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg'>
                    Established in 2010, Soul Trading has been at the forefront
                    of IT innovation for over a decade. Our passionate team of
                    experts is dedicated to delivering tailored technology
                    solutions that drive business growth and efficiency.
                  </p>
                </div>
                <Button className='w-fit bg-indigo-600 text-white hover:bg-indigo-700'>
                  Our Journey
                  <ChevronRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id='testimonials' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6 mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 md:mb-12 text-gray-900'>
              What Our Clients Say
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='flex flex-col p-6 bg-white rounded-lg shadow-lg'>
                <p className='text-gray-600 mb-4 text-sm sm:text-base'>
                  "Soul Trading transformed our IT infrastructure, significantly
                  improving our efficiency and security. Their expertise is
                  unmatched!"
                </p>
                <p className='text-indigo-600 font-semibold text-sm sm:text-base'>
                  - Sarah Johnson, CEO of TechCorp
                </p>
              </div>
              <div className='flex flex-col p-6 bg-white rounded-lg shadow-lg'>
                <p className='text-gray-600 mb-4 text-sm sm:text-base'>
                  "The cloud migration led by Soul Trading was seamless. Their
                  team's professionalism and knowledge made a complex process
                  feel easy."
                </p>
                <p className='text-indigo-600 font-semibold text-sm sm:text-base'>
                  - Mark Thompson, CTO of InnovateTech
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id='contact'
          className='w-full py-12 md:py-24 lg:py-32 bg-indigo-50'
        >
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900'>
                  Get in Touch
                </h2>
                <p className='max-w-[600px] text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg'>
                  Ready to elevate your IT infrastructure? Contact us today for
                  a free consultation.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <form className='flex flex-col gap-2'>
                  <Input placeholder='Your Name' type='text' />
                  <Input placeholder='Your Email' type='email' />
                  <Button
                    type='submit'
                    className='bg-indigo-600 text-white hover:bg-indigo-700'
                  >
                    Contact Us
                  </Button>
                </form>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
                  <div className='flex items-center gap-2'>
                    <Phone className='h-5 w-5 text-indigo-600' />
                    <span className='text-gray-600'>+971 043281716</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Mail className='h-5 w-5 text-indigo-600' />
                    <a
                      href='mailto:careers@soultrading.com'
                      className='text-gray-600 hover:text-indigo-600'
                    >
                      career@soultrading.co
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500'>
          © 2023 Soul Trading. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
