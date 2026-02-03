import React from 'react';
import { NAV_ITEMS, BUSINESS_INFO } from '../../constants';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-200">
            <span className="text-lg font-bold">ТМ</span>
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">{BUSINESS_INFO.name}</p>
            <p className="text-xs text-slate-500">ГЛОНАСС/GPS мониторинг</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-cyan-600">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden flex-col text-sm font-medium text-slate-700 md:flex">
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s|\(|\)|-/g, '')}`}>
              {BUSINESS_INFO.phone}
            </a>
            <a href={`tel:${BUSINESS_INFO.secondaryPhone?.replace(/\s|\(|\)|-/g, '')}`}>
              {BUSINESS_INFO.secondaryPhone}
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition hover:bg-cyan-500"
          >
            Запросить демо
          </a>
        </div>
      </div>
    </header>
  );
};
