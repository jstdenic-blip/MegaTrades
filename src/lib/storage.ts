const STORAGE_KEYS = {
  ADMIN_PASS: 'gmf_admin_pass',
  GALLERY: 'gmf_gallery_images',
  SESSION: 'gmf_admin_session'
};

export interface GalleryImage {
  id: string;
  url: string;
  description: string;
  date: string;
}

// Initialize default data if empty
if (!localStorage.getItem(STORAGE_KEYS.ADMIN_PASS)) {
  localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, 'admin123');
}

if (!localStorage.getItem(STORAGE_KEYS.GALLERY)) {
  const defaultImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=800&auto=format&fit=crop',
      description: 'EUR/USD Market Structure Shift',
      date: new Date().toISOString()
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&auto=format&fit=crop',
      description: 'Weekly Profit Analysis',
      date: new Date().toISOString()
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop',
      description: 'Institutional Order Flow',
      date: new Date().toISOString()
    }
  ];
  localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(defaultImages));
}

export const db = {
  checkPassword: (password: string) => {
    return password === localStorage.getItem(STORAGE_KEYS.ADMIN_PASS);
  },
  
  updatePassword: (newPassword: string) => {
    localStorage.setItem(STORAGE_KEYS.ADMIN_PASS, newPassword);
    return true;
  },

  getImages: (): GalleryImage[] => {
    const data = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return data ? JSON.parse(data) : [];
  },

  addImage: (image: Omit<GalleryImage, 'id' | 'date'>) => {
    const images = db.getImages();
    const newImage = {
      ...image,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify([newImage, ...images]));
      return { success: true, image: newImage };
    } catch (e) {
      return { success: false, error: 'Storage full. Try deleting images or using URL instead of file upload.' };
    }
  },

  deleteImage: (id: string) => {
    const images = db.getImages().filter(img => img.id !== id);
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(images));
  },

  login: () => {
    localStorage.setItem(STORAGE_KEYS.SESSION, 'true');
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
  },

  isAuthenticated: () => {
    return localStorage.getItem(STORAGE_KEYS.SESSION) === 'true';
  }
};