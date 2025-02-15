import React from 'react';
import { RiNotification3Line, 
  RiArrowDownSLine, 
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line
} from 'react-icons/ri';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-x-2 gap-2'>
        <Menu id='menu'  menuButton={
          <MenuButton className='relative   hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
            <RiNotification3Line/>
            <span className='absolute -top-0.5 right-0  bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold'>2</span>
          </MenuButton>
        }  
        align='center'
        arrow
        transition
        arrowclassname="bg-secondary-100" >
          <h1 className='text-gray-300 text-center font-medium'>Notificaciones (2)</h1>
          <hr className="my-6 border-gray-500 " />
        <MenuItem className="p-0  hover:bg-transparent">
          <Link to="/" className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4  hover:bg-secondary-900 transition-colors rounded-lg'>
            <img src="leeoo.jpg" alt="" className='w-8 h-8 object-cover rounded-full ' />
            <div className='text-sm flex flex-col'>
              <div className='flex items-center justify-between gap-4'>
                <span>Jorge Luis Trejo</span>
                <span className='text-[8px]'>15/01/2025</span>
              </div>
              <p className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet...</p>
            </div>
          </Link>
        </MenuItem>
        <MenuItem className="p-0 hover:bg-transparent">
          <Link to="/" className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4  hover:bg-secondary-900 transition-colors rounded-lg'>
            <RiThumbUpLine className='p-2 bg-blue-200 text-blue-700 box-content rounded-full'/>
            <div className='text-sm flex flex-col'>
              <div className='flex items-center justify-between gap-4'>
                <span>Nuevo like</span>
                <span className='text-[8px]'>15/01/2025</span>
              </div>
              <p className='text-gray-500 text-xs'>A Luis trejo le gusta tu pub ...</p>
            </div>
          </Link>
        </MenuItem>
        <MenuItem className="p-0 hover:bg-transparent">
          <Link to="/" className='text-gray-300 flex flex-1 items-center gap-4 py-2 px-4  hover:bg-secondary-900 transition-colors rounded-lg'>
            <RiChat3Line className='p-2 bg-yellow-200 text-yellow-800-700 box-content rounded-full'/>
            <div className='text-sm flex flex-col'>
              <div className='flex items-center justify-between gap-4'>
                <span>Nuevo comentario</span>
                <span className='text-[8px]'>15/01/2025</span>
              </div>
              <p className='text-gray-500 text-xs'>Luis trejo a comentado...</p>
            </div>
          </Link>
        </MenuItem>
        <hr className="my-6 border-gray-500 " />
        <MenuItem className="p-0  hover:bg-secondary-900 flex justify-center cursor-default">
          <Link to="/" className='text-gray-400  text-sm text-center hover:text-white rounded-lg transition-colors'>Todas las notificaciones</Link>
        </MenuItem>
        </Menu >
        <Menu id='menu'  menuButton={
          <MenuButton  className='flex items-center gap-x-2   hover:bg-secondary-100 p-2  rounded-lg transition-colors'>
            <img src="leeoo.jpg" alt="" className='w-6 h-6 object-cover rounded-full' />
            <span>Luis antonio bonilla</span>
            <RiArrowDownSLine />
          </MenuButton> } align="end" arrow arrowclassname="bg-secondary-100" transition={true}  menuClassName="bg-secondary-100 p-4"  >
          <MenuItem className="rounded-lg  hover:bg-transparent" >
            <Link to="/perfil" className='flex items-center gap-x-4 py-2 px-6 flex-1 transition-colors text-gray-300  hover:bg-secondary-900 rounded-lg'>
              <img src="leeoo.jpg" alt="" className='w-8 h-8 object-cover rounded-full' />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>Luis antonio bonilla</span>
                <span className='text-[8px]'>desarrolladoresCGA@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500 " />
          <MenuItem className="rounded-lg  hover:bg-transparent" >
            <Link to="/configuracion" className='flex items-center gap-x-4 py-2 px-6 flex-1 transition-colors text-gray-300  hover:bg-secondary-900 rounded-lg'>
              <RiSettings3Line className='w-8 h-8 object-cover rounded-full'  />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>Configuración</span>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="rounded-lg  hover:bg-transparent" >
            <Link to="/cerrar-sesion" className='flex items-center gap-x-4 py-2 px-6 flex-1 transition-colors text-gray-300  hover:bg-secondary-900 rounded-lg'>
              <RiLogoutCircleRLine className='w-8 h-8 object-cover rounded-full'  />
              <div className='flex flex-col text-sm'>
                <span className='text-sm'>Cerrar Sesión</span>
              </div>
            </Link>
          </MenuItem>
        </Menu>
      </nav>  
    </header>
  )
}
