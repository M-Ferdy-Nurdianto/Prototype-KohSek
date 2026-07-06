import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Ticket, 
  Calendar, 
  Settings, 
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle2,
  Plus,
  Search,
  Filter,
  MapPin,
  MoreVertical,
  ArrowLeft,
  Save,
  DollarSign,
  UserPlus,
  CreditCard,
  FileText,
  Download
} from 'lucide-react';
import { events as mockEvents, formatPrice, members as mockMembers } from '../../data/mockData';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);
  
  // State for Pricing Management
  const [chekiPrices, setChekiPrices] = useState({
    regular_po: 35000,
    regular_ots: 40000,
    vip_po: 70000,
    vip_ots: 80000
  });

  const handleLogout = () => {
    navigate('/');
  };

  // Mock Data
  const orders = [
    { id: 'KH-8293', member: 'Dea', customer: 'Budi Santoso', status: 'Completed', time: '2 mins ago', total: 37500, type: 'Pre-Order' },
    { id: 'KH-8292', member: 'Vinci', customer: 'Siti Aminah', status: 'Pending', time: '15 mins ago', total: 72500, type: 'Pre-Order' },
    { id: 'KH-8291', member: 'Faatin', customer: 'Andi Wijaya', status: 'Completed', time: '1 hour ago', total: 37500, type: 'OTS' },
    { id: 'KH-8290', member: 'Dea', customer: 'Rina Rose', status: 'Cancelled', time: '3 hours ago', total: 37500, type: 'Pre-Order' },
  ];

  const stats = [
    { name: 'Total Orders', value: '124', icon: Ticket, color: 'bg-blue-500' },
    { name: 'Active Events', value: mockEvents.length.toString(), icon: Calendar, color: 'bg-purple-500' },
    { name: 'Total Revenue', value: 'Rp 4.5M', icon: TrendingUp, color: 'bg-green-500' },
  ];

  // Render Functions
  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={stat.name} 
            className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
          >
            <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-current/10`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-1">{stat.name}</h4>
            <p className="text-3xl font-black text-neutral">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-neutral">Recent Orders</h3>
          <button onClick={() => setActiveTab('orders')} className="text-primary font-bold text-sm hover:underline">View All &rarr;</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">ID</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Member</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.slice(0, 3).map((row) => (
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
                  <td className="px-8 py-6 text-xs font-bold text-slate-400">{row.type}</td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                      row.status === 'Completed' ? 'bg-green-50 text-green-500' : 
                      row.status === 'Pending' ? 'bg-amber-50 text-amber-500' : 'bg-red-50 text-red-500'
                    }`}>
                      {row.status === 'Completed' ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-between items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
          <input 
            type="text" 
            placeholder="Search by ID or Customer..." 
            className="w-full pl-12 pr-6 py-3 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center space-x-2 px-6 py-3 bg-slate-50 rounded-2xl font-bold text-slate-500 hover:bg-slate-100 transition-all">
            <Download className="h-4 w-4" />
            <span>Export Sheet</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-slate-50 rounded-2xl font-bold text-slate-500 hover:bg-slate-100 transition-all">
            <FileText className="h-4 w-4" />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Order Info</th>
              <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Details</th>
              <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Total</th>
              <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-6">
                  <div className="font-mono font-bold text-neutral mb-1">{order.id}</div>
                  <div className="text-[10px] text-primary font-black uppercase tracking-tighter">{order.type}</div>
                </td>
                <td className="px-8 py-6">
                  <div className="font-bold text-neutral">{order.customer}</div>
                  <div className="text-sm text-slate-400">For {order.member}</div>
                </td>
                <td className="px-8 py-6 font-bold text-neutral">{formatPrice(order.total)}</td>
                <td className="px-8 py-6">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                    order.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="p-2 rounded-xl hover:bg-slate-100 text-slate-300 hover:text-neutral transition-all">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderOTSOrder = () => (
    <div className="max-w-4xl space-y-8">
      <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
        <h3 className="text-2xl font-black text-neutral mb-10 flex items-center">
          <UserPlus className="mr-4 text-primary h-8 w-8" /> 
          Input New OTS Order
        </h3>
        
        <form className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Customer Name</label>
              <input type="text" placeholder="Masukkan nama pembeli" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Select Member</label>
              <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral appearance-none cursor-pointer">
                <option value="">Pilih Member...</option>
                {mockMembers.map(m => (
                  <option key={m.id} value={m.name}>{m.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Ticket Type</label>
              <div className="flex gap-4">
                <button type="button" className="flex-grow py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20">Regular</button>
                <button type="button" className="flex-grow py-4 rounded-2xl bg-slate-50 text-slate-400 font-bold hover:bg-slate-100">VIP</button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Payment Method</label>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="py-4 rounded-2xl bg-slate-50 text-neutral font-bold border-2 border-primary">Cash</button>
                <button type="button" className="py-4 rounded-2xl bg-slate-50 text-slate-400 font-bold hover:bg-slate-100">QRIS / Transfer</button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 pt-6">
            <div className="bg-slate-50 p-6 rounded-3xl flex justify-between items-center mb-8">
              <div>
                <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Amount to Pay</span>
                <span className="text-3xl font-black text-primary">Rp 40.000</span>
              </div>
              <div className="text-right">
                <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Status</span>
                <span className="inline-flex items-center text-green-500 font-bold"><CheckCircle2 className="mr-1 h-4 w-4" /> Paid Instantly</span>
              </div>
            </div>
            <button className="w-full bg-neutral text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-neutral/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center">
              <CreditCard className="mr-2 h-5 w-5" /> Confirm OTS Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderPricing = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-neutral">Cheki Ticket Pricing</h3>
        <p className="text-slate-400 font-medium italic">Changes will apply instantly to the store.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Ticket className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-black text-neutral">Regular Cheki</h4>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Pre-Order Price</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-neutral/30">Rp</span>
                <input type="number" value={chekiPrices.regular_po} onChange={(e) => setChekiPrices({...chekiPrices, regular_po: e.target.value})} className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">On The Spot Price</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-neutral/30">Rp</span>
                <input type="number" value={chekiPrices.regular_ots} onChange={(e) => setChekiPrices({...chekiPrices, regular_ots: e.target.value})} className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-black text-neutral">Wide - VIP Cheki</h4>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Pre-Order Price</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-neutral/30">Rp</span>
                <input type="number" value={chekiPrices.vip_po} onChange={(e) => setChekiPrices({...chekiPrices, vip_po: e.target.value})} className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">On The Spot Price</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-neutral/30">Rp</span>
                <input type="number" value={chekiPrices.vip_ots} onChange={(e) => setChekiPrices({...chekiPrices, vip_ots: e.target.value})} className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center space-x-2 bg-neutral text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-neutral/20 hover:scale-105 active:scale-95 transition-all">
          <Save className="h-5 w-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  );

  const renderEventForm = () => (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm max-w-3xl">
      <div className="flex items-center space-x-4 mb-10">
        <button onClick={() => setIsCreatingEvent(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"><ArrowLeft className="h-5 w-5" /></button>
        <h3 className="text-2xl font-black text-neutral">Create New Event</h3>
      </div>
      <form className="space-y-8">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Event Title</label>
            <input type="text" placeholder="e.g. Espresso Morning Session" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Date</label>
              <input type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Time</label>
              <input type="time" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Location</label>
            <div className="relative"><MapPin className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" /><input type="text" placeholder="e.g. Kohi Cafe, Yogyakarta" className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 focus:ring-primary/20 font-bold text-neutral" /></div>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-50"><button type="button" onClick={() => setIsCreatingEvent(false)} className="w-full bg-neutral text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-neutral/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center"><Save className="mr-2 h-5 w-5" />Save Event</button></div>
      </form>
    </motion.div>
  );

  const renderEvents = () => (
    <div className="space-y-8">
      {!isCreatingEvent ? (
        <>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-neutral">Active Events</h3>
            <button onClick={() => setIsCreatingEvent(true)} className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"><Plus className="h-5 w-5" /><span>Add New Event</span></button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {mockEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-slate-50 px-5 py-2.5 rounded-2xl text-center"><span className="block text-primary font-black text-xl">{event.date.split(' ')[0]}</span><span className="block text-slate-400 text-[10px] uppercase font-black">{event.date.split(' ')[1]}</span></div>
                  <div className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black tracking-widest uppercase">{event.time}</div>
                </div>
                <h4 className="text-2xl font-black text-neutral mb-4 group-hover:text-primary transition-colors">{event.title}</h4>
                <div className="flex items-center text-slate-400 mb-8 font-medium"><MapPin className="h-4 w-4 mr-2" /><span>{event.location}</span></div>
                <div className="flex justify-between items-center pt-6 border-t border-slate-50"><span className="text-xl font-black text-neutral">{event.price}</span><div className="flex gap-2"><button className="px-4 py-2 rounded-xl border border-slate-100 text-sm font-bold text-slate-400 hover:bg-slate-50 transition-all">Edit</button><button className="px-4 py-2 rounded-xl bg-red-50 text-red-500 text-sm font-bold hover:bg-red-100 transition-all">Delete</button></div></div>
              </div>
            ))}
          </div>
        </>
      ) : renderEventForm()}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col p-8">
        <div className="mb-12"><h1 className="text-2xl font-black text-neutral tracking-tighter uppercase italic">Kohi <span className="text-primary">Admin</span></h1></div>
        <nav className="flex-grow space-y-2">
          {[
            { id: 'overview', name: 'Overview', icon: LayoutDashboard },
            { id: 'orders', name: 'Orders', icon: Ticket },
            { id: 'ots', name: 'OTS Order', icon: UserPlus },
            { id: 'events', name: 'Events', icon: Calendar },
            { id: 'pricing', name: 'Pricing', icon: DollarSign },
          ].map((item) => (
            <button key={item.id} onClick={() => { setActiveTab(item.id); setIsCreatingEvent(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === item.id ? 'bg-primary/10 text-primary shadow-sm' : 'text-slate-400 hover:text-neutral hover:bg-slate-50'}`}><item.icon className="h-5 w-5" /><span>{item.name}</span></button>
          ))}
        </nav>
        <div className="pt-8 border-t border-slate-100"><button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-bold text-red-400 hover:bg-red-50 hover:text-red-500 transition-all"><LogOut className="h-5 w-5" /><span>Logout</span></button></div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-y-auto max-h-screen">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-4"><div><h2 className="text-3xl font-extrabold text-neutral capitalize">{isCreatingEvent ? 'New Event' : activeTab === 'ots' ? 'OTS Order' : activeTab}</h2><p className="text-slate-400 font-medium">Manage your Kohi Sekai operations.</p></div></div>
          <div className="flex items-center space-x-4"><div className="hidden md:flex flex-col items-right text-right mr-2"><span className="text-sm font-bold text-neutral">Administrator</span><span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Online</span></div><div className="w-12 h-12 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center ring-4 ring-white"><span className="text-white font-black">A</span></div></div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab + (isCreatingEvent ? '-form' : '-list')} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'ots' && renderOTSOrder()}
            {activeTab === 'events' && renderEvents()}
            {activeTab === 'pricing' && renderPricing()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
