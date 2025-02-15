import React from 'react';
import { CardTicket } from '../../components/CardTicket';
import { RiArrowLeftSLine, RiArrowRightSLine, RiMore2Fill } from 'react-icons/ri';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <h1 className='text-4xl text-white'>Good morning, Luis</h1>
        <div className='flex items-center gap-2 text-3xl'>
          <RiArrowLeftSLine className='hover:cursor-pointer hover:text-white transition-colors' />
          <RiArrowRightSLine className='hover:cursor-pointer hover:text-white transition-colors' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
        {/* Card */}
        <CardTicket ticket="total" totalTickets="145.000" text="Tickets totales" />
        <CardTicket ticket="pending" totalTickets="5.000" text="Tickets pendientes" />
        <CardTicket ticket="inProcess" totalTickets="130.000" text="Tickets en proceso" />
        <CardTicket ticket="close" totalTickets="10.000" text="Tickets cerrados" />
      </div>
      <div>
        <h1 className='text-2xl text-white my-10'>Tickets más recientes</h1>
      </div>
      <div className='bg-secondary-100 p-8 rounded-xl'>
        <div className='hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4'>
          <h5>ID</h5>
          <h5>Descripción</h5>
          <h5>Estatus</h5>
          <h5>Fecha</h5>
          <h5>Acciones</h5>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl'>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>Status</h5>
            <span className='py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-xl'>Abierto</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>Fecha</h5>
            <span>11 febrero 2025</span>
          </div>
          <div>
          <h5 className='md:hidden text-white font-bold mb-2'>Acciones</h5>
            <Menu id='menu' menuButton={
              <MenuButton className='flex items-center gap-x-2  bg-secondary-100 p-2  rounded-lg transition-colors'>
                Acciones
              </MenuButton>} align="end" arrowclassname="bg-secondary-100" transition={true} menuClassName="bg-secondary-100 p-4"  >
              <MenuItem className="rounded-lg  hover:bg-transparent" >
                <Link to="/perfil" className='flex items-center gap-x-4 py-2 px-2  flex-1 transition-colors text-gray-300  hover:bg-secondary-900 rounded-lg'>
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="rounded-lg  hover:bg-transparent" >
                <Link to="/perfil" className='flex items-center gap-x-4 py-2 px-2  flex-1 transition-colors text-gray-300  hover:bg-secondary-900 rounded-lg'>
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl'>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>ID</h5>
            <span>#25547</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>Status</h5>
            <span className='py-1 px-2 bg-blue-500/10 text-blue-500 rounded-xl'>En proceso</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>Fecha</h5>
            <span>11 febrero 2025</span>
          </div>
          <div>
          <h5 className='md:hidden text-white font-bold mb-2'>Acciones</h5>
            <Menu id='menu' menuButton={
              <MenuButton className='flex items-center gap-x-2  bg-secondary-100 p-2  rounded-lg transition-colors'>
                Acciones
              </MenuButton>} align="end" arrowclassname="bg-secondary-100" transition={true} menuClassName="bg-secondary-100 p-4"  >
              <MenuItem className="rounded-lg  hover:bg-transparent" >
                <Link to="/perfil" className='flex items-center gap-x-4 py-2 px-2  flex-1 transition-colors text-gray-300  hover:bg-secondary-900 rounded-lg'>
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="rounded-lg  hover:bg-transparent" >
                <Link to="/perfil" className='flex items-center gap-x-4 py-2 px-2  flex-1 transition-colors text-gray-300  hover:bg-secondary-900 rounded-lg'>
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl'>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>ID</h5>
            <span>#25586</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>Status</h5>
            <span className='py-1 px-2 bg-green-500/10 text-green-500 rounded-xl'>Cerrado</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold mb-2'>Fecha</h5>
            <span>11 febrero 2025</span>
          </div>
          <div>
          <h5 className='md:hidden text-white font-bold mb-2'>Acciones</h5>
            <Menu id='menu' menuButton={
              <MenuButton className='flex items-center gap-x-2  bg-secondary-100 p-2  rounded-lg transition-colors'>
                Acciones
              </MenuButton>} align="end" arrowclassname="bg-secondary-100" transition={true} menuClassName="bg-secondary-100 p-4"  >
              <MenuItem className="rounded-lg  hover:bg-transparent" >
                <Link to="/perfil" className='flex items-center gap-x-4 py-2 px-2  flex-1 transition-colors text-gray-300  hover:bg-secondary-900 rounded-lg'>
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="rounded-lg  hover:bg-transparent" >
                <Link to="/perfil" className='flex items-center gap-x-4 py-2 px-2  flex-1 transition-colors text-gray-300  hover:bg-secondary-900 rounded-lg'>
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      
    </div>
  )
}
