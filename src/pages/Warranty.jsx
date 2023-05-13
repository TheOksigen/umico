import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { Disclosure } from '@headlessui/react';

const umicomarket = [
    { name: "Umico Market-də necə sifariş etmək olar" },
    { name: "Çatdırılma və ödəmə" },
    { name: "Azərpoçt şöbələrinə çatdırılma" },
    { name: "Kredit" },
    { name: "Taksitli ödəniş" },
    { name: "Promokodlar və endirimlər" },
    { name: "Sifarişin ləğv edilməsi və qaytarılması" },
    { name: "Azərpoçt şöbələrində geri qaytarma prosesi" },
    { name: "Umico Market təhvil məntəqələrinin siyahısı" },
    { name: "Azərpoçt şöbələrinin siyahısı" },
    { name: "Servis mərkəzləri" },
    { name: "Ən çox verilən suallar" },
];
const umicobonus = [
    { name: "Umico Bonus ilə necə alış-veriş etmək olar" },
    { name: "Umico Bonus kartını haradan əldə etmək olar" },
    { name: "Umico Bonus tərəfdaşlarının siyahısı" },
];
const umicousers = [
    { name: "Umico Market-də satışa necə başlamaq olar" },
    { name: "Umico-nun tərəfdaşı olmaq" },
    { name: "Texniki reqlament" },
];
const company = [
    { name: "Umico Market-də satışa necə başlamaq olar" },
    { name: "Umico Market-də satışa necə başlamaq olar" },
];
const sifarisinyerineyetirilmesi = [
    { head: "Sifarişin yerləşdirilməsi" },
    {
        say: "1.",
        name: "Umico Market nədir?",
        sub: "Umico Market - onlayn marketpleys, yəni satış platformasıdır. Burada müxtəlif satıcılardan olan malları eldə edə bilərsiniz.",
    },
    {
        say: "2.",
        name: "Umico (Umico Bonus) loyallıq proqramı və Umico Market arasındaki fərq nədir?",
        sub: "Umico Market - Umico mobil tətbiqin və umico.az saytının müxtəlif satıcılardan olan mallarını bir yerdən almaq imkanını yaradan yeni xidmətidir. Umico Market-dən alış-veriş etmək üçün loyallıq proqramının üzvü olmaq şərt deyil. Loyallıq proqramı Umico Market-də alış-veriş üçün əlavə endirimlər təqdim etmir.",
    },
    {
        say: "3.",
        name: "Umico kartım yoxdursa, Umico Market-də alış-veriş edə bilərəmmi?",
        sub: "Bəli, siz loyallıq proqramının kartını əldə etmədən Umico Market-də alış-veriş edə bilərsiniz. Alış-verişinizi Umico mobil tətbiqində və ya umico.az saytında edə bilərsiniz.",
    },
    {
        say: "4.",
        name: "Umico mobil tətbiqi məndə yoxdursa, Umico Market-dən alış-veriş edə bilərəmmi?",
        sub: "Bəli, Umico saytında Umico Market mallarını eldə edə bilərsiniz.",
    },
    {
        say: "5.",
        name: "Umico Market mallarını oflayn mağazada eldə etmək mümkündürmü?",
        sub: "Xeyr, Umico Market mallarını yalnız Umico mobil tətbiqində və ya umico.az saytında eldə edə bilərsiniz.",
    },
    {
        say: "6.",
        name: "Umico Market-in şourumu mövcüddurmu?",
        sub: "Xeyr, Umico Market mallarını yalnız Umico mobil tətbiqində və ya umico.az saytında seçib eldə edə bilərsiniz.",
    },
    {
        say: "7.",
        name: "Şəxsi və maliyyə məlumatlarımın təhlükəsizliyi necə təmin olunur?",
        sub: "Umico Rabitə Nazirliyinin şəxsi məlumatların daxil edən sistemlərin reyestrinə daxil edilib. Şəxsi məlumatlarının saxlanılması və işlənilməsi prosesi Azerbaycan Respublikasının “Fərdi məlumatlar haqqında” qanunun tələblərinə uyğun göstərilir. Buna əlavə olaraq, Umico Market-də alış-veriş üçün istifadə etdiyiniz maliyyə məlumatlarınızı (misal üçün, kredit kartlarının məlumatlarını) saxlamırıq.",
    },
    {
        say: "8.",
        name: "Telefon vasitəsi ilə sifariş yerləşdirmək mümkündürmü?",
        sub: "Bəli, Çağrı mərkəzinə (915) müraciət edərək sifarişi yerləşdirə bilərsiniz.",
    },
    {
        say: "9.",
        name: "Alış-veriş edərkən, fiskal qəbz almaq mümkündürmü?",
        sub: "Alış-veriş zamanı, qəbz həmişə təqdim edilir. Satıcı yeni nəsil kassalardan istifadə edirsə, qəbzdə ƏDV-nin geri alınması üçün QR-kod mövcud olacaq.",
    },
    {
        say: "10.",
        name: "Sifarişi təhvil alarkən, məhsulu yoxlamaq mümkündürmü?",
        sub: "Siz, məhsulları kuryer çatdırdıqda, və ya Umico Market təhvil məntəqələrindən alanda (ekspress təhvil məntəqələri istisna olmaqla), onları açaraq, üzərində zədələrin olub-olmamasını, məhsulun dəstinin tam olub-olmamasını və işlək vəziyyətdə olub-olmamasını yoxlaya bilərsiniz. Xahiş edirik nəzərinizə alasınız ki, məhsul təhvil alınarkən yoxlanılmadığı halda, mübahisəli məsələlərin sizin xeyrinizə həll olunmasına zəmanət verə bilmirik.",
    },
    {
        say: "11.",
        name: "Niyə sifarişin yerləşdirilmə zamanı səbətdə olan sifarişlər bir necə fərqli sifarişə bölünür?",
        sub: "Səbətinizdə müxtəlif satıcılardan olan məhsullar varsa, onlar fərqli anbarlardan fərqli sifarişlər kimi çatdırılacaqlar. Həmçinin, iri ölçülü məişət texnikası xüsusi çatdırılma şəraitlərini tələb etdiyinə görə, fərqli sifariş kimi çatdırılır.",
    },
    { head: "Sifarişin Ödənilməsi", border: "border-b-2 mt-4" , id: "#paymment" },
    {
        say: "1",
        name: "Sifarişin ödənişini necə həyata keçirtmək olar?",
        sub: "Sifarişin ödənişini nağd şəkildə və ya sifarişi təhvil alarkən ödəniş kartı vasitəsilə terminalla həyata keçirə bilərsiniz. Terminalla ödəniş üçün istənilən bankın debet və kredit kartları qəbul olunur.",
    },
    {
        say: "2",
        name: "Məhsulları taksit ilə əldə etmək imkanı mövcuddurmu?",
        sub: "İstənilən sifarişi Kapital Bankdan istənilən Birbank taksit kartı ilə ödəməklə 24 ay taksitə bölə bilərsiniz.",
    },
    { head: "Zəmanətlər", border: "border-b-2 mt-4", id: "#warr" },
    {
        say: "1",
        name: "Umico Market-dən əldə olunan məhsullara zəmanət verilirmi?",
        sub: "Bəli, zəmanət onun mövcudluğu nəzərdə tutulan məhsullar üçün təqdim olunur. Zəmanət talonu məhsulla birlikdə təqdim olunur.",
    },
    {
        say: "2",
        name: "Zəmanət talonunu kim doldurur?",
        sub: "Zəmanət talonu satıcı tərəfindən məhsulla birlikdə təqdim olunur. Çox vaxt o, qablaşdırmanın içində və ya sənədlər olan paketin içində yerləşir, ya da qablaşdırmanın üzərində olur. Quraşdırılma tələb edən mallar üçün talon doldurulmamış şəkildə təqdim olunur. Quraşdırılma tələb olunmayanda talon əvvəlcədən doldurulur.",
    },
    {
        say: "3",
        name: "Alıcı zəmanət talonu ilə hara müraciət edə bilər?",
        sub: "Zəmanətdən istifadə etmək lazım olsa, siz məhsul istehsalçısının servis mərkəzinə müraciət edə biləcəksiniz. Servis mərkəzlərinin əlaqə məlumatları zəmanət talonunda göstərilib.",
    },
    {
        say: "4",
        name: "Umico Market satıcısından olan məhsulların zəmanətli təmiri necə həyata keçirilir?",
        sub: "Zəmanət zəmanət müddətində istehsalçıdan asılı olan səbəblərə görə baş verən nasazlıqları pulsuz şəkildə təmir edilməsini nəzərdə tutur. Məhsulun zəmanət müddəti zəmanətli təmirin müddətinə uzadılır. Bu müddət istehlakçının Umico Market-in Xidmət mərkəzinə müraciət edilməsindən başlayaraq hesablanır. Xidmət mərkəzində baxış və ya təmir məqsədi ilə olan malların saxlanılması müddəti istehlakçının müraciət gününü nəzərə almadan 14 gün təşkil edə bilər (istehlakçı və Umico Market arasında digər razılıq olmadığı təqdirdə). İstisnalı hallarda bu müddət 2 aya kimi uzadıla bilər. Təmir zamanı məhsulda qüsurlu detalların əvəzlənməsi məhsula olan zəmanət müddətinin tam şəkildə bərpa olunmasına səbəb olmur. ",
    },
    {
        say: "5",
        name: "Hansı hallarda zəmanət qüvvədən düşür?",
        sub: "Məhsulun mexaniki zədələnməsi təqdirdə;",
    },
    {
        say: "6",
        name: "Məhsul zəmanətinin müddəti nə qədərdir?",
        sub: "Məhsul zəmanəti haqqında məlumatı satıcı ilə dəqiqləşdirmək olar, müddət haqqında məlumat verilməyibsə, Azərbaycan Respublikasının Mülki Məcəlləsinin 589.2 maddəsinə əsaslanaraq 2 il ərzində Satıcıya zəmanət xidmətləri üçün müraciət edə bilərsiniz. Satıcıdan zəmanət xidmətləri sorğusuna imtina almısınızsa, 915 qaynar xətti və ya 'Mənim sifarişim' bölməsində yerləşən 'Müştəri vəkilinə müraciət' düyməsi vasitəsilə bizimlə əlaqə saxlamağınızı xahiş ediri",
    },
    {
        head: "Sifarişin ləğv edilməsi və qaytarılması",border: "border-b-2 mt-4", id: "#back"
    },
    {
        say: "1",
        name: "Sifarişi ləğv etmək mümkündürmü?",
        sub: "Bəli. İstənilən vaxt növbəti üsulların biri vasitəsilə sifarişi ləğv edə bilərsiniz: Əgər ləğv elədiyiniz sifariş öncədən ödənilibsə (kart vasitəsilə saytda), 3 gün ərzində pul avtomatik şəkildə hesabınıza qayıdacaq. Ortalama ilə vəsaitlər 1-3 iş günü ərzində qayıdır. Bəzi hallarda bu, daha çox vaxt apara bilər. Maksimal müddət 14 gün təşkil edir.",
    },
    {
        say: "2",
        name: "Mənə uyğun olmayan məhsulu necə qaytarmaq olar?",
        sub: "“İstehlakçıların hüquqlarının müdafiəsi haqqında” qanuna əsaslanaraq sizə uyğun olmayan məhsulu geri qaytara bilərsiniz. Məhsul birbaşa məhsulun satıcısına geri qaytarılır Geri qaytarılma üçün satıcının əlaqə məlumatları şəxsi kabinetinizdə sifarişə aid olan səhifədə yerləşir. Umico Market satıcısından alınan məhsulları Umico Market-in servis mərkəzində geri qaytarmaq olar.Kreditlə əldə etdiyiniz məhsulu geri qaytarırsınızsa, vəsaitlər kreditin ödənilməsi üçün birbaşa banka köçürüləcəkdir. Digər hallarda vəsaitləri nağd şəkildə götürə və ya bank kartına ala bilərsiniz.",
    },
    {
        say: "3",
        name: "Umico Market satıcısından olan məhsulları necə geri qaytarmaq olar?",
        sub: "",
    },
    { say: "4", name: "", sub: "" },
    { say: "5", name: "", sub: "" },
    { say: "6", name: "", sub: "" },
    { say: "7", name: "", sub: "" },
    {
        head: "Sifarişin ləğv edilməsi və qaytarılması",
        border: "border-b-2 mt-4",
        id: "legv",
    },
    { say: "1", name: "", sub: "" },
    { say: "2", name: "", sub: "" },
    { say: "3", name: "", sub: "" },
    { say: "4", name: "", sub: "" },
    { say: "5", name: "", sub: "" },
    { say: "6", name: "", sub: "" },
    { say: "7", name: "", sub: "" },
    { say: "8", name: "", sub: "" },
    {
        head: "Sifarişin ləğv edilməsi və qaytarılması",
        border: "border-b-2 mt-4",
        id: "legv",
    },
    { say: "1", name: "", sub: "" },
    { say: "2", name: "", sub: "" },
    { say: "3", name: "", sub: "" },
    { say: "4", name: "", sub: "" },
    { say: "5", name: "", sub: "" },
    { say: "6", name: "", sub: "" },
    { say: "7", name: "", sub: "" },
    { say: "8", name: "", sub: "" },
    { say: "9", name: "", sub: "" },
    { say: "10", name: "", sub: "" },
    { say: "11", name: "", sub: "" },
    { say: "12", name: "", sub: "" },
    { say: "13", name: "", sub: "" },
    { say: "14", name: "", sub: "" },
    { say: "15", name: "", sub: "" },
    { say: "16", name: "", sub: "" },
    { say: "17", name: "", sub: "" },
];

function Warranty() {
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
                                className="flex items-center text-[#50557A] hover:text-[#7C62E3]">
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
                    Ən çox verilən suallar
                </div>
                {sifarisinyerineyetirilmesi.map((item) => {
                    return (
                        <>
                            <div className="p-3">
                                <div className="text-2xl text-[#1E244D]" id={item.id}>{item.head}</div>
                                <div className={item.border}></div>
                                <div className="w-full  ">
                                    <div className="-full max-w-2xl bg-white ">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className=" text-[#7C62E3] font-medium flex w-full justify-between   ">
                                                        <span>{item.say} {item.name}</span>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                                                        {item.sub}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
                <div className="border-b-2"></div>
            </div>
        </div>
    );
}

export default Warranty;
