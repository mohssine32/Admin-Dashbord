'use client';

import { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Package,
  Users,
  BarChart2,
  ShoppingCart,
  Settings,
  Mail,
  Bell,
  Info,
  Menu,
  X,
} from 'lucide-react';

type NavItem = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
  { label: 'Products', icon: <Package size={20} />, path: '/products' },
  { label: 'Clients', icon: <Users size={20} />, path: '/clients' },
  { label: 'Sales', icon: <BarChart2 size={20} />, path: '/sales' },
  { label: 'Orders', icon: <ShoppingCart size={20} />, path: '/orders' },
  { label: 'Messages', icon: <Mail size={20} />, path: '/messages' },
  { label: 'Notifications', icon: <Bell size={20} />, path: '/notifications' },
  { label: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  { label: 'Help', icon: <Info size={20} />, path: '/help' },
];

export default function Sidebar() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const storedSidebarState = localStorage.getItem('sidebarOpen');
    if (storedSidebarState !== null) {
      setIsOpen(storedSidebarState === 'true');
    }
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setMobileOpen(prev => !prev);
    window.addEventListener('toggleMobileSidebar', handler);
    return () => window.removeEventListener('toggleMobileSidebar', handler);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // force charts to recalculate dimensions
    if (typeof window !== 'undefined') window.dispatchEvent(new Event('resize'));
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem('sidebarOpen', newState.toString());
    // trigger resize so charts using ResponsiveContainer recalc dimensions
    if (typeof window !== 'undefined') window.dispatchEvent(new Event('resize'));
  };

  if (!hasMounted) return null;

  // show as overlay on small screens when mobileOpen, otherwise show desktop sidebar inside layout
  const wrapperClasses = mobileOpen
    ? 'fixed inset-y-0 left-0 z-50 w-64 block min-h-screen flex-shrink-0 bg-white text-black transition-all duration-300 ease-in-out overflow-y-auto'
    : `hidden lg:block min-h-screen flex-shrink-0 bg-white text-black transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? 'w-60' : 'w-16'}`;

  return (
    <>
      {mobileOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setMobileOpen(false)}></div>}

      <div className={wrapperClasses}>
      <div className="flex items-center justify-between px-4 py-4">
        {(isOpen || mobileOpen) && <span className="text-lg font-bold">MyApp</span>}
        <div>
          {mobileOpen ? (
            <button onClick={() => setMobileOpen(false)} className="lg:hidden">
              <X className="text-black" size={20} />
            </button>
          ) : (
            <button onClick={toggleSidebar}>
              <Menu className="text-black" size={20} />
            </button>
          )}
        </div>
      </div>

      <nav className="mt-4">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-3 py-2 mx-2 rounded-lg cursor-pointer
              transition-colors duration-200 hover:bg-gray-200
              ${!(isOpen || mobileOpen) ? 'justify-center' : ''}
            `}
          >
            <div>{item.icon}</div>
            {(isOpen || mobileOpen) && <span className="text-sm font-medium">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
    </>
  );
}







