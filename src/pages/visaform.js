import React from 'react'
import img5 from '../assets/pngs/img5.png'

const Visaform = () => {
    return (
            <div className='bg-[#d0d6de]'>
                <div className=' bg-white w-[1280px] mx-auto  h-max pb-8 '>
                    <form className='flex flex-col mx-14'>
                        <h1 className='font-semibold text-[32px] leading-auto'>Personal Information</h1>
                        <div className='flex mt-4 uppercase'>
                            <div className='items-center mr-8 '>
                                <label htmlFor="gender" className='flex flex-col font-semibold text-[16px]'>Prefix</label>
                                <select name="" id="" className='border rounded-full outline-none p-2 font-semibold text-[14px] leading-auto border-[#121212]'>
                                    <option value="Mr" className=''>Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className='flex'>
                                <div className='flex flex-col mx-8'>
                                    <label htmlFor="name" className='font-semibold text-[16px]' >First Name</label>
                                    <input type="text" placeholder='First Name' className='outline-none border rounded-full p-2 w-[192px] font-semibold text-[14px] leading-auto border-[#121212]' />
                                </div>

                                <div className='flex flex-col mx-8'>
                                    <label htmlFor="name" className='font-semibold text-[16px]'>Last Name</label>
                                    <input type="text" placeholder='Last Name' className='outline-none border rounded-full p-2 w-[192px] font-semibold text-[14px] leading-auto  border-[#121212]' />
                                </div>
                                <div className='mx-8'>
                                    <span className='flex flex-col font-semibold text-[16px] '>Gender</span>
                                    <div className='border rounded-full font-semi-bold text-[14px] leading-auto border-[#121212]'>
                                        <button className='rounded-full px-3 py-2 hover:bg-[#018AE4] '>Male</button>
                                        <button className='rounded-full px-3 py-2 hover:bg-[#018AE4] '>Female</button>
                                    </div>
                                </div>
                                <div className='ml-8'>
                                    <span className='flex flex-col  font-semibold text-[16px]'>Martial Status</span>
                                    <div className='border rounded-full font-semi-bold text-[14px] leading-auto border-[#121212]'>
                                        <button className='rounded-full px-3 py-2 hover:bg-[#018AE4]'>Single</button>
                                        <button className='rounded-full px-3 py-2 hover:bg-[#018AE4]'>Married</button>
                                        <button className='rounded-full px-3 py-2 hover:bg-[#018AE4]'>Divorced</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-9 flex uppercase'>
                            <div className='flex flex-col mr-3'>
                                <label htmlFor="#" className='font-semibold text-[16px]'>Date*</label>
                                <input type="date" className='border rounded-full outline-none border-[#121212] w-[320px] font-semibold text-[14px] leading-auto px-4 py-3' />
                            </div>
                            <div className='flex flex-col mx-3'>
                                <label htmlFor="#" className='font-semibold text-[16px]'>Phone Number</label>
                                <input type="text" placeholder='Phone Number' className='outline-none border rounded-full border-[#121212] w-[260px] font-semibold text-[14px] leading-auto px-4 py-3' />
                            </div>
                            <div className='flex flex-col mx-3'>
                                <label htmlFor="#" className='font-semibold text-[16px]'>Passport Number</label>
                                <input type="text" placeholder='Passport Number' className='outline-none border rounded-full border-[#121212] w-[216px] font-semibold text-[14px] leading-auto px-4 py-3' />
                            </div>
                            <div className='flex flex-col ml-3'>
                                <label htmlFor="#" className='font-semibold text-[16px]'>Nationality</label>
                                <input type="text" placeholder='Nationality' className='outline-none border rounded-full border-[#121212] w-[216px] font-semibold text-[14px] leading-auto px-4 py-3' />
                            </div>
                        </div>
                    </form>
                    <form action="#" className='mx-14 mt-4'>
                        <h1 className='font-semibold text-[32px] leading-auto'>Visa Deatils</h1>
                        <div>
                            <div className="flex mt-3 uppercase">
                                <div className='mr-8 flex flex-col'>
                                    <span className='flex flex-col  font-semibold text-[16px]'>Visa Type</span>
                                    <div className='border rounded-full font-semi-bold text-[14px] leading-auto border-[#121212]'>
                                        <button className='rounded-full px-3 py-2 hover:bg-[#018AE4]'>Student</button>
                                        <button className='rounded-full px-3 py-2 hover:bg-[#018AE4]'>Business</button>
                                        <button className='rounded-full px-3 py-2 hover:bg-[#018AE4]'>Tourist</button>
                                    </div>
                                </div>
                                <div className='flex flex-col mx-7'>
                                    <label htmlFor="#" className='font-semibold text-[16px]'>Purpose of Travel</label>
                                    <input type="text" placeholder='Purpose of Travel' className='outline-none border rounded-full border-[#121212] w-[260px] font-semibold text-[14px] leading-auto px-4 py-3' />
                                </div>
                                <div className='flex flex-col mx-7'>
                                    <label htmlFor="#" className='font-semibold text-[16px]'>Visa Validity</label>
                                    <input type="text" placeholder='Visa Validity' className='outline-none border rounded-full border-[#121212] w-[260px] font-semibold text-[14px] leading-auto px-4 py-3' />
                                </div>
                            </div>
                            <div className='flex uppercase'>
                                <div className='flex flex-col mr-3 mt-4'>
                                    <label htmlFor="#" className='font-semibold text-[16px]'>Date of Travel*</label>
                                    <input type="date" className='border rounded-full outline-none border-[#121212] w-[320px] font-semibold text-[14px] leading-auto px-4 py-3' />
                                </div>
                                <div className='flex flex-col mr-3 mt-4'>
                                    <label htmlFor="#" className='font-semibold text-[16px]'>Date of Return*</label>
                                    <input type="date" className='border rounded-full outline-none border-[#121212] w-[320px] font-semibold text-[14px] leading-auto px-4 py-3' />
                                </div>
                                <div className='flex flex-col ml-3 mt-4'>
                                    <label htmlFor="#" className='font-semibold text-[16px] uppercase'>Status in UK</label>
                                    <input type="text" placeholder='Phone Number' className='outline-none border rounded-full border-[#121212] w-[216px] font-semibold text-[14px] leading-auto px-4 py-3' />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='my-4'>
                        <h1 className='text-center font-semibold text-[16px] leading-auto my-2'>Please attach: Passport Copy, Passport Size Photo</h1>
                        <div className='border border-dotted w-[445px] h-[202px] mx-auto bg-[#F1F1F1]'>
                            <img src={img5} alt="" className='w-[68.78px] h-[59.59px] mx-[188px] my-[20px]' />
                            <p className='font-bold text-[16px] leading-[24px] text-center my-2'>Drag & drop files or</p>
                            <div className='mx-28'>
                                <input type="file" className='' />
                            </div>
                            <p className='font-regular text-[12px] leading-[18px] text-center'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                        </div>
                        <button className='w-[150px] bg-[#018AE4] rounded-full h-[50px] text-white mx-[35rem] mt-8'>Submit</button>
                    </div>
                </div>
            </div>

    )
}

export default Visaform