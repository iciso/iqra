'use client';

import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, Trophy, BookOpen, Heart, Laugh, Users, User, Laptop, History, 
  ThumbsUp, Smile, ArrowDown, MessageSquare, AlertCircle, Award  
} from 'lucide-react';

const JoyPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Animation styles with proper React.CSSProperties typing
  const animationStyles: Record<string, React.CSSProperties> = {
    blink: {
      animation: 'blink 1s step-end infinite',
      display: 'inline-block'
    },
    pulse: {
      animation: 'pulse 1s ease-in-out infinite',
      display: 'inline-block'
    },
    tinRightOut: {
      animation: 'tinRightOut 3s ease-in-out infinite',
      display: 'inline-block'
    },
    tinUpOut: {
      animation: 'tinUpOut 3s ease-in-out infinite',
      display: 'inline-block'
    },
    wrench: {
      animation: 'wrench 3s ease-in-out infinite',
      display: 'inline-block'
    },
    burst: {
      animation: 'burst 3s ease-in-out infinite',
      display: 'inline-block'
    },
    spin: {
      animation: 'spin 3s linear infinite',
      display: 'inline-block'
    }
  };

  useEffect(() => {
    setIsMounted(true);
    
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.5; }
        50% { transform: scale(1.2); opacity: 1; }
      }
      @keyframes tinRightOut {
        0%, 20%, 40%, 50% { opacity: 1; transform: scale(1, 1) translateX(0); }
        10%, 30% { transform: scale(1.1, 1.1) translateX(0); }
        100% { opacity: 0; transform: scale(1, 1) translateX(900%); }
      }
      @keyframes tinUpOut {
        0%, 20%, 40%, 50% { opacity: 1; transform: scale(1, 1) translateY(0); }
        10%, 30% { transform: scale(1.1, 1.1) translateY(0); }
        100% { opacity: 0; transform: scale(1, 1) translateY(-900%); }
      }
      @keyframes wrench {
        0 { transform: rotate(-12deg); }
        8% { transform: rotate(12deg); }
        10% { transform: rotate(24deg); }
        18% { transform: rotate(-24deg); }
        20% { transform: rotate(-24deg); }
        28% { transform: rotate(24deg); }
        30% { transform: rotate(24deg); }
        38% { transform: rotate(-24deg); }
        40% { transform: rotate(-24deg); }
        48% { transform: rotate(24deg); }
        50% { transform: rotate(24deg); }
        58% { transform: rotate(-24deg); }
        60% { transform: rotate(-24deg); }
        68% { transform: rotate(24deg); }
        75%, 100% { transform: rotate(0); }
      }
      @keyframes burst {
        0 { opacity: .6; }
        50% { transform: scale(1.8); opacity: 0; }
        100% { opacity: 0; }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleElement);

    const handleScroll = () => {
      const backToTop = document.getElementById('back2Top');
      if (backToTop) {
        backToTop.style.display = window.pageYOffset > 300 ? 'block' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(styleElement);
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="h-screen flex items-center justify-center">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">
          Challenge <Trophy style={animationStyles.wrench} size={24} color="green" /> or 
          Play <Gamepad2 style={animationStyles.blink} size={24} color="indigo" /> with our{' '}
          <Heart style={{display: 'inline-block'}} size={24} color="red" fill="red" />{' '}
          <span className="text-green-600"> IQRA</span> &amp;{' '}
          <span className="text-blue-600">KALAM</span>{' '}Apps.
        </h1>
      </header>

      {/* Process 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Process 1: What do IQRA & KALAM players want?
        </h2>

        <div className="bg-blue-100 p-4 rounded-lg text-center mb-4">
          <p className="text-blue-800 font-medium inline-flex items-center">
            <Trophy style={animationStyles.tinRightOut} size={24} color="green" />
            <span className="ml-2">Want to challenge and learn nuances of Islam quickly!</span>
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <ArrowDown style={{display: 'block', margin: '0 auto'}} />
          </div>
          <div className="text-center">
            <ArrowDown style={{display: 'block', margin: '0 auto'}} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Yes Path */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              Yes! <br /> We take to IQRA!
            </button>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 inline-flex items-center">
                Hurrah! <Laugh style={animationStyles.wrench} size={24} color="crimson" className="ml-2" /> 
                <span>Go to Process 2.</span>
              </p>
            </div>
          </div>

          {/* No Path */}
          <div className="text-center">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              No! <br /> We want to play in KALAM!
            </button>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-blue-100 p-4 rounded-lg mb-4">
              <p className="text-blue-800 inline-flex items-center">
                <Gamepad2 style={animationStyles.pulse} size={24} color="green" />
                <span className="ml-2">Do we want to save our progress in KALAM?</span>
              </p>
            </div>

            <div className="flex justify-center space-x-8 mb-4">
              <ArrowDown style={{display: 'block', margin: '0 auto'}} />
              <ArrowDown style={{display: 'block', margin: '0 auto'}} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Yes Sub-path */}
              <div className="text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  Yes
                </button>
                <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-2" />
                <div className="bg-green-100 p-2 rounded-lg">
                  <p className="text-green-800 text-sm inline-flex items-center">
                    <Users style={animationStyles.tinUpOut} size={36} color="black" />
                    <span>Okay! We challenge in IQRA & learn. We proceed to step 2.</span>
                  </p>
                </div>
              </div>

              {/* No Sub-path */}
              <div className="text-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  No
                </button>
                <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-2" />
                <div className="bg-red-100 p-2 rounded-lg">
                  <p className="text-red-800 text-sm inline-flex items-center">
                    <span>We will play KALAM games and wait to challenge in IQRA</span>
                    <Gamepad2 style={animationStyles.burst} size={36} color="black" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Process 2: Challenge our friends in{' '}
          <Trophy style={animationStyles.blink} size={20} color="blue" /> IQRA & learn from its Infographcis.
        </h2>

        <div className="bg-blue-100 p-4 rounded-lg text-center mb-4">
          <p className="text-blue-800 font-medium inline-flex items-center">
            <Award style={animationStyles.tinUpOut} size={24} color="green" />
            <span className="ml-2">IQRA has Leaderboards and badges</span>
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <ArrowDown style={{display: 'block', margin: '0 auto'}} />
          <ArrowDown style={{display: 'block', margin: '0 auto'}} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teams Path */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              IQRA Coders form Teams <Users style={{display: 'inline-block'}} size={24} color="white" className="ml-2" />
            </button>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-green-800 inline-flex items-center">
                <Users style={{color: 'gold', display: 'inline-block'}} size={24} />
                <span>IQRA Challengers learn quickly all the 12 themes in Islam</span>
              </p>
            </div>

            <div className="flex justify-center space-x-8 mb-4">
              <ArrowDown style={{display: 'block', margin: '0 auto'}} />
              <ArrowDown style={{display: 'block', margin: '0 auto'}} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Yes Sub-path */}
              <div className="text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  Yes!
                </button>
                <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-2" />
                <div className="bg-green-100 p-2 rounded-lg">
                  <p className="text-green-800 text-sm inline-flex items-center">
                    <span>Many IQRA players form buddy teams and top the Leaderboard.</span>
                    <History style={animationStyles.blink} size={36} color="blue" />
                  </p>
                </div>
              </div>

              {/* No Sub-path */}
              <div className="text-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  No
                </button>
                <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-2" />
                <div className="bg-red-100 p-2 rounded-lg">
                  <p className="text-red-800 text-sm inline-flex items-center">
                    <span>KALAM players play and learn the Kalam of Allah slowly.</span>
                    <AlertCircle style={{display: 'inline-block'}} size={36} color="red" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Path */}
          <div className="text-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mb-4">
              KALAM players give feedback on <Gamepad2 style={animationStyles.burst} size={24} color="black" /> Games?
            </button>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-green-800 inline-flex items-center">
                <MessageSquare style={animationStyles.wrench} size={24} color="indigo" />
                <span>Okay! Rafique acts on feedback</span>
              </p>
            </div>
            <ArrowDown style={{display: 'block', margin: '0 auto'}} className="mb-4" />
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-green-800 inline-flex items-center">
                <Laugh style={animationStyles.spin} size={24} color="crimson" />
                <span>KALAM and IQRA have uniquely updated Games, Challenges and Infographics!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t pt-6">
        <p className="italic">
          All of us <User style={animationStyles.pulse} size={24} color="blue" /> Muslims have been in Islam for a long time. Who knows, 
          Insha Allah, maybe a life time! And, each one of us can do our bit for our Deen{' '}
          <ThumbsUp style={{display: 'inline-block'}} size={24} color="purple" /> For a start, we can share the links of IQRA and KALAM
          among our families, friends , and communities, <Gamepad2 style={animationStyles.burst} size={24} color="black" /> or if you have more
          time to spare, please call Rafique and tell him what you would like to do! IQRA and KALAM as freeware and opensource are just demos{' '}
          <Smile style={animationStyles.wrench} size={24} color="crimson" /> of what Rafique could do!
        </p>
      </section>

        <section>
         <div className="flex justify-center mt-8">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        </section>
    
         {/* Footer */}
        <footer>
        <div className="border-t border-gray-200 p-4 text-center text-sm text-gray-700 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 w-full mt-8 rounded-lg">
  <div className="flex items-center justify-center mb-1">
    <MessageSquare className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
    <span>
      For suggestions WhatsApp{" "}
      <a
        href="https://cvemrafi.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 underline"
      >
        Rafique
      </a>{" "}
      at +91 7558845528
    </span>
  </div>
  <div className="flex items-center justify-center">
    <svg viewBox="0 0 496.08 512" className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400">
      <path
        fill="currentColor"
        d="M245.83 214.87l-33.22 17.28c-9.43-19.58-25.24-19.93-27.46-19.93-22.13 0-33.22 14.61-33.22 43.84 0 23.57 9.21 43.84 33.22 43.84 14.47 0 24.65-7.09 30.57-21.26l30.55 15.5c-6.17 11.51-25.69 38.98-65.1 38.98-22.6 0-73.96-10.32-73.96-77.05 0-58.69 43-77.06 72.63-77.06 30.72-.01 52.7 11.95 65.99 35.86zm143.05 0l-32.78 17.28c-9.5-19.77-25.72-19.93-27.9-19.93-22.14 0-33.22 14.61-33.22 43.84 0 23.55 9.23 43.84 33.22 43.84 14.45 0 24.65-7.09 30.54-21.26l31 15.5c-2.1 3.75-21.39 38.98-65.09 38.98-22.69 0-73.96-9.87-73.96-77.05 0-58.67 42.97-77.06 72.63-77.06 30.71-.01 52.58 11.95 65.56 35.86zM247.56 8.05C104.74 8.05 0 123.11 0 256.05c0 138.49 113.6 248 247.56 248 129.93 0 248.44-100.87 248.44-248 0-137.87-106.62-248-248.44-248zm.87 450.81c-112.54 0-203.7-93.04-203.7-202.81 0-105.42 85.43-203.27 203.72-203.27 112.53 0 202.82 89.46 202.82 203.26-.01 121.69-99.68 202.82-202.84 202.82z"
      />
    </svg>
    <span>
      <a
        href="https://creativecommons.org/licenses/by/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 underline"
      >
        License 4.0
      </a>{" "}
      • Iqra 💡 Team
    </span>
  </div>
</div>
</div> 
<footer/>
 

      {/* Back to Top Button */}
      <a
        href="#"
        id="back2Top"
        title="Back to top"
        style={{
          position: 'fixed',
          display: 'none',
          bottom: '50px',
          right: '0',
          backgroundColor: '#DDD',
          color: '#555',
          textAlign: 'center',
          width: '40px',
          height: '40px',
          lineHeight: '40px',
          textDecoration: 'none',
          borderRadius: '4px 0 0 4px'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#DDF';
          e.currentTarget.style.color = '#000';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#DDD';
          e.currentTarget.style.color = '#555';
        }}
      >
        ↑
      </a>
    </div>
  );
};

export default JoyPage;
