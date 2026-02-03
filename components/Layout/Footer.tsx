import React from 'react';
import { BUSINESS_INFO, NAV_ITEMS } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-12 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="text-lg font-semibold">{BUSINESS_INFO.name}</p>
          <p className="mt-3 text-sm text-slate-400">
            Экспертные решения в области ГЛОНАСС/GPS мониторинга, контроля топлива и
            управления транспортом.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase text-slate-400">Навигация</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className="hover:text-cyan-300" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase text-slate-400">Контакты</p>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <p>{BUSINESS_INFO.phone}</p>
            <p>{BUSINESS_INFO.secondaryPhone}</p>
            <p>{BUSINESS_INFO.email}</p>
            <p>{BUSINESS_INFO.address}</p>
          </div>
          <p className="mt-4 text-xs text-slate-500">© 2024 {BUSINESS_INFO.name}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
