import React from 'react';
import { INDUSTRIES } from '../constants';

export const LeadMagnet: React.FC = () => {
  return (
    <section id="industries" className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Отрасли</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Решения под специфику каждого бизнеса</h2>
            <p className="mt-4 text-sm text-slate-600">
              Наши аналитики собирают бизнес-требования, подбирают датчики и настраивают
              дашборды под KPI ваших подразделений.
            </p>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Что входит в запуск</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>• Аудит парка и логистических процессов</li>
                <li>• Подбор оборудования и монтаж</li>
                <li>• Обучение диспетчеров и механиков</li>
                <li>• Аналитика и сопровождение KPI</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((industry) => (
              <div key={industry.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{industry.name}</h3>
                <p className="mt-3 text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
