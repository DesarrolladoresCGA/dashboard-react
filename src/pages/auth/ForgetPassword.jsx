import React from 'react';
import { RiMailLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const ForgetPassword = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='p-4'>
                <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
                    <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>Recuperar Contraseña</h1>
                    <form className='mb-8'>
                        <div className='relative mb-8'>
                            <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
                            <input type="email" className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary' placeholder='Correo electrónico' />
                        </div>
                        <div>
                            <input type="submit" className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover: transition-colors cursor-pointer' value="Enviar Instrucciones" />
                        </div>
                    </form>
                    <div className='flex flex-col items-center gap-4'>
                        <span className='flex items-center gap-2'>
                            ¿Ya tienes cuenta? <Link to="/login" className='text-primary/80 hover:text-gray-100 transition-colors'>Ingresa</Link>
                        </span>        <span className='flex items-center gap-2'>
                            ¿No tienes cuenta? <Link to="/registro" className='text-primary/80 hover:text-gray-100 transition-colors'>Registrate</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}
