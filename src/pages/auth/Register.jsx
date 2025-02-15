import React, { useState } from 'react';
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine, RiUserLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
        <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>Crear Cuenta</h1>
        <form className='mb-8'>
          <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100'>
            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" className='w-4 h-4' /> Registrate con Google
          </button>
          <div className='relative mb-4'>
            <RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input type="text" className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary' placeholder='Nombres' />
          </div>
          <div className='relative mb-4'>
            <RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input type="text" className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary' placeholder='Apellidos' />
          </div>
          <div className='relative mb-4'>
            <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input type="email" className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary' placeholder='Correo electrónico' />
          </div>
          <div className='relative mb-4'>
            <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input type={showPassword ? "text" : "password"} className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary' placeholder='Contraseña' />
            {showPassword ? (
              <RiEyeOffLine onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' />
            ) : (
              <RiEyeLine onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' />
            )}

          </div>
          <div className='relative mb-8'>
            <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input type={showPassword ? "text" : "password"} className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary' placeholder='Confirmar Contraseña' />
            {showPassword ? (
              <RiEyeOffLine onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' />
            ) : (
              <RiEyeLine onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' />
            )}

          </div>
          <div>
            <input type="submit" className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover: transition-colors cursor-pointer' value="Registrarme" />
          </div>
        </form>
        <span className='flex items-center justify-center gap-2'>
          ¿Ya tienes cuenta? <Link to="/login" className='text-primary/80 hover:text-gray-100 transition-colors'>Ingresa</Link>
        </span>
      </div>
    </div>

  )
}
