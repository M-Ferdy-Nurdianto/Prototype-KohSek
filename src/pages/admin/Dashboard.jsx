import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Ticket, 
  Calendar, 
  Users, 
  Settings, 
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle2
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const isAuth = localStorage.getItem('admin_auth');
    if (!isAuth) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin/login');
  };

  const stats = [
    { name: 'Total Orders', value: '124', icon: Ticket, color: 'bg-blue-500' },
    { name: 'Active Events', value: '3', icon: Calendar, color: 'bg-purple-500' },
    { name: 'Total Revenue', value: 'Rp 4.5M', icon: TrendingUp, color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col p-8">
        <div className="mb-12">
          <h1 className="text-2xl font-black text-neutral tracking-tighter uppercase italic">
            Kohi <span className="text-primary">Admin</span>
          </h1>
        </div>

        <nav className="flex-grow space-y-2">
          {[
            { id: 'overview', name: 'Overview', icon: LayoutDashboard },
            { id: 'orders', name: 'Orders', icon: Ticket },
            { id: 'events', name: 'Events', icon: Calendar },
            { id: 'members', name: 'Members', icon: Users },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === item.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-400 hover:text-neutral hover:bg-slate-50'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-slate-100">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-red-400 hover:bg-red-50 hover:text-red-500 transition-all"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-neutral capitalize">{activeTab} Dashboard</h2>
            <p className="text-slate-400 font-medium">Welcome back, Admin!</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
              <Settings className="h-5 w-5 text-slate-400" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-1">{stat.name}</h4>
              <p className="text-3xl font-black text-neutral">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-neutral">Recent Orders</h3>
            <button className="text-primary font-bold text-sm hover:underline">View All &rarr;</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">ID</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Member</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { id: 'KH-8293', member: 'Dea', customer: 'Budi Santoso', status: 'Completed', time: '2 mins ago' },
                  { id: 'KH-8292', member: 'Vinci', customer: 'Siti Aminah', status: 'Pending', time: '15 mins ago' },
                  { id: 'KH-8291', member: 'Faatin', customer: 'Andi Wijaya', status: 'Completed', time: '1 hour ago' },
                ].map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-mono font-bold text-neutral">{row.id}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                          {row.member[0]}
                        </div>
                        <span className="font-bold text-neutral">{row.member}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-medium text-slate-600">{row.customer}</td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        row.status === 'Completed' ? 'bg-green-50 text-green-500' : 'bg-amber-50 text-amber-500'
                      }`}>
                        {row.status === 'Completed' ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                        {row.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-slate-400 text-sm">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
