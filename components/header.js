import React, {Component} from 'react';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'home'
        }
    }

    LINKS = ['home', 'national', 'world', 'sports', 'business', 'weather', 'opinion']

    render() {
        return (<React.Fragment>
            <header>
                <nav className="border-2 border-gray-200 bg-gray-50">
                    <div className="container mx-auto ">
                        <div className="grid grid-cols-12">
                            <div className="col-span-2 pl-px border-r-2 py-8">
                                <div className="grid grid-cols-12 gap-px mr-4">
                                    <div className="col-span-3 bg-gray-900">
                                        <p className="text-gray-50 text-center tracking-widest text-[10px] font-body p-px">THE</p>
                                    </div>
                                    <div className="col-span-9 bg-[#F22929]">
                                        <p className="text-gray-50 tracking-widest text-end text-[10px] font-body p-px">23
                                            December
                                            2017</p>
                                    </div>
                                </div>
                                <h1 className="font-heading font-semibold text-3xl">News <span
                                    className="text-[#F22929]">Portal</span></h1>
                            </div>
                            <div className="col-span-10">
                                <div className="flex flex-col h-full">
                                    <div className="h-2/5">
                                        <div
                                            className="flex h-full justify-end text-xs items-center font-bold font-heading">
                                            <a href="#" className="text-[#3B5998] mx-2">FACEBOOK</a>
                                            <span>|</span>
                                            <a href="#" className="text-[#D3373C] mx-2">YOUTUBE</a>
                                            <span>|</span>
                                            <a href="#" className="text-[#C823D4] mx-2">INSTAGRAM</a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 border-t-2 h-3/5">
                                        <div className="col-span-10 border-r-2">
                                            <div className="grid grid-cols-7 items-center justify-center h-full">
                                                {this.LINKS.map(item => {
                                                    let classes = 'col-span-1 text-center text-base font-semibold font-body capitalize ';
                                                    let activeClasses = 'text-[#F22929]'
                                                    let inActiveClasses = 'hover:text-red-400 duration-300 '
                                                    return <a href="#" key={item}
                                                              className={classes + (this.state.current === item ? activeClasses : inActiveClasses)}
                                                              onClick={(event) => {
                                                                  event.target.class = activeClasses + classes;
                                                                  this.setState({current: item})
                                                              }}>{item}</a>
                                                })}
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="flex h-full items-center justify-end">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.413" height="17"
                                                     viewBox="0 0 16.413 17">
                                                    <path id="search"
                                                          d="M17.147,15.484,13.1,11.276a6.861,6.861,0,1,0-5.253,2.451,6.79,6.79,0,0,0,3.932-1.242l4.077,4.24a.9.9,0,1,0,1.29-1.241ZM7.848,1.791A5.073,5.073,0,1,1,2.775,6.864,5.079,5.079,0,0,1,7.848,1.791Z"
                                                          transform="translate(-0.984)"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </React.Fragment>)
    }

}


// const Header = () => (
//     <>
//         <header>
//             <nav className="border-2 border-gray-200 bg-gray-50">
//                 <div className="container mx-auto ">
//                     <div className="grid grid-cols-12">
//                         <div className="col-span-2 pl-px border-r-2 py-8">
//                             <div className="grid grid-cols-12 gap-px mr-4">
//                                 <div className="col-span-3 bg-gray-900">
//                                     <p className="text-gray-50 text-center tracking-widest text-[10px] font-body p-px">THE</p>
//                                 </div>
//                                 <div className="col-span-9 bg-[#F22929]">
//                                     <p className="text-gray-50 tracking-widest text-end text-[10px] font-body p-px">23
//                                         December
//                                         2017</p>
//                                 </div>
//                             </div>
//                             <h1 className="font-heading font-semibold text-3xl">News <span
//                                 className="text-[#F22929]">Portal</span></h1>
//                         </div>
//                         <div className="col-span-10">
//                             <div className="flex flex-col h-full">
//                                 <div className="h-2/5">
//                                     <div
//                                         className="flex h-full justify-end text-xs items-center font-bold font-heading">
//                                         <a href="#" className="text-[#3B5998] mx-2">FACEBOOK</a>
//                                         <span>|</span>
//                                         <a href="#" className="text-[#D3373C] mx-2">YOUTUBE</a>
//                                         <span>|</span>
//                                         <a href="#" className="text-[#C823D4] mx-2">INSTAGRAM</a>
//                                     </div>
//                                 </div>
//                                 <div className="grid grid-cols-12 border-t-2 h-3/5">
//                                     <div className="col-span-10 border-r-2">
//                                         <div className="grid grid-cols-7 items-center justify-center h-full">
//                                             <a href="#"
//                                                className="col-span-1 text-center text-[#D3373C] text-base font-semibold font-body">Home</a>
//                                             <a href="#"
//                                                className="col-span-1 text-center text-base font-semibold font-body">National</a>
//                                             <a href="#"
//                                                className="col-span-1 text-center text-base font-semibold font-body">World</a>
//                                             <a href="#"
//                                                className="col-span-1 text-center text-base font-semibold font-body">Sports</a>
//                                             <a href="#"
//                                                className="col-span-1 text-center text-base font-semibold font-body">Business</a>
//                                             <a href="#"
//                                                className="col-span-1 text-center text-base font-semibold font-body">Weather</a>
//                                             <a href="#"
//                                                className="col-span-1 text-center text-base font-semibold font-body">Opinion</a>
//                                         </div>
//                                     </div>
//                                     <div className="col-span-2">
//                                         <div className="flex h-full items-center justify-end">
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16.413" height="17"
//                                                  viewBox="0 0 16.413 17">
//                                                 <path id="search"
//                                                       d="M17.147,15.484,13.1,11.276a6.861,6.861,0,1,0-5.253,2.451,6.79,6.79,0,0,0,3.932-1.242l4.077,4.24a.9.9,0,1,0,1.29-1.241ZM7.848,1.791A5.073,5.073,0,1,1,2.775,6.864,5.079,5.079,0,0,1,7.848,1.791Z"
//                                                       transform="translate(-0.984)"/>
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//
//
//     </>
// )

