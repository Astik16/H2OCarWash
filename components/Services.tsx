import React from 'react';
import { SOLUTIONS } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="solutions" className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Решения</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Комплексная экосистема для транспорта</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-500">
            Настраиваем набор модулей под специфику бизнеса: от контроля топлива до диспетчеризации
            сервисных бригад и автоматизации путевых листов.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <div key={solution.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                {solution.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{solution.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
