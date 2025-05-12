import React from 'react';
import { Home, MessageCircle, BarChart2, User, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isActive }) => (
  <Link
    to={to}
    className={`flex flex-col items-center justify-center gap-1 ${
      isActive ? 'text-[var(--color-brown-70)]' : 'text-[var(--color-gray-50)]'
    }`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </Link>
);

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-brown-20)] px-6 py-2">
      <div className="relative flex items-center justify-between">
        <NavItem
          icon={<Home size={24} />}
          label="Home"
          to="/"
          isActive={currentPath === '/'}
        />
        <NavItem
          icon={<MessageCircle size={24} />}
          label="Chat"
          to="/chat"
          isActive={currentPath === '/chat'}
        />
        
        {/* FAB Button */}
        <button className="absolute left-1/2 -translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-[var(--color-brown-60)] text-white flex items-center justify-center hover:bg-[var(--color-brown-70)] transition-colors" title='button'>
          <Plus size={24} />
        </button>
        
        <NavItem
          icon={<BarChart2 size={24} />}
          label="Stats"
          to="/stats"
          isActive={currentPath === '/stats'}
        />
        <NavItem
          icon={<User size={24} />}
          label="Profile"
          to="/profile"
          isActive={currentPath === '/profile'}
        />
      </div>
    </nav>
  );
};

export default BottomNavigation;