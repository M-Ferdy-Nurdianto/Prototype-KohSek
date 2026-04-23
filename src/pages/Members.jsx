import { motion } from 'framer-motion';
import { Instagram, X } from 'lucide-react';
import { members } from '../data/mockData';

const Members = () => {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/30 text-primary font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Meet the Talents
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold text-neutral mb-6"
          >
            Our <span className="text-primary italic">Kohi</span> Family
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral/60 max-w-2xl mx-auto"
          >
            Each member brings a unique flavor to our music, just like different beans in a perfect blend.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] rounded-4xl overflow-hidden shadow-2xl mb-8 group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={member.image} 
                  alt={member.fullName} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral/90 via-neutral/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-primary transition-colors">
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    <a href="#" className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-primary transition-colors">
                      <X className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">{member.role}</span>
                <h3 className="text-3xl font-extrabold text-neutral mb-3">{member.name}</h3>
                <p className="text-neutral/50 text-sm leading-relaxed max-w-[250px] mx-auto italic">
                  "{member.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
