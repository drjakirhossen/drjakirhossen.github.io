# Quick Start Guide - Dr. Jakir Hossen's Academic Website

## Prerequisites
- Hugo Extended version installed (https://gohugo.io/installation/)
- Go (if not already installed with Hugo)

## Running the Website Locally

### Option 1: Using Hugo Command
```powershell
# Navigate to the project directory
cd "f:\System\Desktop\jakir-sir\noble-aurora"

# Run the development server
hugo server
```

The website will be available at: http://localhost:1313

### Option 2: Using npm (if package.json is configured)
```powershell
# Install dependencies
npm install

# Run development server
npm run dev
```

## Building the Website

To build the static website for deployment:

```powershell
# Build the website
hugo

# The built files will be in the 'public' folder
```

## Common Commands

### Start Development Server
```powershell
hugo server
```

### Start with Draft Content
```powershell
hugo server -D
```

### Build for Production
```powershell
hugo --minify
```

### Clean Public Directory
```powershell
Remove-Item -Recurse -Force public
```

## File Structure

```
noble-aurora/
├── config/
│   └── _default/          # Configuration files
│       ├── hugo.yaml      # Main Hugo config
│       ├── params.yaml    # Site parameters
│       ├── menus.yaml     # Navigation menus
│       └── languages.yaml # Language settings
├── content/
│   ├── authors/
│   │   └── admin/         # Your profile
│   ├── publications/      # Your publications
│   ├── projects/          # Research projects
│   ├── blog/             # Blog posts
│   └── _index.md         # Homepage
├── static/
│   └── uploads/
│       └── resume.pdf     # Your CV
└── assets/               # Images and media

```

## Updating Content

### Update Your Profile
Edit: `content/authors/admin/_index.md`

### Add New Publication
1. Create folder in `content/publications/`
2. Add `index.md` file
3. (Optional) Add PDF and citation files

### Add New Project
1. Create folder in `content/projects/`
2. Add `index.md` file
3. (Optional) Add featured image

### Add New Blog Post
1. Create folder in `content/blog/`
2. Add `index.md` file
3. (Optional) Add images

### Update CV
Replace: `static/uploads/resume.pdf`

## Customization

### Change Colors/Theme
Edit: `config/_default/params.yaml`
Look for the `appearance:` section

### Update Navigation Menu
Edit: `config/_default/menus.yaml`

### Update Site Title/Description
Edit: `config/_default/hugo.yaml` and `params.yaml`

## Deployment Options

### Option 1: Netlify (Recommended)
1. Push code to GitHub
2. Connect Netlify to your repository
3. Build command: `hugo --minify`
4. Publish directory: `public`

### Option 2: GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for automatic builds
3. Point to `gh-pages` branch

### Option 3: Vercel
1. Import project from GitHub
2. Vercel auto-detects Hugo
3. Deploys automatically on push

## Troubleshooting

### Hugo Not Found
```powershell
# Check Hugo installation
hugo version

# If not installed, download from:
# https://gohugo.io/installation/windows/
```

### Module Not Found Errors
```powershell
# Update Hugo modules
hugo mod get -u
hugo mod tidy
```

### CSS/Styling Issues
```powershell
# Clear cache and rebuild
Remove-Item -Recurse -Force resources
hugo server
```

### Changes Not Showing
- Hard refresh browser (Ctrl + F5)
- Clear browser cache
- Restart Hugo server

## Important Files

- **Main Config**: `config/_default/hugo.yaml`
- **Site Parameters**: `config/_default/params.yaml`
- **Your Profile**: `content/authors/admin/_index.md`
- **Homepage**: `content/_index.md`
- **Your CV**: `static/uploads/resume.pdf`

## Getting Help

- HugoBlox Documentation: https://docs.hugoblox.com/
- Hugo Documentation: https://gohugo.io/documentation/
- HugoBlox Discord: https://discord.gg/z8wNYzb

## Content Update Summary

All template content has been updated with Dr. Jakir Hossen's information:
- ✅ Personal profile and contact information
- ✅ Education and work experience
- ✅ Research interests and skills
- ✅ Recent publications (3 papers)
- ✅ Major research projects (3 projects)
- ✅ Blog posts (2 updated)
- ✅ Awards and achievements
- ✅ CV file replaced with actual CV

For detailed changes, see: `UPDATES_SUMMARY.md`

## Support

For questions or issues:
- Email: jakir.hossen@mmu.edu.my
- LinkedIn: https://www.linkedin.com/in/dr-md-jakir-hossen-67016239/

---

*Last Updated: November 25, 2024*
