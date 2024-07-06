import { useForm, SubmitHandler } from "react-hook-form";

interface PersonalInfoFormProps {
  variant: 'readonly' | 'editable';
}

type Inputs = {
  name: string;
  surname: string;
  patronymic: string;
  birthDate: Date;
  employmentDate: Date;
  country: string;
  city: string;
  job: string;
  email: string;
};

const PersonalInfoForm = ({ variant }: PersonalInfoFormProps) => {
  const requiredOption = {
    value: true,
    message: 'Необходимо заполнить это поле'
  };

  const emailOption = {
    // eslint-disable-next-line no-useless-escape
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Укажите корректную почту'
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-[1fr] grid-rows-[auto] gap-6 lg:grid-cols-[1fr,1fr]">

      <fieldset className="relative">
        <label className={`label ${errors.name ? 'text-dark-error-text' : ''}`}>
          Имя
        </label>
        <input 
          readOnly={variant === 'readonly'} 
          className={`input ${errors.name ? 'input-error' : ''}`} 
          defaultValue='Юрий'
          {...register("name", { required: requiredOption })}
        />
        {errors.name && <span className="mt-1 caption-text text-dark-error-text">{errors.name.message}</span>}
      </fieldset>

      <fieldset className="relative">
        <label className={`label ${errors.surname ? 'text-dark-error-text' : ''}`}>
            Фамилия
        </label>
        <input 
          readOnly={variant === 'readonly'} 
          className={`input ${errors.surname ? 'input-error' : ''}`} 
          defaultValue='Герыш' 
          {...register('surname', { required: requiredOption })}
        />
        {errors.surname && <span className="mt-1 caption-text text-dark-error-text">{errors.surname.message}</span>}
      </fieldset>

      <fieldset className="lg:col-span-2 relative">
        <label className={`label ${errors.patronymic ? 'text-dark-error-text' : ''}`}>
          Отчество
        </label>
        <input readOnly={variant === 'readonly'} className="input" defaultValue='Андреевич' {...register('patronymic')}/>
      </fieldset>
      
      <fieldset className="relative">
        <label className={`label ${errors.birthDate ? 'text-dark-error-text' : ''}`}>
          Дата рождения
        </label>
        <input readOnly={variant === 'readonly'} className="input" defaultValue='06.01.2014' {...register('birthDate')}/>
      </fieldset>
      
      <fieldset className="relative">
        <label className={`label ${errors.employmentDate ? 'text-dark-error-text' : ''}`}>
          Дата трудоустройства
        </label>
        <input readOnly={variant === 'readonly'} className="input" defaultValue='15.05.2020' {...register('employmentDate', { required: true })}/>
      </fieldset>
      
      <fieldset className="relative">
        <label className={`label ${errors.country ? 'text-dark-error-text' : ''}`}>
          Страна
        </label>
        <input readOnly={variant === 'readonly'} className="input" defaultValue='Россия' {...register('country')}/>
      </fieldset>
      
      <fieldset className="relative">
        <label className={`label ${errors.city ? 'text-dark-error-text' : ''}`}>
          Город
        </label>
        <input readOnly={variant === 'readonly'} className="input" defaultValue='Красноярск' {...register('city')}/>
      </fieldset>
      
      <fieldset className="relative">
        <label className={`label ${errors.job ? 'text-dark-error-text' : ''}`}>
          Должность
        </label>
        <input 
          readOnly={variant === 'readonly'} 
          className={`input ${errors.job ? 'input-error' : ''}`} 
          defaultValue='UI/UX designer' 
          {...register('job', { required: requiredOption })}
        />
        {errors.job && <span className="mt-1 caption-text text-dark-error-text">{errors.job.message}</span>}
      </fieldset>
      
      <fieldset className="relative">
        <label className={`label ${errors.email ? 'text-dark-error-text' : ''}`}>
          Электронная почта
        </label>
        <input 
          readOnly={variant === 'readonly'} 
          className={`input ${errors.email ? 'input-error' : ''}`} 
          defaultValue='test@gmail.com' 
          {...register('email', {
            required: requiredOption,
            pattern: emailOption
          })}
        />
        {errors.email && <span className="mt-1 caption-text text-dark-error-text">{errors.email.message}</span>}
      </fieldset>

      {
        variant === 'editable' && (
        <button disabled={!isValid} className="button h-10 lg:col-span-2" type="submit">Сохранить</button>
        )
      }

    </form>
  );
};
export default PersonalInfoForm;
