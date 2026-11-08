// Ganti warna / font / bentuk potongan sudut di sini untuk re-brand template.
export const theme = {
  colors: { bg: '#e9eaea', paper: '#f6f6f4', accent: '#e8541a', soft: '#d5dcdb', ink: '#161616', muted: '#6b6b6b' },
  font: {
    family: "'Inter Tight', system-ui, sans-serif",
    url: 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap'
  },
  cut: 'clamp(1rem, 2.3cqw, 3rem)', // sudut miring (chamfer), skala mengikuti lebar slide
  grayscaleImages: true // foto dibuat hitam-putih seperti referensi
};
