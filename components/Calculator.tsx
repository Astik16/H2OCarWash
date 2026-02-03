import React, { useMemo, useState } from 'react';
import { BENEFITS } from '../constants';

export const Calculator: React.FC = () => {
  const [vehicles, setVehicles] = useState(35);
  const [fuelCost, setFuelCost] = useState(480000);
  const [savingsPercent, setSavingsPercent] = useState(18);

  const monthlySavings = useMemo(() => {
    const savings = (fuelCost * savingsPercent) / 100;
    return Math.round(savings);
  }, [fuelCost, savingsPercent]);

  const yearlySavings = monthlySavings * 12;
  const costPerVehicle = Math.round(monthlySavings / Math.max(vehicles, 1));

  return (
    <section id="calculator" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Калькулятор эффекта</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Посчитайте экономию от внедрения</h2>
            <p className="mt-4 text-sm text-slate-600">
              Укажите параметры автопарка, чтобы оценить потенциал экономии на топливе и
              обслуживании. Мы учтем типичные показатели клиентов из логистики и сервиса.
            </p>
            <div className="mt-8 grid gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <label className="text-sm font-semibold text-slate-800">Количество единиц техники</label>
                <input
                  type="number"
                  min={1}
                  value={vehicles}
                  onChange={(event) => setVehicles(Number(event.target.value))}
                  className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <label className="text-sm font-semibold text-slate-800">Затраты на топливо в месяц (₽)</label>
                <input
                  type="number"
                  min={0}
                  value={fuelCost}
                  onChange={(event) => setFuelCost(Number(event.target.value))}
                  className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <label className="text-sm font-semibold text-slate-800">Ожидаемая экономия (%)</label>
                <input
                  type="range"
                  min={5}
                  max={30}
                  value={savingsPercent}
                  onChange={(event) => setSavingsPercent(Number(event.target.value))}
                  className="mt-4 w-full accent-cyan-600"
                />
                <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                  <span>5%</span>
                  <span className="font-semibold text-cyan-600">{savingsPercent}%</span>
                  <span>30%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-lg shadow-cyan-100">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">Прогноз</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Ежемесячная экономия</p>
                  <p className="text-3xl font-semibold text-slate-900">{monthlySavings.toLocaleString('ru-RU')} ₽</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Годовая экономия</p>
                  <p className="text-2xl font-semibold text-slate-900">{yearlySavings.toLocaleString('ru-RU')} ₽</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Экономия на единицу</p>
                  <p className="text-2xl font-semibold text-slate-900">{costPerVehicle.toLocaleString('ru-RU')} ₽</p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-200 transition hover:bg-cyan-500"
              >
                Получить расчет проекта
              </a>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Ключевые выгоды</h3>
              <div className="mt-4 space-y-4">
                {BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">{benefit.title}</p>
                      <span className="text-sm font-semibold text-cyan-600">{benefit.value}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
