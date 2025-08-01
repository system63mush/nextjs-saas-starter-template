"use client"

import {useState} from 'react';

import {FiCheckCircle, FiBell, FiXCircle} from 'react-icons/fi'


type StatusType = 'LATEST' | 'WORKING' | 'EXPIRED'

interface CodeCardProps {
    code: string
    reward: string
    date: string
    status: StatusType
}

export function CodeCard({code, reward, date, status}: CodeCardProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const statusColor =
        status === 'LATEST'
            ? 'bg-green-100 text-green-600'
            : status === 'WORKING'
                ? 'bg-blue-100 text-blue-600'
                : 'bg-gray-100 text-gray-500'

    const statusLabel =
        status === 'LATEST' ? 'NEW' : status === 'WORKING' ? 'WORKING' : 'EXPIRED';

    const statusIcon = status === 'LATEST' ? (
        <FiBell className="text-green-500 inline-block mr-1"/>
    ) : status === 'WORKING' ? (
        <FiCheckCircle className="text-blue-500 inline-block mr-1"/>
    ) : (
        <FiXCircle className="text-gray-400 inline-block mr-1"/>
    )

    return (
        <div
            className="bg-white rounded-xl shadow p-4 flex flex-col justify-between w-full max-w-xs mx-auto hover:shadow-lg transition">
      <span className={`text-xs px-2 py-1 rounded-full ${statusColor} mb-2 w-fit`}>
        {statusLabel}
      </span>
            <h3 className="text-2xl font-bold font-mono tracking-wide mb-2
    text-transparent bg-clip-text
    bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
    transition-all duration-500
    hover:from-pink-500 hover:to-yellow-500">{code}</h3>
            <p className="text-sm mb-2">{statusIcon} {reward}</p>
            <p className="text-xs text-gray-500 mb-4">Added: {date}</p>
            <button
                onClick={handleCopy}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded text-sm font-medium"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}
