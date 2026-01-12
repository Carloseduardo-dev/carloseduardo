import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#09334f] text-white font-sans overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 600 470" xmlns="http://www.w3.org/2000/svg">
           <path fill="#24658F" d="M0 0h600v470H0z"/>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-9xl font-black mb-4 tracking-tighter opacity-20">404</h1>
        <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          Ops! Você se perdeu na nevasca.
        </h3>
        <p className="text-xl text-[#d1e2ed] mb-8 max-w-md mx-auto">
          A página que você está procurando <span>desapareceu</span> ou nunca existiu.
        </p>
        
        <Button asChild size="lg" className="bg-[#67B1E0] hover:bg-[#88C9F2] text-[#051d2c] font-bold rounded-full px-8">
          <Link href="/">
            <HomeIcon className="mr-2 h-5 w-5" />
            Voltar para a Home
          </Link>
        </Button>
      </motion.div>

      {/* Yeti Illustration Placeholder - Visual consistent with provided assets */}
      <div className="mt-12 opacity-50">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="75" r="50" fill="#67B1E0" />
          <path d="M70 75C70 58.4315 83.4315 45 100 45C116.569 45 130 58.4315 130 75" stroke="#265D85" strokeWidth="4" />
        </svg>
      </div>
    </div>
  );
}
