import {useEffect, useState} from "react";
import SideNav2 from "./side-nav2/SideNav";

interface PropTypes {
    children : any
}

const Layout: React.FC<PropTypes> = (props: any) => {
    const [open, setopen] = useState(false)
    useEffect(() => {
    }, []);
    return (
        <>
            {/*<SideNav2/>*/}
            <main  className={open ? 'ml-64':'' }>
                <div className="max-w-8xl mx-auto py-2 sm:px-3 lg:px-5 bg-gray-100 min-h-screen">
                    <button className="mb-0 flex focus:outline-none text-bold" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <div className="px-0 py-2">{props.children}</div>
                </div>
            </main>
        </>
    );
};

export default Layout;