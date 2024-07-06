'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import LOGO from '@/public/logo.svg';
import AVATAR from '@/public/avatar.png';
import CHEVRONDOWN from '@/public/chevron-down.svg';
import BURGER from '@/public/burger.svg';
import CHEVRONLEFT from '@/public/chevron-left.svg';
import CAMERAICON from '@/public/camera-icon.svg';

import PersonalInfoBlock from "@/components/personal-info-block/personal-info-block";

export default function Home() {
  const [openedTab, setOpenedTab] = useState('main-info');

  return (
    <>
      <header className="flex justify-between items-center py-[29px] px-4 sm:py-6">
        <Image className="w-[135px] sm:w-[180px]" src={LOGO} alt="Логотип" />
        <div className="flex gap-y-2 items-center">
          <button className="border-dark-primary-border border rounded-[18px] py-1.5 px-4 flex w-20 h-9">
            <Image className="rounded-full" width={24} height={24} src={AVATAR} alt="Аватар сотрудника" />
            <Image  width={24} height={24} src={CHEVRONDOWN} alt="Иконка открытия меню пользователя"/>
          </button>
          <button className="w-10 h-10 flex items-center justify-center">
            <Image src={BURGER} alt="Кнопка открытия навигации"/>
          </button>
        </div>
      </header>

      <nav className='my-2'>
        <Link className="button-text text-dark-tertiary-text py-2 px-4 flex gap-x-2 items-center" href=''>
          <Image width={24} height={24} src={CHEVRONLEFT} alt="Иконка кнопки вернуться к сотрудникам"/>
          <p>Вернуться к сотрудникам</p>
        </Link>
      </nav>

      <main>
        <div className="bg-dark-secondary-bg rounded-xl px-4 pb-7 pt-8 flex flex-col gap-y-6 mb-4 sm:py-5 sm:gap-y-[52px] sm:px-10 sm:pt-10 sm:pb-5 min-[440px]:px-6 ">

          <div className="grid grid-cols-[1fr] grid-rows-[160px,auto] justify-items-center gap-x-12 sm:grid-cols-[160px,auto] sm:justify-items-start">
            <div className="relative hover-overlay hover:hover-overlay_shown group max-w-[160px]">
              <Image src={AVATAR} width={160} height={160} alt="Аватар сотрудника" />
              <Image className="transition-opacity duration-200 z-10 opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={CAMERAICON} width={24} height={24} alt='Иконка камеры'/>
            </div>
            <div className="flex flex-col sm:gap-y-2 row-span-2 text-center sm:text-left">
              <h1 className="custom-headline-text flex flex-col py-6">
                <span className="">Иванов</span>
                <span className="">Иван Иванович</span>
              </h1>
              <p className="subtitle-1-text flex flex-col gap-y-4">
                <span>UI/UX designer</span>
                <span>Россия, Красноярск</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center whitespace-nowrap sm:justify-start">
            <button 
              data-active={openedTab === 'main-info'}
              className="px-4 py-[10px] button-text data-[active=false]:inactive-tab data-[active=true]:active-tab" 
              onClick={() => setOpenedTab('main-info')}
            >
              Основная информация
            </button>
            <button
              data-active={openedTab === 'vacation'}
              className="px-4 py-[10px] button-text data-[active=false]:inactive-tab data-[active=true]:active-tab" 
              onClick={() => setOpenedTab('vacation')}
            >
              Отпуск
            </button>
          </div>

        </div>

        {
          openedTab === 'main-info' && (
            <PersonalInfoBlock />
          )
        }
      </main>
    </>
    
  );
}
