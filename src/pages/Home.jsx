import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { events } from '../data/mockData';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/30 text-primary font-semibold text-sm tracking-wider uppercase">
              Official Website
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-neutral leading-[1.1]">
              The World of <span className="text-primary italic">Kohi</span>
            </h1>
            <p className="text-lg text-neutral/70 max-w-lg leading-relaxed">
              A warm blend of melodies and moments. Experience the unique Chika Idol sensation from Yogyakarta, where every performance feels like a fresh brew.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cheki" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30">
                Buy Cheki Ticket
              </Link>
              <a href="#events" className="border-2 border-primary/20 text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-colors">
                Upcoming Events
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-4xl blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
            <img 
              src="/assets/img/hero.png" 
              alt="Kohi Sekai Group" 
              className="relative rounded-4xl shadow-2xl w-full object-cover aspect-[4/5] md:aspect-square"
            />
          </motion.div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-tertiary/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4"></div>
      </section>

      {/* Event Schedule */}
      <section id="events" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-neutral mb-4">Event Schedule</h2>
            <p className="text-neutral/50 max-w-2xl mx-auto italic">
              "Meet us at the next session. Let's create beautiful memories over music."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background rounded-3xl p-8 border border-neutral/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white px-4 py-2 rounded-2xl shadow-sm text-center">
                    <span className="block text-primary font-bold text-xl">{event.date.split(' ')[0]}</span>
                    <span className="block text-neutral/50 text-[10px] uppercase font-bold">{event.date.split(' ')[1]}</span>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-secondary/40 text-primary text-xs font-bold">{event.time}</div>
                </div>
                <h3 className="text-2xl font-bold text-neutral mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center text-neutral/60 mb-6">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-extrabold text-neutral">{event.price}</span>
                  <Link to="/cheki" className="text-primary font-bold hover:underline flex items-center">
                    Get Tickets <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-neutral mb-6">Listen to Our Brews</h2>
              <p className="text-lg text-neutral/60 mb-8 leading-relaxed">
                Stream our latest singles and curated playlists. From the upbeat "Mocca Morning" to the soulful "Black Coffee Night", we have a rhythm for every mood.
              </p>
            </div>
            <motion.div 
              initial={{ rotate: 2 }}
              whileHover={{ rotate: 0 }}
              className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 border-8 border-white"
            >
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/artist/2bt858ji7ugrpjuNUEChED?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
