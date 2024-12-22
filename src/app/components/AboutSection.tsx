// import Image from "next/image";

export function AboutSection() {
  return (
    <section className="mt-8 md:mt-12 py-8 md:py-16 bg-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="hidden md:block relative w-full h-[30rem] rounded-lg overflow-hidden shadow-lg">
            {/*<Image*/}
            {/*  src="/about.jpg"*/}
            {/*  alt="Biryani on a pot"*/}
            {/*  className="object-cover"*/}
            {/*  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMsqAcAAWUA8f6XWZkAAAAASUVORK5CYII="*/}
            {/*  placeholder="blur"*/}
            {/*  fill*/}
            {/*  priority*/}
            {/*/>*/}
            <img
              src="/about.jpg"
              alt="Biryani on a pot"
              loading="lazy"
              decoding="async"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full">
            <h2 className="text-3xl font-bold text-center md:text-left text-gray-800 mb-8 font-serif">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-600 text-center md:text-left max-w-3xl">
              We are excited to provide you with much better, healthier food
              options. At Jathara, we believe that nutritious meals can also be
              delicious. Our chefs use fresh, locally-sourced ingredients to
              create dishes that not only taste great but also contribute to
              your overall well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
