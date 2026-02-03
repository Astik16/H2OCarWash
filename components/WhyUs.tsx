import React from 'react';
import { FEATURES, PRICING, FAQ } from '../constants';

export const WhyUs: React.FC = () => {
  return (
    <section id="features" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Возможности</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Платформа, которая делает автопарк прозрачным</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-500">
            Управляйте рисками, снижайте затраты и повышайте качество сервиса благодаря комплексной
            телематике и интеллектуальной аналитике.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Тарифы</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">Гибкие тарифы под размер автопарка</h3>
            </div>
            <p className="max-w-xl text-sm text-slate-500">
              Все планы включают мобильное приложение, обучение и доступ к базе отчетов.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 ${
                  plan.highlighted
                    ? 'border-cyan-500 bg-white shadow-lg shadow-cyan-100'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <h4 className="text-lg font-semibold text-slate-900">{plan.name}</h4>
                <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                <p className="mt-4 text-2xl font-semibold text-slate-900">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${
                    plan.highlighted
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-200 hover:bg-cyan-500'
                      : 'border border-slate-200 text-slate-700 hover:border-cyan-200 hover:text-cyan-600'
                  }`}
                >
                  Выбрать тариф
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-900">Частые вопросы</h3>
            <div className="mt-6 space-y-4">
              {FAQ.map((item) => (
                <div key={item.question} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.question}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white">
            <p className="text-sm uppercase tracking-wide text-cyan-200">Поддержка 24/7</p>
            <h3 className="mt-3 text-2xl font-semibold">Мы сопровождаем внедрение до результата</h3>
            <p className="mt-4 text-sm text-slate-200">
              Выделенный менеджер проекта, SLA и регулярные сессии с аналитиками помогают
              достигать плановых KPI.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between rounded-2xl bg-slate-800/70 px-4 py-3">
                <span>Время реакции</span>
                <span className="font-semibold">15 минут</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-800/70 px-4 py-3">
                <span>Выезд инженера</span>
                <span className="font-semibold">24 часа</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-800/70 px-4 py-3">
                <span>Обучение команды</span>
                <span className="font-semibold">до 10 сессий</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
