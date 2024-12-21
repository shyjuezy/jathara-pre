import Image from 'next/image'
import { Button } from '@/components/ui/button'
// import { Gradient } from '@/components/gradient'
import Link from 'next/link'

export function HeroSection() {
  return (
    <>
      {/* <div className="relative h-[50vh] min-h-[20rem]">
        <Gradient className="absolute inset-2 rounded-xl ring-1 ring-inset ring-black/5 h-full" />
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
      </div> */}
      <div className="relative w-full h-[50vh] min-h-[24rem]">
        {/* Image */}
        <Image
          src="/hero.jpg"
          alt="South Indian chutneys and accompaniments"
          fill
          className="object-cover"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="
          placeholder="blur"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Welcome to Jathara
          </h1>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Grand Opening Soon...
          </h3>
          <div className="my-4">
            <div className="bg-primary text-primary-foreground py-2 px-6 rotate-[-2deg] shadow-md mb-8 font-serif">
              <p className="text-xl text-gray-100">
                Now offering<span className="text-4xl font-bold"> 20%</span> off catering orders
              </p>
            </div>
          </div>
          <Button
            asChild
            className="bg-white text-gray-900 hover:bg-primary hover:text-gray-100 border-none transition-all duration-300"
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

