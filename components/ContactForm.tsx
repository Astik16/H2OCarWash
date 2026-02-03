import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BUSINESS_INFO } from '../constants';

interface ContactFormValues {
  name: string;
  company: string;
  phone: string;
  email: string;
  fleetSize: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      phone: '',
      email: '',
      fleetSize: '',
      message: '',
    },
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: ContactFormValues) => {
    setSubmitted(true);
    reset();
    console.log('Lead submitted', data);
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Контакты</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Запросите демонстрацию платформы</h2>
            <p className="mt-4 text-sm text-slate-600">
              Оставьте заявку — мы подготовим демонстрацию, рассчитаем экономию и предложим план внедрения.
            </p>
            <div className="mt-8 space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-800">Телефон</p>
                <p>{BUSINESS_INFO.phone}</p>
                <p>{BUSINESS_INFO.secondaryPhone}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Email</p>
                <p>{BUSINESS_INFO.email}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Адрес</p>
                <p>{BUSINESS_INFO.address}</p>
              </div>
              <a
                href={BUSINESS_INFO.mapLink}
                className="inline-flex text-cyan-600 hover:text-cyan-500"
                target="_blank"
                rel="noreferrer"
              >
                Открыть на карте
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100">
            <h3 className="text-xl font-semibold text-slate-900">Форма заявки</h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase text-slate-500">Имя</label>
                  <input
                    {...register('name', { required: true })}
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-cyan-400 focus:outline-none"
                    placeholder="Ваше имя"
                  />
                  {formState.errors.name && (
                    <p className="mt-1 text-xs text-rose-500">Пожалуйста, укажите имя</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-slate-500">Компания</label>
                  <input
                    {...register('company', { required: true })}
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-cyan-400 focus:outline-none"
                    placeholder="Название компании"
                  />
                  {formState.errors.company && (
                    <p className="mt-1 text-xs text-rose-500">Укажите компанию</p>
                  )}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase text-slate-500">Телефон</label>
                  <input
                    {...register('phone', { required: true })}
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-cyan-400 focus:outline-none"
                    placeholder="+7 (___) ___-__-__"
                  />
                  {formState.errors.phone && (
                    <p className="mt-1 text-xs text-rose-500">Укажите телефон</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-slate-500">Email</label>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-cyan-400 focus:outline-none"
                    placeholder="name@company.ru"
                  />
                  {formState.errors.email && (
                    <p className="mt-1 text-xs text-rose-500">Укажите email</p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase text-slate-500">Размер автопарка</label>
                <input
                  {...register('fleetSize', { required: true })}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-cyan-400 focus:outline-none"
                  placeholder="например, 45 единиц"
                />
                {formState.errors.fleetSize && (
                  <p className="mt-1 text-xs text-rose-500">Укажите размер автопарка</p>
                )}
              </div>
              <div>
                <label className="text-xs font-semibold uppercase text-slate-500">Комментарий</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-cyan-400 focus:outline-none"
                  placeholder="Какие задачи нужно решить?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-200 transition hover:bg-cyan-500"
              >
                Отправить заявку
              </button>
              {submitted && (
                <p className="text-sm text-emerald-600">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
