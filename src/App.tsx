/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  ShieldCheck, FileText, ExternalLink,
  Phone, Mail, AlertCircle, FileSpreadsheet,
  Calendar, Map, ChevronRight, Download
} from 'lucide-react';

const indicators = [
  { id: 1, text: "Número de zonas 30 priorizadas en zonas escolares y de establecimientos de salud de Primer Nivel de Atención en Salud (PNAS) que cuentan con medidas de seguridad vial implementadas." },
  { id: 2, text: "Número de intersecciones viales priorizadas que cuentan con medidas de seguridad vial implementadas." },
  { id: 3, text: "Número de zonas viales priorizadas que cuentan con medidas de seguridad vial mantenidas." }
];

const verificationLinks = [
  { id: 1, url: "https://drive.google.com/drive/folders/1XAgLx-ZU86pN29wsTI0tzqHZQsR7bhca" },
  { id: 2, url: "https://drive.google.com/drive/folders/17dXw2a_xgrLBUd4AumXiG02ep5wlIDU9" },
  { id: 3, url: "https://drive.google.com/drive/folders/1qCIsPCEEFlXKBdXbeR6CnI2zne14K5z_" }
];

const lists = [
  "Lista de municipalidades priorizadas",
  "Lista de zonas 30 priorizadas",
  "Lista de intersecciones priorizadas",
  "Lista de zonas a mantener"
];

function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center border border-slate-100"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-amber-100">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Información</h3>
            <p className="text-slate-600 mb-8 font-medium">Se encuentra en propuesta.</p>
            <button
              onClick={onClose}
              className="w-full bg-slate-900 text-white font-semibold py-3.5 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              Entendido
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                Programa de Incentivos
              </h1>
              <p className="text-sm font-medium text-slate-500 mt-1">Seguridad Vial</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-24">
        {/* Hero Section */}
        <section className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-bold tracking-wide mb-6 border border-red-100">
            <AlertCircle className="w-4 h-4" />
            Propuesta de Compromiso
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Mejorar la seguridad vial en <br className="hidden sm:block" />
            <span className="text-red-600">entornos viales de riesgo</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl font-medium">
            Esta plataforma detalla los indicadores, medios de verificación y cronogramas correspondientes a la implementación y mantenimiento de medidas de seguridad vial en zonas priorizadas del país.
          </p>
        </section>

        {/* Indicadores */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
              <span className="text-slate-900 font-bold text-sm">1</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Indicadores del Compromiso</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {indicators.map((ind) => (
              <div key={ind.id} className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm flex flex-col hover:border-slate-300 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-6">
                  <span className="text-xl font-black text-slate-900">0{ind.id}</span>
                </div>
                <p className="text-slate-700 font-medium leading-relaxed flex-grow">
                  {ind.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fichas Técnicas & Cronograma */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                <FileText className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Fichas Técnicas</h3>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setModalOpen(true)}
                  className="w-full group bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-red-600 hover:shadow-md transition-all text-left"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <FileText className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Ficha Técnica</h4>
                      <p className="text-sm font-medium text-slate-500">Indicador {num}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-red-600 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                <Calendar className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Cronograma</h3>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm h-[calc(100%-4.5rem)] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                <Calendar className="w-10 h-10 text-slate-400" />
              </div>
              <p className="text-slate-600 font-medium max-w-sm text-lg leading-relaxed">
                El cronograma detallado de actividades y plazos se encuentra en elaboración.
              </p>
            </div>
          </div>
        </section>

        {/* Medios de verificación */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
              <ExternalLink className="w-5 h-5 text-slate-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Medios de Verificación</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {verificationLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col gap-6 hover:border-blue-600 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FileSpreadsheet className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <ExternalLink className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Evidencia Indicador {link.id}</h4>
                  <p className="text-sm text-slate-500 font-medium">Ver carpeta compartida en Drive</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Listas y Visor */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                <FileText className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Listados</h3>
            </div>
            <div className="space-y-4">
              {lists.map((list, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm hover:border-slate-300 transition-colors">
                  <span className="font-semibold text-slate-800 text-sm">{list}</span>
                  <button className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                <Map className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Visor de Zonas Priorizadas</h3>
            </div>
            <div className="bg-white p-2.5 rounded-3xl border border-slate-200 shadow-sm h-[500px] relative z-0">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 z-0">
                <MapContainer
                  center={[-9.19, -75.015]}
                  zoom={5}
                  scrollWheelZoom={false}
                  className="w-full h-full z-0"
                  style={{ zIndex: 0 }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="w-10 h-10 text-red-500" />
                <span className="text-2xl font-bold text-white tracking-tight">Seguridad Vial</span>
              </div>
              <p className="text-base font-medium max-w-sm leading-relaxed">
                Programa de Incentivos para la mejora de la seguridad en entornos viales de riesgo a nivel nacional.
              </p>
            </div>
            <div className="flex flex-col md:items-end space-y-5">
              <h4 className="text-white font-bold text-lg tracking-tight">Contactos de Ayuda</h4>
              <a href="mailto:seguridadvial@mtc.gob.pe" className="flex items-center gap-3 hover:text-white font-medium transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                seguridadvial@mtc.gob.pe
              </a>
              <a href="tel:+51905461611" className="flex items-center gap-3 hover:text-white font-medium transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                +51 905 461 611
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800 text-sm font-medium text-center flex flex-col md:flex-row items-center justify-between gap-4">
            <span>&copy; {new Date().getFullYear()} Ministerio de Transportes y Comunicaciones.</span>
            <span>Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
