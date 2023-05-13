import { nanoid } from 'nanoid';
import React, { useEffect, useState, useRef } from 'react'
import { IoIosAlbums } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
    Pagination
} from "swiper";
import Main from './Main';

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("categmenu.json")
            .then(response => response.json())
            .then(data => setData(data.data))
    }, [])

    return (
        <>
            <div className=' m-2 h-full flex w-10/12 mx-auto' >
                <div> {
                    data?.map((item) => {
                        return (< span key={nanoid()} className='bg-white text-black text-xs snap-y p-1 flex hover:text-white'><IoIosAlbums className='mx-2' /> {item.name.toUpperCase()} </span>
                        )
                    })
                }
                </div>
                <div className='m-2 w-3/5 '>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper " data-swiper-autoplay="2000" >
                        <SwiperSlide><img src="https://strgimgr.umico.az/dcmimages/823/deskaz_8994.webp" alt="" /> </SwiperSlide>
                        <SwiperSlide><img src="https://strgimgr.umico.az/dcmimages/954/deskaz_9074.webp" alt="" /> </SwiperSlide>
                        <SwiperSlide><img src="https://strgimgr.umico.az/dcmimages/828/deskaz_9106.webp" alt="" /> </SwiperSlide>
                        <SwiperSlide><img src="https://strgimgr.umico.az/dcmimages/970/1224x768-1_9026.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://strgimgr.umico.az/dcmimages/971/deskaz_9039.webp" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://strgimgr.umico.az/dcmimages/953/deskaz_8962.webp" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://strgimgr.umico.az/dcmimages/935/Deskaz_8379.webp" alt="" /> </SwiperSlide>
                        <SwiperSlide><img src="https://strgimgr.umico.az/dcmimages/926/deskaz_8545.webp" alt="" /> </SwiperSlide>
                        <SwiperSlide><img src="https://strgimgr.umico.az/dcmimages/968/deskaz_8938.webp" alt="" /> </SwiperSlide>
                    </Swiper >
                </div>
                <div className='w-1/5 ' >
                    <div className='m-2  w-72' ><img src="https://umico.az/images/linkBadges/smartphones_az.webp" alt="" /> </div>
                    <div className='m-2  w-72' ><img src="https://umico.az/images/linkBadges/smartphones_az.webp" alt="" /> </div>
                    <div className='m-2  w-72' ><img src="https://umico.az/images/linkBadges/smartphones_az.webp" alt="" /> </div>
                </div >

            </div >
            <Main />

        </>
    )

}

export default Home