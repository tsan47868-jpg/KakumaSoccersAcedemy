import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES, ONGOING_ACTIVITIES } from '../data/mockData';
import { GalleryImage, OngoingActivity } from '../types';
import {
  Camera,
  Maximize2,
  X,
  Search,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowLeft,
  Upload,
  Plus,
  Share2,
  Heart,
  Sparkles,
  Info,
  Clock,
  Send,
  MessageCircle,
} from 'lucide-react';

interface GalleryPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onOpenDonate: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onBackToHome,
  onOpenJoin,
  onOpenDonate,
}) => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'activities'>('gallery');
  
  // Gallery filters & state
  const [galleryCategory, setGalleryCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLightBox, setActiveLightBox] = useState<GalleryImage | null>(null);

  // Activity filters & state
  const [activityCategory, setActivityCategory] = useState<string>('All');
  const [selectedActivity, setSelectedActivity] = useState<OngoingActivity | null>(null);

  // Submit media modal state
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [mediaTitle, setMediaTitle] = useState<string>('');
  const [mediaCategory, setMediaCategory] = useState<string>('Matches');
  const [mediaUrl, setMediaUrl] = useState<string>('');
  const [mediaCaption, setMediaCaption] = useState<string>('');
  const [submitterName, setSubmitterName] = useState<string>('');

  // Local state for dynamically added images during session
  const [imagesList, setImagesList] = useState<GalleryImage[]>(GALLERY_IMAGES);

  // Filter logic for Gallery
  const filteredImages = imagesList.filter((img) => {
    const matchesCategory = galleryCategory === 'All' || img.category === galleryCategory;
    const matchesSearch =
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filter logic for Activities
  const filteredActivities = ONGOING_ACTIVITIES.filter((act) => {
    if (activityCategory === 'All') return true;
    return act.category === activityCategory;
  });

  const handleMediaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaTitle || !mediaCaption) return;

    const newImg: GalleryImage = {
      id: `g-custom-${Date.now()}`,
      title: mediaTitle,
      category: (mediaCategory as any) || 'Community',
      imageUrl:
        mediaUrl.trim() ||
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800',
      caption: mediaCaption,
      date: 'Just Now',
      photographer: submitterName || 'Community Member',
    };

    setImagesList([newImg, ...imagesList]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitModalOpen(false);
      setMediaTitle('');
      setMediaUrl('');
      setMediaCaption('');
      setSubmitterName('');
    }, 2000);
  };

  const getStatusBadgeStyle = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-emerald-600 text-white border-emerald-400';
      case 'blue':
        return 'bg-blue-600 text-white border-blue-400';
      case 'purple':
        return 'bg-purple-600 text-white border-purple-400';
      case 'yellow':
        return 'bg-amber-500 text-[#123764] font-black border-amber-300';
      case 'orange':
        return 'bg-orange-600 text-white border-orange-400';
      default:
        return 'bg-[#123764] text-white border-[#FDBD55]';
    }
  };

  return (
    <div className="min-h-screen bg-[#EDF3FA] text-[#111827] pb-20">
      
      {/* PAGE HEADER / TOP NAVIGATION HERO BAR */}
      <section className="bg-[#071D3B] text-white pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBD55] relative overflow-hidden">
        
        {/* Background Overlay Graphic */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="/images/galleryheroimage.png"
            alt="Kakuma Football Pitch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071D3B]/70 via-[#071D3B]/30 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Back Button */}
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-[#123764] hover:bg-[#FDBD55] text-white hover:text-[#123764] px-4 py-2.5 rounded-full text-xs font-bold transition-all border border-[#FDBD55]/40 mb-10 sm:mb-12 shadow-md group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Main Website</span>
          </button>

          {/* Main Title Banner */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3.5 py-1.5 rounded-full mb-5 text-xs font-black uppercase tracking-widest shadow-sm">
                <Camera className="w-4 h-4 fill-[#123764]" />
                <span>INDEPENDENT GALLERY & ACTIVITIES HUB</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black font-serif text-white tracking-tight leading-tight uppercase mb-4">
                GALLERY & ONGOING ACTIVITIES
              </h1>
              <p className="mt-2 text-sm sm:text-base text-white/80 max-w-2xl font-normal leading-relaxed mb-6">
                Explore authentic moment-by-moment visual stories from Kakuma Soccer Academy alongside our live weekly schedules, training camps, and active community initiatives.
              </p>
            </div>

            {/* Quick Submit Media Button */}
            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs sm:text-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Submit Photo or Activity</span>
              </button>
            </div>
          </div>

          {/* MAIN TAB CONTROLS */}
          <div className="flex items-center gap-2 sm:gap-4 mt-10 border-b border-white/20 pb-0 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2.5 px-6 py-3 font-bold text-xs sm:text-sm rounded-t-2xl transition-all whitespace-nowrap ${
                activeTab === 'gallery'
                  ? 'bg-[#EDF3FA] text-[#123764] font-black border-t-2 border-x-2 border-[#FDBD55]'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Photo & Video Gallery ({imagesList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('activities')}
              className={`flex items-center gap-2.5 px-6 py-3 font-bold text-xs sm:text-sm rounded-t-2xl transition-all whitespace-nowrap ${
                activeTab === 'activities'
                  ? 'bg-[#EDF3FA] text-[#123764] font-black border-t-2 border-x-2 border-[#FDBD55]'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Ongoing Activities & Initiatives ({ONGOING_ACTIVITIES.length})</span>
            </button>
          </div>

        </div>
      </section>

      {/* MAIN CONTAINER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* TAB 1: PHOTO & VIDEO GALLERY */}
        {activeTab === 'gallery' && (
          <div className="animate-fadeIn">
            
            {/* Filter & Search Bar */}
            <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-[#123764]/10 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
                {['All', 'Matches', 'Training', 'Mentorship', 'Community', 'Events'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setGalleryCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      galleryCategory === cat
                        ? 'bg-[#123764] text-white shadow-md border-2 border-[#FDBD55]'
                        : 'bg-[#EDF3FA] text-[#123764] hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search photo titles or captions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-gray-300 focus:outline-none focus:border-[#123764] bg-[#EDF3FA]/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                  >
                    Clear
                  </button>
                )}
              </div>

            </div>

            {/* Photo Grid */}
            {filteredImages.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-300 my-8">
                <Camera className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#123764]">No photos found</h3>
                <p className="text-xs text-gray-500 mt-1">Try adjusting your category filter or search query.</p>
                <button
                  onClick={() => {
                    setGalleryCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 bg-[#123764] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#0c2545]"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((img) => (
                  <div
                    key={img.id}
                    className="group bg-white rounded-3xl overflow-hidden border-2 border-[#123764]/10 hover:border-[#FDBD55] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
                  >
                    <div
                      className="relative h-64 overflow-hidden cursor-pointer"
                      onClick={() => setActiveLightBox(img)}
                    >
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
                      <span className="absolute top-3 left-3 bg-[#123764] text-[#FDBD55] text-[10px] font-black px-3 py-1 rounded-full uppercase border border-[#FDBD55] shadow-sm">
                        {img.category}
                      </span>
                      {img.date && (
                        <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                          {img.date}
                        </span>
                      )}
                    </div>

                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="text-base font-bold text-[#123764] leading-snug group-hover:text-[#e0a33c] transition-colors">
                          {img.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-2 leading-relaxed">{img.caption}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                        {img.photographer && (
                          <span className="italic">Photo: {img.photographer}</span>
                        )}
                        <button
                          onClick={() => setActiveLightBox(img)}
                          className="ml-auto font-bold text-[#123764] hover:text-[#FDBD55] flex items-center gap-1"
                        >
                          <span>View Full</span>
                          <Maximize2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* TAB 2: ONGOING ACTIVITIES & INITIATIVES */}
        {activeTab === 'activities' && (
          <div className="animate-fadeIn">
            
            {/* Activities Category Bar */}
            <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-[#123764]/10 mb-8 flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs font-bold text-[#123764] uppercase tracking-wider shrink-0">
                Filter Activity Type:
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {['All', 'Matches & League', 'Mentorship & Education', 'Girls Empowerment', 'Community & Pitch', 'Peace & Cohesion'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActivityCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activityCategory === cat
                        ? 'bg-[#123764] text-white shadow-md border-2 border-[#FDBD55]'
                        : 'bg-[#EDF3FA] text-[#123764] hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Activities Cards List */}
            <div className="space-y-6">
              {filteredActivities.map((act) => (
                <div
                  key={act.id}
                  className="bg-white rounded-3xl overflow-hidden border-2 border-[#123764]/10 hover:border-[#FDBD55] transition-all shadow-md flex flex-col lg:flex-row"
                >
                  {/* Activity Cover Image */}
                  <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden shrink-0">
                    <img
                      src={act.imageUrl}
                      alt={act.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123764]/80 via-transparent to-transparent lg:hidden" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`text-[10px] sm:text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider border shadow-md ${getStatusBadgeStyle(act.statusColor)}`}>
                        {act.statusBadge}
                      </span>
                    </div>
                  </div>

                  {/* Activity Details & Content */}
                  <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Category Tag */}
                      <span className="text-xs font-extrabold text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
                        {act.category}
                      </span>

                      <h3 className="text-xl sm:text-2xl font-black text-[#123764] font-serif leading-tight">
                        {act.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed">
                        {act.description}
                      </p>

                      {/* Schedule & Location Metadata */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 bg-[#EDF3FA]/70 p-3.5 rounded-2xl border border-gray-200">
                        <div className="flex items-center gap-2.5 text-xs text-[#123764] font-medium">
                          <Clock className="w-4 h-4 text-[#FDBD55] shrink-0" />
                          <div>
                            <span className="font-bold block text-[10px] text-gray-500 uppercase">Schedule</span>
                            <span>{act.schedule}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 text-xs text-[#123764] font-medium">
                          <MapPin className="w-4 h-4 text-[#FDBD55] shrink-0" />
                          <div>
                            <span className="font-bold block text-[10px] text-gray-500 uppercase">Location</span>
                            <span>{act.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div className="mt-4">
                        <h5 className="text-xs font-bold text-[#123764] uppercase tracking-wider mb-2">
                          Program Highlights:
                        </h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {act.keyHighlights.map((hl, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-gray-500">
                        <span className="font-bold text-[#123764]">Coordinator:</span> {act.coordinator}
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={onOpenJoin}
                          className="bg-[#123764] hover:bg-[#0c2545] text-white font-bold text-xs px-4 py-2.5 rounded-full transition-colors flex items-center gap-1.5"
                        >
                          <Users className="w-3.5 h-3.5 text-[#FDBD55]" />
                          <span>Register / Join</span>
                        </button>

                        <button
                          onClick={onOpenDonate}
                          className="bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black text-xs px-4 py-2.5 rounded-full shadow-md transition-all flex items-center gap-1.5"
                        >
                          <Heart className="w-3.5 h-3.5 fill-[#123764]" />
                          <span>Support Activity</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL */}
      {activeLightBox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border-4 border-[#FDBD55] shadow-2xl">
            <button
              onClick={() => setActiveLightBox(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#123764] text-white flex items-center justify-center border-2 border-[#FDBD55] hover:bg-[#FDBD55] hover:text-[#123764] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={activeLightBox.imageUrl}
              alt={activeLightBox.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            <div className="p-6 bg-[#123764] text-white">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-black text-[#FDBD55] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                  {activeLightBox.category}
                </span>
                {activeLightBox.date && (
                  <span className="text-xs text-white/70">{activeLightBox.date}</span>
                )}
              </div>
              <h3 className="text-xl font-bold mt-2 text-white">{activeLightBox.title}</h3>
              <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                {activeLightBox.caption}
              </p>
              {activeLightBox.photographer && (
                <p className="text-xs text-[#FDBD55] mt-3 italic">
                  Submitted by: {activeLightBox.photographer}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SUBMIT MEDIA MODAL */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative border-4 border-[#FDBD55] shadow-2xl animate-scaleUp">
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#123764] mb-2">
              <Upload className="w-5 h-5 text-[#FDBD55]" />
              <h3 className="text-lg font-black font-serif uppercase">Submit Photo / Activity</h3>
            </div>
            <p className="text-xs text-gray-600 mb-6">
              Share a moment, training photo, match story or local initiative from Kakuma.
            </p>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center text-emerald-800">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-sm">Media Submitted Successfully!</h4>
                <p className="text-xs mt-1">Thank you for contributing to our Kakuma Academy gallery.</p>
              </div>
            ) : (
              <form onSubmit={handleMediaSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#123764] mb-1">Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Morning Passing Drills at Main Pitch"
                    value={mediaTitle}
                    onChange={(e) => setMediaTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Category</label>
                    <select
                      value={mediaCategory}
                      onChange={(e) => setMediaCategory(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764] bg-white"
                    >
                      <option value="Matches">Matches</option>
                      <option value="Training">Training</option>
                      <option value="Mentorship">Mentorship</option>
                      <option value="Community">Community</option>
                      <option value="Events">Events</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#123764] mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Emmanuel Ekai"
                      value={submitterName}
                      onChange={(e) => setSubmitterName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#123764] mb-1">Image URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/..."
                    value={mediaUrl}
                    onChange={(e) => setMediaUrl(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                  />
                  <span className="text-[10px] text-gray-500 mt-0.5 block">Leave blank for default sample image</span>
                </div>

                <div>
                  <label className="block font-bold text-[#123764] mb-1">Caption / Story *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe what is happening in this photo or activity..."
                    value={mediaCaption}
                    onChange={(e) => setMediaCaption(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#123764]"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#FDBD55] hover:bg-[#e0a33c] text-[#123764] font-black px-5 py-2.5 rounded-full shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Now</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;
