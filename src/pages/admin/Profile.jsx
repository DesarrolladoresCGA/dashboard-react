import React, { useState } from 'react';
import { RiEdit2Line, RiErrorWarningLine, RiShieldCheckLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react';
export const Profile = () => {

    const [enable, setEnable] = useState(false);
    return (
        <>
            {/* Profile */}
            <div className='bg-secondary-100 p-8 rounded-xl mb-8'>
                <h1 className='text-xl text-gray-100 '>Detalles Perfil</h1>
                <hr className='my-8  border-gray-500/30' />
                <form >
                    <div className='flex items-center mb-8'>
                        <div className='w-1/4'>
                            <p>Avatar</p>
                        </div>
                        <div className='flex-1'>
                            <div className='relative mb-2'>
                                <img src='leeoo.jpg' className='w-28 h-28 object-cover rounded-lg' />
                                <label htmlFor='avatar' className='absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24'><RiEdit2Line /> </label>
                                <input type="file" id='avatar' className='hidden' />

                            </div>
                            <p className='text-gray-500 text-sm'>Allowed file types: png, jpg, jpeg.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-2 items-center mb-8'>
                        <div className='w-full md:w-1/4'>
                            <p>Nombre Completo <span className='text-red-500'>*</span> </p>
                        </div>
                        <div className='flex-1 flex items-center gap-4'>
                            <div className='w-full'>
                                <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 ' placeholder='Nombre(s)' />
                            </div>
                            <div className='w-full'>
                                <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 ' placeholder='Apellido(s)' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
                        <div className='w-full md:w-1/4'>
                            <p>Nombre de la Empresa <span className='text-red-500'>*</span> </p>
                        </div>
                        <div className='flex-1'>
                            <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 ' placeholder='Nombre de la Empresa' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
                        <div className='w-full md:w-1/4'>
                            <p>Número de Contacto <span className='text-red-500'>*</span> </p>
                        </div>
                        <div className='flex-1'>
                            <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 ' placeholder='044 3276 454 935' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
                        <div className='w-full md:w-1/4'>
                            <p>Página Web <span className='text-red-500'>*</span> </p>
                        </div>
                        <div className='flex-1'>
                            <input type="text" className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 ' placeholder='desarrolladorescga@gmail.com' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
                        <div className='w-full md:w-1/4'>
                            <p>Pais <span className='text-red-500'>*</span> </p>
                        </div>
                        <div className='flex-1'>
                            <select className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none' >
                                <option value="argentina">Argentina</option>
                                <option value="colombia" selected>Colombia</option>
                                <option value="mexico">México</option>
                                <option value="uruguay">Uruguay</option>
                                <option value="peru">Perú</option>
                                <option value="venezuela">Venezuela</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-y-2 md:items-center mb-8'>
                        <div className='w-full md:w-1/4'>
                            <p>Ciudad <span className='text-red-500'>*</span> </p>
                        </div>
                        <div className='flex-1'>
                            <select className='w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none' >
                                <option value="buga" >Buga</option>
                                <option value="bogota" selected>Bogotá</option>
                                <option value="montevideo">Montevideo</option>
                                <option value="lima">Lima</option>
                                <option value="caracas">Caracas</option>
                            </select>
                        </div>
                    </div>
                </form>
                <hr className='my-8  border-gray-500/30' />
                <div className='flex justify-end'>
                    <button className='bg-primary/80 text-black py-2 px-4 rounded-xl hover:bg-primary transition-all'>Guardar</button>
                </div>
            </div>
            {/* change password */}
            <div className='bg-secondary-100 p-8 rounded-xl mb-8'>
                <h1 className='text-xl text-gray-100 '>Usuario y Contraseña</h1>
                <hr className='my-8  border-gray-500/30' />
                <form className='mb-8'>
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-y-4'>
                        <div>
                            <h5 className='text-gray-100 mb-1'>Correo Electrónico</h5>
                            <p className='text-gray-500 text-sm'>desarrolladorescga@gmail.com</p>
                        </div>
                        <div>
                            <button className='w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors '>Cambiar Email</button>
                        </div>
                    </div>
                    <hr className='my-8  border-gray-500/30 border-dashed' />
                    <div className='flex flex-col md:flex-row md:items-center justify-between gap-y-4'>
                        <div>
                            <h5 className='text-gray-100 mb-1'>Contraseña</h5>
                            <p className='text-gray-500 text-sm'>**************</p>
                        </div>
                        <div>
                            <button className='w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors '>Cambiar Contraseña</button>
                        </div>
                    </div>
                </form>
                <div className='grid grid-cols-1 md:grid-cols-8 md:items-center gap-y-4  bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600'>
                    <div className='flex justify-center'>
                        <RiShieldCheckLine className='text-5xl text-green-600' />
                    </div>
                    <div className='md:col-span-6'>
                        <h5 className='text-gray-100 text-xl mb-2'>Asegura tu Cuenta</h5>
                        <p className='text-gray-500'>Two-factor authentication adds an extra layer of security to your account. To log in,
                            in addtion you´ll need to providea  6 digit code
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-green-600/70 py-2 px-4 rounded-lg text-gray-100 hover:bg-green-600 transition-all'>Activar</button>
                    </div>
                </div>
            </div>
            {/* Connecte account */}
            <div className='bg-secondary-100 p-8 rounded-xl mb-8'>
                <h1 className='text-xl text-gray-100 '>Conectar Con Cuentas</h1>
                <hr className='my-8  border-gray-500/30' />
                <div className='flex flex-col md:flex-row gap-4 md:items-center  bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8'>
                    <div className='flex justify-center'>
                        <RiShieldCheckLine className='text-5xl text-green-600' />
                    </div>
                    <div className='flex-1'>
                        <p className='text-gray-500'>Two-factor authentication adds an extra layer of security to your account. To log in,
                            in addtion you´ll need to providea  4 digit amazing code. <Link to="/" className='text-green-400'>Learn More</Link>
                        </p>
                    </div>
                </div>
                <form className='mb-8'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src="google.png" alt="" className='w-8 h-8 object-cover rounded-lg' />
                            <div className='flex flex-col gap-y-1'>
                                <h5 className='text-gray-100'>Google</h5>
                                <p className='text-gray-500'>Plan properly your workflow</p>
                            </div>
                        </div>
                        <div>
                            <Switch
                                checked={enable}
                                onChange={setEnable}
                                className={`${enable ? "bg-primary" : "bg-secondary-900"} relative inline-flex h-6 w-11 items-center rounded-full`}>
                                <span className={`${enable ? "translate-x-6 bg-secondary-900" : "translate-x-1 bg-gray-500"} inline-block h-4 w-4 transform rounded-full transition`} />
                            </Switch>
                        </div>
                    </div>
                    <hr className='my-8 border-gray-500/30 border-dashed' />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src="git.png" alt="" className='w-8 h-8 object-cover rounded-lg' />
                            <div className='flex flex-col gap-y-1'>
                                <h5 className='text-gray-100'>GitHub</h5>
                                <p className='text-gray-500'>Keep eye on your Repositories</p>
                            </div>
                        </div>
                        <div>
                            <Switch
                                checked={enable}
                                onChange={setEnable}
                                className={`${enable ? "bg-primary" : "bg-secondary-900"} relative inline-flex h-6 w-11 items-center rounded-full`}>
                                <span className={`${enable ? "translate-x-6 bg-secondary-900" : "translate-x-1 bg-gray-500"} inline-block h-4 w-4 transform rounded-full transition`} />
                            </Switch>
                        </div>
                    </div>
                    <hr className='my-8 border-gray-500/30 border-dashed' />
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src="slag.png" alt="" className='w-8 h-8 object-cover rounded-lg' />
                            <div className='flex flex-col gap-y-1'>
                                <h5 className='text-gray-100'>Slack</h5>
                                <p className='text-gray-500'>Plan properly your workflow</p>
                            </div>
                        </div>
                        <div>
                            <Switch
                                checked={enable}
                                onChange={setEnable}
                                className={`${enable ? "bg-primary" : "bg-secondary-900"} relative inline-flex h-6 w-11 items-center rounded-full`}>
                                <span className={`${enable ? "translate-x-6 bg-secondary-900" : "translate-x-1 bg-gray-500"} inline-block h-4 w-4 transform rounded-full transition`} />
                            </Switch>
                        </div>
                    </div>
                    <hr className='my-8 border-gray-500/30 border-dashed' />
                </form>

            </div>
            {/* Email  preference*/}
            <div className='bg-secondary-100 p-8 rounded-xl mb-8'>
                <h1 className='text-xl text-gray-100 '>Notificaciones Por Correo Electrónico</h1>
                <hr className='my-8  border-gray-500/30' />
                <form className='mb-8'>
                    <div className='flex items-center gap-4'>
                        <input type="checkbox" className='accent-primary' id='id1' />
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor='id1' className='text-gray-100'>Successful Payments</label>
                            <p className='text-gray-500'>Receive a notification  for every successful payment.</p>
                        </div>
                    </div>
                    <hr className='my-8  border-gray-500/30 border-dashed' />
                    <div className='flex items-center gap-4'>
                        <input type="checkbox" className='accent-primary' id='id2' />
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor='id2' className='text-gray-100'>Payouts</label>
                            <p className='text-gray-500'>Receive a notification  for every initiated payout.</p>
                        </div>
                    </div>
                    <hr className='my-8  border-gray-500/30 border-dashed' />
                    <div className='flex items-center gap-4'>
                        <input type="checkbox" className='accent-primary' id='id3' />
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor='id3' className='text-gray-100'>Fee Collection</label>
                            <p className='text-gray-500'>Receive a notification  each time you collect a fee form sales .</p>
                        </div>
                    </div>
                </form>
                <hr className='my-8  border-gray-500/30' />
                <div className='flex justify-end'>
                    <button className='bg-primary/80 text-black py-2 px-4 rounded-xl hover:bg-primary transition-all'>Guardar</button>
                </div>
            </div>
            {/* Inactive account */}
            <div className='bg-secondary-100 p-8 rounded-xl mb-8'>
                <h1 className='text-xl text-gray-100 '>Desactivar Cuenta</h1>
                <hr className='my-8  border-gray-500/30' />
                <div className='flex flex-col md:flex-row gap-4 md:items-center  bg-yellow-600/10  p-4 rounded-lg border border-dashed border-yellow-600 mb-8'>
                    <div className='flex justify-center'>
                        <RiErrorWarningLine className='text-5xl text-yellow-600' />
                    </div>
                    <div className='flex-1'>
                        <h5 className='text-gray-100 text-xl mb-2'>Asegura tu Cuenta</h5>
                        <p className='text-gray-500'>
                            For extra security, this requires you to confirm your email or phone number when you reset yousignr password.    
                            <Link to="/" className='text-yellow-400'>Learn more.</Link>
                        </p>
                    </div>
                 </div>
                <form className='flex items-center gap-4'>
                    <input type="checkbox" className='accent-primary' id='id4' />
                    <label htmlFor='id4' className='text-gray-500'>Confirm my account deactivation</label>
                </form>
                <hr className='my-8  border-gray-500/30' />
                <div className='flex justify-end'>
                    <button className='bg-red-500/80 text-gray-100 py-2 px-4 rounded-xl hover:bg-red-500 transition-all'>Desactivar Cuenta</button>
                </div>
            </div>
        </>

    )
}
