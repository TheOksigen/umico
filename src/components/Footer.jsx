import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";
import {GrDislike} from "react-icons/gr";

function Footer() {
    return (
        <MDBFooter
            bgColor="light"
            className="text-center text-lg-start text-muted">
            <section className="p-2">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol
                            md="3"
                            lg="4"
                            xl="4"
                            className="mx-auto mb-4 text-[#5F4A75]">
                            <h6 className="fw-bold mb-4">Çağrı mərkəzi</h6>
                            <p className="py-2">Qaynar xətt</p>
                            <p className="text-4xl font-bold hover:text-[#7C62E3] ">
                                915
                            </p>
                            <a className="py-2">
                                {" "}
                                <span className="underline hover:text-[#7C62E3] flex items-center">
                                    <GrDislike className="font-xs m-2" /> Malı
                                    qaytarmaq
                                </span>
                            </a>
                            <a className="py-2">
                                {" "}
                                <span className="underline hover:text-[#7C62E3] block">
                                    {" "}
                                    Müştəri vəkilinə online müraciət
                                </span>
                            </a>
                            <p className="text-reset">
                                Müştəri Vəkili ilə ofisdə görüş təyin etmək üçün
                                915 nömrəsi ilə əlaqə saxlayın
                            </p>
                            <div className="py-3">
                                <p>Digər ölkələrdən gələn zənglər üçün</p>
                                <p>+994 12 210 00 21</p>
                            </div>
                            <div className="py-3">
                                <p>Çağrı mərkəzinin iş saatları</p>
                                <p>B.e. - C.9:00 – 00:00</p>
                                <p>Ş - B.10:00 – 00:00</p>
                            </div>
                            <h6 className=" fw-bold mb-4 text-[#5F4A75]">
                                Bizi izləyin
                            </h6>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="flex  items-center text-[#50557A] hover:text-[#7C62E3]">
                                    <img
                                        className="w-[30px]"
                                        src="https://umico.az/favicon.ico"
                                        alt=""
                                    />{" "}
                                    <span className="px-2">
                                        Umico Live jurnalı
                                    </span>
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="flex  items-center text-[#50557A] hover:text-[#7C62E3]">
                                    <img
                                        className="w-[30px]"
                                        src="https://img.icons8.com/?size=512&id=16713&format=png"
                                        alt=""
                                    />{" "}
                                    <span className="px-2">WhatsApp</span>
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="flex  items-center text-[#50557A] hover:text-[#7C62E3]">
                                    <img
                                        className="w-[30px]"
                                        src="https://img.icons8.com/?size=512&id=63306&format=png"
                                        alt=""
                                    />{" "}
                                    <span className="px-2">Telegram</span>
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="flex  items-center text-[#50557A] hover:text-[#7C62E3]">
                                    <img
                                        className="w-[30px]"
                                        src="https://img.icons8.com/?size=512&id=13912&format=png"
                                        alt=""
                                    />{" "}
                                    <span className="px-2">Facebook</span>
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="flex  items-center text-[#50557A] hover:text-[#7C62E3]">
                                    <img
                                        className="w-[30px]"
                                        src="https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png"
                                        alt=""
                                    />{" "}
                                    <span className="px-2">Instagram</span>
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="flex  items-center text-[#50557A] hover:text-[#7C62E3]">
                                    <img
                                        className="w-[30px]"
                                        src="https://img.icons8.com/?size=512&id=19318&format=png"
                                        alt=""
                                    />{" "}
                                    <span className="px-2">Youtube</span>
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="4" xl="4 " className="mx-auto mb-3">
                            <h6 className=" fw-bold mb-4 text-[#5F4A75]">
                                Umico Market
                            </h6>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className=" text-[#50557A] hover:text-[#7C62E3]">
                                    Umico Market-də necə sifariş etmək olar
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Çatdırılma və ödəmə
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Azərpoçt şöbələrinə çatdırılma
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Kredit
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Taksitli ödəniş
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Promokodlar və endirimlər
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Sifarişin ləğv edilməsi və qaytarılması
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Azərpoçt şöbələrində geri qaytarma prosesi
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Umico Market təhvil məntəqələrinin siyahısı
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Azərpoçt şöbələrinin siyahısı
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Servis mərkəzləri
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Ən çox verilən suallar
                                </a>
                            </p>

                            <br />
                            <h6 className="fw-bold mb-4 text-[#5F4A75]">
                                Şirkət
                            </h6>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Umico Bonus
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Umico Bonus ilə necə alış-veriş etmək olar
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Umico Bonus kartını haradan əldə etmək olar
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Umico Bonus tərəfdaşlarının siyahısı
                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-3">
                            <h6 className=" fw-bold mb-4 text-[#5F4A75]">
                                Tərəfdaşlar üçün Umico
                            </h6>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className=" text-[#50557A] hover:text-[#7C62E3]">
                                    Umico Market-də satışa necə başlamaq olar
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Umico-nun tərəfdaşı olmaq
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Texniki reqlament
                                </a>
                            </p>
                            <br />
                            <h6 className="fw-bold mb-4 text-[#5F4A75]">
                                Şirkət
                            </h6>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    İstifadə şərtləri (ictimai oferta) Umico
                                    Bonus
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    Umico-nun tərəfdaşı olmaq
                                </a>
                            </p>
                            <p className="py-2">
                                <a
                                    href="#!"
                                    className="text-[#50557A] hover:text-[#7C62E3]">
                                    İstifadə şərtləri (ictimai oferta) Umico
                                    Market
                                </a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className="text-center p-4"
                style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                Umico - ağıllı alış-veriş üçün köməkçiniz. Bütün hüquqlar
                qorunur (c) Competo LLC. Umico Bonus İstifadəçi Sazişi,
                istifadəçi razılaşması Umico Market və məxfilik siyasəti
            </div>
        </MDBFooter>
    );
}

export default Footer;
