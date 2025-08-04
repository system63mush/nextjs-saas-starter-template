"use client"

import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import {useState} from 'react';
import {CodeCard} from 'components/CodeCard';

type TabType = 'LATEST' | 'WORKING' | 'EXPIRED'

const allCodes: {
    code: string
    reward: string
    date: string
    status: TabType
}[] =  [
    {code: 'SRYFORAIKUDELAY', reward: 'Redeem code for rewards', date: '2025/8/4', status: 'LATEST'},
    {code: 'AIKU', reward: 'Redeem code for rewards', date: '2025/8/4', status: 'LATEST'},
    {code: 'VIPERSJAW', reward: 'Redeem code for rewards', date: '2025/8/4', status: 'LATEST'},

    {code: 'UPD3SRY', reward: 'Lucky Spins', date: '2025/7/31', status: 'WORKING'},
    {code: 'UPD3', reward: 'Lucky Spins', date: '2025/7/31', status: 'WORKING'},
    {code: 'HOTFIX', reward: 'Lucky Spins', date: '2025/7/31', status: 'WORKING'},
    {code: 'SRYFORUPD2DELAY', reward: 'UPD 2 Lucky Spins', date: '2025/7/31', status: 'WORKING'},
    {code: 'YUKIMIYA', reward: 'UPD 2 Lucky Spins', date: '2025/7/31', status: 'WORKING'},
    {code: 'UPD2', reward: 'UPD 2 Lucky Spins', date: '2025/7/31', status: 'WORKING'},
    {code: '100K', reward: '5 Lucky Spins and 5 Lucky Ego Spins', date: '2025/7/19', status: 'WORKING'},
    {code: 'SRYFORDELAY', reward: '1 Lucky Spin', date: '2025/7/19', status: 'WORKING'},
    {code: 'IFOLLOWATLAS', reward: '1 Lucky Spin (must follow Atlasria)', date: '2025/7/19', status: 'WORKING'},
    {code: 'IFOLLOWTEXTURE', reward: '1 Lucky Spin (must follow Texture)', date: '2025/7/19', status: 'WORKING'},
    {code: 'IFOLLOWKRIE', reward: '1 Lucky Spin (must follow swag_god06)', date: '2025/7/19', status: 'WORKING'},
    {code: 'IFOLLOWKONO', reward: '1 Lucky Spin (must follow Kono)', date: '2025/7/19', status: 'WORKING'},
    {code: 'IFOLLOWSTALKA', reward: '1 Lucky Spin (must follow Stalka)', date: '2025/7/19', status: 'WORKING'},
    {code: 'IFOLLOWROST', reward: '1 Lucky Spin (must follow Rost)', date: '2025/7/19', status: 'WORKING'},
    {code: 'DOBETTERMIRO', reward: '1 Lucky Spin', date: '2025/7/19', status: 'WORKING'},
    {code: 'EGOSOONIPROMISE', reward: '2 Lucky Spins', date: '2025/7/19', status: 'WORKING'},
    {code: 'SRY4EGO', reward: '1 Lucky Ego Spins and 5 Ego Spins', date: '2025/7/19', status: 'WORKING'},
    {code: 'IMETGEN', reward: 'Exclusive emote', date: '2025/7/19', status: 'WORKING'},
    {code: '300KLIKES', reward: '10 Spins and 10 Ego Spins', date: '2025/7/19', status: 'WORKING'},
    {code: '200KLIKES', reward: '10 Lucky Spins and 10 Lucky Ego Spins', date: '2025/7/19', status: 'WORKING'},
    {code: 'UPDATE1SOON', reward: '5 Lucky Spins', date: '2025/7/19', status: 'WORKING'},
    {code: 'SRYFORBUGS', reward: '10 Spins and 2 Lucky Spins', date: '2025/7/19', status: 'WORKING'},
    {code: 'RELEASE', reward: '5 Spins and 3 Lucky Spins', date: '2025/7/19', status: 'WORKING'},
    {code: 'DELAYBOUND', reward: '5 Spins and 5 Lucky Spins', date: '2025/7/19', status: 'WORKING'},

    {code: 'OLDCODE1', reward: 'Old Gift', date: '2025/6/30', status: 'EXPIRED'},
]

export default function Page() {

    const [tab, setTab] = useState<TabType>('LATEST')

    const filteredCodes = allCodes.filter((c) => c.status === tab)
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black">
            <Header/>
            <main>
                <Hero/>
                <section id="code-list" className="container mx-auto py-24 px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-2">Latest Working Goalbound Codes</h2>
                        <p className="text-center text-gray-600 mb-6">
                            Get the latest <strong>Goalbound code</strong>. Click to copy. Codes are case-sensitive—please enter them exactly as shown.
                        </p>

                        {/* Tabs */}
                        <div className="flex justify-center gap-4 mb-6">
                            {(['LATEST', 'WORKING', 'EXPIRED'] as TabType[]).map((t) => (
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
                                    {t === 'WORKING' && `Working Codes (${allCodes.filter(c => c.status === 'WORKING').length})`}
                                    {t === 'EXPIRED' && `Expired Codes (${allCodes.filter(c => c.status === 'EXPIRED').length})`}
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
                <Features/>
                <Section
                    rightHalf={
                        <div className="flex flex-col justify-end">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                                Game Information & Details (wiki)
                            </h2>
                            <p className="text-xl font-light">
                                Goalbound offers a thrilling soccer experience with exciting gameplay, diverse
                                characters,
                                and constant updates, keeping players engaged and always looking forward to more.
                            </p>
                        </div>
                    }
                    leftHalf={<Accordion/>}
                />
                <Reviews/>
            </main>
            <Footer/>
        </div>
    );
}
