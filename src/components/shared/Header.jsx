import React, { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import logo from "../shared/logo.jpg";
import { UilBars } from "@iconscout/react-unicons";
import { IoIosArrowDown } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RiNotification4Line } from "react-icons/ri";
export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-20 p-2  flex items-center border-b border-gray-200 shadow-lg justify-between left-2   ">
      <div className=" left-2  shadow-sm lg:hidden px-4">
        <span className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 left-2 shadow-sm lg:hidden  ">
          <UilBars className="" />
        </span>
      </div>
      <div className="relative  ">
        <img
          src={logo}
          className="w-10 lg:hidden md:left-0 max-md:left-0  absolute top-1/2  -translate-y-1/2 block  mx-0"
        />
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-500 absolute top-1/2 left-4   -translate-y-1/2 max-sm:hidden max-md:hidden md:hidden  "
        />
        <input
          type="text"
          placeholder=" Type of search..."
          className="text-md  border-white w-[24rem] h-10 pl-11 pr-4 rounded-sm max-sm:w-0 md:px-12 max-md:w-2  focus:outline-none active:outline-none border left-8 "
        />
      </div>
      <div className="flex items-center gap-2 mr-6  ">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <span className="bg-gray-200 items-center w-9 h-9 p-2 rounded-full ">
                  <RiNotification4Line fontSize={20} className="" />
                </span>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is notification panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <span className="bg-gray-200 items-center w-9 h-9 p-2 rounded-full ">
                  <BiMessageRoundedDots fontSize={20} className="" />
                </span>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is messages panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <span className="hidden text-right lg:block sm:hidden">
          Thomas Anree
        </span>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <div
                className="h-12 w-12 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg")',
                }}
              ></div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/profile")}
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/settings")}
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Sign out
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <IoIosArrowDown className="sm:hidden max-sm:hidden lg:visible" />
      </div>
    </div>
  );
}
