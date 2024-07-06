import type { Dispatch, SetStateAction } from "react";
import Modal from "../modal/modal";
import PersonalInfoForm from "../personal-info-form/personal-info-form";

interface EditInfoModalProps {
  setEditInfoModalOpened: Dispatch<SetStateAction<boolean>>
  isEditInfoModalOpened: boolean;
}


const EditInfoModal = ({ setEditInfoModalOpened, isEditInfoModalOpened }: EditInfoModalProps) => {
  return (
    <Modal classes='w-full max-w-[824px]' isOpened={isEditInfoModalOpened} setIsOpened={setEditInfoModalOpened} title='Персональная информация'>
      <PersonalInfoForm key='editable-form' variant="editable" />
    </Modal>
  );
};
export default EditInfoModal;
