import * as React from "react";
import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const NavAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <div className="flex flex-col rounded-3xl h-[80vh] relative p-5 pt-10 shadow w-60 bg-[#260056] ">
            <div className="space-y-3">
                <div className="flex items-center mb-20">
                    <Image
                    src="/images/blog/logo.svg"
                    width={176}
                    height={20}
                    className='w-[176px] h-auto'
                    alt="delete"
                    />
                </div>
                <div className="flex-1 relative">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <a
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <Image src='/images/blog/home.svg' width={20} height={20} alt='blog'/>
                                <span className="text-gray-100">Home</span>
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                className="flex flex-col items-start relative p-2 rounded-md"
                                onClick={toggleDropdown}
                            >
                            <div className="flex flex-row items-start space-x-3 ">
                                <Image src='/images/blog/e-commerce.svg' width={20} height={20} alt='blog'/>
                                <button
                                className="text-gray-100 flex flex-row items-center"
                                >
                                Navigatie
                                <IoIosArrowDown
                                    className={`ml-3 transition-all ${
                                    isOpen ? "rotate-180" : "rotate-0deg"
                                    }`}
                                />
                                </button>
                            </div>
                            {isOpen && (
                                <div className={`relative z-10 rounded shadow`}>
                                    <ul className="py-1">
                                        <li>
                                            <Link href="/admin/comenzi" className="block py-2 px-8 text-white">
                                                Comenzi
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/produse" className="block py-2 px-8 text-white">
                                                Produse
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/categorii" className="block py-2 px-8 text-white">
                                                Categorii
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/promotii" className="block py-2 px-8 text-white">
                                                Promotii
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                href="/admin/articole-blog"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <Image src='/images/blog/blog.svg' width={20} height={20} alt='blog'/>
                                <span className="text-gray-100">Blog</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="rounded-sm absolute bottom-10">
                    <a
                        className="flex items-center p-2 space-x-3 rounded-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-gray-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            />
                        </svg>
                        <span className="text-gray-100">Logout</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavAdmin;