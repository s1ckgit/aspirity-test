import Image from 'next/image';
import type { Dispatch, SetStateAction } from "react";

import { peopleData } from '../personal-info-block/people-data';
import Modal from '../modal/modal';


interface TeamModalProps {
  setTeamModalOpened: Dispatch<SetStateAction<boolean>>;
  isTeamModalOpened: boolean;
}

const TeamModal = ({ setTeamModalOpened, isTeamModalOpened }: TeamModalProps) => {
  return (
    <Modal classes='w-[650px]' title='Команда' setIsOpened={setTeamModalOpened} isOpened={isTeamModalOpened}>
      <div className='flex flex-col gap-y-4'>
        {
          peopleData.map((human) => {
            return (
              <div key={human.id} className='flex gap-x-2 items-center'>
                <Image className='flex-shrink-0 h-12' width={48} height={48} src={human.avatar} alt='Фотография члена команды' />
                <div className='flex flex-col'>
                  <p className='subtitle-1-text'>{human.name}</p>
                  <p className='body-2-text text-dark-secondary-text'>{human.job}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </Modal>
  );
};
export default TeamModal;
