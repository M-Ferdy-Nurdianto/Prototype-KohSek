import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black text-neutral tracking-tighter uppercase italic">
              Kohi <span className="text-primary">Sekai</span>
            </span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-neutral/40">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/members" className="hover:text-primary transition-colors">Members</Link>
            <Link to="/cheki" className="hover:text-primary transition-colors">Cheki</Link>
            <Link to="/admin/login" className="hover:text-primary transition-colors">Admin</Link>
          </div>
          <div className="text-sm text-neutral/30">
            &copy; {new Date().getFullYear()} JuraganWebsite. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
