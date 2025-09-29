/*
JLTech Solutions - Template institucional (React + Tailwind)
-------------------------------------------------------
Arquivo: src/components/JLTechSolutionsTemplate.jsx
Descrição: Template one-page responsivo para empresa de tecnologia.
Requisitos:
 - Tailwind CSS (v3+ ou v4) configurado no projeto
 - React 18+
 - Coloque este componente dentro de uma página (App.jsx / pages/index.jsx)

O componente tem:
 - Navbar responsiva
 - Hero com CTA
 - Seção de serviços (cards)
 - Seção de features / diferenciais
 - Preview de blog (posts fictícios)
 - Depoimentos
 - Formulário de contato (simples, sem envio real)
 - Footer com links

Como usar rapidamente:
 1. Copie o arquivo para src/components/JLTechSolutionsTemplate.jsx
 2. Importe no seu App: `import JLTechSolutionsTemplate from './components/JLTechSolutionsTemplate'`
 3. Renderize: `<JLTechSolutionsTemplate />`
 4. Ajuste cores, textos e imagens conforme sua marca.

Observações:
 - Está implementado com classes Tailwind; se você usa Next.js/CRA/Vite e já tem Tailwind habilitado vai funcionar direto.
 - Ícones são SVG inline para evitar dependências.
 - Troque imagens de placeholder por suas imagens reais.
*/

import React, { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Desenvolvimento Web sob medida',
    description: 'Sites, aplicações e dashboards escaláveis usando as melhores práticas.',
  },
  {
    id: 2,
    title: 'Integração e APIs',
    description: 'Conectamos serviços, automações e plataformas com segurança e performance.',
  },
  {
    id: 3,
    title: 'Consultoria de UX/UI',
    description: 'Design centrado no usuário para aumentar conversões e retenção.',
  },
];

const posts = [
  {
    id: 1,
    title: 'Como escalar sua arquitetura React',
    excerpt: 'Princípios e padrões para manter performance em apps grandes.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    title: 'Boas práticas em APIs REST e GraphQL',
    excerpt: 'Como desenhar APIs seguras e fáceis de manter.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    title: 'Design system: por onde começar?',
    excerpt: 'Estruture componentes reutilizáveis e acelere entregas.',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=60',
  },
];

export default function JLTechSolutionsTemplate() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Aqui você pode conectar ao seu backend / serviço de e-mail (ex: Netlify Forms, Formspree, API própria)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      {/* NAV */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">JL</div>
            <div>
              <h1 className="text-lg font-semibold">JLTech Solutions</h1>
              <p className="text-xs text-slate-500">Inovação que entrega resultados</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-indigo-600">Serviços</a>
            <a href="#work" className="hover:text-indigo-600">Cases</a>
            <a href="#blog" className="hover:text-indigo-600">Blog</a>
            <a href="#contact" className="hover:text-indigo-600">Contato</a>
            <a href="#" className="ml-2 inline-block px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Solicitar proposta</a>
          </nav>

          <div className="md:hidden">
            {/* Mobile simple menu - for demo it's static */}
            <button aria-label="open menu" className="inline-flex items-center justify-center p-2 rounded-md border">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Transformando ideias em <span className="text-indigo-600">experiências digitais</span></h2>
          <p className="mt-4 text-lg text-slate-600">Construímos produtos digitais com foco em resultados: usabilidade, performance e escalabilidade. Acelere seu projeto com um time que entende tecnologia e negócio.</p>

          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium">Fale com a gente</a>
            <a href="#services" className="px-6 py-3 rounded-md border border-slate-200 text-sm">Nossos serviços</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-500">
            <div>
              <strong className="block text-slate-900">+50</strong>
              Projetos entregues
            </div>
            <div>
              <strong className="block text-slate-900">SLA 99.9%</strong>
              Disponibilidade média
            </div>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=60" alt="Equipe de tecnologia" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold">Nossos serviços</h3>
        <p className="text-slate-600 mt-2">Soluções completas para todas as fases do ciclo de produto digital.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => (
            <article key={s.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M2 12h20" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
              <a href="#contact" className="mt-4 inline-block text-indigo-600 text-sm">Quero saber mais →</a>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white border-t py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6">
            <h4 className="text-lg font-semibold">Arquitetura escalável</h4>
            <p className="mt-2 text-sm text-slate-600">Projetos pensados para crescer: micro frontends, serverless e boas práticas de CI/CD.</p>
          </div>
          <div className="p-6">
            <h4 className="text-lg font-semibold">Segurança e conformidade</h4>
            <p className="mt-2 text-sm text-slate-600">Implementamos autenticação, autorização e políticas de segurança para proteger seus dados.</p>
          </div>
          <div className="p-6">
            <h4 className="text-lg font-semibold">Foco em ROI</h4>
            <p className="mt-2 text-sm text-slate-600">Priorizamos features que entreguem valor real para o seu negócio desde o primeiro release.</p>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section id="blog" className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold">Do nosso blog</h3>
        <p className="text-slate-600 mt-2">Insights, guias e melhores práticas sobre desenvolvimento e produto.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                <a href="#" className="mt-3 inline-block text-indigo-600 text-sm">Ler mais →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold">Quer acelerar seu projeto?</h4>
            <p className="text-sm text-indigo-100 mt-1">Solicite uma proposta gratuita e descubra o melhor caminho para o seu produto.</p>
          </div>
          <div>
            <a href="#contact" className="px-5 py-3 rounded-md bg-white text-indigo-600 font-medium">Solicitar proposta</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold">Depoimentos</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <blockquote className="bg-white p-6 rounded-lg shadow-sm">"Equipe excelente — entregaram tudo no prazo e com qualidade."<cite className="block mt-4 text-sm text-slate-500">— Mariana, CEO</cite></blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-sm">"Redesenharam nossa arquitetura e melhoraram a performance em 3x."<cite className="block mt-4 text-sm text-slate-500">— João, CTO</cite></blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-sm">"Ótimo atendimento e clareza nas entregas."<cite className="block mt-4 text-sm text-slate-500">— Pedro, Product Owner</cite></blockquote>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold">Fale conosco</h3>
        <p className="text-slate-600 mt-2">Preencha o formulário e retornaremos em até 1 dia útil.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
            <label className="block text-sm">Nome</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2" required />

            <label className="block text-sm mt-4">E-mail</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2" required />

            <label className="block text-sm mt-4">Mensagem</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 h-32" required />

            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Enviar</button>
              {sent && <span className="text-sm text-green-600">Mensagem enviada — obrigado!</span>}
            </div>
          </form>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold">Escritório</h4>
            <p className="text-sm text-slate-600 mt-2">Av. Exemplo, 123 — São Paulo, SP</p>
            <p className="text-sm text-slate-600 mt-2">Email: contato@jltechsolutions.com</p>
            <p className="text-sm text-slate-600 mt-2">Telefone: (11) 99999-9999</p>

            <div className="mt-4">
              <h5 className="text-sm font-medium">Horário</h5>
              <p className="text-sm text-slate-600">Seg — Sex: 9:00 — 18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} JLTech Solutions. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-sm text-slate-600">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
