import Image from "next/image"
import { Factory, Clock, Truck, Shield, Users, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PremoldadosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Factory className="h-8 w-8" />
              <span className="text-xl font-bold">ConstruPré</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#sobre" className="hover:text-gray-300 transition">
                Sobre
              </a>
              <a href="#produtos" className="hover:text-gray-300 transition">
                Produtos
              </a>
              <a href="#vantagens" className="hover:text-gray-300 transition">
                Vantagens
              </a>
              <a href="#projetos" className="hover:text-gray-300 transition">
                Projetos
              </a>
              <a href="#contato" className="hover:text-gray-300 transition">
                Contato
              </a>
            </div>
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Construção com pré-moldados"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Soluções em Pré-Moldados de Concreto</h1>
            <p className="text-xl mb-8">
              Qualidade, rapidez e economia para sua obra. Estruturas pré-moldadas para construções industriais,
              comerciais e residenciais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                Solicitar Orçamento
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Conheça Nossos Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Quem Somos</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                A <span className="font-semibold">ConstruPré</span> é uma empresa especializada na fabricação e montagem
                de estruturas pré-moldadas de concreto, atuando no mercado há mais de 15 anos.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Nossa missão é oferecer soluções construtivas de alta qualidade, com rapidez e economia, contribuindo
                para o sucesso dos projetos de nossos clientes.
              </p>
              <p className="text-lg text-gray-700">
                Contamos com uma equipe altamente qualificada e uma moderna fábrica equipada com tecnologia de ponta
                para garantir a excelência em todos os nossos produtos e serviços.
              </p>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Por que escolher a ConstruPré?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-yellow-600">
                    <Clock size={20} />
                  </div>
                  <span>Redução no tempo de execução da obra</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-yellow-600">
                    <Shield size={20} />
                  </div>
                  <span>Garantia de qualidade e durabilidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-yellow-600">
                    <Users size={20} />
                  </div>
                  <span>Equipe especializada em todas as etapas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-yellow-600">
                    <Truck size={20} />
                  </div>
                  <span>Logística própria para entrega e montagem</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossos Produtos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-full h-48 bg-slate-200 rounded-md mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Pilares pré-moldados"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Pilares</h3>
              <p className="text-gray-700">
                Pilares pré-moldados de concreto com diferentes seções e capacidades de carga, projetados para atender
                às necessidades específicas de cada obra.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-full h-48 bg-slate-200 rounded-md mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Vigas pré-moldadas"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Vigas</h3>
              <p className="text-gray-700">
                Vigas pré-moldadas com diferentes perfis e comprimentos, ideais para vencer grandes vãos em construções
                industriais, comerciais e residenciais.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-full h-48 bg-slate-200 rounded-md mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Lajes pré-moldadas"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Lajes</h3>
              <p className="text-gray-700">
                Lajes alveolares e painéis de fechamento que proporcionam rapidez na execução, excelente acabamento e
                ótimo desempenho térmico e acústico.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-full h-48 bg-slate-200 rounded-md mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Painéis de fechamento"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Painéis de Fechamento</h3>
              <p className="text-gray-700">
                Painéis arquitetônicos e de fechamento com diferentes acabamentos e texturas, proporcionando estética e
                funcionalidade às edificações.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-full h-48 bg-slate-200 rounded-md mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Escadas pré-moldadas"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Escadas</h3>
              <p className="text-gray-700">
                Escadas pré-moldadas com diferentes configurações, proporcionando segurança, durabilidade e rápida
                instalação em diversos tipos de edificações.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-full h-48 bg-slate-200 rounded-md mb-4 overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Estruturas especiais"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Estruturas Especiais</h3>
              <p className="text-gray-700">
                Desenvolvimento de soluções personalizadas para projetos com necessidades específicas, como
                reservatórios, arquibancadas e estruturas de contenção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section id="vantagens" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Vantagens dos Pré-Moldados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-yellow-500 transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Rapidez</h3>
              <p className="text-gray-700">
                Redução significativa no tempo de execução da obra, com fabricação simultânea à preparação do terreno.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-yellow-500 transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-yellow-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Economia</h3>
              <p className="text-gray-700">
                Redução de custos com mão de obra, formas, escoramentos e desperdício de materiais no canteiro.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-yellow-500 transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Qualidade</h3>
              <p className="text-gray-700">
                Produção em ambiente controlado, garantindo maior precisão dimensional e controle de qualidade.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-yellow-500 transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-yellow-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Sustentabilidade</h3>
              <p className="text-gray-700">
                Menor geração de resíduos, redução de ruídos e poeira no canteiro, e otimização do uso de recursos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Projetos Realizados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Galpão industrial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Galpão Industrial</h3>
                <p className="text-gray-700 mb-4">
                  Estrutura completa em pré-moldados para galpão industrial de 5.000m² em São Paulo.
                </p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Área: 5.000m²</span>
                  <span>Prazo: 3 meses</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Centro logístico"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Centro Logístico</h3>
                <p className="text-gray-700 mb-4">
                  Centro de distribuição com estrutura pré-moldada, incluindo mezaninos e docas.
                </p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Área: 12.000m²</span>
                  <span>Prazo: 5 meses</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Supermercado" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Supermercado</h3>
                <p className="text-gray-700 mb-4">
                  Estrutura completa para rede de supermercados, com pilares, vigas e lajes alveolares.
                </p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Área: 3.200m²</span>
                  <span>Prazo: 2 meses</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Edifício comercial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Edifício Comercial</h3>
                <p className="text-gray-700 mb-4">
                  Edifício de 4 pavimentos com estrutura pré-moldada e painéis arquitetônicos de fechamento.
                </p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Área: 4.800m²</span>
                  <span>Prazo: 4 meses</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Estacionamento" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Estacionamento Vertical</h3>
                <p className="text-gray-700 mb-4">
                  Estrutura para estacionamento de 5 pavimentos com rampas e escadas pré-moldadas.
                </p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Área: 8.500m²</span>
                  <span>Prazo: 4 meses</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=400&width=600" alt="Escola" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Escola Municipal</h3>
                <p className="text-gray-700 mb-4">
                  Escola com 20 salas de aula, utilizando sistema construtivo pré-moldado completo.
                </p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Área: 3.800m²</span>
                  <span>Prazo: 3 meses</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button className="bg-gray-800 hover:bg-gray-900">Ver Todos os Projetos</Button>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nosso Processo</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Projeto</h3>
              <p className="text-gray-700">
                Desenvolvimento do projeto estrutural e detalhamento dos elementos pré-moldados.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Fabricação</h3>
              <p className="text-gray-700">
                Produção dos elementos em nossa fábrica com rigoroso controle de qualidade.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Transporte</h3>
              <p className="text-gray-700">
                Logística especializada para transporte seguro dos elementos até o local da obra.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Montagem</h3>
              <p className="text-gray-700">
                Instalação e montagem das estruturas por equipes especializadas com equipamentos adequados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Fale Conosco</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar orçamento</option>
                    <option value="informacoes">Informações sobre produtos</option>
                    <option value="visita">Agendar visita técnica</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                <div>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">Enviar Mensagem</Button>
                </div>
              </form>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-yellow-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Telefone</p>
                      <p className="text-gray-700">(11) 4567-8900</p>
                      <p className="text-gray-700">(11) 98765-4321</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-yellow-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-700">contato@construpre.com.br</p>
                      <p className="text-gray-700">comercial@construpre.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-yellow-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Endereço</p>
                      <p className="text-gray-700">Av. Industrial, 1500</p>
                      <p className="text-gray-700">Distrito Industrial - São Paulo/SP</p>
                      <p className="text-gray-700">CEP: 04000-000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Horário de Funcionamento</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Segunda a Sexta</span>
                    <span className="text-gray-800 font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sábado</span>
                    <span className="text-gray-800 font-medium">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Domingo e Feriados</span>
                    <span className="text-gray-800 font-medium">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Factory className="h-6 w-6" />
                <span className="text-xl font-bold">ConstruPré</span>
              </div>
              <p className="text-gray-300 mb-4">
                Soluções em pré-moldados de concreto para construções industriais, comerciais e residenciais.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-gray-300 hover:text-white transition">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-gray-300 hover:text-white transition">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#vantagens" className="text-gray-300 hover:text-white transition">
                    Vantagens
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="text-gray-300 hover:text-white transition">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-300 hover:text-white transition">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    Pilares
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    Vigas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    Lajes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    Painéis de Fechamento
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    Estruturas Especiais
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 mt-0.5 text-yellow-500" />
                  <span className="text-gray-300">(11) 4567-8900</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 mt-0.5 text-yellow-500" />
                  <span className="text-gray-300">contato@construpre.com.br</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5 text-yellow-500" />
                  <span className="text-gray-300">Av. Industrial, 1500 - São Paulo/SP</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ConstruPré. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Este site é um projeto fictício para fins educacionais.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
