"use client";

import { useUser } from "@clerk/nextjs";
import { BarChart, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarLoader } from "react-spinners";

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: BarChart },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/meetings", label: "Meetings", icon: Users },
    { href: "/availability", label: "Availability", icon: Clock },
];

function AppLayout({ children }) {
    const { isLoaded } = useUser();
    const pathname = usePathname();
    return (
        <>
            {!isLoaded && <BarLoader width="100%" color="#36d7b7" />}
            <div className="flex flex-col h-screen bg-blue-50 md:flex-row">
                {/* Sidebar for medium screens and up */}
                <aside className="hidden w-64 bg-white md:block">
                    <nav className="mt-8">
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center px-4 py-4 text-gray-700  hover:bg-gray-100 ${pathname === item.href ? "bg-blue-100" : ""
                                            }`}
                                    >
                                        <item.icon className="w-5 h-5 mr-3" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 p-4 overflow-y-auto md:p-8">
                    <header className="flex items-center justify-between mb-4">
                        <h2 className="w-full pt-2 text-5xl text-center md:text-6xl gradient-title md:pt-0 md:text-left">
                            {navItems.find((item) => item.href === pathname)?.label ||
                                "Dashboard"}
                        </h2>
                    </header>
                    {children}
                </main>

                {/* Bottom tabs for small screens */}
                <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md md:hidden">
                    <ul className="flex justify-around">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex flex-col items-center py-2 px-4 ${pathname === item.href ? "text-blue-600" : "text-gray-600"
                                        }`}
                                >
                                    <item.icon className="w-6 h-6" />
                                    <span className="mt-1 text-xs">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default AppLayout;
