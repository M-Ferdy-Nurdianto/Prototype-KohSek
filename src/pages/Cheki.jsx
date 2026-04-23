import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, Info, Ticket } from 'lucide-react';
import { members, tickets, formatPrice } from '../data/mockData';

const Cheki = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [ticketType, setTicketType] = useState('regular'); // regular or vip
  const [purchaseType, setPurchaseType] = useState('pre_order'); // pre_order or on_the_spot
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!selectedMember) return;
    
    const ticketInfo = tickets.find(t => t.id === selectedMember.id);
    const price = ticketInfo.pricing[ticketType][purchaseType];
    
    navigate('/checkout', { 
      state: { 
        member: selectedMember.name,
        ticketType,
        purchaseType,
        price,
        memberImage: selectedMember.image
      } 
    });
  };

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-neutral mb-4"
          >
            Get Your <span className="text-primary italic">Cheki</span> Ticket
          </motion.h1>
          <p className="text-neutral/50 italic">"Capture the moment with your favorite member."</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Member Selection */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-xl font-bold text-neutral mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-3">1</span>
                Pilih Member
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {members.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className={`relative group rounded-3xl overflow-hidden aspect-[3/4] border-4 transition-all duration-300 ${
                      selectedMember?.id === member.id ? 'border-primary scale-105 shadow-xl shadow-primary/20' : 'border-transparent grayscale hover:grayscale-0'
                    }`}
                  >
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-primary/20 transition-opacity ${selectedMember?.id === member.id ? 'opacity-100' : 'opacity-0'}`} />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-left">
                      <span className="text-xs font-bold uppercase tracking-widest block opacity-70">{member.role}</span>
                      <span className="text-lg font-bold">{member.name}</span>
                    </div>
                    {selectedMember?.id === member.id && (
                      <div className="absolute top-4 right-4 bg-primary text-white p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-neutral mb-8 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-3">2</span>
                  Tipe Tiket
                </h3>
                <div className="space-y-4">
                  {[
                    { id: 'regular', name: 'Regular Ticket', desc: '1x Photo + Sign' },
                    { id: 'vip', name: 'VIP Ticket', desc: '2x Photo + Sign + Digital Copy' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setTicketType(type.id)}
                      className={`w-full p-6 rounded-3xl border-2 text-left transition-all ${
                        ticketType === type.id ? 'border-primary bg-primary/5' : 'border-neutral/10 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="block font-bold text-neutral">{type.name}</span>
                          <span className="text-sm text-neutral/50">{type.desc}</span>
                        </div>
                        {ticketType === type.id && <Check className="text-primary" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral mb-8 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-3">3</span>
                  Waktu Pembelian
                </h3>
                <div className="space-y-4">
                  {[
                    { id: 'pre_order', name: 'Pre-Order', desc: 'Lebih hemat & terjamin' },
                    { id: 'on_the_spot', name: 'On The Spot', desc: 'Beli langsung di lokasi' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setPurchaseType(type.id)}
                      className={`w-full p-6 rounded-3xl border-2 text-left transition-all ${
                        purchaseType === type.id ? 'border-primary bg-primary/5' : 'border-neutral/10 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="block font-bold text-neutral">{type.name}</span>
                          <span className="text-sm text-neutral/50">{type.desc}</span>
                        </div>
                        {purchaseType === type.id && <Check className="text-primary" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 glass p-8 rounded-4xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-neutral mb-8">Summary</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-neutral/5">
                  <span className="text-neutral/50">Member</span>
                  <span className="font-bold text-neutral">{selectedMember?.name || '-'}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-neutral/5">
                  <span className="text-neutral/50">Tipe Tiket</span>
                  <span className="font-bold text-neutral uppercase">{ticketType}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-neutral/5">
                  <span className="text-neutral/50">Kategori</span>
                  <span className="font-bold text-neutral uppercase">{purchaseType.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-neutral font-bold">Total</span>
                  <span className="text-3xl font-black text-primary">
                    {selectedMember 
                      ? formatPrice(tickets.find(t => t.id === selectedMember.id).pricing[ticketType][purchaseType])
                      : 'Rp 0'
                    }
                  </span>
                </div>
              </div>

              <button
                disabled={!selectedMember}
                onClick={handleCheckout}
                className={`w-full py-5 rounded-full font-bold text-lg flex items-center justify-center transition-all ${
                  selectedMember 
                    ? 'bg-primary text-white shadow-xl shadow-primary/30 hover:scale-105 active:scale-95' 
                    : 'bg-neutral/10 text-neutral/30 cursor-not-allowed'
                }`}
              >
                <Ticket className="mr-2 h-5 w-5" />
                Checkout Sekarang
              </button>
              
              {!selectedMember && (
                <p className="text-center text-xs text-neutral/40 mt-4 animate-pulse">
                  * Silakan pilih member terlebih dahulu
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheki;
