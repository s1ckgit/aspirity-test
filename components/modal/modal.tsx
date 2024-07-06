import type { Dispatch, HTMLAttributes, SetStateAction } from "react";
import * as Portal from '@radix-ui/react-portal';
import Image from "next/image";

import EXIT from '@/public/exit.svg';


interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  isOpened: boolean;
  children: React.ReactNode;
  title: string;
  classes: string;
}

const Modal = ({ isOpened, setIsOpened, children, title, classes, ...props }: ModalProps) => {
  return (
    <Portal.Root asChild>
      <div
        className={
          `opacity-0 pointer-events-none flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-[#ffffff80] transition-opacity duration-200 ${isOpened ? 'opacity-100 pointer-events-auto' : ''}`
          }
      >
        <div 
          {...props}
          className={`max-h-screen overflow-y-auto bg-dark-secondary-bg p-4 sm:p-8 flex flex-col gap-y-10 rounded-xl ${classes}`}
        >
          <div className='flex justify-between items-center'>
            <h4 className='h4-text'>{title}</h4>
            <button onClick={() => {
              setIsOpened(false);
              document.body.style.overflow = 'auto';
            }}>
              <Image width={24} height={24} src={EXIT} alt='Кнопка выхода' />
            </button>
          </div>
          {children}
        </div>
      </div>
    </Portal.Root>
  );
};
export default Modal;
