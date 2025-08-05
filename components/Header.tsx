import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
    return (
        <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <span className="text-xl dark:text-gray-100 cursor-pointer">
                          Goalbound Codes
                        </span>
                    </Link>
                </div>
                <nav className="flex items-center">
                    <ThemeSwitch/>
                </nav>
            </div>
        </header>
    );
}
