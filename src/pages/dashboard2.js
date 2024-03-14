
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import { GoArrowUp } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { BsFilterRight } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { arraytest } from '../utils/data'
import { arraytest1 } from '../utils/data'
import { useState } from "react";

const Dashboard2 = () => {
    const [currentpage, setCurrentpage] = useState(1);
    const recordsperpage = 8;
    const indexoflastpage = recordsperpage * currentpage;
    const indexoffirstpage = indexoflastpage - recordsperpage;
    const records = arraytest1.slice(indexoffirstpage,indexoflastpage);
    const nPages = Math.ceil(arraytest1.length / recordsperpage);
    const numbers = [...Array(nPages + 1).keys()].slice(1);
    function prePage (e){
        e.preventDefault();
        if(currentpage !== 1){
            setCurrentpage(currentpage-1)
        }
    }
    function nextPage (e){
        e.preventDefault();
        if(currentpage !== nPages){
            setCurrentpage(currentpage + 1)
        }
    }
    function changepage(id,e){
        e.preventDefault();
       setCurrentpage(id) 
    }
    return (
        <div className='bg-[#d0d6de]'>
            <div className='pb-6'>
                <div className='ml-12'>
                    <h1 className='font-semibold text-[32px] leading-auto'>Dashboard</h1>
                    <p className='font-medium text-[18px] leading-auto text-[#A3A3A3] mb-5'>Hi, Zach. Welcome back to FastHolidays Portal!</p>
                </div>
                <div className='flex w-[1280px] mx-10'>
                    {
                        arraytest.map((item) => (
                            <div key={item} className='flex items-center rounded-xl h-32 w-72 text-[#464255] bg-[#ffff] mx-4'>
                                <div className='pr-4 pl-8'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div>
                                    <p className='font-bold text-[46px] leading-auto'>{item.no}</p>
                                    <p className='font-normal'>{item.clients}</p>
                                    <p className='font-normal text-[12px] leading-[18px] text-[#A3A3A3]'><FaRegArrowAltCircleUp className='inline-block pr-0.5' />{item.days}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='bg-white pt-3 mt-4 ml-12 mr-20 md:w-[1260px] pb-2' >
                    <div className='flex my-6 ml-12 mr-8 justify-between items-center'>
                        <h1 className='font-bold text-[28px] leading-auto'>Sales</h1>
                        <div className='flex relative'>
                        <input type="text" placeholder='Search Here' className='w-[50rem] bg-[#D9EEFB] py-2 px-2 rounded-lg outline-none font-medium text-[16px]' />
                        <IoSearchOutline className='absolute right-2 mt-3' />
                        </div>
                        <div>
                            <button className='border rounded-lg p-2 mr-3 bg-[#018AE4] bg-opacity-[0.15]'><BsFilterRight className='inline-block mr-1' />Select</button>
                            <button className='border rounded-lg p-2 ml-3 bg-[#018AE4] bg-opacity-[0.15]'><MdOutlineAddCircleOutline className='inline-block mr-1'/>Create</button>
                        </div>
                    </div>
                    <table className='mt-4 ml-10 bg-white'>
                        <thead className='font-medium text-[16px] flex items-center justify-between md:w-[1220px] px-5 py-3 border-b-[2px] border-[#A6A6A6]'>
                            <th>Orders<LuArrowDownUp className='inline-block pl-1' /></th>
                            <th className='pl-7'>Date<GoArrowUp className='inline-block pl-1' /></th>
                            <th className='pl-12'>Customer<LuArrowDownUp className='inline-block pl-1' /></th>
                            <th>Payment<LuArrowDownUp className='inline-block pl-1' /></th>
                            <th>Status<LuArrowDownUp className='inline-block pl-1' /></th>
                            <th>Price<LuArrowDownUp className='inline-block pl-1' /></th>
                        </thead>
                        <tbody>
                            {
                                records.map((item) => (
                                    <tr key={item} className="font-semibold text-[14px] flex items-center justify-between md:w-[1220px] border-b-[1px] border-[#A6A6A6] px-5">
                                        <td className='flex flex-col'>{item.orders} <span className='font-medium text-[14px] leading-[26px] text-[#718096]'>#ID238976</span> </td>
                                        <td>{item.date}</td>
                                        <td className='text-left'>{item.customer}</td>
                                        <td className='text-[#0CAF60]'>Paid</td>
                                        <td className='text-[#0CAF60]'>Delivered</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="mt-4">
                        <nav>
                            <ul className="flex justify-center ]">
                                <li className="mr-3">
                                    <a href="#" onClick={prePage}>Prev</a>
                                </li>
                                {
                                    numbers.map((n,i)=>(
                                        <li key={i} className={` mx-2${currentpage === n ? "active" : ""}`} >
                                            <a href="#" onClick={(e) => changepage(n,e)}>{n}</a>
                                        </li>
                                    ))
                                }
                                <li className="ml-3">
                                    <a href="#" onClick={nextPage}>Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard2
