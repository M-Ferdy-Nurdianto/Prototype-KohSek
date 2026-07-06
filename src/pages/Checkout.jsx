import { useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Upload, Send, ArrowLeft } from 'lucide-react';
import { formatPrice } from '../data/mockData';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const checkoutData = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    paymentProof: null
  });

  if (!checkoutData) {
    return <Navigate to="/cheki" replace />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission
    console.log('Submitting order:', { ...checkoutData, ...formData });
    navigate('/receipt', { state: { ...checkoutData, ...formData, orderId: 'KH-' + Math.random().toString(36).substr(2, 9).toUpperCase() } });
  };

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-neutral/50 hover:text-primary transition-colors mb-8 font-bold"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Order Info */}
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold text-neutral">Konfirmasi <span className="text-primary">Pesanan</span></h1>
            
            <div className="bg-white rounded-4xl p-8 border border-neutral/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="space-y-4 mb-8 relative z-10">
                {checkoutData.cart && checkoutData.cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-background rounded-3xl border border-neutral/5">
                    <img src={item.memberImage} alt={item.member} className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.purchaseType.replace('_', ' ')}</span>
                      <h4 className="font-bold text-neutral">{item.member}</h4>
                      <p className="text-xs text-neutral/50 font-bold uppercase">{item.ticketType} Ticket ({item.quantity}x)</p>
                    </div>
                    <span className="font-bold text-neutral">{formatPrice(item.totalPrice)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-neutral/5 relative z-10">
                <div className="flex justify-between">
                  <span className="text-neutral/50 font-medium">Subtotal</span>
                  <span className="text-neutral font-bold">{formatPrice(checkoutData.cart ? checkoutData.cart.reduce((sum, item) => sum + item.totalPrice, 0) : 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral/50 font-medium">Biaya Layanan</span>
                  <span className="text-neutral font-bold">Rp 2.500</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-neutral/5">
                  <span className="text-neutral font-black text-xl">Total Bayar</span>
                  <span className="text-primary font-black text-2xl">{formatPrice((checkoutData.cart ? checkoutData.cart.reduce((sum, item) => sum + item.totalPrice, 0) : 0) + 2500)}</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 p-6 rounded-3xl border border-secondary/30">
              <h4 className="font-bold text-primary mb-3 flex items-center">
                <CreditCard className="mr-2 h-4 w-4" /> Informasi Pembayaran
              </h4>
              <p className="text-sm text-neutral/70 leading-relaxed">
                Silakan transfer ke rekening berikut:<br/>
                <strong className="text-neutral">Bank BCA - 1234567890</strong><br/>
                a.n <strong className="text-neutral">Juragan Website</strong>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-4xl p-10 border border-neutral/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-neutral/60 mb-2 uppercase tracking-wide">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Masukkan nama sesuai ID"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-neutral/10 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral/60 mb-2 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="email@anda.com"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-neutral/10 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral/60 mb-2 uppercase tracking-wide">Nomor WhatsApp</label>
                <input 
                  type="tel" 
                  name="whatsapp"
                  required
                  placeholder="0812xxxx"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-neutral/10 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral/60 mb-2 uppercase tracking-wide">Bukti Bayar</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    accept="image/*"
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    onChange={(e) => setFormData(prev => ({ ...prev, paymentProof: e.target.files[0] }))}
                  />
                  <div className="w-full px-6 py-10 rounded-2xl bg-background border-2 border-dashed border-neutral/10 group-hover:border-primary group-hover:bg-primary/5 transition-all text-center">
                    <Upload className="mx-auto h-10 w-10 text-neutral/20 group-hover:text-primary mb-4" />
                    <span className="block font-bold text-neutral/40 group-hover:text-primary">
                      {formData.paymentProof ? formData.paymentProof.name : 'Upload Screenshot Transfer'}
                    </span>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-full font-bold text-xl shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" /> Kirim Pesanan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
