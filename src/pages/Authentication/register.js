import React from 'react'
import logo from '../../assets/pngs/fastLogo.png'

const Register = () => {
  return (
    <section className="gradient-form bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div
          className=" flex flex-wrap items-center justify-center g-6 text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div
              className="block bg-white rounded-lg shadow-lg w-[81rem] h-min">
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

                    <form className='w-[565px] h-[390px]'>
                      <p className=" font-bold mb-4 text-[32px] leading-[48px] uppercase signIn">Sign Up</p>
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
                          className="font-medium text-[14px] leading-[21px] px-[26px] py-[18px] block h-[57px] w-[565px] rounded-[30px] border-[1px] outline-none border-[#121212] mb-4
                        bg-transparent placeholder:text-[14px] placeholder:font-semibold gap-[10px]" placeholder="Email" />
                        <input
                          type="password"
                          className="font-medium text-[14px] leading-[21px] px-[26px] py-[18px] block h-[57px] w-[565px] rounded-[30px] border-[1px] outline-none border-[#121212] mb-4
                        bg-transparent placeholder:text-[14px] placeholder:font-semibold gap-[10px] " placeholder="Create Password" />
                        <input
                          type="password"
                          className="font-medium text-[14px] leading-[21px] px-[26px] py-[18px] block h-[57px] w-[565px] rounded-[30px] border-[1px] outline-none border-[#121212] mb-4
                        bg-transparent placeholder:text-[14px] placeholder:font-semibold gap-[10px]" placeholder="Confirm Password" />
                      </div>
                      <div className="pt-1 pb-1 mb-12 text-center">
                        <button
                          className="mb-3 h-[60px] inline-block w-full rounded-[30px] px-6 pb-2 pt-2.5 text-base 
                        font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] 
                        transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] 
                        focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] 
                        focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          // style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>
                          style={{ background: "#018AE4" }}>
                          Login
                        </button>
                        <a href="#!">Forgot password?</a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px]
                        pt-2 text-xs font-medium uppercase leading-normal 
                        text-danger transition duration-150 ease-in-out 
                        hover:border-danger-600 hover:bg-neutral-500 
                        hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 
                        focus:text-danger-600 focus:outline-none focus:ring-0 
                        active:border-danger-700 active:text-danger-700 
                        dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          Register
                        </button>
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