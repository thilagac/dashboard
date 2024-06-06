// import React, { useState } from "react";
// import {
//   IoArrowUpCircleOutline,
//   IoCaretDownCircleOutline,
//   IoCaretUpCircleOutline,
// } from "react-icons/io5";
// import list from "./list.json";
// import classNames from "classnames";
// import { FaBars } from "react-icons/fa6";
// import { HiOutlineLogout } from "react-icons/hi";
// import { Link, useLocation } from "react-router-dom";
// import { FcBullish } from "react-icons/fc";

// import {
//   DASHBOARD_SIDEBAR_LINKS,
//   DASHBOARD_SIDEBAR_BOTTOM_LINKS,
// } from "../../lib/data";
// const linkClass =
//   "flex items-center  text-slate-300   gap-2 w-60 px-2 py-3 hover:bg-slate-800 rounded-sm";

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
   
//   );
// };

// export default Dropdown;
// function SidebarLink({ link }) {
//   const { pathname } = useLocation();

//   return (
//     <Link
//       to={link.path}
//       className={classNames(
//         pathname === link.path
//           ? "bg-neutral-700 text-white"
//           : "text-neutral-400",
//         linkClass
//       )}
//     >
//       <span className="text-xl">{link.icon}</span>
//       {link.label}
//     </Link>
//   );
// }
