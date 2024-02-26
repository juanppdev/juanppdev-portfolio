import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

export default function Fswiper() {

    return (
        <>
          <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation={true}
        breakpoints={{
            280: {
                slidesPerView: 1
              },
            375: {
                slidesPerView: 1
              },
              360: {
                slidesPerView: 1
              },
              390: {
                slidesPerView: 1
              },
              414: {
                slidesPerView: 1
              },
            412: {
              slidesPerView: 1
            },
            430: {
                slidesPerView: 1
              },
              540: {
                slidesPerView: 1
              },
            768: {//Mirar
              slidesPerView: 2
            },
            820: {
                slidesPerView: 2
              },
            1024: {
              slidesPerView: 2
            },
          }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

            <div className="w-full bg-white">
                <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                            src="/placeholder.svg"
                            alt="AWS Certified Solutions Architect"
                            className="h-full aspect-video object-center object-cover"
                            width="320"
                            height="320"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                        AWS Certified Solutions Architect
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Issued by Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

            <div className="w-full bg-white">
                <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                            src="/placeholder.svg"
                            alt="AWS Certified Solutions Architect"
                            className="h-full aspect-video object-center object-cover"
                            width="320"
                            height="320"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                        AWS Certified Solutions Architect
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Issued by Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

            <div className="w-full bg-white">
                <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                            src="/placeholder.svg"
                            alt="AWS Certified Solutions Architect"
                            className="h-full aspect-video object-center object-cover"
                            width="320"
                            height="320"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                        AWS Certified Solutions Architect
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Issued by Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

            <div className="w-full bg-white">
                <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                            src="/placeholder.svg"
                            alt="AWS Certified Solutions Architect"
                            className="h-full aspect-video object-center object-cover"
                            width="320"
                            height="320"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                        AWS Certified Solutions Architect
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Issued by Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

            <div className="w-full bg-white">
                <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                            src="/placeholder.svg"
                            alt="AWS Certified Solutions Architect"
                            className="h-full aspect-video object-center object-cover"
                            width="320"
                            height="320"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                        AWS Certified Solutions Architect
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Issued by Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

            <div className="w-full bg-white">
                <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                            src="/placeholder.svg"
                            alt="AWS Certified Solutions Architect"
                            className="h-full aspect-video object-center object-cover"
                            width="320"
                            height="320"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                        AWS Certified Solutions Architect
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Issued by Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

            <div className="w-full bg-white">
                <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                            src="/placeholder.svg"
                            alt="AWS Certified Solutions Architect"
                            className="h-full aspect-video object-center object-cover"
                            width="320"
                            height="320"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                        AWS Certified Solutions Architect
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Issued by Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

            <div className="w-full bg-white">
                <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                            src="/placeholder.svg"
                            alt="AWS Certified Solutions Architect"
                            className="h-full aspect-video object-center object-cover"
                            width="320"
                            height="320"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                        AWS Certified Solutions Architect
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Issued by Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
      </Swiper>
        </>
    )
  }