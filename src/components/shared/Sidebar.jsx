import React, { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/data";
import img from "../shared/Capture.PNG";
import "../shared/slidebar.css";
const linkClass =
  "flex items-center  text-slate-300   gap-2 w-60 px-2 py-3 hover:bg-slate-800 rounded-sm";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-10%",
    },
  };
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "50%" } : { left: "0%" }}
        onClick={() => setExpaned(!expanded)}
      >
        

        <motion.div
          className="slidebar bar p-6 flex flex-col "
          variants={sidebarVariants}
          animate={window.innerWidth <= 780 ? `${expanded}` : ""}
        > 
          <div className="flex items-center gap-2  py-1 w-40">
            <img src={img} />
          </div>
          <div className=" no-scrollbar  overflow-y-auto duration-300 ease-linear py-4 flex flex-1 flex-col font-medium  gap-0.5">
            <h3 class="mb-2 ml-3 text-sm font-medium text-bodydark2">MENU</h3>
            <div className="text-md text-white ">
              {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                <SidebarLink link={link} className="front font-medium " />
              ))}
            </div>
          </div>
          <h3 class="mb-2 ml-3 text-sm font-medium text-bodydark2">SUPPORT</h3>
          <div className="flex flex-col text-md font-medium gap-0.5 pt-2 ">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
              <SidebarLink
                key={link.key}
                link={link}
                className="front font-medium "
              />
            ))}
            <div
              className={classNames(linkClass, "cursor-pointer text-red-500")}
            >
              <span className="text-xl">
                <HiOutlineLogout />
              </span>
              Logout
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
