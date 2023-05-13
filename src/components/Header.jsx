import {nanoid} from "nanoid";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {BsTelephone, BsPerson, BsFillBasket2Fill} from "react-icons/bs";
import {RiArrowDropDownLine} from "react-icons/ri";
import {FaBalanceScale} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai";
import {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import umico_logo from "../img/umico.png";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const navigation = [
    {name: "Umico Bonus loyallıq proqramı", href: "loyalty-program"},
    {name: "Çatdırılma və ödəmə", href: "shipping-payment"},
    {name: "Qaytarma", href: "questions-answers"},
    {name: "Zəmanət", href: "questions-answers/#warr"},
];

function Header() {
    const [input_set, setInput_set] = useState("Məhsullar");
    const [flag, setFlag] = useState({
        AZE: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
    });

    return (
        <>
            <nav className="bg-[#242B58] p-1 flex border-b-2 border-white ">
                <div className="flex flex-wrap items-center mx-auto w-10/12">
                    {navigation.map((item) => {
                        return (
                            <NavLink
                                className="m-1 px-1 text-xs text-white  hover:!text-slate-300 "
                                to={item.href}
                                key={nanoid()}>
                                {item.name}
                            </NavLink>
                        );
                    })}
                    <NavLink className="m-1 p-0.5 text-xs text-white rounded-sm bg-gradient-to-r from-indigo-900 to-pink-800 hover:!text-slate-300">
                        Umico Market-də satın
                    </NavLink>
                    <div className="text-xs flex text-white items-center flex-wrap mx-auto ">
                        <span className="flex text-white items-center mx-5 hover:!text-slate-300">
                            <BsTelephone className="mx-2" />
                            915
                        </span>
                        <span className="flex text-white items-center"></span>
                        <Menu
                            as="div"
                            className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex items-center justify-center text-sx font-semibold text-white ">
                                    <img
                                        src={Object.values(flag)[0]}
                                        alt="aze flag"
                                        className="w-[20px] m-2"
                                    />
                                    {Object.keys(flag)[0]}
                                    <ChevronDownIcon
                                        className="-mr-1 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item className="flex">
                                            {({active}) => (
                                                <a
                                                    href="#"
                                                    onClick={() => {
                                                        setFlag({
                                                            AZE: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
                                                        });
                                                    }}
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                    )}>
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"
                                                        alt="aze flag"
                                                        className="w-[20px] m-2"
                                                    />
                                                    AZE
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item className="flex">
                                            {({active}) => (
                                                <a
                                                    href="#"
                                                    onClick={() => {
                                                        setFlag({
                                                            RUS: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
                                                        });
                                                    }}
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                    )}>
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
                                                        alt="aze flag"
                                                        className="w-[20px] m-2"
                                                    />
                                                    RUS
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <span className="mx-4 flex text-white items-center hover:!text-slate-300">
                            <BsPerson className="mx-2" /> Qeydiyyat | Giriş
                        </span>
                    </div>
                </div>
            </nav>
            {/* ikinci nav */}
            <nav className="bg-[#242B58] p-3 flex">
                <div className="flex flex-wrap items-center mx-auto w-10/12">
                    <NavLink>
                        <img
                            style={{width: "150px"}}
                            src={umico_logo}
                            alt="umico_logo"
                        />
                    </NavLink>
                    <button className=" flex items-center p-2 mx-3 text-white text-sm font-bold  bg-[#7C62E3] rounded-sm ">
                        Məhsul kataloqu{" "}
                        <RiArrowDropDownLine className="text-lg" />
                    </button>

                    <form>
                        <div className="flex">
                            <div className=" w-full flex">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    className=" w-96 p-1 text-sm text-black bg-white rounded-l-sm border-l-2 "
                                    placeholder="Search"
                                    required
                                />
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            {input_set}

                                            <ChevronDownIcon
                                                className="-mr-1 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            onClick={() => {
                                                                setInput_set(
                                                                    "Məhsullar"
                                                                );
                                                            }}
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}>
                                                            Məhsullar
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            onClick={() => {
                                                                setInput_set(
                                                                    "Şikət"
                                                                );
                                                            }}
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100 text-gray-900"
                                                                    : "text-gray-700",
                                                                "block px-4 py-2 text-sm"
                                                            )}>
                                                            Şikət
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                            <button
                                type="submit"
                                className=" p-2 text-sm font-medium text-white bg-[#7C62E3] rounded-r-sm  border-blue-700 hover:bg-[#4b3b8a]">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                    <span className="mx-2 flex text-white items-center hover:!text-slate-300">
                        <FaBalanceScale className="mx-2 text-lg " />
                        Müqayisə
                    </span>
                    <span className="mx-2 flex text-white items-center hover:!text-slate-300">
                        <AiOutlineHeart className="mx-2 text-lg " />
                        Seçilmişlər
                    </span>
                    <span className="mx-2 flex text-white items-center hover:!text-slate-300">
                        <BsFillBasket2Fill className="mx-2 text-lg " />
                        Səbət
                    </span>
                </div>
            </nav>
        </>
    );
}

export default Header;
