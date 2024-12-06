import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

function AppliedJobTable() {
  return (
    <div>
      <Table>
        <TableCaption>A List of your applied job</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-black">Date</TableHead>
            <TableHead className="font-bold text-black">Job Role</TableHead>
            <TableHead className="font-bold text-black">Company</TableHead>
            <TableHead className="text-right font-bold text-black">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1, 2, 3, 4].map((item, idx) => (
                    <TableRow key={idx}>
                        <TableCell>06-12-2024</TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>MicroSoft Private Limited</TableCell>
                        <TableCell className="text-right font-bold">Pending</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  );
}

export default AppliedJobTable;
