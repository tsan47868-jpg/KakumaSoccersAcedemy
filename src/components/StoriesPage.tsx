import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  Calendar,
  User,
  Share2,
  BookOpen,
  Sparkles,
  ArrowRight,
  X,
  MessageCircle,
} from 'lucide-react';
import { NEWS_ARTICLES } from '../data/mockData';
import { NewsArticle } from '../types';

interface StoriesPageProps {
  onBackToHome: () => void;
  onOpenJoin: () => void;
  onOpenDonate: () => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({
  onBackToHome,
  onOpenJoin,
  onOpenDonate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeStoryModal, setActiveStoryModal] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Match Update', 'Mentorship', 'Community', 'Education'];

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = NEWS_ARTICLES[0];

  return (
    <div className="min-h-screen bg-[#FFF7E8] text-[#111827] pb-20">
      
      {/* HEADER BANNER */}
      <section className="bg-[#071D3B] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBD55] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-[#123764] hover:bg-[#FDBD55] text-white hover:text-[#123764] px-4 py-2.5 rounded-full text-xs font-bold transition-all border border-[#FDBD55]/40 mb-10 sm:mb-12 shadow-md group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Homepage</span>
          </button>

          <div className="inline-flex items-center gap-2 bg-[#FDBD55] text-[#123764] px-3.5 py-1.5 rounded-full mb-5 text-xs font-black uppercase tracking-widest shadow-sm">
            <BookOpen className="w-4 h-4 fill-[#123764]" />
            <span>AUTHENTIC DISPATCHES & UPDATES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-tight uppercase">
            STORIES FROM THE FIELD IN KAKUMA
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            Discover inspirational player spot-lights, tournament recaps, educational graduation stories, and community updates from our coaches.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#FDBD55] text-[#123764] font-black border-2 border-white shadow-md'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-white/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-white/30 focus:outline-none focus:border-[#FDBD55] bg-white/10 text-white placeholder-white/60"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED STORY HERO CARD */}
      {featuredArticle && !searchQuery && selectedCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
              <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-[#123764] text-[#FDBD55] text-xs font-black px-3.5 py-1 rounded-full uppercase border border-[#FDBD55]">
                Featured Story
              </span>
            </div>

            <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="font-bold text-[#123764] uppercase">{featuredArticle.category}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black font-serif text-[#123764] uppercase leading-snug">
                  {featuredArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed">
                  {featuredArticle.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 italic">By {featuredArticle.author}</span>
                <button
                  onClick={() => setActiveStoryModal(featuredArticle)}
                  className="bg-[#123764] hover:bg-[#0c2545] text-white font-bold text-xs px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FDBD55]" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-gray-200 shadow-sm hover:border-[#FDBD55] transition-all flex flex-col justify-between"
            >
              <div className="h-48 relative overflow-hidden">
                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-[#123764] text-[#FDBD55] text-[10px] font-black px-3 py-1 rounded-full uppercase border border-[#FDBD55]">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[11px] text-gray-400 block mb-1">{article.date}</span>
                  <h3 className="font-extrabold text-[#123764] text-base leading-snug hover:text-[#e0a33c] transition-colors cursor-pointer" onClick={() => setActiveStoryModal(article)}>
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{article.summary}</p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-medium">By {article.author}</span>
                  <button
                    onClick={() => setActiveStoryModal(article)}
                    className="font-bold text-[#123764] hover:text-[#FDBD55] flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY READER MODAL */}
      {activeStoryModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative border-4 border-[#FDBD55] shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveStoryModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-black text-[#FDBD55] bg-[#123764] px-3 py-1 rounded-full uppercase">
              {activeStoryModal.category}
            </span>

            <h2 className="text-2xl font-black font-serif text-[#123764] uppercase mt-2 leading-tight">
              {activeStoryModal.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-gray-500 my-3 pb-3 border-b border-gray-100">
              <span>By {activeStoryModal.author}</span>
              <span>•</span>
              <span>Published: {activeStoryModal.date}</span>
            </div>

            <img
              src={activeStoryModal.imageUrl}
              alt={activeStoryModal.title}
              className="w-full h-64 object-cover rounded-2xl mb-4"
            />

            <div className="prose prose-sm max-w-none text-xs sm:text-sm text-gray-800 space-y-3 leading-relaxed">
              <p className="font-bold text-[#123764]">{activeStoryModal.summary}</p>
              <p>{activeStoryModal.content}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => alert('Article link copied to clipboard!')}
                className="text-xs font-bold text-[#123764] hover:text-[#FDBD55] flex items-center gap-1.5"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Article</span>
              </button>

              <button
                onClick={() => setActiveStoryModal(null)}
                className="bg-[#123764] text-white font-bold text-xs px-5 py-2.5 rounded-full"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default StoriesPage;
