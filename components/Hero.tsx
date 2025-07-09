import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
      <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
          <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
              Goalbound ：Great Online Action Game
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">
              Goalbound is an exciting, fast-paced Roblox soccer game where players engage in dynamic 5v5
              matches.<br></br><br></br>
              Choose your unique character, master powerful skills, and compete in thrilling soccer
              battles.<br></br><br></br>
              With constant updates and special events, Goalbound offers endless fun and challenges for every
              player!
          </p>
          <div className="grid place-items-center">
              <Image
                  src="/products/Goalbound index.png"
                  alt="Goalbound Game"
                  width={500}
                  height={500}
                  className="mb-9"
              />
          </div>


          <div className="flex justify-center space-x-6">
              <Link
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://www.roblox.com/games/137628283909891/RELEASE-Goalbound"
                  className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
              >Play Goalbound
              </Link>
          </div>
      </section>
  );
}
