import React from 'react'
import logo from '../../assets/pngs/fastLogo.png'

const Register = () => {
  return (
    <section className="h-full gradient-form bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div
          className=" flex flex-wrap items-center justify-center h-full g-6 text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div
              className="block bg-white rounded-lg shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  // style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>
                  style={{ background: "#018AE4" }}>
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <div className="px-4 text-black md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="w-[220px] h-[105px]"
                        // src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        src={logo}
                        alt="logo" />
                    </div>

                    <form className=''>
                      <p className=" font-bold mb-4 text-[32px] leading-[48px] uppercase signUp">Sign Up</p>
                      <div className="relative flex flex-row md-flex-col mb-4" data-te-input-wrapper-init>
                        <input type="email" className="block h-[57px] w-[272px] rounded-[30px] border-[1px] border-[#121212] outline-none font-medium bg-transparent text-[14px] px-[26px] py-[18px] gap-[10px] placeholder:text-[14px] placeholder:font-semibold leading-[21px] " placeholder="First Name" />
                        <input type="email" className="block h-[57px] w-[272px] rounded-[30px] border-[1px] border-[#121212] outline-none font-medium bg-transparent text-[14px] px-[26px] py-[18px] gap-[10px] placeholder:text-[14px] placeholder:font-semibold leading-[21px] ml-6" placeholder="Last Name" />
                      </div>
                      <div className="relative flex flex-row md-flex-col mb-4" data-te-input-wrapper-init>
                        <input type="email" className="block h-[57px] w-[272px] rounded-[30px] border-[1px] border-[#121212] outline-none font-medium bg-transparent text-[14px] px-[26px] py-[18px] gap-[10px] placeholder:text-[14px] placeholder:font-semibold leading-[21px] " placeholder="Company Name" />
                        <input type="email" className="block h-[57px] w-[272px] rounded-[30px] border-[1px] border-[#121212] ml-6 outline-none font-medium bg-transparent text-[14px] px-[26px] py-[18px] gap-[10px] placeholder:text-[14px] placeholder:font-semibold leading-[21px] " placeholder="Phone Number" />
                      </div>
                      <div className="">
                        <input
                          type="email"
                          className="font-medium text-[14px] leading-[21px] px-[26px] py-[18px] block h-[57px] w-[485px] rounded-[30px] border-[1px] outline-none border-[#121212] mb-4
                        bg-transparent placeholder:text-[14px] placeholder:font-semibold gap-[10px]" placeholder="Email" />
                        <input
                          type="password"
                          className="font-medium text-[14px] leading-[21px] px-[26px] py-[18px] block h-[57px] w-[485px] rounded-[30px] border-[1px] outline-none border-[#121212] mb-4
                        bg-transparent placeholder:text-[14px] placeholder:font-semibold gap-[10px] " placeholder="Create Password" />
                        <input
                          type="password"
                          className="font-medium text-[14px] leading-[21px] px-[26px] py-[18px] block h-[57px] w-[485px] rounded-[30px] border-[1px] outline-none border-[#121212] mb-4
                        bg-transparent placeholder:text-[14px] placeholder:font-semibold gap-[10px]" placeholder="Confirm Password" />
                      </div>
                      <div className="pt-1 pb-1 mb-12 text-center">
                        <button
                          className="mb-3 h-[60px] inline-block w-[485px] rounded-[30px] text-base 
                        font-bold text-[16px] uppercase leading-[24px] text-white px-[26px] py-[18px]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          // style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>
                          style={{ background: "#018AE4" }}>
                          Register
                        </button>
                        <p className="font-semibold text-[14px] leading-[21px] text-left">Don't have an account?<button className='text-[#018AE4] font-semibold text-[14px] leading-[21px]'>Login</button></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register