import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);

    const {theme, setTheme} = useTheme();

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

    return(
        <nav className="bg-gray-800 dark:bg-gray-200 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        <Link href="/">
                            <a className="text-white dark:text-black font-bold text-xl">Task-G</a>
                        </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Toggle Dark Mode
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
