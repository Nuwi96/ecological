// import React, { useState } from "react";
// import {
//     ProSidebar,
//     Menu,
//     MenuItem,
//     SidebarHeader,
//     SidebarFooter,
//     SidebarContent,
// } from "react-pro-sidebar";
//
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
// import "react-pro-sidebar/dist/css/styles.css";
// import "./Offers.css";

//
// const SideNav = () => {
//     const [menuCollapse, setMenuCollapse] = useState(false)
//     const menuIconClick = () => {
//         menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//     };
//
//     return (
//         <>
//             <div id="sideNav">
//                 <ProSidebar collapsed={menuCollapse}>
//                     <SidebarHeader>
//                         <div className="logotext">
//                             {/*<p>{menuCollapse ? "Logo" : "Big Logo"}</p>*/}
//                             <h1 className="text-center">W.</h1>
//                         </div>
//                         <div className="closemenu" onClick={menuIconClick}>
//                             {menuCollapse ? (
//                                 <FiArrowRightCircle/>
//                             ) : (
//                                 <FiArrowLeftCircle/>
//                             )}
//                         </div>
//                     </SidebarHeader>
//                     <SidebarContent>
//                         <Menu iconShape="square">
//                             <MenuItem active={true} icon={<FiHome />}>
//                                 Home
//                             </MenuItem>
//                             <MenuItem icon={<FiGrid />}>Category</MenuItem>
//                             <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
//                             <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
//                             <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
//                             <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
//                             <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
//                             <MenuItem icon={<BiCog />}>Settings</MenuItem>
//                         </Menu>
//                     </SidebarContent>
//                     <SidebarFooter>
//                         <Menu iconShape="square">
//                             <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
//                         </Menu>
//                     </SidebarFooter>
//                 </ProSidebar>
//             </div>
//         </>
//     );
// };
//
// export default SideNav;