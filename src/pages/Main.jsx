import React from "react";
import Countdown from "react-countdown";

function Main() {
    return (
        <div className="bg-[#F7F7F7] w-full">
            <div className="py-2 h-full flex w-10/12 mx-auto ">
                <div className="flex">
                    <div className="items-center flex text-[#1E244D] text-4xl font-bold">
                        Günün endirimi
                    </div>
                    <div className="items-center flex border mx-4 bg-[#FF4B81] text-lg border-[#FF4B81] text-white p-2 rounded">
                        Kampaniyanın bitmə müddəti:
                        <b>
                            <Countdown
                                className="px-2"
                                date={Date.now() + 11354000}
                            />
                        </b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
