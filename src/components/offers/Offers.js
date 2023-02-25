import {useEffect, useState} from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import SideNav2 from "../side-nav2/SideNav";
import Modal from 'react-bootstrap/Modal';
import chili from '../../assets/images/chili.jpeg';
import {
    Button,
    ButtonGroup,
    Divider,
    FormControl, IconButton,
    InputBase,
    NativeSelect,
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import {GridApi} from "@mui/x-data-grid";
import './Offers.css'
import ReactCardSlider from 'react-card-slider-component';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Select, {components} from "react-select";
import {AiOutlineSearch} from "react-icons/ai";
import {BiFilterAlt ,BiCog} from "react-icons/bi";
import {VscEye} from "react-icons/vsc";
import {BsThreeDotsVertical} from "react-icons/bs";
import { DateRangePicker } from 'rsuite';
import {BsFillPersonFill} from "react-icons/bs";

const  Offers : React.FC = () => {
    const countries = [
        { value: "MG", label: "All"  },
    ];
    const prices = [
        { value: "MG", label: "Price"  },
    ];
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [selectedPrice, setSelectedPrice] = useState(prices[0]);

    const Option2 = (props) => (
        <components.Option {...props} className="country-option">
            {props.data.label}
        </components.Option>
    );

    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            {children}
        </components.SingleValue>
    );








    const options = {
        chart: {
            type: "line"
        },
        title: {
            text: " "
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6]
            },
            {
                data: [4, 4, 6, 2, 34, 8]
            },
            {
                data: [2, 3, 1, 2, 1, 0]
            }
        ]
    };









    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let sliderClick;
    const slides = [
        {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
        {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
        {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
        {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    ]
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Promotion Name', width: 150 },
        {
            field: 'firstName',
            headerName: 'Promotion Type',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Price',
            width: 150,
            editable: true,
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            width: 150,
            editable: true,
        },{
            field: 'endDate',
            headerName: 'End Date',
            width: 150,
            editable: true,
        },{
            field: 'qty',
            headerName: 'Qty',
            width: 100,
            editable: true,
        },{
            field: 'min',
            headerName: 'Min Saving',
            width: 160,
            editable: true,
        }, {
            field: 'max',
            headerName: 'Max Saving',
            width: 160,
            editable: true,
        }, {
            field: 'actions',
            headerName: 'Actions',
            description: 'This column has a value getter and is not sortable.',
            width: 100,
            sortable: false,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    const api: GridApi = params.api;
                    const thisRow: Record<string, GridCellValue> = {};

                    api
                        .getAllColumns()
                        .filter((c) => c.field !== "__check__" && !!c)
                        .forEach(
                            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                        );

                    return alert(JSON.stringify(thisRow, null, 4));
                };

                return (
                    <>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" className=" shadow-none">
                        <Button className="bg-white text-dark border-0" onClick={handleShow}><VscEye/></Button>
                        <Button className="bg-white text-dark" ><BsThreeDotsVertical/></Button>
                        </ButtonGroup>
                    </>
                )
            }
        },
    ];

    const rows = [
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
        { id: 'Promotion 1', lastName: 'prom_11_000', firstName: '$157', startDate: '25/01/2022',
            endDate: '25/01/2022',
            qty :157 ,min:'184,123', max: '184,123'},
    ];
    useEffect(() => {
    }, []);
    return (
        <SideNav2>
            <div className="d-flex justify-content-between mx-4 my-3">
                <div className="d-flex gap-5 align-items-center">
                    <div>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" className="border  shadow-none">
                            <Select
                                className="border-0   border-end"
                                value={selectedCountry}
                                options={countries}
                                // onChange={handleChange}
                                styles={{
                                    control: base => ({
                                        ...base,
                                        display: "flex",
                                        alignItems: "center",
                                        outline: 'none',
                                        borderStyle:'none'
                                    })
                                }}
                                components={{
                                    Option2,
                                    SingleValue
                                }}
                            />
                            <Search>
                                <SearchIconWrapper>
                                   <AiOutlineSearch/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </ButtonGroup>
                    </div>
                    <div>
                        <Select
                            className="border   "
                            value={selectedPrice}
                            options={prices}
                            // onChange={handleChange}
                            styles={{
                                control: base => ({
                                    ...base,
                                    display: "flex",
                                    alignItems: "center",
                                    outline: 'none',
                                    borderStyle:'none'
                                })
                            }}
                            components={{
                                Option2,
                                SingleValue
                            }}
                        />
                    </div>
                    <div>
                        <DateRangePicker placeholder="Start Date - End Date" />
                    </div>
                    <div>
                        <Button variant="contained" className="bg-secondary"><BiFilterAlt size={25} /></Button>

                    </div>
                    <Divider orientation="vertical" flexItem className="bg-dark" />
                    <div>
                        <Button variant="text" className="text-dark text-capitalize">Clear All</Button>
                    </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <div>
                        <Button variant="text" className=" bg-info text-white text-capitalize">  Add</Button>
                    </div>
                    <Button variant="outlined" className="text-dark border-dark"> <BiCog size={23}/></Button>
                </div>
            </div>
            <Divider   flexItem className="bg-dark" />
            <div className="mx-4 py-3">
                <DataGrid
                    HeaderStyle="{StaticResource CenterGridHeaderStyle}"
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                    autoHeight/>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Offer Overview
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                       <div  className="d-flex">
                           <img width={'45%'} src={chili} alt=""/>
                           <div className="px-2">
                               <h5>Sed Vestibulum Offer</h5>
                               <div>                       <small className="text-muted" >START DATE: <b>25/01/2022</b></small>
                               </div>
                               <div>  <small className="text-muted">END DATE:   <b>14/02/2022</b></small></div>


                               <div className="mt-3 d-flex">
                                   <div><b>
                                       $ 148
                                   </b>
                                       <br/>
                                       <small className="text-muted">OFFER Price</small>
                                   </div>
                                   <div>
                                       <small className="bg-opacity-25 bg-warning btn btn-outline-warning p-1 rounded-1 text-black">
                                           Offer Qty is 2
                                       </small>
                                   </div>
                               </div>
                           </div>
                       </div>


                    <div className="mt-4">
                        <ReactCardSlider slides={slides}/>
                    </div>
<Divider/>

                    <div className="mt-4">
                        {/*<button onClick={this.toggleChartTable}>Chart Table</button>*/}
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
         </SideNav2>
    );
};
export default Offers;
