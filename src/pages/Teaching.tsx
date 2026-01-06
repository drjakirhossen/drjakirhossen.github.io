import PageShell from "@/components/layout/PageShell";
import {
  academicPosts,
  taughtSubjects,
  teachingEvaluations,
  postgraduateSupervision,
  fypSupervision,
  thesisExaminers,
  consultations,
} from "@/data/academic";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Teaching = () => {
  return (
    <PageShell
      title="Teaching"
      subtitle="Teaching portfolio, supervision, evaluations, and training activities."
    >
      <section className="container px-4 pb-16 md:pb-24 relative z-10 space-y-12">
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
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {taughtSubjects.map((subject) => (
                <div key={subject} className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-green-400 shrink-0" aria-hidden="true" />
                  <span>{subject}</span>
                </div>
              ))}
            </div>
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
                  <TableHead>Academic Evaluation (out of 5)</TableHead>
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


      </section>
    </PageShell>
  );
};

export default Teaching;

