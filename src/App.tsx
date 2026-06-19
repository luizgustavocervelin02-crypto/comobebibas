import { useState } from 'react';
import {
  CheckCircle,
  Shield,
  Clock,
  Zap,
  Star,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  ImageIcon,
  Play,
  Instagram,
  Package,
} from 'lucide-react';
import InfiniteCarousel from './components/Carousel';

/* ─── helpers ──────────────────────────────────────────────── */

function scrollToPlans() {
  document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 text-gray-400 p-3">
      <ImageIcon size={24} />
      <span className="text-xs font-medium text-center leading-snug">{label}</span>
    </div>
  );
}

function SectionCTA({ label = 'QUERO O COMBO BEBIDAS PRO' }: { label?: string }) {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={scrollToPlans}
        className="bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-extrabold rounded-xl px-8 py-4 text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 active:translate-y-0"
      >
        {label}
      </button>
    </div>
  );
}

function SectionTitle({
  children,
  sub,
  light,
  center = true,
}: {
  children: React.ReactNode;
  sub?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 ${center ? 'text-center' : ''}`}>
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {children}
      </h2>
      {sub && (
        <p
          className={`mt-3 text-base sm:text-lg ${light ? 'text-white/75' : 'text-gray-500'} max-w-2xl ${
            center ? 'mx-auto' : ''
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─── section 1: promo bar ─────────────────────────────────── */
function PromoBar() {
  return (
    <div className="bg-amber-400 text-amber-950 py-2.5 px-4 text-center font-bold text-sm sm:text-base sticky top-0 z-50 shadow-md">
      <span className="inline-flex items-center gap-2">
        <Zap size={16} className="flex-shrink-0" />
        PROMOÇÃO RELÂMPAGO: desconto especial válido somente hoje
        <Zap size={16} className="flex-shrink-0" />
      </span>
    </div>
  );
}

/* ─── section 2: headline ──────────────────────────────────── */
function Headline() {
  return (
    <section className="bg-gradient-to-b from-[#6B0F11] to-[#8B1416] text-white py-16 sm:py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
          <Package size={14} />
          COMBO BEBIDAS PRO
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
          Economize tempo criando promoções profissionais para sua{' '}
          <span className="text-amber-300">adega ou distribuidora</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/85 mb-6 leading-relaxed">
          Com o Combo Bebidas Pro, você recebe artes prontas e editáveis no Canva para divulgar cervejas, combos,
          destilados, energéticos e promoções de bebidas em poucos minutos.
        </p>
      </div>
    </section>
  );
}

/* ─── section 3: mockup ────────────────────────────────────── */
function Mockup() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto flex justify-center">
        <img
          src="/images/main-mockup.webp"
          alt="Combo Bebidas Pro Mockup"
          className="w-full h-auto max-w-full rounded-2xl shadow-lg border border-gray-100"
          loading="eager"
        />
      </div>
    </section>
  );
}

/* ─── section 4: CTA inicial + selos ──────────────────────── */
function CTAInicial() {
  return (
    <section className="bg-white pb-14 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
        <button
          onClick={scrollToPlans}
          className="bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl px-8 py-4 text-lg w-full sm:w-auto transition-all duration-200 shadow-lg hover:-translate-y-0.5"
        >
          EU QUERO O COMBO BEBIDAS PRO
        </button>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
          {[
            { icon: <Shield size={18} />, label: 'Compra Segura' },
            { icon: <Shield size={18} />, label: 'Dados Protegidos' },
            { icon: <CheckCircle size={18} />, label: 'Garantia 7 dias' },
            { icon: <Clock size={18} />, label: 'Acesso Imediato' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5 bg-gray-50 rounded-xl px-3 py-3">
              <span className="text-green-600">{s.icon}</span>
              <span className="text-xs font-semibold text-gray-600 text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ─── section 6: produto por dentro — vitrine de artes ──── */
const showcaseItems = [
  '/images/product-showcase/imagem-1.webp',
  '/images/product-showcase/imagem-2.webp',
  '/images/product-showcase/imagem-3.webp',
  '/images/product-showcase/imagem-4.webp',
  '/images/product-showcase/imagem-5.webp',
  '/images/product-showcase/imagem-6.webp',
  '/images/product-showcase/imagem-7.webp',
  '/images/product-showcase/imagem-10.webp',
  '/images/product-showcase/imagem-11.webp',
  '/images/product-showcase/imagem-12.webp',
];

function ShowcaseCard({ src }: { src: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 w-full h-full">
      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

function ProdutoPorDentro() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle sub="Artes prontas para divulgar promoções de bebidas com aparência profissional, sem precisar começar do zero.">
          O que você vai encontrar dentro do Combo Bebidas Pro
        </SectionTitle>

        <InfiniteCarousel aspect="story" itemWidth={200} gap={16}>
          {showcaseItems.map((src) => (
            <ShowcaseCard key={src} src={src} />
          ))}
        </InfiniteCarousel>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2.5">
            <span className="text-amber-600 font-extrabold text-sm">+180 artes</span>
            <span className="text-amber-700/70 text-sm">como essas, todas editáveis no Canva</span>
          </div>
        </div>
      </div>
      <SectionCTA label="QUERO O COMBO BEBIDAS PRO" />
    </section>
  );
}

/* ─── section 8: datas comemorativas ──────────────────────── */
const updateImages = [
  '/images/updates/imagem-sao_joao.png',
  '/images/updates/imagem_sao_joao-2.png',
  '/images/updates/imagem_sao_joao_3.png',
  '/images/updates/imagem_sao_joao_4.png',
  '/images/updates/imagem_copa.webp',
  '/images/updates/imagem_copa-2.webp',
  '/images/updates/imagem_copa-3.webp',
  '/images/updates/imagem_copa-4.webp',
  '/images/updates/imagem_copa-5.webp',
  '/images/updates/imagem_copa-6.webp',
];

function DatasComemorativas() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-amber-400 text-amber-950 text-sm font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
            NOVIDADE!
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Nesse mês de Maio atualizamos com artes de promoção para{' '}
            <span className="text-[#7B1113]">mês de São João & Copa Do Mundo 2026</span>
          </h2>
        </div>
        <InfiniteCarousel aspect="story" itemWidth={200} gap={16}>
          {updateImages.map((src) => (
            <div key={src} className="relative rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 w-full" style={{ aspectRatio: '9 / 16' }}>
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </InfiniteCarousel>
      </div>
      <SectionCTA label="QUERO O COMBO BEBIDAS PRO" />
    </section>
  );
}

/* ─── section 9: para quem é indicado ─────────────────────── */
function ParaQuem() {
  const publicos = [
    { icon: <Users size={22} />, label: 'Donos de adegas que precisam divulgar promoções com frequência' },
    { icon: <Package size={22} />, label: 'Distribuidoras de bebidas que querem postar ofertas com aparência profissional' },
    { icon: <Star size={22} />, label: 'Bares, conveniências e mercados que vendem bebidas' },
    { icon: <Zap size={22} />, label: 'Negócios com delivery que querem chamar atenção no WhatsApp' },
    { icon: <Clock size={22} />, label: 'Empreendedores que não querem depender de designer' },
    { icon: <CheckCircle size={22} />, label: 'Quem quer economizar tempo e postar promoções mais bonitas' },
  ];

  return (
    <section className="bg-[#6B0F11] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          light
          sub="Se você vende bebidas e precisa divulgar ofertas com frequência, esse combo foi criado para facilitar sua rotina."
        >
          Para quem é indicado o Combo Bebidas Pro?
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {publicos.map((p) => (
            <div
              key={p.label}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 flex items-start gap-4"
            >
              <span className="text-amber-300 flex-shrink-0 mt-0.5">{p.icon}</span>
              <span className="text-white/90 font-medium text-sm sm:text-base leading-snug">{p.label}</span>
            </div>
          ))}
        </div>
        <SectionCTA label="GARANTIR MEU ACESSO" />
      </div>
    </section>
  );
}

const testimonialImages = [
  '/images/testimonials/depoimento-1.webp',
  '/images/testimonials/depoimento-2.webp',
  '/images/testimonials/depoimento-3.webp',
  '/images/testimonials/depoimento-4.webp',
  '/images/testimonials/depoimento-5.webp',
  '/images/testimonials/depoimento-6.webp',
  '/images/testimonials/depoimento-7.webp',
  '/images/testimonials/depoimento-8.webp',
  '/images/testimonials/depoimento-9.webp',
  '/images/testimonials/depoimento-10.webp',
  '/images/testimonials/depoimento-11.webp',
  '/images/testimonials/depoimento-12.webp',
  '/images/testimonials/depoimento-13.webp',
  '/images/testimonials/depoimento-14.webp',
  '/images/testimonials/depoimento-15.webp',
  '/images/testimonials/depoimento-16.webp',
  '/images/testimonials/depoimento-17.webp',
  '/images/testimonials/depoimento-18.webp',
];

/* ─── section 10: clientes utilizando ─────────────────────── */
function ClientesUtilizando() {
  return (
    <section className="bg-gray-50 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle sub="Modelos aplicados em negócios reais para divulgar ofertas e deixar as promoções mais profissionais.">
          Veja alguns clientes que já utilizaram nosso combo
        </SectionTitle>
        <div className="mt-8">
          <InfiniteCarousel aspect="testimonial" itemWidth={200} gap={16}>
            {testimonialImages.map((src) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 w-full h-full bg-white">
                <img src={src} alt="" className="w-full h-full object-contain" loading="lazy" />
              </div>
            ))}
          </InfiniteCarousel>
        </div>
      </div>
      <SectionCTA label="QUERO O COMBO BEBIDAS PRO" />
    </section>
  );
}

/* ─── section 12: bônus — carrossel quadrado 1:1 ──────────── */

interface BonusData {
  num: string;
  label: string;
  qty: string;
  from: string;
  image?: string;
}

const bonusData: BonusData[] = [
  { num: '01', label: 'Artes Destiladas', qty: '+55 artes', from: 'R$34,90', image: '/images/bonus/ChatGPT_Image_17_de_jun._de_2026,_23_32_59.png' },
  { num: '02', label: 'Drink Mansão Maromba', qty: '+55 artes', from: 'R$34,90', image: '/images/bonus/ChatGPT_Image_17_de_jun._de_2026,_23_37_20.png' },
  { num: '03', label: 'Combinações de Artes', qty: '+45 artes', from: 'R$34,90', image: '/images/bonus/ChatGPT_Image_17_de_jun._de_2026,_23_42_59.png' },
  { num: '04', label: 'Artes ICES', qty: '+35 artes', from: 'R$34,90', image: '/images/bonus/ChatGPT_Image_17_de_jun._de_2026,_23_47_54.png' },
  { num: '05', label: 'Artes Energéticas', qty: '+28 artes', from: 'R$34,90', image: '/images/bonus/ChatGPT_Image_17_de_jun._de_2026,_23_53_40.png' },
  { num: '06', label: 'Atualizações para Datas Comemorativas', qty: 'Vitalício', from: 'R$34,90', image: '/images/bonus/mockup-bonus.webp' },
];

function BonusCard({ bonus }: { bonus: BonusData }) {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#1A0A0A]">
      {/* background: product photo or dark gradient */}
      {bonus.image ? (
        <img
          src={bonus.image}
          alt={bonus.label}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A0A] to-[#2D0B0E] flex items-center justify-center">
          <ImageIcon size={32} className="text-white/15" />
        </div>
      )}

      {/* full-card gradient: dark top strip + strong dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

      {/* badge — top */}
      <div className="absolute top-3 left-0 right-0 z-10 flex justify-center">
        <span className="bg-amber-400 text-amber-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
          BÔNUS {bonus.num}
        </span>
      </div>

      {/* info overlay — bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-3 pb-3 pt-6 text-center bg-gradient-to-t from-black/95 to-transparent">
        <p className="text-white font-extrabold text-sm leading-tight">{bonus.qty} {bonus.label}</p>
        <p className="text-white/50 text-[11px] line-through mt-1">De {bonus.from}</p>
        <p className="text-green-400 font-extrabold text-base leading-tight">Por R$0,00</p>
        <p className="text-amber-300 text-[10px] font-semibold leading-snug mt-0.5">
          Incluso no Combo Bebidas Pro
        </p>
      </div>
    </div>
  );
}

function Bonus() {
  return (
    <section className="bg-[#1A0A0A] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          light
          sub="Além das artes principais, você ainda recebe materiais extras para divulgar outros tipos de bebidas e promoções."
        >
          Confira os bônus exclusivos do Combo Bebidas Pro
        </SectionTitle>

        <InfiniteCarousel aspect="square" itemWidth={240}>
          {bonusData.map((b) => (
            <BonusCard key={b.num} bonus={b} />
          ))}
        </InfiniteCarousel>

      </div>
      <SectionCTA label="QUERO O COMBO BEBIDAS PRO" />
    </section>
  );
}

/* ─── section 13: planos ───────────────────────────────────── */
function Planos() {
  const startIncludes = ['50 Artes de Cervejas Editáveis no Canva', 'Acesso vitalício'];

  const proIncludes = [
    '+180 Artes de Cervejas Editáveis no Canva',
    'Acesso vitalício',
    '7 Dias de Garantia',
    'Economia de Tempo',
  ];

  const proBonuses = [
    { num: '01', label: '+55 Artes Destiladas' },
    { num: '02', label: '+55 Artes Drink Mansão Maromba' },
    { num: '03', label: '+45 Combinações de Artes' },
    { num: '04', label: '+35 Artes ICES' },
    { num: '05', label: '+28 Artes Energéticas' },
    { num: '06', label: 'Atualizações p/ datas comemorativas' },
  ];

  return (
    <section id="planos" className="bg-gray-50 py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle sub="Comece com o pacote básico ou tenha acesso ao combo completo com artes, bônus e atualizações.">
          Escolha o melhor plano para o seu negócio
        </SectionTitle>

        <div className="grid sm:grid-cols-2 gap-5 items-start">
          {/* Plano Start */}
          <div className="bg-white rounded-3xl border border-gray-200 p-7 shadow-sm">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Adega Start</div>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-extrabold text-gray-900">R$14,90</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Ideal para quem quer começar com artes prontas para divulgar promoções de cervejas.
            </p>
            <ul className="space-y-3 mb-7">
              {startIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={17} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://pay.wiapy.com/6a34addd429e4f28412e259d"
              className="block text-center w-full py-3.5 rounded-xl border-2 border-gray-800 text-gray-800 font-bold text-sm hover:bg-gray-800 hover:text-white transition-colors duration-200"
            >
              QUERO O PLANO START
            </a>
          </div>

          {/* Plano Pro */}
          <div className="relative sm:scale-[1.03] sm:z-10 transition-transform">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 opacity-70 blur-sm" />
            <div className="relative bg-[#6B0F11] rounded-3xl overflow-hidden shadow-2xl">
              {/* Top banner */}
              <div className="bg-amber-400 text-amber-950 text-xs font-extrabold text-center py-2 uppercase tracking-widest">
                ★ MELHOR ESCOLHA — MAIS VENDIDO ★
              </div>
              <div className="p-7">
                <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-1">Combo Bebidas Pro</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-white">R$24,90</span>
                </div>
                <p className="text-sm text-white/75 mb-6">
                  O plano mais completo para adegas, distribuidoras, bares e negócios de bebidas.
                </p>
                <ul className="space-y-2.5 mb-4">
                  {proIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-amber-300 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* bonus list with price anchoring */}
                <div className="bg-white/5 border border-amber-400/20 rounded-2xl px-4 py-3 mb-3 space-y-2">
                  {proBonuses.map((b) => (
                    <div key={b.num} className="flex items-start gap-2">
                      <span className="text-amber-300 flex-shrink-0 text-sm leading-tight">🎁</span>
                      <div className="min-w-0">
                        <span className="text-white/90 text-xs font-semibold">Bônus {b.num}: {b.label}</span>
                        <span className="text-white/40 text-xs"> — </span>
                        <span className="text-white/40 text-xs line-through">De R$34,90</span>
                        <span className="text-green-400 text-xs font-bold"> por R$0,00</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-amber-300/80 text-xs text-center mb-5 leading-snug">
                  Todos os bônus acima saem gratuitamente ao escolher o Combo Bebidas Pro.
                </p>

                <a
                  href="https://pay.wiapy.com/6a34a5fbda80fafc34fa82b2"
                  className="block text-center w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 active:bg-green-600 text-white font-extrabold text-base transition-all duration-200 shadow-lg shadow-black/40 hover:-translate-y-0.5"
                >
                  QUERO O COMBO BEBIDAS PRO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── section 14: garantia ────────────────────────────────── */
function Garantia() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-50 border-4 border-green-100 mb-6">
          <Award size={40} className="text-green-600" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Garantia incondicional de 7 dias</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Você pode acessar o material, conferir as artes e testar com tranquilidade. Se dentro de 7 dias você entender
          que o Combo Bebidas Pro não é para você, basta solicitar o reembolso conforme as regras da plataforma.
        </p>
      </div>
      <SectionCTA label="QUERO O COMBO BEBIDAS PRO" />
    </section>
  );
}



/* ─── section 16: FAQ ──────────────────────────────────────── */
const faqItems = [
  {
    q: 'Preciso saber design para editar as artes?',
    a: 'Não. As artes são editáveis no Canva. Você só precisa trocar informações como preço, logo, contato e endereço.',
  },
  {
    q: 'Preciso pagar Canva Pro?',
    a: 'Não necessariamente. Os modelos são feitos para serem editados no Canva. Caso algum elemento seja Pro, ele pode ser substituído por um gratuito.',
  },
  {
    q: 'Recebo acesso na hora?',
    a: 'Sim. Após a confirmação da compra, você recebe as instruções de acesso ao material.',
  },
  {
    q: 'Posso colocar minha logo?',
    a: 'Sim. As artes são editáveis e você pode inserir sua logo, telefone, endereço e informações da sua loja.',
  },
  {
    q: 'Serve para distribuidora, bar e conveniência?',
    a: 'Sim. O material serve para adegas, distribuidoras, bares, conveniências, mercados, delivery de bebidas e negócios que vendem bebidas.',
  },
  {
    q: 'Qual a diferença entre o plano Start e o Combo Bebidas Pro?',
    a: 'O plano Adega Start inclui 50 artes de cervejas e acesso vitalício. O Combo Bebidas Pro é mais completo, com +180 artes, bônus, garantia e atualizações para datas comemorativas.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. O Combo Bebidas Pro possui garantia de 7 dias.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

function FAQ() {
  return (
    <section className="bg-gray-50 py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── section 17: CTA final ────────────────────────────────── */
function CTAFinal() {
  return (
    <section className="bg-gradient-to-b from-[#6B0F11] to-[#4A0A0B] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Pronto para divulgar promoções mais profissionais no seu negócio?
        </h2>
        <p className="text-white/75 mb-8 text-base sm:text-lg">
          Escolha seu plano, acesse as artes, edite no Canva e comece a postar promoções com aparência profissional
          ainda hoje.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToPlans}
            className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-extrabold text-base rounded-xl transition-all duration-200 shadow-xl shadow-green-900/30 hover:-translate-y-0.5"
          >
            QUERO O COMBO BEBIDAS PRO
          </button>
          <button
            onClick={scrollToPlans}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-xl border border-white/25 transition-all duration-200"
          >
            QUERO COMEÇAR COM O ADEGA START
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── footer ───────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#1A0A0A] py-6 px-4 text-center text-white/40 text-xs">
      <p>© 2024 Combo Bebidas Pro. Todos os direitos reservados.</p>
      <p className="mt-1">Produto digital — Artes editáveis no Canva para negócios de bebidas.</p>
    </footer>
  );
}

/* ─── app root ─────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="font-['Inter',sans-serif] antialiased">
      <PromoBar />
      <Headline />
      <Mockup />
      <CTAInicial />
      <ProdutoPorDentro />
      <DatasComemorativas />
      <ParaQuem />
      <ClientesUtilizando />
      <Bonus />
      <Planos />
      <Garantia />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
}
