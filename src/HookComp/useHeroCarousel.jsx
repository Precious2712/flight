
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    title: "Explore Dream Destinations",
    subtitle: "Up to 30% off on international flights"
  },
  {
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
    title: "Summer Getaways",
    subtitle: "Special deals on beach destinations"
  },
  {
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563",
    title: "Business Class Offers",
    subtitle: "Luxury travel at premium rates"
  },
  {
    image: "https://images.unsplash.com/photo-1520437358207-323b43b50729",
    title: "Family Vacation Packages",
    subtitle: "Create unforgettable memories together"
  },
  {
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
    title: "Weekend Escapes",
    subtitle: "Short trips, lasting memories"
  },
  {
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96",
    title: "Island Paradise Deals",
    subtitle: "Discover tropical destinations"
  },
  {
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f",
    title: "First Class Experience",
    subtitle: "Premium service at special rates"
  },
  {
    image: "https://images.unsplash.com/photo-1551102696-939e5527c0d1",
    title: "Adventure Awaits",
    subtitle: "Explore exotic locations"
  },
  {
    image: "https://images.unsplash.com/photo-1552793084-49132af00ff1",
    title: "City Break Specials",
    subtitle: "Urban exploration packages"
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    title: "Holiday Specials",
    subtitle: "Seasonal deals you can't miss"
  }
];

export const useHeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    currentSlide: heroSlides[currentIndex],
    totalSlides: heroSlides.length
  };
};
