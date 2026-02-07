# Images Directory

This directory contains all the images used in the website. Please organize your images according to the following structure:

## Folder Structure

### `/images/portfolio/`
Place all portfolio project images here. The naming convention should match the image paths in `constants.tsx`:

- `architecture-hennur.jpg` - Architecture project in Hennur
- `architecture-ullal.jpg` - Architecture project in Ullal
- `architecture-banaswadi.jpg` - Architecture project in Banaswadi
- `architecture-byrathi.jpg` - Architecture project in Byrathi
- `interior-hennur.jpg` - Interior project in Hennur
- `interior-horamavu.jpg` - Interior project in Horamavu
- `interior-horamavu-agara.jpg` - Interior project in Horamavu Agara
- `interior-kamanahalli.jpg` - Interior project in Kamanahalli
- `construction-sarjapura.jpg` - Construction project in Sarjapura
- `construction-byrathi.jpg` - Construction project in Byrathi
- `remodelling-hbr.jpg` - Remodelling project in HBR Layout
- `remodelling-kamanahalli.jpg` - Remodelling project in Kamanahalli

### `/images/hero/`
- `hero-image.jpg` - Main hero section background image (recommended: 2000px width)
- `cta-background.jpg` - Background image for the final CTA section (recommended: 1920x1080px)

### `/images/about/`
- `about-image.jpg` - About page main image (recommended: 1000px width, 4:5 aspect ratio)

### `/images/before-after/`
- `before.jpg` - Before image for the slider (recommended: 1200px width)
- `after.jpg` - After image for the slider (recommended: 1200px width)

## Image Requirements

- **Format**: JPG or PNG
- **Optimization**: Compress images for web to reduce load times
- **Aspect Ratios**: 
  - Portfolio images: 4:5 (portrait)
  - Hero images: 16:9 or similar wide format
  - About image: 4:5 (portrait)

## Notes

- All images are referenced using absolute paths starting with `/images/`
- In Vite, files in the `public` folder are served from the root URL
- Make sure image filenames match exactly (case-sensitive) with the paths in the code
