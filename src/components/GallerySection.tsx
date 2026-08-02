import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data/mockData';
import { Camera, Maximize2, X, ArrowRight } from 'lucide-react';

interface GallerySectionProps {
  onOpenFullGallery?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenFullGallery }) => {
  const [filter, setFilter] = useState<'All' | 'Matches' | 'Training' | 'Mentorship' | 'Community'>('All');
  const [activeLightBox, setActiveLightBox] = useState<string | null>(null);

  const filteredImages = filter === 'All'
    ? GALLERY_IMAGES.slice(0, 6)
    : GALLERY_IMAGES.filter((img) => img.category === filter).slice(0, 6);

  const selectedImageObj = GALLERY_IMAGES.find((img) => img.id === activeLightBox);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#EDF3FA] text-[#111827] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#123764] text-white px-4 py-1.5 rounded-full mb-3 text-xs font-black uppercase tracking-widest border border-[#FDBD55]">
            <Camera className="w-4 h-4 text-[#FDBD55]" />
            <span>Kakuma Life & Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#123764] font-serif tracking-tight uppercase">
            GALLERY & ONGOING ACTIVITIES
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-[#FDBD55] mx-auto mt-3 rounded-full"
          />
          <p className="mt-4 text-base sm:text-lg text-[#111827]/80">
            A visual journey celebrating the joy, teamwork, training, and ongoing community initiatives at Kakuma Soccer Academy.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex justify-center flex-wrap gap-2 mb-10"
        >
          {['All', 'Matches', 'Training', 'Mentorship', 'Community'].map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#123764] text-white shadow-md border-2 border-[#FDBD55]'
                  : 'bg-white text-[#123764] hover:bg-[#FFF7E8] border border-[#123764]/10'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-[#123764]/10 hover:border-[#FDBD55] transition-all shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => setActiveLightBox(img.id)}>
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#123764]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FDBD55] text-[#123764] flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#123764] text-[#FDBD55] text-[10px] font-black px-3 py-1 rounded-full uppercase border border-[#FDBD55]">
                    {img.category}
                  </span>
                </div>

                <div className="p-5">
                  <h4 className="text-base font-bold text-[#123764]">{img.title}</h4>
                  <p className="text-xs text-[#111827]/80 mt-1">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore Full Standalone Page / See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 text-center flex flex-col items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (onOpenFullGallery) {
                onOpenFullGallery();
              }
            }}
            className="inline-flex items-center gap-3 bg-[#123764] hover:bg-[#0c2545] text-white font-black text-base sm:text-lg px-8 sm:px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all border-2 border-[#FDBD55] group cursor-pointer"
          >
            <Camera className="w-5 h-5 text-[#FDBD55]" />
            <span>SEE MORE</span>
            <ArrowRight className="w-5 h-5 text-[#FDBD55] group-hover:translate-x-2 transition-transform" />
          </motion.button>
          <p className="text-xs text-gray-600 font-semibold">
            View full photo archive & ongoing weekly activity schedule
          </p>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightBox && selectedImageObj && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveLightBox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border-4 border-[#FDBD55]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveLightBox(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#123764] text-white flex items-center justify-center border-2 border-[#FDBD55] hover:bg-[#FDBD55] hover:text-[#123764] transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selectedImageObj.imageUrl}
                alt={selectedImageObj.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />

              <div className="p-6 bg-[#123764] text-white">
                <span className="text-xs font-extrabold text-[#FDBD55] uppercase tracking-widest">
                  {selectedImageObj.category}
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">{selectedImageObj.title}</h3>
                <p className="text-xs sm:text-sm text-white/80 mt-2">{selectedImageObj.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;

