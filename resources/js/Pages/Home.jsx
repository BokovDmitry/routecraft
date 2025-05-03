import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ auth }) {
    const [count, setCount] = useState(0);

    return (
        <>
            <Head title="RouteCraft" />
            <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
                <div className="absolute top-6 right-6">
                    {auth?.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mr-4"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <h1 className="text-4xl font-bold mb-6">Даров Саня</h1>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Count is {count}
                    </button>
                    <p className="mt-4">
                        Edit <code>resources/js/Pages/Welcome.jsx</code> and save to test HMR.
                    </p>
                </div>
            </main>
        </>
    );
}
