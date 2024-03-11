import React from 'react'
import logo from '../assets/pngs/fastLogo.png'

const Thankyou = () => {
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
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
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
                  <div >
                    <h1 className='font-bold text-[32px] leading-48px'>Great!</h1>
                    <p className='font-semibold text-[24px] leading-48px'>Thank you for signing up! Your account is pending approval by our administrators</p>
                    <button className="mt-4 mb-12 h-[60px] inline-block w-[485px] rounded-[30px] text-base 
                        font-bold text-[16px] uppercase leading-[24px] text-white px-[26px] py-[18px] bg-[#018AE4]">Done</button>
                  </div>
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

export default Thankyou