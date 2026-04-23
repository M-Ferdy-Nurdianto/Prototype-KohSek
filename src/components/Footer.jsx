import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link to="/" className="text-3xl font-black text-neutral tracking-tighter uppercase italic mb-6 block">
              Kohi <span className="text-primary">Sekai</span>
            </Link>
            <p className="text-neutral/50 max-w-sm leading-relaxed mb-6">
              A warm blend of melodies and moments. Experience the unique Chika Idol sensation from Yogyakarta, where every performance feels like a fresh brew.
            </p>
            <div className="flex space-x-4">
              {/* Social links placeholder */}
              <div className="w-10 h-10 rounded-full bg-neutral/5 flex items-center justify-center text-neutral/40 hover:bg-primary hover:text-white transition-all cursor-pointer">IG</div>
              <div className="w-10 h-10 rounded-full bg-neutral/5 flex items-center justify-center text-neutral/40 hover:bg-primary hover:text-white transition-all cursor-pointer">TW</div>
              <div className="w-10 h-10 rounded-full bg-neutral/5 flex items-center justify-center text-neutral/40 hover:bg-primary hover:text-white transition-all cursor-pointer">YT</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-neutral mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-neutral/40">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/members" className="hover:text-primary transition-colors">Members</Link></li>
              <li><Link to="/cheki" className="hover:text-primary transition-colors">Cheki Tickets</Link></li>
              <li><Link to="/admin/login" className="hover:text-primary transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-neutral mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-neutral/40">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-neutral/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-neutral/30 font-medium">
            &copy; {new Date().getFullYear()} <span className="text-neutral/60">JuraganWebsite</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
