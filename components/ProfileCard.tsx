import React, { useState } from 'react';
import { MapPin, Mail, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { ProfileData, LinkItem } from '../types';
import { VerifiedBadge } from './VerifiedBadge';

interface ProfileCardProps {
  data: ProfileData;
  isDark: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ data, isDark }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const primaryLink = data.links.find(l => l.type === 'primary');
  const secondaryLinks = data.links.filter(l => l.type === 'secondary');
  const socialLinks = data.links.filter(l => l.type === 'social');

  // Determine which avatar to show
  const currentAvatar = isDark && data.avatarUrlDark ? data.avatarUrlDark : data.avatarUrl;

  return (
    <div className="w-full max-w-md sm:max-w-[500px] relative z-10">
        {/* Glow Effects - Adjusted size and positioning for mobile safety */}
        <div className="absolute -top-16 -left-4 sm:-top-24 sm:-left-24 w-32 h-32 sm:w-48 sm:h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-16 -right-4 sm:-bottom-24 sm:-right-24 w-32 h-32 sm:w-48 sm:h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        {/* Card Container with Enhanced Shadows */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 dark:border-gray-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-shadow duration-300">
            
            {/* Header Section */}
            <div className="p-6 sm:p-10 pb-6 sm:pb-8 flex flex-col items-center text-center">
                <div className="relative mb-5 group cursor-default">
                    {/* Updated Glow Gradient: Cyan to Blue */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur"></div>
                    <img
                    src={currentAvatar}
                    alt={data.name}
                    className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl transition-all duration-300 group-hover:scale-[1.02]"
                    />
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{data.name}</h1>
                    {data.isVerified && <VerifiedBadge />}
                </div>
                
                <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 mb-4 sm:mb-5 border border-blue-100 dark:border-blue-800">
                    {data.role}
                </span>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-[95%]">
                    {data.bio}
                </p>

                {/* Location & Email Pill - Improved Flex behavior for small screens */}
                <div className="flex flex-col min-[350px]:flex-row w-full gap-2 sm:gap-3 justify-center mb-2">
                    <div className="flex-1 min-w-0 flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors duration-200">
                        <MapPin size={14} className="mr-1.5 sm:mr-2 shrink-0" />
                        <span className="truncate">{data.location}</span>
                    </div>
                    
                    <button 
                        onClick={handleCopy}
                        className="flex-1 min-w-0 group flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-200 cursor-pointer"
                    >
                        {copied ? (
                            <>
                                <Check size={14} className="mr-1.5 sm:mr-2 text-green-500 shrink-0" />
                                <span className="text-green-600 dark:text-green-400 font-medium truncate">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Mail size={14} className="mr-1.5 sm:mr-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0" />
                                <span className="truncate group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">{data.email}</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Links Section */}
            <div className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                
                {/* Primary Hero Link */}
                {primaryLink && (
                    <a
                        href={primaryLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full flex items-center justify-between p-4 sm:p-5 bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-gray-700 dark:hover:border-gray-300"
                    >
                        {/* Subtle inner shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out rounded-2xl pointer-events-none"></div>

                        <div className="flex items-center gap-3 sm:gap-4 relative z-10 overflow-hidden w-full">
                            <div className="p-2.5 sm:p-3 bg-white/10 dark:bg-gray-200 rounded-xl text-white dark:text-black shrink-0 group-hover:bg-white/20 dark:group-hover:bg-gray-300 transition-colors">
                                <primaryLink.icon size={20} className="sm:w-6 sm:h-6" />
                            </div>
                            <div className="flex flex-col text-left min-w-0 flex-1">
                                <span className="font-bold text-white dark:text-black text-base sm:text-lg truncate block group-hover:text-gray-200 dark:group-hover:text-gray-700 transition-colors">{primaryLink.label}</span>
                                <span className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm truncate block">Featured Project</span>
                            </div>
                            <ArrowRight size={20} className="text-gray-400 group-hover:text-white dark:group-hover:text-black group-hover:translate-x-1 transition-all duration-300 relative z-10 shrink-0 ml-2" />
                        </div>
                    </a>
                )}

                {/* Secondary Grid (LinkedIn / GitHub) */}
                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 sm:gap-4">
                    {secondaryLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center min-[420px]:justify-start gap-3 p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group w-full"
                        >
                            <link.icon size={20} className="sm:w-[22px] sm:h-[22px] text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0" />
                            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm sm:text-base truncate group-hover:text-black dark:group-hover:text-white transition-colors">{link.label}</span>
                        </a>
                    ))}
                </div>

                {/* Social Icon Row */}
                <div className="flex justify-center gap-2 sm:gap-3 pt-2 sm:pt-3 pb-2 flex-wrap">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            aria-label={link.label}
                        >
                            <link.icon size={22} className="sm:w-6 sm:h-6" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};
