import React, { useState } from "react";
import classNames from "classnames";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { BsFileRichtext } from "react-icons/bs";

import list from "./list.json";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM,
  Chart
} from "../../lib/data";
import { HiOutlineViewGrid, HiOutlineCog } from "react-icons/hi";
import "../shared/slidebar.css";
import { VscTable } from "react-icons/vsc";
import img from "../shared/Capture.PNG";
import { AiOutlinePieChart } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsListTask } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { RiMenuFold2Fill } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { set } from "date-fns";
import Dropdown from "./Dropdown";
const linkClass =
  "flex items-center text-[#dee4ee]  gap-2 w-60 px-2 py-3 hover:bg-slate-800 rounded-sm";

const Sidebar = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(0);
  const [Task, setTask] = useState(false);
  const [Form, setForm] = useState(false);
  const [expanded, setExpaned] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const sidebarVariants = {
    true: {
      left: "0%",
    },
    false: {
      left: "-130%",
    },
  };
  console.log(window.innerWidth);
  return (
    <div className="h-full">
      <motion.div className="px-6  max-lg:hidden bg-[#1C2434]  sidebarcontainer h-full">
        <div className="flex gap-2 top-0 h-20  w-60 p-2 mx-0 max-sm:mx-0 max-md:mx-0   bg-[#1C2434] z-20 fixed">
          <div className="pt-4">
            <img src={img} className="w-40 " />
          </div>
        </div>
        {/* overflow-y-hidden */}
        <div className=" no-scrollbar  duration-300 ease-linear  flex flex-1 flex-col font-medium mt-10 gap-0.5">
          <h3 class=" ml-3 text-sm font-medium   text-[#8a99af] mt-20">MENU</h3>
          <div className="text-md text-white py-6 ">
            <div className="relative flex flex-col ">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-2 py-3 w-full  text-slate-300 flex front font-medium items-center   hover:bg-slate-800 rounded-sm duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4"
              >
                {" "}
                <div className=" flex flex-col">
                  <HiOutlineViewGrid className="text-xl font-semibold text-white" />

                  <div className="absolute right-4 top-6 -translate-y-1/2 fill-current">
                    {!isOpen ? (
                      <IoIosArrowDown className="h-8   " />
                    ) : (
                      <IoIosArrowUp className="h-8" />
                    )}
                  </div>
                </div>
                <span className="px-3 text-[#dee4ee]">Dashboard</span>
              </button>
              <div className=" flex flex-col ">
                {isOpen && (
                  <div
                    className="top-1   flex flex-col items-start  px-2 mx-4 w-full"
                    style={{ backgroundColor: "#1C2434" }}
                  >
                    <h3 className="px-4 py-2">eCommerce</h3>
                    {list.map((item, i) => (
                      <div
                        className="flex w-full justify-between text-md text-[#8a99af] cursor-pointer   p-1 group  items-center gap-2.5 rounded-md px-4 font-medium  hover:text-white"
                        key={i}
                      >
                        <h3>{item.data}</h3>
                        <h3 className=" bg-[#3C50E0] text-xs rounded-md px-2 p-1 text-white">
                          {item.icon}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className=" text-white">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                  <SidebarLink link={link} className="front font-medium" />
                ))}
              </div>
              <button
                onClick={() => setTask((prev) => !prev)}
                className="p-2 w-full py-3 text-slate-300 flex front font-medium items-center   hover:bg-slate-800 rounded-sm"
              >
                {" "}
                <div className=" flex flex-col">
                  <BsListTask className="text-xl font-semibold text-white" />

                  <div className="absolute right-4">
                    {!Task ? (
                      <IoIosArrowDown className="h-8  " />
                    ) : (
                      <IoIosArrowUp className="h-8" />
                    )}
                  </div>
                </div>
                <span className="px-3 text-[#dee4ee]">Task</span>
              </button>
              <div className=" flex flex-col ">
                {Task && (
                  <div
                    className="top-1   flex flex-col items-start  px-2 mx-4 w-full"
                    style={{ backgroundColor: "#1C2434" }}
                  >
                    <h3 className="px-4 py-2">eCommerce</h3>
                    {list.map((item, i) => (
                      <div
                        className="flex w-full justify-between text-md text-[#8a99af] cursor-pointer   p-1 group  items-center gap-2.5 rounded-md px-4 font-medium  hover:text-white"
                        key={i}
                      >
                        <h3>{item.data}</h3>
                        <h3 className=" bg-[#3C50E0] text-xs rounded-md px-2 p-1 text-white">
                          {item.icon}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setForm((prev) => !prev)}
                className="p-2 w-full py-3 text-slate-300 flex front font-medium items-center   hover:bg-slate-800 rounded-sm"
              >
                {" "}
                <div className=" flex flex-col">
                  <RiMenuFold2Fill className="text-xl font-semibold text-white" />

                  <div className="absolute right-4">
                    {!Form ? (
                      <IoIosArrowDown className="h-8  " />
                    ) : (
                      <IoIosArrowUp className="h-8" />
                    )}
                  </div>
                </div>
                <span className="px-3 text-[#dee4ee]">Forms</span>
              </button>
              <div className=" flex flex-col ">
                {Form && (
                  <div
                    className="top-1   flex flex-col items-start  px-2 mx-4 w-full"
                    style={{ backgroundColor: "#1C2434" }}
                  >
                    <h3 className="px-4 py-2">eCommerce</h3>
                    {list.map((item, i) => (
                      <div
                        className="flex w-full justify-between text-md text-[#8a99af] cursor-pointer   p-1 group  items-center gap-2.5 rounded-md px-4 font-medium  hover:text-white"
                        key={i}
                      >
                        <h3>{item.data}</h3>
                        <h3 className=" bg-[#3C50E0] text-xs rounded-md px-2 p-1 text-white">
                          {item.icon}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setExpaned((prev) => !prev)}
                className="p-2 w-full py-3 text-slate-300 flex front font-medium items-center   hover:bg-slate-800 rounded-sm"
              >
                {" "}
                <div className=" flex flex-col">
                  <VscTable className="text-xl font-semibold text-white" />

                  <div className="absolute right-4">
                    {!expanded ? (
                      <IoIosArrowDown className="h-8  " />
                    ) : (
                      <IoIosArrowUp className="h-8" />
                    )}
                  </div>
                </div>
                <span className="px-3 text-[#dee4ee]">Table</span>
              </button>
              <div className=" flex flex-col ">
                {expanded && (
                  <div
                    className="top-1   flex flex-col items-start  px-2 mx-4 w-full"
                    style={{ backgroundColor: "#1C2434" }}
                  >
                    <h3 className="px-4 py-2">eCommerce</h3>
                    {list.map((item, i) => (
                      <div
                        className="flex w-full justify-between text-md text-[#8a99af] cursor-pointer   p-1 group  items-center gap-2.5 rounded-md px-4 font-medium  hover:text-white"
                        key={i}
                      >
                        <h3>{item.data}</h3>
                        <h3 className=" bg-[#3C50E0] text-xs rounded-md px-2 p-1 text-white">
                          {item.icon}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsOpened((prev) => !prev)}
                className="p-2 w-full py-3 text-slate-300 flex front font-medium items-center   hover:bg-slate-800 rounded-sm"
              >
                {" "}
                <div className=" flex flex-col text-white">
                  <BsFileRichtext className="text-xl font-semibold" />

                  <div className="absolute right-4 ">
                    {!isOpened ? (
                      <IoIosArrowDown className="h-8   " />
                    ) : (
                      <IoIosArrowUp className="h-8" />
                    )}
                  </div>
                </div>
                <span className="px-3 text-[#dee4ee]">Pages</span>
              </button>
              <div className=" flex flex-col ">
                {isOpened && (
                  <div
                    className="top-1   flex flex-col items-start  px-2 mx-4 w-full"
                    style={{ backgroundColor: "#1C2434" }}
                  >
                    <h3 className="px-4 py-2">eCommerce</h3>
                    {list.map((item, i) => (
                      <div
                        className="flex w-full justify-between text-md text-[#8a99af] cursor-pointer   p-1 group  items-center gap-2.5 rounded-md px-4 font-medium  hover:text-white"
                        key={i}
                      >
                        <h3>{item.data}</h3>
                        <h3 className=" bg-[#3C50E0] text-xs rounded-md px-2 p-1 text-white">
                          {item.icon}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <h3 class="mb-2 ml-3  text-sm font-medium text-bodydark2  text-[#8a99af]">
          SUPPORT
        </h3>
        <div className="flex flex-col text-md font-medium gap-0.5 pt-2 py-6 text-white ">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink
              key={link.key}
              link={link}
              className="front font-medium "
            />
          ))}
        </div>
        <h3 class="mb-2 ml-3 text-sm font-medium text-bodydark2  text-[#8a99af]">
          OTHERS
        </h3>
        
        <div className=" no-scrollbar  duration-300 ease-linear mb-7 flex flex-1 flex-col font-medium gap-0.5">
          <div className="text-md text-white ">
            <div className="relative flex flex-col ">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-2 py-3 w-full  text-slate-300 flex front font-medium items-center   hover:bg-slate-800 rounded-sm duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4"
              >
                {" "}
                <div className=" flex flex-col">
                  <AiOutlinePieChart className="text-xl font-semibold text-white" />

                  <div className="absolute right-4 top-6 -translate-y-1/2 fill-current">
                    {!isOpen ? (
                      <IoIosArrowDown className="h-8   " />
                    ) : (
                      <IoIosArrowUp className="h-8" />
                    )}
                  </div>
                </div>
                <span className="px-3 text-[#dee4ee]">Charts</span>
              </button>
              <div className=" flex flex-col  ">
                {isOpen && (
                  <div
                    className="top-1   flex flex-col items-start  px-2 mx-4 w-full"
                    style={{ backgroundColor: "#1C2434" }}
                  >
                  
                 
                      <div>
                        <div
                        className="flex w-full justify-between text-md text-[#8a99af] cursor-pointer   p-1 group  items-center gap-2.5 rounded-md px-4 font-medium  hover:text-white"
                        
                        onClick={() => navigate('/Charts')}
                        
                      >
                        <h3 >Basic Chart </h3>
                       
                      </div>
                      <div
                        className="flex  w-full justify-between text-md text-[#8a99af] cursor-pointer   p-1 group  items-center gap-2.5 rounded-md px-4 font-medium  hover:text-white"
                        
                        onClick={() => navigate('/AdvanceChart')}
                        
                      >
                        <h3  >Advance Chart </h3>
                        
                      </div>
                      </div>
                     
                   
                  </div>
                )}
              </div>
              <div className="flex flex-col text-md font-medium gap-0.5 pt-2  ">
          {DASHBOARD_SIDEBAR_BOTTOM.map((link) => (
            <SidebarLink
              key={link.key}
              link={link}
              className="front font-medium "
            />
          ))}
        </div>
              <button
                onClick={() => setTask((prev) => !prev)}
                className="p-2 w-full py-3 text-slate-300 flex front font-medium items-center   hover:bg-slate-800 rounded-sm"
              >
                {" "}
                <div className=" flex flex-col">
                  <BsListTask className="text-xl font-semibold text-white" />

                  <div className="absolute right-4">
                    {!Task ? (
                      <IoIosArrowDown className="h-8  " />
                    ) : (
                      <IoIosArrowUp className="h-8" />
                    )}
                  </div>
                </div>
                <span className="px-3 text-[#dee4ee]">Task</span>
              </button>
              <div className=" flex flex-col mb-8 ">
                {Task && (
                  <div
                    className="top-1   flex flex-col items-start  px-2 mx-4 w-full"
                    style={{ backgroundColor: "#1C2434" }}
                  >
                   
                    {Chart.map((item, i) => (

                      <div
                        className="flex w-full justify-between text-md text-[#8a99af] cursor-pointer   p-1 group  items-center gap-2.5 rounded-md px-4 font-medium  hover:text-white"
                        key={i}
                      >
                        <h3>{item.data}</h3>
                        <h3 className=" bg-[#3C50E0] text-xs rounded-md px-2 p-1 text-white">
                          {item.icon}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Sidebar;
function SidebarLink({ link }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={link.path}
      className={classNames(pathname === link.path, linkClass)}
    >
      <span className="text-xl text-white">{link.icon}</span>
      {link.label}
    </Link>
  );
}
