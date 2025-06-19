'use client';

import Link from "next/link"
import { 
  ArrowRight, ArrowLeft, Github, Trophy, MessageSquare 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { IqraLogo } from "@/components/iqra-logo"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="mb-12">
        <div className="flex justify-center mb-8">
          <IqraLogo size="lg" showText={false} />
        </div>
        <h1 className="text-4xl font-bold text-center text-green-800 dark:text-green-400 mb-2">About IQRA</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
          The first freeware open-source Islamic knowledge quiz app with competitive challenges
        </p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            
          </p>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            or This is an ongoing charity for the sake of Allah <span className="text-3xl font-normal align-middle">?</span>, The Entirely Generous.<br />
            Thus, all apps by IQRA team of Rafique and Joy are freeware, and open source.
            <br />
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            So, through gaming and social learning, IQRA aims to make Islamic knowledge accessible, engaging, and interactive for Muslims around the world.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            <strong>Comprehensive Quiz System</strong> - Test your knowledge across multiple Islamic topics
          </li>
          <li>
            <strong>Challenge Friends</strong> - Send challenges to friends and compare your Islamic knowledge
          </li>
          <li>
            <strong>Interactive Learning</strong> - Engage with interactive infographics and visual learning aids
          </li>
          <li>
            <strong>Progress Tracking</strong> - Monitor your learning journey with detailed statistics
          </li>
          <li>
            <strong>Badges & Achievements</strong> - Earn badges as you master different knowledge areas
          </li>
            <li>
            <strong>Responsive design</strong> - For desktop and mobile use</li>
          </ul>
        </section>

         <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Islamic Knowledge Categories</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            IQRA currently covers a wide range of Islamic knowledge categories including Quran, Fiqh, Tafsir, Hadeeth,
          Aqeedah, Seerah, Tazkiyah, Islamic History, Dawah, New Muslims, Comparative Religion, and Islamic Finance.
          </p>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Open Source</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            IQRA is completely open-source and free to use. We welcome contributions from developers, Arabic linguists,
            Quran scholars, and anyone passionate about making Islamic knowledge more accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                <Link href="https://github.com/iciso/iqra" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                      GitHub IQRA Repository
                </Link>
            </Button>
         
              <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link href="/contribute" target="_blank" rel="noopener noreferrer">
                      How to Contribute
                    </Link>
                 </Button>
          
           
            <Button asChild className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                 <Link href="/why">
              <Github className="mr-2 h-4 w-4" />
                Why IQRA than KALAM?
                    </Link>
              </Button>
          
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technology</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">IQRA is built using modern web technologies:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Next.js - React framework for server-rendered applications</li>
            <li>TypeScript - For type safety and better developer experience</li>
            <li>Tailwind CSS - For responsive and customizable styling</li>
            <li>Vercel - For deployment and hosting</li>
          </ul>
        </section>

         <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><cite>Credits</cite></h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            <strong>Concept, Design & Demo Version:</strong> by {" "}
              <a
                href="https://cvemrafi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Rafique
              </a>{" "}; and May Allah <span className="text-3xl font-normal align-middle">?</span>, <span>
              reward{" "}
              <a href="https://zettabyteincorp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
              >Joy</a>
               {" "}
            </span>whose mail is
            joy_ahmed_007@yahoo.com for teaching and guiding Rafique.
          </li>
          <li>
            <strong>Alpha & Beta Versions, Scale-up, Maintenance:</strong> v0 by Vercel. For, IQRA was created through a unique collaboration between human vision and artificial intelligence.
          </li>
        </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">IQRA Papers</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            This document provides the Policy, Proposal, & Plans (PPP) for the future to continue this ongoing charity for the sake of Allah <span className="text-3xl font-normal align-middle">?</span>, The Entrely Merciful, The Entirely Generous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
           
            <Button asChild className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
             <Link href="https://tinyurl.com/mchf5tut" target="_blank" rel="noopener noreferrer">
              <Album className="mr-2 h-4 w-4" />
                IQRA Papers
               </Link>
              </Button>
           
         
       
        
            <Button asChild variant="outline">
               <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
               </Link>
            </Button>
         
          

       
            <Button asChild className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                    <Link href="/why">
              <Trophy className="mr-2 h-4 w-4" />
                Why IQRA than KALAM?
                   </Link>
              </Button>
           
    
            </div>

        </section>
     
        </div>
      

    </div>
  )
}
