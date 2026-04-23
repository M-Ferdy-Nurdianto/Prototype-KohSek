import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User, LogIn, Info } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.username === 'admin' && formData.password === 'kohi2026') {
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Username atau password salah.');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-neutral tracking-tighter uppercase italic mb-2">
            Kohi <span className="text-primary">Admin</span>
          </h1>
          <p className="text-neutral/30 font-bold text-xs tracking-[0.3em] uppercase">Security Gateway</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-neutral/5">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 text-red-500 p-4 rounded-2xl text-sm font-bold text-center border border-red-100"
              >
                {error}
              </motion.div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral/40 uppercase tracking-widest ml-1">Username</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral/20" />
                <input
                  type="text"
                  required
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-background border border-neutral/10 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium"
                  placeholder="admin"
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
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-background border border-neutral/10 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-neutral text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary transition-all flex items-center justify-center group shadow-xl shadow-neutral/10 active:scale-95"
            >
              <LogIn className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Sign In
            </button>
          </form>

          {/* Prototype Credentials Hint */}
          <div className="mt-8 pt-8 border-t border-neutral/5">
            <div className="bg-secondary/20 rounded-2xl p-4 flex items-start space-x-3 border border-secondary/30">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-primary uppercase tracking-wider mb-1">Prototype Credentials</p>
                <div className="text-neutral/60 font-medium space-y-0.5">
                  <p>User: <span className="text-neutral font-bold">admin</span></p>
                  <p>Pass: <span className="text-neutral font-bold">kohi2026</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 space-y-2">
           <p className="text-neutral/20 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} JuraganWebsite. Built with Passion.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="text-neutral/40 text-xs font-bold hover:text-primary transition-colors"
          >
            &larr; Back to Website
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
