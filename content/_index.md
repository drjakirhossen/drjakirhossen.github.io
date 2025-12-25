---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ' '
        interests: ''
    design:
      # Apply a gradient background
      css_class: 'hbx-bg-gradient'
      css_style: 'text-align: left;'
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: markdown
    id: education
    content:
      title: '🎓 Education'
      subtitle: ''
      text: |-
        <style>
        .education-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-bottom: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .education-card:hover {
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 6px 12px -2px rgba(99, 102, 241, 0.15);
        }
        .education-card:hover .institution {
          color: #6366f1;
        }
        .education-icon {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 768px) {
          .education-icon {
            display: none;
          }
          .education-card {
            gap: 0;
          }
        }
        .education-icon svg {
          width: 32px;
          height: 32px;
          fill: none;
          stroke: #6366f1;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .education-content {
          flex: 1;
        }
        .education-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          margin-top: 0;
          color: #1f2937;
        }
        .education-content .institution {
          color: #6b7280;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .education-content p {
          margin-bottom: 0.5rem;
          line-height: 1.6;
          font-size: 0.9rem;
          color: #374151;
        }
        .education-content .details {
          color: #6b7280;
          font-size: 0.9rem;
        }
        </style>

        <div class="education-card">
          <div class="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>
          </div>
          <div class="education-content">
            <h3>PhD in Smart Technology and Robotics Engineering</h3>
            <p class="institution">University Putra Malaysia (UPM) | 2003 - 2012</p>
            <p>Research with Course Work (12 credits), CGPA - 4.00/4.00</p>
            <p><strong>Thesis:</strong> "A Framework of Modified Adaptive Neuro-Fuzzy Inference Engine"</p>
            <p class="details">Conducted at Intelligent System and Robotics Laboratory, Institute of Advanced Technology (ITMA), UPM.</p>
          </div>
        </div>

        <div class="education-card">
          <div class="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>
          </div>
          <div class="education-content">
            <h3>M.Sc. in Communication and Network Engineering</h3>
            <p class="institution">University Putra Malaysia (UPM) | 2000 - 2003</p>
            <p>Research Work (No course work)</p>
            <p><strong>Thesis:</strong> "Web-based Network Device Monitoring Tool Using Simple Network Management Protocol (SNMP)"</p>
            <p class="details">Department of Computer and Communication System Engineering, Faculty of Engineering, UPM.</p>
          </div>
        </div>

        <div class="education-card">
          <div class="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>
          </div>
          <div class="education-content">
            <h3>Higher Diploma in Computer Science and Engineering</h3>
            <p class="institution">National Youth Development and Self-employment Academy (NYDASA) | 1999</p>
            <p class="details">Department of Computer Science and Engineering, Dhaka, Bangladesh.</p>
            <p class="details">Date of Graduation: December 1999</p>
          </div>
        </div>

        <div class="education-card">
          <div class="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>
          </div>
          <div class="education-content">
            <h3>B.Sc. in Mechanical Engineering</h3>
            <p class="institution">Dhaka University of Engineering and Technology (DUET) | 1993 - 1997</p>
            <p class="details">Graduated from DUET (formerly BIT Dhaka), Bangladesh.</p>
          </div>
        </div>

        <div class="education-card">
          <div class="education-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>
          </div>
          <div class="education-content">
            <h3>Diploma in Automobile Engineering</h3>
            <p class="institution">Dinajpur Polytechnic Institute (DPI) | 1989 - 1992</p>
            <p class="details">Department of Power (Automobile) Engineering, Dinajpur, Bangladesh.</p>
          </div>
        </div>
    design:
      css_class: 'full-width-section'
  - block: markdown
    id: experience
    content:
      title: '💼 Experience'
      subtitle: ''
      text: |-
        <style>
        .experience-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-bottom: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .experience-card:hover {
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 6px 12px -2px rgba(99, 102, 241, 0.15);
        }
        .experience-card:hover .position {
          color: #6366f1;
        }
        .experience-icon {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 768px) {
          .experience-icon {
            display: none;
          }
          .experience-card {
            gap: 0;
          }
        }
        .experience-icon svg {
          width: 32px;
          height: 32px;
          fill: none;
          stroke: #6366f1;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .experience-content {
          flex: 1;
        }
        .experience-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          margin-top: 0;
          color: #1f2937;
        }
        .experience-content .position {
          color: #6b7280;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .experience-content p {
          margin-bottom: 0.5rem;
          line-height: 1.6;
          font-size: 0.9rem;
          color: #374151;
        }
        .experience-content .details {
          color: #6b7280;
          font-size: 0.9rem;
        }
        </style>

        <div class="experience-card">
          <div class="experience-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>
          </div>
          <div class="experience-content">
            <h3>Associate Professor</h3>
            <p class="position">Multimedia University (MMU), Melaka, Malaysia | January 2009 - Present (15+ years)</p>
            <p class="details">Faculty of Engineering and Technology (FET), Department of Robotics and Automation. Leading research in AI, Data Analytics, IoT, and Robotics with extensive teaching and administrative responsibilities.</p>
          </div>
        </div>

        <div class="experience-card">
          <div class="experience-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>
          </div>
          <div class="experience-content">
            <h3>Lecturer</h3>
            <p class="position">Legenda Education Group, Negeri Sembilan, Malaysia | January 2006 - December 2008</p>
            <p class="details">School of Electrical and Electronic Engineering, Bander University Technology Legenda. Teaching undergraduate and HND classes, supervising final year projects, conducting research, developing curriculum, and mentoring students.</p>
          </div>
        </div>

        <div class="experience-card">
          <div class="experience-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>
          </div>
          <div class="experience-content">
            <h3>Graduate Research Assistant (PhD)</h3>
            <p class="position">University Putra Malaysia (UPM) | September 2003 - December 2005</p>
            <p class="details">Institute of Advanced Technology (ITMA). Conducting research, teaching tutorial and demo classes for undergraduates, publishing papers, and participating in national and international conferences.</p>
          </div>
        </div>

        <div class="experience-card">
          <div class="experience-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>
          </div>
          <div class="experience-content">
            <h3>Graduate Research Assistant (Master's)</h3>
            <p class="position">University Putra Malaysia (UPM) | June 2000 - June 2003</p>
            <p class="details">Faculty of Engineering. Conducting research, teaching tutorial and demo classes for undergraduates, publishing papers, and participating in national and international conferences.</p>
          </div>
        </div>

        <div class="experience-card">
          <div class="experience-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>
          </div>
          <div class="experience-content">
            <h3>System Engineer</h3>
            <p class="position">Falcon Information Technology, Dhaka, Bangladesh | April 1999 - May 2000</p>
            <p class="details">Computer troubleshooting, software installation, and computer hardware assembly.</p>
          </div>
        </div>

        <div class="experience-card">
          <div class="experience-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>
          </div>
          <div class="experience-content">
            <h3>Assistant Engineer</h3>
            <p class="position">World Trade Enterprise, Dhaka, Bangladesh | November 1997 - September 1998</p>
            <p class="details">Marketing engineering goods as Sales Promotion Officer.</p>
          </div>
        </div>

        <div class="experience-card">
          <div class="experience-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/></svg>
          </div>
          <div class="experience-content">
            <h3>Lecturer (Part-time)</h3>
            <p class="position">Institute of Admission Center for Engineers, Dhaka, Bangladesh | January 1997 - December 1997</p>
            <p class="details">Lecturing on Physics, Mathematics and Engineering Subjects.</p>
          </div>
        </div>
    design:
      css_class: 'full-width-section'
  - block: collection
    content:
      title: Selected Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
  - block: cta-card
    demo: true # Only display this section in the Hugo Blox Builder demo site
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        Easily build anything with blocks - no-code required!

        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: 'bg-primary-300 dark:bg-primary-700'
        css_style: ''
---
