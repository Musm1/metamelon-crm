import React from 'react'
import logo from '../../assets/pngs/fastLogo.png'

const Login = () => {
  return (
  <section className="h-full gradient-form bg-neutral-200 dark:bg-neutral-700">
    <div className="container h-full p-10">
      <div
        className="flex flex-wrap items-center justify-center h-full g-6 text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div
            className="block bg-white rounded-lg shadow-lg ">
            <div className="g-0 lg:flex lg:flex-wrap">
              
              <div
                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                // style={{background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>
                style={{background: "#018AE4"}}>
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
                      className="w-48 mx-auto"
                      // src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      src={logo}
                      alt="logo" />
                    <h4 className="pb-1 mt-1 mb-12 text-xl font-semibold">
                      Welcome to FastHolidays CRM
                    </h4>
                  </div>

                  <form>
                    <p className="mb-4 text-4xl font-bold uppercase signIn">Sign In</p>
                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input type="email" className="peer block h-[60px] w-full rounded-[30px] border border-[#121212]
                          bg-transparent px-3 py-[0.32rem] leading-[1.6]
                            transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                            data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none 
                            dark:placeholder:text-neutral-200 
                            [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="name" />
                        <label 
                          for="email" 
                          className="absolute px-1 ml-1 text-sm duration-100 ease-linear -translate-y-3 bg-white left-6 top-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:text-primary peer-focus:px-1 peer-focus:text-sm">
                        Email Address
                        </label>
                    </div>
                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="password"
                        className="peer block h-[60px] w-full rounded-[30px] border border-[#121212]
                        bg-transparent px-3 py-[0.32rem] leading-[1.6] 
                          transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                          data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none 
                          dark:placeholder:text-neutral-200 
                          [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput11"
                        placeholder="Password" />
                      <label
                        for="exampleFormControlInput11"
                        className="absolute px-1 ml-1 text-sm duration-100 ease-linear -translate-y-3 bg-white left-6 top-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:text-primary peer-focus:px-1 peer-focus:text-sm"
                        >Password
                      </label>
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
                        style={{background: "#018AE4"}}>
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

export default Login