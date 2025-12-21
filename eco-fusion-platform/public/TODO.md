# Public Assets TODO

## Overview
Static assets served directly by Next.js.

## Structure
```
public/
├── thumbnails/          # Course thumbnail images
├── icons/               # (Suggested) App icons
├── images/              # (Suggested) Static images
├── favicon.ico          # Site favicon
└── *.svg                # Vector icons
```

## Current Tasks

### High Priority
- [ ] Create proper favicon set (multiple sizes)
- [ ] Add Open Graph images for social sharing
- [ ] Generate course thumbnails for all 59 courses (only 5 exist)
- [ ] Optimize existing images

### Medium Priority
- [ ] Create logo variants (dark/light)
- [ ] Add placeholder images for missing content
- [ ] Create loading animations/spinners
- [ ] Add app icons for PWA

### Low Priority
- [ ] Create icon sprite sheet
- [ ] Add illustration assets
- [ ] Create onboarding graphics

## Missing Thumbnails
Currently only 5 thumbnails exist:
- thumb_101_food_systems_*.png
- thumb_102_aquaponics_*.png
- thumb_103_hydroponics_*.png
- thumb_104_plant_science_*.png
- thumb_105_env_control_*.png

Need thumbnails for courses 106-505 (54 more thumbnails needed)

## Image Guidelines
- Thumbnails: 800x450px (16:9 ratio)
- Use WebP format when possible
- Compress all images before adding
- Use descriptive file names
