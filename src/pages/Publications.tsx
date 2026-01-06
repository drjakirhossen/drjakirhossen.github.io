import PageShell from "@/components/layout/PageShell";
import {
  publications,
  books,
  patents,
  projectGrants,
} from "@/data/academic";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Publications = () => {
  const publicationColors = [
    "text-emerald-400",
    "text-sky-400",
    "text-amber-400",
    "text-rose-400",
    "text-indigo-400",
    "text-cyan-400",
  ];
  const bookColors = [
    "text-emerald-400",
    "text-sky-400",
    "text-amber-400",
    "text-violet-400",
    "text-rose-400",
    "text-cyan-400",
  ];
  const patentColors = [
    "text-amber-400",
    "text-emerald-400",
    "text-sky-400",
    "text-rose-400",
    "text-indigo-400",
    "text-cyan-400",
  ];

  return (
    <PageShell
      title="Publications"
      subtitle="Selected journal articles, books, chapters, patents, and project grants."
    >
      <section className="container px-4 pb-16 md:pb-24 relative z-10 space-y-12">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Journal Publications</h2>
          <div className="grid grid-cols-1 gap-6">
            {publications.map((publication, index) => (
              <div
                key={publication.title}
                className="publication-card p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-300 hover:bg-black/60 hover:border-green-500/30"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <span
                    className={`text-xs md:text-sm font-medium ${publicationColors[index % publicationColors.length]}`}
                  >
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
            {books.map((book, index) => (
              <div
                key={book.title}
                className="p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <span
                    className={`text-xs md:text-sm font-medium ${bookColors[index % bookColors.length]}`}
                  >
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
            {patents.map((patent, index) => (
              <div
                key={patent.title}
                className="p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs md:text-sm font-medium ${patentColors[index % patentColors.length]}`}
                  >
                    Patent
                  </span>
                  <span className="text-xs md:text-sm text-gray-400">{patent.year}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2">{patent.title}</h3>
                <p className="text-sm text-gray-500">{patent.publication}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Project Grants</h2>
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
        </div>
      </section>
    </PageShell>
  );
};

export default Publications;

