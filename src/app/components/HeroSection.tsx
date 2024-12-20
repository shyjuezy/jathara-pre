import { Button } from '@/components/ui/button'
import { Gradient } from '@/components/gradient'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="relative h-[50vh]">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 rounded-xl" />
      <div className="relative container mx-auto px-4 text-center h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4 font-serif">Welcome to Jathara</h1>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Grand Opening Soon...</h3>
        <div className="my-4">
          <div className="bg-primary text-primary-foreground py-2 px-6 rotate-[-2deg] shadow-md mb-8 font-serif">
            <p className="text-xl">
              Now offering<span className="text-3xl font-bold"> 20%</span> off catering orders
            </p>
          </div>
        </div>
        <Button asChild className="text-neutral-100 hover:bg-primary/80 hover:text-gray-700 border-none transition-all duration-300">
          <Link href="#contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

