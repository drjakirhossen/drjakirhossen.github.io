import { motion } from "framer-motion";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PixelGridBackdrop from "@/components/effects/PixelGridBackdrop";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { profile } from "@/data/profile";
import {
  publications,
  books,
  patents,
  projectGrants,
  academicPosts,
  taughtSubjects,
  teachingEvaluations,
  postgraduateSupervision,
  fypSupervision,
  thesisExaminers,
  consultations,
  trainingCourses,
  onlineCourses,
  recognitionService,
  memberships,
} from "@/data/academic";

const Academic = () => {
  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
      <div className="fixed inset-0 z-0 bg-black overflow-hidden">
        <div className="absolute top-0 right-1/4 md:right-1/3 w-0.5 md:w-1 h-full bg-gradient-to-b from-transparent via-blue-400/60 md:via-blue-400/80 to-transparent transform rotate-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 md:via-white/60 to-transparent blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-300/30 md:via-cyan-300/40 to-transparent blur-md"></div>
        </div>
        <div className="hidden md:block absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent transform rotate-6 opacity-70">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent blur-sm"></div>
        </div>
        <div className="hidden md:block absolute top-0 right-2/5 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300/50 to-transparent transform -rotate-3 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent blur-sm"></div>
        </div>
        <div className="absolute top-1/4 right-1/4 md:right-1/3 w-16 h-16 md:w-32 md:h-32 transform translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 md:from-blue-400/30 via-cyan-300/15 md:via-cyan-300/20 to-transparent rounded-full blur-xl md:blur-2xl animate-pulse"></div>
          <div className="absolute inset-2 md:inset-4 bg-gradient-radial from-white/30 md:from-white/40 via-blue-200/20 md:via-blue-200/30 to-transparent rounded-full blur-lg md:blur-xl animate-pulse" style={{animationDuration: "3s"}}></div>
          <div className="absolute inset-4 md:inset-8 bg-gradient-radial from-cyan-100/40 md:from-cyan-100/60 via-blue-100/30 md:via-blue-100/40 to-transparent rounded-full blur-md md:blur-lg"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 md:from-blue-900/10 via-transparent to-purple-900/3 md:to-purple-900/5"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-800/3 md:via-blue-800/5 to-cyan-900/5 md:to-cyan-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 md:via-black/80 to-black/50 md:to-transparent"></div>
      </div>

      <Navigation />
      <PixelGridBackdrop />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-24 md:pt-40 pb-8 md:pb-12 z-10"
      >
        <div className="max-w-4xl relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-normal mb-4 tracking-tight text-left leading-tight">
            Academic Portfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 text-left leading-relaxed">
            Full academic record for {profile.name}, including publications, books, patents,
            project grants, teaching, supervision, training, and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="button-gradient" asChild>
              <a href="/jakir-hossen-cv.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </motion.section>

      <section className="container px-4 pb-16 md:pb-24 relative z-10">
        <Tabs defaultValue="publications" className="w-full">
          <TabsList className="flex flex-wrap gap-2 bg-black/40 backdrop-blur-sm">
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="grants">Project Grants</TabsTrigger>
            <TabsTrigger value="teaching">Teaching</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="service">Service</TabsTrigger>
          </TabsList>

          <TabsContent value="publications" className="mt-8 space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Journal Publications</h2>
              <div className="grid grid-cols-1 gap-6">
                {publications.map((publication) => (
                  <div
                    key={publication.title}
                    className="p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-300 hover:bg-black/60 hover:border-green-500/30"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <span className="text-xs md:text-sm font-medium text-green-400">
                        {publication.publication}
                      </span>
                      <span className="text-xs md:text-sm text-gray-400">{publication.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">{publication.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-2">{publication.authors}</p>
                    <p className="text-sm text-gray-500">{publication.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Books and Chapters</h2>
              <div className="grid grid-cols-1 gap-6">
                {books.map((book) => (
                  <div
                    key={book.title}
                    className="p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <span className="text-xs md:text-sm font-medium text-green-400">
                        {book.type}
                      </span>
                      <span className="text-xs md:text-sm text-gray-400">{book.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">{book.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-2">{book.authors}</p>
                    <p className="text-sm text-gray-500">{book.publication}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Patents and Copyrights</h2>
              <div className="grid grid-cols-1 gap-6">
                {patents.map((patent) => (
                  <div
                    key={patent.title}
                    className="p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs md:text-sm font-medium text-green-400">Patent</span>
                      <span className="text-xs md:text-sm text-gray-400">{patent.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">{patent.title}</h3>
                    <p className="text-sm text-gray-500">{patent.publication}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="grants" className="mt-8 space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold">Project Grants</h2>
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Title</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Agency</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projectGrants.map((grant) => (
                    <TableRow key={`${grant.title}-${grant.agency}`}>
                      <TableCell className="min-w-[220px]">{grant.title}</TableCell>
                      <TableCell>{grant.role}</TableCell>
                      <TableCell>{grant.agency}</TableCell>
                      <TableCell>{grant.amount}</TableCell>
                      <TableCell>{grant.duration}</TableCell>
                      <TableCell>{grant.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="teaching" className="mt-8 space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Academic Posts</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Position</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Institution</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {academicPosts.map((post) => (
                      <TableRow key={`${post.position}-${post.institution}`}>
                        <TableCell>{post.position}</TableCell>
                        <TableCell>{post.duration}</TableCell>
                        <TableCell>{post.department}</TableCell>
                        <TableCell>{post.institution}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Taught Subjects</h2>
              <div className="flex flex-wrap gap-2">
                {taughtSubjects.map((subject) => (
                  <span
                    key={subject}
                    className="text-xs md:text-sm text-green-400 border border-green-500/30 px-3 py-1 rounded-full"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Teaching Evaluation</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Year/Session</TableHead>
                      <TableHead>Programme</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Evaluation</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teachingEvaluations.map((item) => (
                      <TableRow key={`${item.session}-${item.subject}-${item.score}`}>
                        <TableCell>{item.session}</TableCell>
                        <TableCell>{item.programme}</TableCell>
                        <TableCell className="min-w-[220px]">{item.subject}</TableCell>
                        <TableCell>{item.score}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Postgraduate Supervision</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Research Title</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Field</TableHead>
                      <TableHead>Start</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {postgraduateSupervision.map((item) => (
                      <TableRow key={`${item.student}-${item.title}`}>
                        <TableCell>{item.student}</TableCell>
                        <TableCell className="min-w-[240px]">{item.title}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell className="min-w-[200px]">{item.field}</TableCell>
                        <TableCell>{item.startDate}</TableCell>
                        <TableCell>{item.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Final Year Project (FYP) Supervision</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Degree/Year</TableHead>
                      <TableHead>Title</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fypSupervision.map((item) => (
                      <TableRow key={`${item.student}-${item.title}`}>
                        <TableCell>{item.student}</TableCell>
                        <TableCell>{item.degreeYear}</TableCell>
                        <TableCell className="min-w-[240px]">{item.title}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Postgraduate Thesis Examiner</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Thesis Title</TableHead>
                      <TableHead>Candidate</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>Institute</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {thesisExaminers.map((item) => (
                      <TableRow key={`${item.title}-${item.candidate}`}>
                        <TableCell className="min-w-[240px]">{item.title}</TableCell>
                        <TableCell>{item.candidate}</TableCell>
                        <TableCell>{item.year}</TableCell>
                        <TableCell>{item.institute}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Consultation and Short Course Training</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Fees</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Scope</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {consultations.map((item) => (
                      <TableRow key={`${item.title}-${item.customer}`}>
                        <TableCell className="min-w-[200px]">{item.title}</TableCell>
                        <TableCell className="min-w-[220px]">{item.customer}</TableCell>
                        <TableCell>{item.duration}</TableCell>
                        <TableCell>{item.fees}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell>{item.scope}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="training" className="mt-8 space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Training Courses and Workshops</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Organizer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trainingCourses.map((item) => (
                      <TableRow key={`${item.name}-${item.date}`}>
                        <TableCell className="min-w-[220px]">{item.name}</TableCell>
                        <TableCell className="min-w-[200px]">{item.organizer}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.type}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Professional Online Courses</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Institute</TableHead>
                      <TableHead>Issuer</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Year</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {onlineCourses.map((item) => (
                      <TableRow key={`${item.course}-${item.year}`}>
                        <TableCell className="min-w-[200px]">{item.course}</TableCell>
                        <TableCell>{item.institute}</TableCell>
                        <TableCell>{item.issuer}</TableCell>
                        <TableCell>{item.duration}</TableCell>
                        <TableCell>{item.year}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="service" className="mt-8 space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Recognition and Service</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <ul className="space-y-3 text-sm md:text-base text-gray-300 list-disc pl-5">
                  {recognitionService.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Professional Memberships</h2>
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <ul className="space-y-3 text-sm md:text-base text-gray-300 list-disc pl-5">
                  {memberships.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <div className="bg-black/80 backdrop-blur-sm relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Academic;

