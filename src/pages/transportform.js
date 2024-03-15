import React from 'react'

const transportform = () => {
  return (
    <>
            <div className='bg-[#d0d6de] h-max py-4'>
                <h1 className='font-semibold text-[48px] ml-8'>Hotel Booking Form</h1>
                <div className=' bg-white w-[1280px] mx-auto'>
                    <form className='flex flex-col mx-14'>
                        <h1 className='font-semibold text-[32px] leading-auto'>Personal Information</h1>
                        <div className='flex mt-4 uppercase'>
                            <div className='items-center mr-8 '>
                                <label htmlFor="gender" className='flex flex-col font-semibold text-[16px]'>Prefix</label>
                                <select name="" id="" className='border rounded-full outline-none py-2 px-[0.25rem] font-semibold text-[14px] border-[#121212]'>
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
                            <div className='flex flex-col mr-7'>
                                    <label htmlFor="#" className='font-semibold text-[16px]'>Type of Transport</label>
                                    <input type="text" placeholder='Type of Transport' className='outline-none border rounded-full border-[#121212] w-[320px] font-semibold text-[14px] leading-auto px-4 py-3' />
                                </div>
                                <div className='flex flex-col mr-3'>
                                    <label htmlFor="#" className='font-semibold text-[16px]'>PickUp Time</label>
                                    <input type="time" className='border rounded-full outline-none border-[#121212] w-[320px] font-semibold text-[14px] leading-auto px-4 py-2' />
                                </div>
                                <div className='flex flex-col ml-5'>
                                    <label htmlFor="#" className='font-semibold text-[16px]'>Drop Time</label>
                                    <input type="time" className='border rounded-full outline-none border-[#121212] w-[320px] font-semibold text-[14px] leading-auto px-4 py-2' />
                                </div>
                            </div>
                            <div className='flex uppercase'>
                                <div className='flex flex-col mr-7 mt-6'>
                                    <label htmlFor="#" className='font-semibold text-[16px]'>Date*</label>
                                    <input type="date"  className='outline-none border rounded-full border-[#121212] w-[320px] font-semibold text-[14px] leading-auto px-4 py-3' />
                                </div>
                                <div className='flex flex-col mx-3 mt-6'>
                                    <label htmlFor="#" className='font-semibold text-[16px]'>City</label>
                                    <input type="text" placeholder='Visa Validity' className='outline-none border rounded-full border-[#121212] w-[320px] font-semibold text-[14px] leading-auto px-4 py-3' />
                                </div>
                                
                                <div className='flex flex-col ml-3 mt-6'>
                                    <label htmlFor="#" className='font-semibold text-[16px] uppercase'>Number of Nights</label>
                                    <input type="text" placeholder='Phone Number' className='outline-none border rounded-full border-[#121212] w-[320px] font-semibold text-[14px] leading-auto px-4 py-3' />
                                </div>
                            </div>
                        </div>
                    </form>
                    <button className='w-[150px] bg-[#018AE4] rounded-full h-[60px] mx-[34rem] my-6'>Submit</button>
                </div>
            </div>
        </>
  )
}

export default transportform