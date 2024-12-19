import { Button } from '@/components/ui/button'
import { Gradient } from '@/components/gradient'

export function HeroSection() {
  return (
    <div className="relative h-[50vh]">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5 rounded-xl" />
      <div className="relative container mx-auto px-4 text-center h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to Healthy Bites</h1>
        <p className="text-xl text-gray-600 mb-8">Delicious meals that nourish your body and delight your taste buds</p>
        <Button asChild>
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </div>
  )
}

