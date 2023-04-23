import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import TextArea from '@/components/forms/TextArea';

type BoilerplateForm = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const emailMutation = useMutation({
    mutationFn: (data: BoilerplateForm) => axios.post('/api/email', data),
  });

  const methods = useForm<BoilerplateForm>({
    mode: 'onSubmit',
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<BoilerplateForm> = async (data) => {
    logger({ data });

    toast.promise(emailMutation.mutateAsync(data), {
      loading: 'Sending...',
      success: 'Email Sended successfully',
      error: 'Something went wrong',
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid gap-[18px] sm:grid-cols-2'
      >
        <Input
          id='name'
          validation={{ required: 'Requerido' }}
          placeholder='Your name'
          containerClassName='sm:col-span-1 col-span-2'
        />

        <Input
          type='email'
          id='email'
          validation={{ required: 'Requerido' }}
          placeholder='Email address'
          containerClassName='sm:col-span-1 col-span-2'
        />

        <TextArea
          id='message'
          validation={{ required: 'Requerido' }}
          placeholder='Message'
          containerClassName='col-span-2'
        />

        <div className='col-span-2'>
          <Button type='submit' disabled={emailMutation.isLoading}>
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
