import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import slug_getter from "../utils/slug_getter";
import Link from "next/link"
import Header from "../components/header";
import Footer from '../components/footer';


// export const getStaticProps = async () => {
//     const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`);
//     const data = await res.json();
//
//     return {
//         props: {
//             posts: data.articles
//         }
//     }
//
// }


const Home = () => {
    return (
        <>
            <Header/>
            <main className="p-16 font-body">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-8">
                        <div
                            className="w-full flex flex-col justify-end bg-cover h-96 bg-[url('/images/image1.png')]">
                            <div className="bg-red-600  text-gray-50 opacity-90 relative">
                                <div
                                    className="bg-gray-100 font-semibold py-2 px-4 absolute top-0 opacity-100 text-gray-800 right-4 top-[-50px]">
                                    Featured
                                </div>
                                <p className="p-4">
                                    <b>Le Pen slams 'banking fatwa' against National Front after accounts closed</b>
                                    <br/>
                                        French far-right leader Marine Le Pen on Wednesday said she would take banking
                                        giants HSBC and Societe Generale to court for discrimination after they moved to
                                        close her
                                        personal and party accounts.
                                </p>
                            </div>
                        </div>
                        <div className="grid-cols-2 grid mt-8 gap-8">
                            <div className="col-span-1">
                                <img src="/images/image2.png" className="h-auto w-full" alt="" />
                                    <div className="p-4 relative">
                                        <div className="absolute left-4 py-2 px-4 top-[-50px] bg-gray-50">
                                            24 June
                                        </div>
                                        <p className="text-sm">
                                            <span className="block font-semibold">Qatar's foreign minister accuses Saudi Arabia of sparking humanitarian crisis</span>
                                            DW interview, Qatar's foreign minister has slammed Saudi Arabia for
                                            "destabilizing the
                                            region."
                                            The minister said Riyadh is using what it calls security concerns as a
                                            "smoke screen" to
                                            harm Qatar's economy.
                                        </p>
                                    </div>
                            </div>
                            <div className="col-span-1">
                                <img src="/images/image3.png" className="h-auto w-full" alt=""/>
                                    <div className="p-4 relative">
                                        <div className="absolute left-4 py-2 px-4 top-[-50px] bg-gray-50">
                                            24 June
                                        </div>
                                        <p className="text-sm">
                                            <span className="block font-semibold">David Cassidy, 'The Partridge Family' teen heartthrob, dies at 67</span>
                                            US musician and actor David Cassidy has died at the age of 67 in a Florida
                                            hospital.
                                            Cassidy first rose to fame playing a lead vocalist and guitarist in the
                                            1970s sitcom "The
                                            Partridge Family."
                                        </p>
                                    </div>
                            </div>
                            <div className="col-span-1">
                                <img src="/images/image4.png" className="h-auto w-full" alt=""/>
                                    <div className="p-4 relative max-h-32">
                                        <div className="absolute left-4 py-2 px-4 top-[-50px] bg-gray-50">
                                            24 June
                                        </div>
                                        <p className="text-sm text-clip overflow-hidden ...">
                                            <span className="block font-semibold">US condemns 'ethnic cleansing' of Rohingya in Myanmar</span>
                                            US Secretary of State Rex Tillerson has accused the military of Myanmar of
                                            subjecting the
                                            country's Rohingya population to "ethnic cleansing."
                                            The UN has referred to the events in Myanmar in such terms for two months.
                                        </p>
                                    </div>
                            </div>
                            <div className="col-span-1">
                                <img src="/images/image5.png" className="h-auto w-full" alt=""/>
                                    <div className="p-4 relative">
                                        <div className="absolute left-4 py-2 px-4 top-[-50px] bg-gray-50">
                                            24 June
                                        </div>
                                        <p className="text-sm">
                                            <span className="block font-semibold">Angela Merkel's German coalition crisis greatly exaggerated</span>
                                            There has been a lot of talk about German democracy in crisis. But the
                                            government keeps
                                            ticking along,
                                            and politicians across nearly the whole spectrum say the situation is hardly
                                            as dire as some
                                            are making it out to be.
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 space-y-8">
                        <div className="w-full border-gray-200 border-2 p-4 space-y-4">
                            <h3 className="font-heading text-2xl font-bold uppercase">International news</h3>
                            <hr className="bg-gray-200 h-[2px]"/>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-cover bg-[url('/images/image6.png')]"/>
                                    <div>
                                        <h6 className="text-gray-600 text-base font-light">15 Jan</h6>
                                        <h6 className="font-heading text-lg font-bold">
                                            By the numbers: The Trump orbit's contacts with Russians
                                        </h6>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-cover bg-[url('/images/image7.png')]"/>
                                    <div>
                                        <h6 className="text-gray-600 text-base font-light">15 Jan</h6>
                                        <h6 className="font-heading text-lg font-bold">
                                            Ratko Mladic guilty of genocide, sentenced to life in prison
                                        </h6>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-cover bg-[url('/images/image8.png')]"/>
                                    <div>
                                        <h6 className="text-gray-600 text-base font-light">15 Jan</h6>
                                        <h6 className="font-heading text-lg font-bold">
                                            Zimbabwe's Mnangagwa returns to lead nation into 'new democracy'
                                        </h6>
                                    </div>
                                </div>
                                <hr className="bg-gray-200 h-[2px]"/>
                                    <div>
                                        <p className="text-center text-gray-600 font-medium text-base">
                                            Read more News
                                        </p>
                                    </div>
                        </div>
                        <div className="w-full border-gray-200 border-2 p-4 space-y-4">
                            <h3 className="font-heading text-2xl font-bold uppercase">Sports news</h3>
                            <hr className="bg-gray-200 h-[2px]"/>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-cover bg-[url('/images/image10.png')]"/>
                                    <div>
                                        <h6 className="text-gray-600 text-base font-light">15 Jan</h6>
                                        <h6 className="font-heading text-lg font-bold">
                                            Boris Becker: Can tennis great remember his record-breaking Wimbledon run?
                                        </h6>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-cover bg-[url('/images/image11.png')]"/>
                                    <div>
                                        <h6 className="text-gray-600 text-base font-light">15 Jan</h6>
                                        <h6 className="font-heading text-lg font-bold">
                                            Former Real Madrid star Pepe calls on Cristiano Ronaldo to 'come to
                                            Besiktas'
                                        </h6>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-cover bg-[url('/images/image12.png')]"/>
                                    <div>
                                        <h6 className="text-gray-600 text-base font-light">15 Jan</h6>
                                        <h6 className="font-heading text-lg font-bold">
                                            'The Shark' bites: Greg Norman's mind is 'blown' by modern game's failings
                                        </h6>
                                    </div>
                                </div>
                                <hr className="bg-gray-200 h-[2px]"/>
                                    <div>
                                        <p className="text-center text-gray-600 font-medium text-base">
                                            Read more News
                                        </p>
                                    </div>
                        </div>
                    </div>
                    <div className="col-span-4 mt-8">
                        <div className="w-full">
                            <img src="/images/image13.png" className="h-auto w-full" alt=""/>
                                <div className="p-4 relative">
                                    <div
                                        className="absolute uppercase text-gray-50 left-4 py-2 px-4 top-[-50px] bg-[#F22929]">
                                        Tech
                                    </div>
                                    <ul className="text-sm list-disc p-4">
                                        <li>
                                            Ride the world's most mysterious commute
                                        </li>
                                        <li>How the 1% are preparing for the apocalypse</li>
                                        <li>Empire City to rise over Vietnam</li>
                                        <li>See inside this billion dollar museum</li>
                                        <li>Switzerland's best designs of 2017</li>
                                    </ul>

                                </div>
                        </div>
                    </div>
                    <div className="col-span-4 mt-8">
                        <div className="w-full">
                            <img src="/images/image14.png" className="h-auto w-full" alt=""/>
                                <div className="p-4 relative">
                                    <div
                                        className="absolute uppercase text-gray-50 left-4 py-2 px-4 top-[-50px] bg-[#B029F2]">
                                        Health
                                    </div>

                                    <ul className="text-sm list-disc p-4">
                                        <li>
                                            The happiest, healthiest cities in America
                                        </li>
                                        <li>Man loses nose, mouth in bear attack</li>
                                        <li>Controversial sugar industry insight uncovered</li>
                                        <li>Want to live longer? Get a dog</li>
                                        <li>How to beat your salt and sugar cravings</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                    <div className="col-span-4 mt-8">
                        <div className="w-full">
                            <img src="/images/image15.png" className="h-auto w-full" alt=""/>
                                <div className="p-4 relative">
                                    <div
                                        className="absolute uppercase text-gray-50 left-4 py-2 px-4 top-[-50px] bg-[#2944F2]">
                                        Business
                                    </div>
                                    <ul className="text-sm list-disc p-4">
                                        <li>
                                            Uber hacked in 2016: 57M users exposed
                                        </li>
                                        <li>Sexual harassment tipping point: Why now?</li>
                                        <li>China is winning electric cars 'arms race'</li>
                                        <li>London buses are powered by a new fuel</li>
                                        <li>Zuckerberg is no longer king of social</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home;