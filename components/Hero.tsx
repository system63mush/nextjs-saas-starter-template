import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
            <h1 className="font-sans font-extrabold tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl
    text-transparent bg-clip-text
    bg-gradient-to-r
    from-sky-400 via-blue-500 to-indigo-600
    dark:from-blue-300 dark:via-sky-400 dark:to-cyan-500
    mb-6">
                Goalbound codes Latest 2025
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-light">
                Looking for the latest <strong>Goalbound codes</strong>? You're in the right place.<br/><br/>
                We regularly update our list with official and working codes that grant you free spins, coins, and
                energy
                boosts in <strong>Roblox Goalbound</strong>.<br/><br/>
                These codes help you unlock exclusive in-game rewards and level up faster and easier.<br/><br/>

                <Link href="/goalbound-codes-august-2025">
                        <span
                            className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text cursor-pointer">
                            Goalbound codes August 2025
                        </span>
                </Link>

            </p>
            <div className="grid place-items-center">
                <Image
                    src="/products/GoalboundCodes.png"
                    alt="Goalbound Game"
                    width={500}
                    height={400}
                    className="mb-9"
                />
            </div>


            <div className="flex justify-center">
                <button
                    onClick={() => {
                        const section = document.getElementById('code-list')
                        section?.scrollIntoView({behavior: 'smooth'})
                    }}
                    className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
                >
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-amber-300 to-lime-400">
    🔓 Get Goalbound Codes
  </span>
                </button>


            </div>

        </section>
    );
}
