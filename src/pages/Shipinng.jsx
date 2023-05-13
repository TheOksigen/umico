import React from "react";
import {TbPointFilled} from "react-icons/tb";

const umicomarket = [
    {name: "Umico Market-də necə sifariş etmək olar"},
    {name: "Çatdırılma və ödəmə"},
    {name: "Azərpoçt şöbələrinə çatdırılma"},
    {name: "Kredit"},
    {name: "Taksitli ödəniş"},
    {name: "Promokodlar və endirimlər"},
    {name: "Sifarişin ləğv edilməsi və qaytarılması"},
    {name: "Azərpoçt şöbələrində geri qaytarma prosesi"},
    {name: "Umico Market təhvil məntəqələrinin siyahısı"},
    {name: "Azərpoçt şöbələrinin siyahısı"},
    {name: "Servis mərkəzləri"},
    {name: "Ən çox verilən suallar"},
];
const umicobonus = [
    {name: "Umico Bonus ilə necə alış-veriş etmək olar"},
    {name: "Umico Bonus kartını haradan əldə etmək olar"},
    {name: "Umico Bonus tərəfdaşlarının siyahısı"},
];
const umicousers = [
    {name: "Umico Market-də satışa necə başlamaq olar"},
    {name: "Umico-nun tərəfdaşı olmaq"},
    {name: "Texniki reqlament"},
];
const company = [
    {name: "Umico Market-də satışa necə başlamaq olar"},
    {name: "Umico Market-də satışa necə başlamaq olar"},
];

function Shipinng() {
    return (
        <div className=" p-7 bg-[#F7F7F7F7] flex">
            <div className="w-1/5 pr-3">
                <h6 className=" fw-bold mb-4 text-[#5F4A75]">Umico Market</h6>
                {umicomarket.map((item) => {
                    return (
                        <p className="py-2 text-sm">
                            <a
                                href="#!"
                                className="flex items-center text-[#50557A] hover:text-[#7C62E3]">
                                <TbPointFilled /> {item.name}
                            </a>
                        </p>
                    );
                })}
                <br />
                <h6 className=" fw-bold mb-4 text-[#5F4A75]">Umico Bonus</h6>
                {umicobonus.map((item) => {
                    return (
                        <p className="py-2">
                            <a
                                href="#!"
                                className="flex items-center  text-[#50557A] hover:text-[#7C62E3]">
                                <TbPointFilled />
                                {item.name}
                            </a>
                        </p>
                    );
                })}
                <br />
                <h6 className=" fw-bold mb-4 text-[#5F4A75]">
                    Tərəfdaşlar üçün Umico
                </h6>
                {umicousers.map((item) => {
                    return (
                        <p className="py-2">
                            <a
                                href="#!"
                                className="flex items-center  text-[#50557A] hover:text-[#7C62E3]">
                                <TbPointFilled />
                                {item.name}
                            </a>
                        </p>
                    );
                })}
                <br />
                <h6 className=" fw-bold mb-4 text-[#5F4A75]">Şirkət</h6>
                {company.map((item) => {
                    return (
                        <p className="py-2">
                            <a
                                href="#!"
                                className="flex items-center  text-[#50557A] hover:text-[#7C62E3]">
                                <TbPointFilled />
                                {item.name}
                            </a>
                        </p>
                    );
                })}
            </div>
            <div className="w-4/5 bg-white">
                <div className="text-3xl font-bold text-[#1E244D] border-b-2 p-3 ">
                    Çatdırılma və ödəmə
                </div>
                <div className="text-2xl p-3 text-[#1E244D]">
                    Çatdırılma üsulları
                </div>
                <div className="p-3">
                    Umico Market-də aşağıda qeyd olunan çatdırılma üsulları
                    mövcuddur:
                </div>

                <div className="flex">
                    <div>1</div>
                    <div>2</div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Shipinng;
