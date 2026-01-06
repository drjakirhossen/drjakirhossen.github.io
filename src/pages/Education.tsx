import PageShell from "@/components/layout/PageShell";
import { profile } from "@/data/profile";
import { CardSpotlight } from "@/components/cards/CardSpotlight";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Education = () => {
  const trainingHighlights = [
    {
      title: "\"Teaching and Learning in Higher Education: Enhancing Academic Practice\" (Teaching Methodology)",
      details: "Training COURSE in MMU, Melaka, Malaysia, 13th - 15th October 2009.",
    },
    {
      title: "\"Delivering High Impact Training\"",
      details: "Training COURSE in MMU, Melaka, Malaysia, 1st - 2nd December 2010.",
    },
    {
      title: "\"Personal Empowerment for Organizational Excellence\"",
      details: "Training COURSE in MMU, Melaka, Malaysia, 3rd - 4th April 2012.",
    },
    {
      title: "\"Teaming for Quantum Growth\"",
      details: "Training COURSE in MMU, Melaka, Malaysia, 15th - 16th October 2012.",
    },
    {
      title: "\"Introduction to SCILAB: An Alternative to MATLAB\"",
      details: "Training WORKSHOP in MMU, Melaka, Malaysia, 9th October 2013.",
    },
    {
      title: "\"Unzipping Your Employee Potential Through Coaching, Counselling, and Mentoring\"",
      details: "Training COURSE in MMU, Melaka, Malaysia, 13th - 14th November 2013.",
    },
    {
      title: "\"Student Centered Learning\"",
      details: "Training COURSE in MMU, Melaka, Malaysia, 16th - 17th November 2013.",
    },
    {
      title: "\"Outcome Based Education (OBE)\"",
      details: "Training COURSE in MMU, Melaka, Malaysia, 21st November 2013.",
    },
    {
      title: "\"Publishing in Top Tier Journals\"",
      details: "By Infinity Training and Development, Training COURSE in MMU, Melaka, Malaysia, 22nd - 23rd December 2014.",
    },
    {
      title: "\"Artificial Intelligence with SCILAB\"",
      details: "By TRITY Technology, Training COURSE in MMU, Melaka, Malaysia, 29 - 30 January 2015.",
    },
    {
      title: "\"Post Graduate Supervisory Workshop\"",
      details: "Training COURSE in MMU, Melaka, Malaysia, 8th November 2017.",
    },
    {
      title: "\"STEM Discovery Camp\"",
      details: "By National Marketing and Enrollment, Training COURSE in MMU, Melaka, Malaysia, 28 April 2018.",
    },
    {
      title: "OIP-\"Smart Campus Design Challenge\"",
      details: "Telkom Research and Development Sdn Bhd, participated on 30th May 2018.",
    },
    {
      title: "\"TRAIN THE TRAINER\"",
      details: "Training COURSE in MMU, Cyberjaya, Malaysia, 19th - 23rd March 2018 (HRDF Certified).",
    },
    {
      title: "\"Overcoming Post-Pandemic Challenges: What Skills Do Engineering Graduate Needs\"",
      details: "FET IILC Virtual Industry Forum, 18th Dec 2020.",
    },
    {
      title: "\"Electric Vehicles: The Malaysia Future in Your Hands\"",
      details: "Virtual Workshop, organized by UPM and IEEE Malaysia Chapter on 29th April 2021.",
    },
    {
      title: "\"IoT and Home Automation Forum\"",
      details: "Participated in the online event, 21st May 2022.",
    },
  ];
  return (
    <PageShell
      title="Education"
      subtitle="Academic qualifications and degrees"
      align="center"
    >
      <section className="container px-4 pb-16 md:pb-24 relative z-10 space-y-12">
        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {profile.education.map((item) => (
            <CardSpotlight key={`${item.degree}-${item.institution}`} className="border-2 border-white/10">
              <div className="relative h-full p-6">
                <h3 className="text-lg font-semibold mb-2">{item.degree}</h3>
                <p className="text-sm text-primary mb-2">{item.institution}</p>
                <p className="text-xs text-gray-400 mb-4">{item.period}</p>
                <p className="text-sm text-gray-300 mb-3">{item.summary}</p>
                {item.highlights?.length ? (
                  <ul className="space-y-2 text-sm text-gray-400">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </CardSpotlight>
          ))}
        </div>
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 max-w-5xl mx-auto">
          <h2 className="text-lg md:text-2xl font-semibold mb-6 text-center">
            Selected Training Course Certificate / Workshop Attended
          </h2>
          <ol className="space-y-4 text-sm md:text-base text-gray-300 list-decimal pl-5">
            {trainingHighlights.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-gray-200">{item.title}</p>
                <p className="text-gray-400">{item.details}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 max-w-5xl mx-auto">
          <h2 className="text-lg md:text-2xl font-semibold mb-6 text-center">
            Professional Online Course Certificate
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Name</TableHead>
                <TableHead>Institute</TableHead>
                <TableHead>Issuer</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Introduction to Data Science</TableCell>
                <TableCell>University of Michigan</TableCell>
                <TableCell>Coursera</TableCell>
                <TableCell>4 weeks</TableCell>
                <TableCell>2020</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Python Basic</TableCell>
                <TableCell>University of Michigan</TableCell>
                <TableCell>Coursera</TableCell>
                <TableCell>4 weeks</TableCell>
                <TableCell>2020</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="min-w-[260px]">
                  Applied Plotting, Charting and Data Representation in Python
                </TableCell>
                <TableCell>University of Michigan</TableCell>
                <TableCell>Coursera</TableCell>
                <TableCell>4 weeks</TableCell>
                <TableCell>2020</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Applied Machine Learning in Python</TableCell>
                <TableCell>University of Michigan</TableCell>
                <TableCell>Coursera</TableCell>
                <TableCell>4 weeks</TableCell>
                <TableCell>2020</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </PageShell>
  );
};

export default Education;

