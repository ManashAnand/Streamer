import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useMemo, useState } from "react";
import { motion } from 'motion/react';



export function VaultTable() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [sortField, setSortField] = useState<"streamCount" | "dateStreamed">("streamCount");


  const handleSortClick = (field: "streamCount" | "dateStreamed") => {
    console.log("Sorting by:", field);
    if (field === sortField) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };
  const sortedStreams = useMemo(() => {


    const streams = [
      {
        songName: "Kesariya",
        artist: "Arijit Singh",
        dateStreamed: "2023-06-01",
        streamCount: 1000000,
        userId: "user123",
        duration: "4:28",
        genre: "Romantic",
        album: "Brahmastra",
        language: "Hindi",
      },
      {
        songName: "Raataan Lambiyan",
        artist: "Jubin Nautiyal",
        dateStreamed: "2023-06-02",
        streamCount: 850000,
        userId: "user456",
        duration: "3:50",
        genre: "Romantic",
        album: "Shershaah",
        language: "Hindi",
      },
      {
        songName: "Param Sundari",
        artist: "Shreya Ghoshal",
        dateStreamed: "2023-06-03",
        streamCount: 720000,
        userId: "user789",
        duration: "3:15",
        genre: "Dance",
        album: "Mimi",
        language: "Hindi",
      },
      {
        songName: "Teri Mitti",
        artist: "B Praak",
        dateStreamed: "2023-06-04",
        streamCount: 680000,
        userId: "user012",
        duration: "5:12",
        genre: "Patriotic",
        album: "Kesari",
        language: "Hindi",
      },
      {
        songName: "Ranjha",
        artist: "Jasleen Royal",
        dateStreamed: "2023-06-05",
        streamCount: 900,
        userId: "user345",
        duration: "3:48",
        genre: "Romantic",
        album: "Shershaah",
        language: "Hindi",
      },
    ]

    const sorted = [...streams];
    sorted.sort((a, b) => {
      if (sortField === "streamCount") {
        return sortOrder === "asc" ? a.streamCount - b.streamCount : b.streamCount - a.streamCount;
      } else {
        const dateA = new Date(a.dateStreamed);
        const dateB = new Date(b.dateStreamed);
        return sortOrder === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
      }
    });
    return sorted;
  }, [ sortField, sortOrder]);


  return (

    <motion.div layout transition={{ duration: 1.2 }} >
      <Table>
        <TableHeader className="text-white">
          <TableRow>
            <TableHead className="text-white">Song Name</TableHead>
            <TableHead className="text-white">Originated</TableHead>
            <TableHead className="text-white">Duration</TableHead>
            <TableHead className="text-white">Genre</TableHead>
            <TableHead className="text-white">Rated by user</TableHead>
            <TableHead className="text-white ">
              <span className="flex justify-start items-center" >
                <button onClick={() => handleSortClick("streamCount")}>
                  Stream Count {sortField === "streamCount" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                </button>
              </span>
            </TableHead>
            <TableHead className="text-white ">
              <span className="flex justify-start items-center" >
                <button onClick={() => handleSortClick("dateStreamed")}>
                  Date Streamed {sortField === "dateStreamed" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                </button>

              </span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedStreams.map((stream) => (
            <TableRow key={stream.songName} >
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">

                  <div>
                    <div className="font-medium">{stream.songName}</div>
                    <div className="text-xs text-muted-foreground">{stream.dateStreamed}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-green-500">{stream.album}</TableCell>
              <TableCell>{stream.duration}</TableCell>
              <TableCell>{stream.genre}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${stream.streamCount > 1000 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    }`}
                >
                  {stream.streamCount > 1000 ? "Rated Good" : "Rated Bad"}
                </span>
              </TableCell>
              <TableCell>
                {stream.streamCount}

              </TableCell>

              <TableCell>
                {stream.dateStreamed}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  )
}

