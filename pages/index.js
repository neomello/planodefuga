import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import avatarStyles from '../styles/avatargamer.module.css'

export default function Home() {
  const lastChanceRef = useRef(null);
  const mentorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMentorVisible, setIsMentorVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (lastChanceRef.current) {
      observer.observe(lastChanceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMentorVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (mentorRef.current) {
      observer.observe(mentorRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
      <>
          <Head>
            <title>Plano de Fuga | Central de Fugas</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:image" content="/img/frase_expert.png" />
          </Head>
          <div className="bg-black text-white font-sans">
            {/* Hero Section */}
            <section className={`text-center py-20 px-6 relative`}>
              <div className="relative z-10">
                <img 
                  src="/img/autor.png" 
                  alt="Foto do autor" 
                  className={`mx-auto mb-10 rounded-xl shadow-lg w-full md:w-[900px]`} 
                />
                <p className="text-xl text-yellow-800 md:text-2xl mb-8 animate-fade-in">
                  Esse não é um e-book. É o início do seu Plano de Fuga – um jogo real, onde cada fase te leva mais perto de uma vida com sentido.
                </p>
                
                <p className={`text-xl text-yellow-400 md:text-2xl mb-3`}>
                  Missão Ativada: Reconhecer a prisão. Escolher a liberdade.
                </p>
                
                <Link
                    href="/produto"
                    className={`mt-6 inline-block`}
                    legacyBehavior>
                  <img 
                    src="/img/acessar_plano_livro.png" 
                    alt="Quero meu Plano de Fuga" 
                    className="mx-auto w-64 md:w-72 transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg" 
                  />
                </Link>
                
                <p className="text-lg text-yellow-800 font-italic mt-4">
                  A cela é mental. A fuga é estratégica.
                </p>
              </div>

              {/* Elementos flutuantes decorativos */}
              <div className={`absolute top-10 left-10`}>
                <img src="/img/game-icon-1.svg" alt="Ícone de jogo" className="w-16 opacity-50" />
              </div>
              <div className={`absolute bottom-10 right-10`}>
                <img src="/img/game-icon-2.svg" alt="Ícone de jogo" className="w-16 opacity-50" />
              </div>
            </section>

            
            {/* Game Sections */}
            <section className={`text-center py-20 px-6 relative ${avatarStyles.gamePhasesSection}`}>
                <div className="relative group mx-auto max-w-2xl h-auto md:h-[200px]">
                    <img 
                        src="img/fases.png" 
                        alt="Quadro de Escolha de Fases" 
                        className="w-full h-[200px] object-contain transition-all duration-300 cursor-pointer group-hover:scale-105" 
                    /> 
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                </div>

                <div ref={mentorRef} className="relative p-2 md:p-8 mx-auto my-7 max-w-3xl bg-black/70 backdrop-blur-md border border-yellow-500/30 rounded-2xl shadow-lg shadow-yellow-500/10 overflow-hidden">
                    <div className="relative p-4 md:p-6 bg-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-xl mb-4">
                        <div className={`font-mono text-green-500 overflow-hidden border-r-2 border-green-500 ${isMentorVisible ? 'animate-typing animate-blink-caret' : ''} relative z-10 text-sm md:text-base`}>
                            <div className="whitespace-normal text-left w-full">
                                <p className="mb-2">
                                    <span className="inline-block">O Livro que te mostra qual pode ser a </span>
                                    <span className="text-cyan-400 animate-glow inline-block">&nbsp;porta&nbsp;</span>
                                    <span className="inline-block"> que te tira da </span>
                                </p>
                                <p>
                                    <span className="line-through text-red-400 inline-block">zona de conforto</span>
                                    <span className="inline-block"> e te leva para o </span>
                                    <span className="text-yellow-400 animate-pulse inline-block">&nbsp;plano de fuga&nbsp;</span>
                                </p>
                            </div>
                        </div>
                        <img 
                            src="img/avata_tidi_gamer.png" 
                            alt="Avatar do Mentor" 
                            className="absolute -bottom-8 right-5 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-yellow-500/50 animate-float"
                        />
                    </div>
                    <div className="absolute -inset-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-holographic pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent animate-shine pointer-events-none"></div>
                </div>
            </section>

            
            {/* Livro Section */}
            <section className="py-16 px-6 text-center">
                <div className={avatarStyles.unlockMessage}>
                    Você chegou até aqui. Está pronto para desbloquear o conhecimento proibido?
                </div>
                
                <div className={`mt-20 ${avatarStyles.bookContainer}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full">
                        <div className="justify-self-center md:justify-self-start">
                            <Link 
                                href="/produto" 
                                legacyBehavior passHref
                            >
                                <a className="inline-block text-black px-10 py-1 rounded-lg font-bold group relative">
                                    <div className="absolute -inset-1 bg-yellow-800/30 rounded-lg blur-lg group-hover:bg-yellow-500/50 transition-all duration-300"></div>
                                    <div className="relative">
                                        <img 
                                            src="/img/botton.png" 
                                            alt="Quero meu Plano de Fuga" 
                                            className="w-52 md:w-[320px] transform group-hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="justify-self-center md:justify-self-end">
                            <div className="flex flex-col items-center w-60 md:w-[320px] animate-float flex-shrink-0 z-0">
                                <div className={`py-16 ${avatarStyles.bookBadge}`}>
                                    <span className={avatarStyles.icon}>📘</span>
                                    <span>Essencial</span>
                                    <div className={avatarStyles.category}>Despertar</div>
                                </div>
                                <img 
                                    src="/img/livro-mockup.png" 
                                    alt="Mockup do Livro" 
                                    className={`mx-auto w-full ${avatarStyles.bookGlow}`} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="inline-block px-15 py-3 bg-black/70 backdrop-blur-sm border border-yellow-500/30 rounded-xl">
                            <p className="text-sm text-gray-400 uppercase tracking-widest">
                                Missão desbloqueada:
                            </p>
                            <p className="text-sm text-gray-400 uppercase tracking-widest">
                                Clique acima para ver a fase
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Last chance */}
            <section 
                ref={lastChanceRef}
                className={`py-2 px-6 text-center relative overflow-hidden ${avatarStyles.missionContainer}`}
                style={{
                    backgroundImage: 'url("img/bkg_expert.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            > 
                {/* Overlay com opacidade controlável */}
                <div className="absolute inset-0 bg-black/75"></div>
                
                <div className="mt-5 pt-16 relative z-10">
                    <div className="relative max-w-md mx-auto">
                        <img src="img/Quadro.png" alt="Quadro" className="w-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-white font-mono text-xl md:text-2xl">
                                    <div className={`overflow-hidden whitespace-nowrap border-r-2 border-green-500 opacity-0 ${isVisible ? 'animate-typing' : ''} [animation-fill-mode:forwards] [animation-delay:0s]`}>
                                        Liberdade se conquista
                                    </div>
                                    <div className={`overflow-hidden whitespace-nowrap border-r-2 border-green-500 opacity-0 ${isVisible ? 'animate-typing' : ''} [animation-delay:1s] [animation-fill-mode:forwards]`}>
                                        com plano, mapas e coragem.
                                    </div>
                                    <div className={`overflow-hidden whitespace-nowrap border-r-2 border-green-500 opacity-0 ${isVisible ? 'animate-typing' : ''} [animation-delay:2s] [animation-fill-mode:forwards]`}>
                                        Você tem algum deles?
                                    </div>
                                    <div className={`overflow-hidden whitespace-nowrap border-r-2 border-green-500 opacity-0 ${isVisible ? 'animate-typing' : ''} [animation-delay:3s] [animation-fill-mode:forwards]`}>
                                        <span className="text-green-500">
                                            Tidilodo<span className="animate-blink">_</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>

            {/* Botão extra antes do Footer */}
            <div className="flex justify-center my-10">
                <Link href="/produto" legacyBehavior>
                    <div className="inline-block text-black px-10 py-1 rounded-lg font-bold group relative">
                        <div className="absolute -inset-1 bg-yellow-800/30 rounded-lg blur-lg group-hover:bg-yellow-500/50 transition-all duration-300"></div>
                        <div className="relative">
                            <img 
                                src="/img/botton.png" 
                                alt="Quero meu Plano de Fuga" 
                                className="w-52 md:w-[220px] transform group-hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                    </div>
                </Link>
            </div>

            {/* Footer */}
            <footer className="relative py-10 text-gray-400 text-sm">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="flex flex-col items-center text-center space-y-6">
                        {/* Conteúdo Principal */}
                        <div className="space-y-4">
                            <img src="img/ico_white.png" alt="Ícone" className="w-16 mx-auto mb-4" />
                            <p className="text-white/80 leading-relaxed">
                                Essa página é só o começo.<br/> Se você chegou até aqui,<br/> algo dentro de você <br/>já começou a querer mudar.
                            </p>
                            <div className="space-y-2">
                                <Link href="/produto" className="text-yellow-400 hover:underline inline-block">
                                    Comprar o Livro
                                </Link>
                                <a 
                                    href="https://www.instagram.com/planode.fuga/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-yellow-400 hover:underline block"
                                >
                                    IG - @planode.fuga
                                </a>
                                <p>
                                    Projeto por <a 
                                        href="https://www.instagram.com/tidilodo/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-yellow-400 hover:underline"
                                    >
                                        @tidilodo
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Checkpoint Visual */}
                        <div className="w-full pt-8 border-t border-gray-800">
                            <div className="flex items-center justify-center gap-4">
                                <div className="text-yellow-400/50">//////////</div>
                                <h3 className="text-yellow-400 font-bold animate-pulse">
                                    A FUGA CONTINUA
                                </h3>
                                <div className="text-yellow-400/50">//////////</div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="text-center">
                            {new Date().getFullYear()} © Central de Fugas · Todos os direitos reservados Desenvolvido por <span className="font-semibold text-white">FlowOFF</span>
                        </div>
                    </div>
                </div>
            </footer>

            <div style={{
              position: 'absolute',
              top: '15%',
              left: '20%',
              transform: 'translateX(-50%)',
              width: '100%',
              height: '5%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              zIndex: 20
            }}>
              <span className="text-gray-800 text-xl md:text-2xl font-semibold px-6 py-3 shadow-text animate-float">
                © CENTRAL DE FUGAS
              </span>
            </div>
          </div>
      </>
  );
}