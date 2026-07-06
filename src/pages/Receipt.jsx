import { useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Home, Share2 } from 'lucide-react';
import { formatPrice } from '../data/mockData';

const Receipt = () => {
  const location = useLocation();
  const orderData = location.state;

  if (!orderData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[3rem] p-12 shadow-2xl border border-neutral/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
          
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <h1 className="text-4xl font-extrabold text-neutral mb-2">Terima Kasih!</h1>
            <p className="text-neutral/50 font-medium">Pesanan kamu sedang kami proses.</p>
          </div>

          <div className="bg-background rounded-3xl p-8 mb-10 text-left space-y-6">
            <div className="flex justify-between items-center border-b border-neutral/10 pb-4">
              <span className="text-xs font-bold text-neutral/40 uppercase tracking-widest">Order ID</span>
              <span className="font-mono font-bold text-neutral">{orderData.orderId}</span>
            </div>
            
            <div className="space-y-4">
              {orderData.cart && orderData.cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b border-neutral/5 pb-4 last:border-0 last:pb-0">
                  <img src={item.memberImage} alt={item.member} className="w-12 h-12 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="font-bold text-neutral text-sm">{item.member}</h4>
                    <p className="text-[10px] text-neutral/50 font-bold uppercase tracking-tighter">{item.ticketType} Ticket ({item.quantity}x) • {item.purchaseType.replace('_', ' ')}</p>
                  </div>
                  <span className="font-bold text-neutral text-sm">{formatPrice(item.totalPrice)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-neutral/10">
              <div className="flex justify-between text-sm">
                <span className="text-neutral/40">Nama Pemesan</span>
                <span className="text-neutral font-bold">{orderData.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral/40">WhatsApp</span>
                <span className="text-neutral font-bold">{orderData.whatsapp}</span>
              </div>
              <div className="flex justify-between text-xl pt-4 border-t border-neutral/10">
                <span className="text-neutral font-black">Total</span>
                <span className="text-primary font-black">{formatPrice((orderData.cart ? orderData.cart.reduce((sum, item) => sum + item.totalPrice, 0) : 0) + 2500)}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center bg-neutral text-white py-4 rounded-full font-bold hover:bg-neutral/80 transition-all">
              <Download className="mr-2 h-4 w-4" /> Simpan Tiket
            </button>
            <Link to="/" className="flex items-center justify-center border-2 border-neutral/10 text-neutral py-4 rounded-full font-bold hover:bg-neutral/5 transition-all">
              <Home className="mr-2 h-4 w-4" /> Kembali Home
            </Link>
          </div>

          <p className="mt-8 text-xs text-neutral/30 leading-relaxed max-w-sm mx-auto">
            Tiket digital akan dikirimkan melalui WhatsApp dalam waktu maksimal 1x24 jam setelah verifikasi pembayaran.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Receipt;
