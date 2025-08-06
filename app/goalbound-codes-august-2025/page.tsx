"use client"

import Header from "components/Header";
import Footer from "components/Footer";
import {useState} from 'react';
import {CodeCard} from 'components/CodeCard';

type TabType = 'LATEST'

const allCodes: {
    code: string
    reward: string
    date: string
    status: TabType
}[] =  [
    {code: 'SRYFORAIKUDELAY', reward: 'Redeem code for rewards', date: '2025/8/6', status: 'LATEST'},
    {code: 'AIKU', reward: 'Redeem code for rewards', date: '2025/8/6', status: 'LATEST'},
    {code: 'VIPERSJAW', reward: 'Redeem code for rewards', date: '2025/8/6', status: 'LATEST'},
]


export default function page() {

    const [tab, setTab] = useState<TabType>('LATEST')

    const filteredCodes = allCodes.filter((c) => c.status === tab)
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black">
            <Header/>
            <main>
                <section id="code-list" className="container mx-auto py-24 px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="font-sans font-extrabold tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl
    text-transparent bg-clip-text
    bg-gradient-to-r
    from-sky-400 via-blue-500 to-indigo-600
    dark:from-blue-300 dark:via-sky-400 dark:to-cyan-500
    mb-6">
                            Goalbound codes August 2025
                        </h1>
                        <p className="text-center text-gray-600 mb-6">
                            Get the latest <strong>Goalbound code</strong>. Click to copy. Codes are
                            case-sensitive—please enter them exactly as shown.
                        </p>

                        {/* Tabs */}
                        <div className="flex justify-center gap-4 mb-6">
                            {(['LATEST'] as TabType[]).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className={`px-4 py-1 rounded-full text-sm font-medium border ${
                                        tab === t
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'bg-white text-gray-600 border-gray-300'
                                    }`}
                                >
                                    {t === 'LATEST' && `LATEST Codes (${allCodes.filter(c => c.status === 'LATEST').length})`}
                                </button>
                            ))}
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {filteredCodes.length > 0 ? (
                                filteredCodes.map((item) => (
                                    <CodeCard key={item.code} {...item} />
                                ))
                            ) : (
                                <p className="text-center text-gray-500 col-span-full">No codes found.</p>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <div className="bg-gray-50 py-20">
                {/* Container for centering the content */}
                <div className="container mx-auto px-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        {/* Title Section */}
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                            Latest Goalbound codes August 2025
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-center text-gray-600 mb-8">
                            Get free rewards, gems, coins, and exclusive items with our updated collection of working
                            Roblox game codes.
                            We update our <strong>Goalbound codes</strong> daily to ensure you always have access to the latest promotions.
                        </p>

                        {/* Tags Section */}
                        <div className="flex justify-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <span className="text-green-500">✔</span>
                                <span className="text-lg font-medium">Daily Updates</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-green-500">✔</span>
                                <span className="text-lg font-medium">Verified Codes</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-green-500">✔</span>
                                <span className="text-lg font-medium">Free Rewards</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
