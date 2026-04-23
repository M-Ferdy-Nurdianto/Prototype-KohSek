import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User, LogIn } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login for now
    if (formData.username === 'admin' && formData.password === 'kohi2026') {
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Username atau password salah.');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 blur-[120px] rounded-full"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-neutral tracking-tighter uppercase italic mb-2">
            Kohi <span className="text-primary">Admin</span>
          </h1>
          <p className="text-neutral/40 font-bold text-sm tracking-widest">RESTRICTED AREA</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-neutral/5 relative z-10">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-500 p-4 rounded-2xl text-sm font-bold text-center border border-red-100">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral/40 uppercase tracking-widest ml-1">Username</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral/20" />
                <input
                  type="text"
                  required
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-background border border-neutral/10 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral/40 uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral/20" />
                <input
                  type="password"
                  required
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-background border border-neutral/10 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-neutral text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary transition-all flex items-center justify-center group shadow-xl shadow-neutral/10"
            >
              <LogIn className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Sign In
            </button>
          </form>
        </div>
        
        <p className="text-center mt-8 text-neutral/20 text-xs font-medium">
          &copy; {new Date().getFullYear()} JuraganWebsite. Built with Passion.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
