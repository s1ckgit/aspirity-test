import Image from "next/image";
import PersonalInfoForm from "../personal-info-form/personal-info-form";

import { peopleData } from "./people-data";

import ARROWRIGTH from '@/public/arrow-right.svg';
import ANN from '@/public/people/anna.png';
import { useState } from "react";
import TeamModal from "../team-modal/team-modal";
import EditInfoModal from "../edit-info-modal/edit-info-modal";

const PersonalInfoBlock = () => {
  const [isTeamModalOpened, setTeamModalOpened] = useState(false);
  const [isEditInfoModalOpened, setEditInfoModalOpened] = useState(false);
  
  return (
    <>
      <EditInfoModal isEditInfoModalOpened={isEditInfoModalOpened} setEditInfoModalOpened={setEditInfoModalOpened} />
      <TeamModal isTeamModalOpened={isTeamModalOpened} setTeamModalOpened={setTeamModalOpened} />
      <div 
        className="grid grid-cols-[1fr] gap-4 md:grid-cols-[minmax(300px,820px),minmax(300px,658px)]"
      >
        <div className="flex flex-col gap-y-8 xl:max-h-[420px] p-4 bg-dark-secondary-bg rounded-xl sm:p-[30px]">
          <div className="flex justify-between">
            <h5 className="h5-text">Персональная информация</h5>
            <button onClick={() => {
              setEditInfoModalOpened(true);
              document.body.style.overflow = 'hidden';
            }} className="subtitle-2-text text-dark-tertiary-text">Изменить</button>
          </div>

          <PersonalInfoForm key='readonly-form' variant="readonly"/>
        </div>

        <div className="
        grid grid-cols-[1fr] grid-rows-[auto] gap-y-4
        p-4 min-[500px]:max-h-[484px]
        bg-dark-secondary-bg rounded-xl
        lg:max-h-none sm:p-[30px] min-[500px]:grid-cols-[minmax(auto,268px),auto] min-[500px]:grid-rows-[32px,56px,80px,56px,40px] min-[500px]:gap-y-10
        ">
          <div className="flex justify-between min-[500px]:col-span-2 items-center max-h-8">
            <h5 className="h5-text">Загрузка сотрудника</h5>
            <p className="button-text text-[#D77556]">100%</p>
          </div>

          <div className="flex gap-y-2 flex-col">
            <p className="subtitle-1-text text-dark-tertiary-text">Название проекта</p>
            <p className="subtitle-1-text">MedPoint24</p>
          </div>

          <div className="flex gap-y-2 flex-col">
            <p className="subtitle-1-text text-dark-tertiary-text">Тип проекта</p>
            <p className="subtitle-1-text">Коммерческий</p>
          </div>

          <div className="flex gap-y-2 flex-col">
            <p className="subtitle-1-text text-dark-tertiary-text">Ответственный</p>
            <div className="flex gap-x-2 items-center">
              <Image className="rounded-full" src={ANN} alt='Фотография ответственного' width={48} height={48} />
              <p className="subtitle-1-text">Анна Кузнецова</p>
            </div>
          </div>

          <div className="flex gap-y-2 flex-col">
            <p className="subtitle-1-text text-dark-tertiary-text">Команда</p>
            <div onClick={() => {
              setTeamModalOpened(true);
              document.body.style.overflow = 'hidden';
            }} className="flex items-center relative h-full cursor-pointer">
              {
                peopleData.map((human, i) => {
                  if(i < 7) {
                    return <Image className='-ml-3 first:-ml-0 border-2 border-dark-secondary-bg rounded-full' width={50} height={50} key={human.id} src={human.avatar} alt="Фото члена команды" />;
                  }
                })
              }
              <p className="ml-2 body-1-text">+2</p>
            </div>
          </div>

          <div className="flex gap-y-2 flex-col min-[500px]:col-span-2 text-dark-tertiary-text">
            <p className="subtitle-1-text">Сроки работы</p>
            <p className="subtitle-1-text flex gap-x-2 items-center">
              <span>03 марта 2023 </span>
              <Image width={24} height={24} src={ARROWRIGTH} alt="Стреелка вправо"/>
              <span>23 марта 2023</span>
              </p>
          </div>

          <button className="min-[500px]:col-span-2 button min-h-10">Посмотреть всю загрузку</button>
        </div>
        
      </div>
    </>

    
  );
};
export default PersonalInfoBlock;
