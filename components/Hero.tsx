import React from 'react';
import { BUSINESS_INFO, STATS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Платформа спутникового мониторинга нового поколения
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Контролируйте транспорт, топливо и технику в едином цифровом центре
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            {BUSINESS_INFO.name} помогает транспортным и сервисным компаниям снижать затраты, повышать
            дисциплину водителей и выполнять нормативы с помощью телематических решений.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#calculator"
              className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:bg-cyan-500"
            >
              Рассчитать эффект
            </a>
            <a
              href="#solutions"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:text-cyan-600"
            >
              Посмотреть решения
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <p className="text-sm uppercase tracking-wide text-cyan-200">Живые данные</p>
            <h2 className="mt-2 text-2xl font-semibold">Онлайн-центр мониторинга</h2>
            <p className="mt-3 text-sm text-slate-200">
              Следите за автопарком в реальном времени, анализируйте расход топлива и
              получайте предупреждения о рисках.
            </p>
            <div className="mt-6 grid gap-4 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-slate-800/70 px-4 py-3">
                <span>Объектов в работе</span>
                <span className="font-semibold">1 284</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-800/70 px-4 py-3">
                <span>Отклонений маршрута</span>
                <span className="font-semibold text-amber-300">+12</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-800/70 px-4 py-3">
                <span>Сэкономлено топлива</span>
                <span className="font-semibold text-emerald-300">-18%</span>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-800">Мобильное приложение</p>
              <p className="mt-2 text-sm text-slate-500">
                Диспетчеризация, чат с водителями и фотоотчеты о выполненных задачах.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-800">Интеграции</p>
              <p className="mt-2 text-sm text-slate-500">
                Подключение к 1С, SAP и BI системам через открытое API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
