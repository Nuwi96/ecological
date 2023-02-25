import {Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses} from 'react-pro-sidebar';
import {useEffect, useState} from "react";
import  "./SideNav.css";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { BsPinFill,BsTruck } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { GoCircleSlash } from "react-icons/go";
import { VscFolder } from "react-icons/vsc";
import { AiOutlineTag } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";
import { FiLayers } from "react-icons/fi";
import { TfiMedallAlt } from "react-icons/tfi";
import { BsShop ,BsQuestionCircle ,BsBell,BsFillPersonFill} from "react-icons/bs";

import {
    AppBar, Avatar,
    Breadcrumbs,
    ButtonGroup, FormControl,
    IconButton,
    InputBase,
    Link,
    Toolbar,
    Typography,
    FormHelperText, InputLabel, NativeSelect, Card, Badge, Divider
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import {deepOrange} from "@mui/material/colors";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {components} from "react-select";
import Select from "react-select";

interface PropTypes {
    children : any
}



const SideNav2 : React.FC<PropTypes> = (props: any) => {
    const [subToggle, setSubToggle] = useState(false);
    const countries = [
        { value: "MG", label: "KGC Food", icon: <BsShop/> },
    ];
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const Option2 = (props) => (
        <components.Option {...props} className="country-option">
           <span className="mx-2">{props.data.icon}</span>
            {props.data.label}
        </components.Option>
    );

    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            <span className="mx-2">{selectedCountry.icon} </span>
            {children}
        </components.SingleValue>
    );
    const [selectedOption, setSelectedOption] = useState(null);
    const [age, setAge] =  useState('');
    const [auth, setAuth] =  useState(true);
    const [anchorEl, setAnchorEl] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleMenu = (event:Event) => {
        setAnchorEl(event.currentTarget);
    };

    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

    useEffect(() => {
        collapseSidebar();
        // toggleSidebar();
    }, []);

    return (
        <>
            <div  >
                <Sidebar id="sideNav" rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: 'white',
                        height: '100%',
                        minHeight: '100%',
                    },
                }} >
                    {/*<div className=" ">*/}
                    {/*    <div>W.</div>*/}
                    {/*    {collapsed ? ( <div> <button onClick={() => toggleSidebar()}>toggle</button></div>) :''}*/}
                    {/*    {collapsed ? (                     <div> <button onClick={() => collapseSidebar()}>collapse</button></div>*/}
                    {/*    ) :''}*/}

                    {/*</div>*/}
                    <Menu menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    color: disabled ? '#5e5c5c' : '#000000',
                                    backgroundColor: active ? '#7bb7e8' : undefined,
                                };
                        },
                    }}>
                        <MenuItem
                            aria-label={'W.'}
                            icon={''}
                            style={{ textAlign: "center" }}
                        >
                            {" "}
                        </MenuItem>
                        <MenuItem active={false} icon={<FiHome />}>
                            </MenuItem>
                        <SubMenu
                            label=" "
                            icon={<FiGrid />}
                            defaultOpen={true} open={true}
                        >
                            <div className={!collapsed ? 'toggleCss':'' } >
                                <button className="float-end" onClick={() => collapseSidebar()}><BsPinFill/></button>
                                { !collapsed && (<>
                                    <h5 className="my-2 py-2 text-center text-muted">Inventory</h5>
                                    <Divider style={{background: '#c5c6c7'}} className="my-3"/>
                                </>) }

                                <MenuItem  icon={<AiOutlineTag/>}> Product </MenuItem>
                                <MenuItem  icon={<GiCircle/>}> Offer</MenuItem>
                                <MenuItem  icon={<FiLayers/>}> Category</MenuItem>
                                <MenuItem icon={<TfiMedallAlt/>}> Brand</MenuItem>
                            </div>
                        </SubMenu> <SubMenu
                            label=" "
                            icon={<CiClock2 />}
                            defaultOpen={true} open={true}
                        >
                            {/*<div className={!collapsed ? 'toggleCss':'' } >*/}
                            {/*    <button onClick={() => collapseSidebar()}><BsPinFill/></button>*/}
                            {/*    <MenuItem> Pie charts2 </MenuItem>*/}
                            {/*    <MenuItem> Line charts 2</MenuItem>*/}
                            {/*</div>*/}
                        </SubMenu>
                            <MenuItem icon={<BsTruck />}> </MenuItem>
                            <MenuItem icon={<GoCircleSlash />}> </MenuItem>
                       <SubMenu  label=" "
                                  icon={<VscFolder />}
                                  id={'two'}  style={{ display: 'flex', height: '100%' }}>
                            {/*<div className={!collapsed ? 'toggleCss':'' } >*/}
                            {/*    <button onClick={() => collapseSidebar()}><BsPinFill/></button>*/}
                            {/*    <MenuItem> Pie charts2 </MenuItem>*/}
                            {/*    <MenuItem> Line charts 2</MenuItem>*/}
                            {/*</div>*/}
                        </SubMenu>
                        <SubMenu  label=" "
                                  icon={<BiCog />}
                                  id={'two'}  style={{ display: 'flex', height: '100%' }}>
                            {/*<div className={!collapsed ? 'toggleCss':'' } >*/}
                            {/*    <button onClick={() => collapseSidebar()}><BsPinFill/></button>*/}
                            {/*    <MenuItem> Pie charts2 </MenuItem>*/}
                            {/*    <MenuItem> Line charts 2</MenuItem>*/}
                            {/*</div>*/}
                        </SubMenu>
                    </Menu>
                </Sidebar>
                <AppBar position="static" className="w-auto bg-light border-bottom shadow-none">
                    <Toolbar className="justify-content-between">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="none" color="#00000040" href="#">
                                Inventory
                            </Link>
                            <Link
                                underline="none"
                                color="black"
                                href="#"
                            >
                                Offers
                            </Link>
                        </Breadcrumbs>



                        <div className="align-items-center d-flex">
                            <Select
                                classNamePrefix="mySelect"
                                value={selectedCountry}
                                options={countries}
                                // onChange={handleChange}
                                styles={{
                                    singleValue: (base) => ({
                                        ...base,
                                        display: "flex",
                                        alignItems: "center"
                                    })
                                }}
                                components={{
                                    Option2,
                                    SingleValue
                                }}
                            />

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="false"
                                onClick={handleMenu}
                                className="text-black-50"
                            >
                                |
                            </IconButton>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" className="gap-2 shadow-none">
                                <IconButton
                                    size="small"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="text-black"
                                >
                                    <BsQuestionCircle/>
                                </IconButton>
                                <IconButton
                                size="small"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="text-black"
                                >
                                    <BsBell/>
                                </IconButton>
                                <IconButton style={{background:'#8122ff'}}
                                    size="small"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    className="text-white"
                                >
                                    <BsFillPersonFill/>
                                </IconButton>
                            </ButtonGroup>
                        </div>
                    </Toolbar>
                </AppBar>
                <Card className="w-auto">

                    {props.children}
                </Card>

            </div>


        </>
    );
};

export default SideNav2;
