import { Mail, Linkedin, Facebook, GraduationCap, Link as LinkIcon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const Footer = () => {
  return (
    <footer className="w-full py-6 md:py-12 mt-8 md:mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg font-semibold">{profile.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Associate Professor in Robotics and Automation focusing on AI, data analytics, IoT, and robotics control.
              </p>
              <div className="flex space-x-2 -ml-2">
                {profile.emails.map((email) => (
                  <Button key={email} variant="ghost" size="icon" asChild>
                    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                      <Mail className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
                <Button variant="ghost" size="icon" asChild>
                  <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={profile.social.scholar} target="_blank" rel="noopener noreferrer">
                    <GraduationCap className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={profile.social.orcid} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-4 hidden md:block">
              <h4 className="text-base font-semibold">Research</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/bio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Bio
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="/education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="/experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 hidden md:block">
              <h4 className="text-base font-semibold">Expertise</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-sm text-muted-foreground">AI & Machine Learning</span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">Data Analytics</span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">Anomaly Detection</span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">Robotics Control</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 hidden md:block">
              <h4 className="text-base font-semibold">Contact</h4>
              <ul className="space-y-2">
                {profile.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      {email}
                    </a>
                  </li>
                ))}
                <li className="text-sm text-muted-foreground inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 md:mt-8 pt-4 md:pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



