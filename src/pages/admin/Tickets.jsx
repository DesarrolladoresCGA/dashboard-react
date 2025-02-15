import React from 'react';
import { RiAddFill, RiArrowLeftSLine, RiArrowRightLine, RiArrowRightSLine, RiDiscussLine, RiFileTextLine, RiFilter2Fill, RiGithubLine, RiSearch2Line, RiTicketLine, RiTwitterLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Disclosure, Tab, Transition } from '@headlessui/react';
export const Tickets = () => {
    return (
        <div>
            {/* Title */}
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gab-y-4 mb-10'>
                <div>
                    <h1 className='text-bold text-gray-100 text-xl'>Overview</h1>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                        <Link to="/" className='hover:text-primary transition-colors'>Home</Link>
                        <span>-</span>
                        <span>Support Center</span>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-4 py-2 px-4 rounded-lg hover:text-primary transition-colors'>
                        <RiFilter2Fill />Filter
                    </button>
                    <button className='bg-primary/90 text-black  hover:bg-primary-100 flex items-center gap-4 py-2 px-4 rounded-lg transition-colors'>
                        Create
                    </button>
                </div>
            </div>
            {/* Portada */}
            <div className='bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='p-8'>
                    <h1 className='text-3xl mb-8'>How Can We Help You?</h1>
                    <form>
                        <div className='relative'>
                            <RiSearch2Line className='absolute top-1/2  -translate-y-1/2 left-4' />
                            <input type="text" className='bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full' placeholder='Search for anything' />
                        </div>
                    </form>
                </div>
                {/* Image */}
                <div className='flex justify-center'>
                    <img src="./clientes.png" alt="" className='w-72 h-72 object-cover' />
                </div>
            </div>
            <div>
                <Tab.Group>
                    <div className='bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg '>
                        <Tab.List className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-2 gap-y-6 bg-secondary-900/50 py-3 px-4 rounded-lg">
                            <div className='flex flex-col md:flex-row md:items-center gap-2'>
                                <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">Overview</Tab>
                                <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">Tickets</Tab>
                                <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">FAQ</Tab>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-primary/90 text-black  hover:bg-primary-100 flex items-center gap-4 py-2 px-4 rounded-lg transition-colors'>
                                    Create
                                </button>
                            </div>
                        </Tab.List>
                    </div>
                    <Tab.Panels className="mt-8">
                        <Tab.Panel>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div className='bg-secondary-100 p-8 rounded-lg'>
                                    {/* titulo de la card */}
                                    <div className='flex items-center  justify-between mb-8'>
                                        <h1 className='text-white text-2xl'>Popular tickets</h1>
                                        <Link to="/" className='flex items-center gap-2 text-primary'>Support <RiArrowRightLine /> </Link>
                                    </div>
                                    {/* Content card */}
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                                                <RiArrowRightSLine className='text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                What admin theme does?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    React
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                                                <RiArrowRightSLine className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How Extended Licese works?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    Laravel
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                                                <RiArrowRightSLine className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How to install on a local machine?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    Vue.js
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                                                <RiArrowRightSLine className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How can I import Google fonts?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    Angular 9
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                                                <RiArrowRightSLine className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How long the license in valid?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    Bootstrap 5
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                                                <RiArrowRightSLine className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How many end projects I can build?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    PHP
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                    </div>
                                </div>
                                <div className='bg-secondary-100 p-8 rounded-lg'>
                                    {/* titulo de la card */}
                                    <div className='flex items-center  justify-between mb-8'>
                                        <h1 className='text-white text-2xl'>FAQ</h1>
                                        <Link to="/" className='flex items-center gap-2 text-primary'>All FAQ <RiArrowRightLine /> </Link>
                                    </div>
                                    {/* Content card */}
                                    <div>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex flex-wrap md:items-center gap-4">
                                                <RiArrowRightSLine className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                What admin theme does?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    React
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                                                <RiArrowRightSLine className='text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How Extended Licese works?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    Laravel
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between  gap-4">
                                                <RiArrowRightSLine className='text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How to install on a local machine?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    Vue.js
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                                                <RiArrowRightSLine className='text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How can I import Google fonts?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    Angular 9
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                                                <RiArrowRightSLine className='text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How long the license in valid?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    Bootstrap 5
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                        <Disclosure>
                                            <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                                                <RiArrowRightSLine className='text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                How many end projects I can build?
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    PHP
                                                </span>
                                            </Disclosure.Button>
                                            <Transition
                                                enter='transition duration-100 ease-out'
                                                enterFrom='transition scale-95 opacity-0'
                                                enterTo='transition scale-100 opacity-100'
                                                leave='transition duration-75 ease-out'
                                                leaveForm='transition scale-100 opacity-100'
                                                leaveTo='transition scale-95 opacity-0'
                                            >
                                                <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                    By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </Disclosure>
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='bg-secondary-100 p-8 rounded-lg grid grid-cols-1 xl:grid-cols-4 gap-1'>
                                {/* section 1 */}
                                <div className='col-span-3'>
                                    <form>
                                        <div className='relative'>
                                            <RiSearch2Line className='absolute top-1/2  -translate-y-1/2 left-4' />
                                            <input type="text" className='bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full' placeholder='Search for anything' />
                                        </div>
                                    </form>
                                    <h1 className='text-white text-2xl py-8'>Public Tickets</h1>
                                    {/* Tickets */}
                                    <div>
                                        {/* Ticket */}
                                        <div className='flex flex-col gap-2 mb-8'>
                                            <div className='flex flex-wrap items-center gap-4'>
                                                <RiTicketLine className='md:text-2xl text-yellow-500' />
                                                <Link to="/" className='md:text-xl hover:text-blue-500 transition-colors'>
                                                    How to use Netronic with Django Frameworks?
                                                </Link>
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    React
                                                </span>
                                            </div>
                                            <div className='md:px-10'>
                                                <p className='text-gray-500'>
                                                    By Keenthemes to save tons and more to time money
                                                    projects are listed amazing outstanding projects are
                                                    listed
                                                </p>
                                            </div>
                                        </div>
                                        {/* Ticket */}
                                        <div className='flex flex-col gap-2 mb-8'>
                                            <div className='flex flex-wrap items-center gap-4'>
                                                <RiTicketLine className='md:text-2xl text-blue-500' />
                                                <Link to="/" className='md:text-xl hover:text-blue-500 transition-colors'>
                                                    How to use Netronic with Django Frameworks?
                                                </Link>
                                                <span className='hidden md:bock bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    React
                                                </span>
                                            </div>
                                            <div className='md:px-10'>
                                                <p className='text-gray-500'>
                                                    By Keenthemes to save tons and more to time money
                                                    projects are listed amazing outstanding projects are
                                                    listed
                                                </p>
                                            </div>
                                        </div>
                                        {/* Ticket */}
                                        <div className='flex flex-col gap-2 mb-8'>
                                            <div className='flex flex-wrap items-center gap-4'>
                                                <RiTicketLine className='md:text-2xl text-green-500' />
                                                <Link to="/" className='md:text-xl hover:text-blue-500 transition-colors'>
                                                    How to use Netronic with Django Frameworks?
                                                </Link>
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    React
                                                </span>
                                            </div>
                                            <div className='md:px-10'>
                                                <p className='text-gray-500'>
                                                    By Keenthemes to save tons and more to time money
                                                    projects are listed amazing outstanding projects are
                                                    listed
                                                </p>
                                            </div>
                                        </div>
                                        {/* Ticket */}
                                        <div className='flex flex-col gap-2 mb-8'>
                                            <div className='flex flex-wrap .items-center gap-4'>
                                                <RiTicketLine className='mdtext-2xl text-yellow-500' />
                                                <Link to="/" className='md:text-xl hover:text-blue-500 transition-colors'>
                                                    How to use Netronic with Django Frameworks?
                                                </Link>
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    React
                                                </span>
                                            </div>
                                            <div className='md:px-10'>
                                                <p className='text-gray-500'>
                                                    By Keenthemes to save tons and more to time money
                                                    projects are listed amazing outstanding projects are
                                                    listed
                                                </p>
                                            </div>
                                        </div>
                                        {/* Ticket */}
                                        <div className='flex flex-col gap-2 mb-8'>
                                            <div className='flex flex-wrap items-center gap-4'>
                                                <RiTicketLine className='md:text-2xl text-yellow-500' />
                                                <Link to="/" className='md:text-xl hover:text-blue-500 transition-colors'>
                                                    How to use Netronic with Django Frameworks?
                                                </Link>
                                                <span className='hidden lg:block bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                    React
                                                </span>
                                            </div>
                                            <div className='md:px-10'>
                                                <p className='text-gray-500'>
                                                    By Keenthemes to save tons and more to time money
                                                    projects are listed amazing outstanding projects are
                                                    listed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* pagination */}
                                    <div className='p-8 flex justify-center'>
                                        <nav className='flex items-center gap-2'>
                                            <button className='p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100'>
                                                <RiArrowLeftSLine />
                                            </button>
                                            <div className='flex items-center' >
                                                <button className='py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100'>1</button>
                                                <button className='py-2 px-4 bg-secondary-900 rounded-lg transition-colors hover:text-gray-100'>2</button>
                                                <button className='py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100'>3</button>
                                                <button className='py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100'>4</button>
                                                <button className='py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100'>5</button>
                                            </div>
                                            <button className='p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100'><RiArrowRightSLine /> </button>
                                        </nav>
                                    </div>
                                </div>
                                {/* section 2 */}
                                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8'>
                                    <div className='bg-secondary-900 p-8 rounded-lg xl:mb-8 '>
                                        <h1 className='text-2xl text-white mb-8'>More channels</h1>
                                        <div>
                                            <div className='flex items-center gap-4 mb-8'>
                                                <RiFileTextLine className='text-4xl text-primary' />
                                                <div className='flex flex-col gap-1'>
                                                    <h5 className='text-white'>Project Briefing </h5>
                                                    <p className='text-xs'>
                                                        Check out our{" "}
                                                        <Link to="/" className='text-primary'>
                                                            Support Policy
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-4 mb-8'>
                                                <RiDiscussLine className='text-4xl text-primary' />
                                                <div className='flex flex-col gap-1'>
                                                    <h5 className='text-white'>More to discuss?</h5>
                                                    <p className='text-xs'>
                                                        Email use to{" "}
                                                        <Link to="/" className='text-primary'>
                                                            correo@gmail.com
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-4 mb-8'>
                                                <RiTwitterLine className='text-4xl text-primary' />
                                                <div className='flex flex-col gap-1'>
                                                    <h5 className='text-white'>Lastest News</h5>
                                                    <p className='text-xs'>
                                                        Follow use a{" "}
                                                        <Link to="/" className='text-primary'>
                                                            KarenThemes Twitter
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-4 mb-8'>
                                                <RiGithubLine className='text-4xl text-primary' />
                                                <div className='flex flex-col gap-1'>
                                                    <h5 className='text-white'>Github Access </h5>
                                                    <p className='text-xs'>
                                                        Our githun repo{" "}
                                                        <Link to="/" className='text-primary'>
                                                            KarenThemes Github
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='bg-secondary-900 p-8 rounded-lg'>
                                            <h1 className='text-2xl text-white mb-8'>Documentation</h1>
                                            <ul className='flex flex-col gap-y-4'>
                                                <li>
                                                    <Link to="/" className='flex items-center gap-2 hover:text-primary transition-colors'>
                                                        <RiArrowRightSLine /> Angular Admin
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className='flex items-center gap-2 hover:text-primary transition-colors'>
                                                        <RiArrowRightSLine /> React  Admin
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className='flex items-center gap-2 hover:text-primary transition-colors'>
                                                        <RiArrowRightSLine /> Vue Dashboard
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className='flex items-center gap-2 hover:text-primary transition-colors'>
                                                        <RiArrowRightSLine /> Niche theme
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className='flex items-center gap-2 hover:text-primary transition-colors'>
                                                        <RiArrowRightSLine /> Dashboard Admin
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <div className='bg-secondary-100 p-8 rounded-lg'>
                                <div>
                                    <h1 className=' text-2xl text-white mb-2'>
                                        Frequesntly Asked Question
                                    </h1>
                                    <p className='text-gray-500'>
                                        First, a disclaimer - the entire process of writing a blog post often takes
                                        more than a couple of hours, event if you can type eighty words as per minute and
                                        your writing skills are sharp
                                    </p>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8' >
                                    {/* Section 1 */}
                                    <div className='mt-10'>
                                        <h1 className='text-xl text-white mb-8'>Buying Product</h1>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                    </div>
                                    {/* Section 1 */}
                                    <div className='mt-10'>
                                        <h1 className='text-xl text-white mb-8'>Installation</h1>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill  className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                        <div className='border-b border-dashed border-gray-600 p-2'>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                                                    <RiAddFill className='text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all' />
                                                    How does it work?
                                                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>
                                                        React
                                                    </span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter='transition duration-100 ease-out'
                                                    enterFrom='transition scale-95 opacity-0'
                                                    enterTo='transition scale-100 opacity-100'
                                                    leave='transition duration-75 ease-out'
                                                    leaveForm='transition scale-100 opacity-100'
                                                    leaveTo='transition scale-95 opacity-0'
                                                >
                                                    <Disclosure.Panel className="text-grey-500 text-sm px-8 py-2">
                                                        By Keenthemes to save tons and more to time mony projects are listed and outstanding <Link to="/" className='text-primary'>Check Put</Link>
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </Disclosure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div>

            </div>
        </div>
    )
}
