 import { motion } from 'framer-motion';
 import { ImmersiveTransition } from './ImmersiveTransition';
 
 const ExperienceIntro = () => {
   const stats = [
     { value: '3+', label: 'Years Experience' },
     { value: '10+', label: 'Enterprise Systems' },
     { value: '40K+', label: 'Daily Users' },
   ];
 
   return (
     <ImmersiveTransition variant="ink">
       {/* Section indicator */}
       <motion.div 
         className="mb-8"
         initial={{ opacity: 0, scale: 0.8 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
       >
         <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center">
           <span className="font-display text-xl text-gold">04</span>
         </div>
       </motion.div>
 
       {/* Label */}
       <motion.p 
         className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-10"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.2 }}
       >
         Track Record
       </motion.p>
 
       {/* Main statement */}
       <motion.h2 
         className="font-display text-3xl md:text-5xl lg:text-6xl text-cream text-center max-w-4xl leading-tight mb-12"
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
       >
         Delivering{' '}
         <span className="text-gold italic">measurable</span>{' '}
         results at enterprise scale.
       </motion.h2>
 
       {/* Stats row */}
       <motion.div 
         className="flex flex-wrap items-center justify-center gap-12 md:gap-20"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.5, duration: 0.6 }}
       >
         {stats.map((stat, index) => (
           <motion.div 
             key={index}
             className="text-center"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
           >
             <div className="font-display text-4xl md:text-5xl text-gold mb-2">
               {stat.value}
             </div>
             <div className="text-xs uppercase tracking-[0.2em] text-cream/50">
               {stat.label}
             </div>
           </motion.div>
         ))}
       </motion.div>
 
       {/* Decorative element */}
       <motion.div 
         className="mt-16 flex items-center gap-4"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.8 }}
       >
         <div className="w-12 h-px bg-gold/30" />
         <div className="w-2 h-2 rounded-full bg-gold/40" />
         <div className="w-12 h-px bg-gold/30" />
       </motion.div>
     </ImmersiveTransition>
   );
 };
 
 export default ExperienceIntro;