import Link from 'next/link'
import Image from 'next/image'
export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-16 h-16">
            <Image
              src="/logo.svg"
              alt="Healthy Bites"
              fill
              priority
            />
          </div>
        </Link>
        {/* <nav>
          <Link href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">
            Opening Soon
          </Link>
        </nav> */}
      </div>
    </header>
  )
}

