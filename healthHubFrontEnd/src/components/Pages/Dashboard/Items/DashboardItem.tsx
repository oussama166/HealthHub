import { columns } from "@/components/ui/columns";
import { DataTable } from "@/components/ui/datatable";
import { cn } from "@/lib/utils";
import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";

export const staticStyle = {
  section:
    "font-sans bg-white rounded-md flex justify-between items-center p-5",
};

const schedules = [
  {
    id: 1,
    title: "Meeting with Team",
    date: "2022-03-01",
    startTime: "10:00",
    endTime: "11:00",
    location: "Zoom",
    description: "Discuss project progress",
  },
  {
    id: 2,
    title: "Client Presentation",
    date: "2022-03-02",
    startTime: "14:00",
    endTime: "15:00",
    location: "Office",
    description: "Present final design to client",
  },
  {
    id: 3,
    title: "Code Review",
    date: "2022-03-03",
    startTime: "16:00",
    endTime: "17:00",
    location: "Slack",
    description: "Review code for new features",
  },

  {
    id: 723,
    title: "Meeting 7",
    date: "2023-01-20",
    startTime: "13:31",
    endTime: "18:58",
    location: "Zoom",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 126,
    title: "Meeting 12",
    date: "2024-01-14",
    startTime: "10:57",
    endTime: "16:53",
    location: "Office",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 425,
    title: "Meeting 24",
    date: "2023-10-11",
    startTime: "10:59",
    endTime: "14:22",
    location: "Zoom",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 789,
    title: "Meeting 20",
    date: "2024-10-22",
    startTime: "15:27",
    endTime: "18:30",
    location: "Slack",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 54,
    title: "Meeting 29",
    date: "2023-06-12",
    startTime: "10:57",
    endTime: "17:0",
    location: "Office",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 320,
    title: "Meeting 8",
    date: "2023-07-05",
    startTime: "17:54",
    endTime: "13:25",
    location: "Slack",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 397,
    title: "Meeting 22",
    date: "2024-07-02",
    startTime: "14:20",
    endTime: "18:15",
    location: "Slack",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 641,
    title: "Meeting 21",
    date: "2023-03-23",
    startTime: "15:44",
    endTime: "15:23",
    location: "Slack",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 604,
    title: "Meeting 26",
    date: "2024-11-17",
    startTime: "14:53",
    endTime: "17:22",
    location: "Slack",
    description: "Discuss project progress for 4 features",
  },
  {
    id: 687,
    title: "Meeting 5",
    date: "2024-02-26",
    startTime: "13:57",
    endTime: "17:10",
    location: "Zoom",
    description: "Discuss project progress for 6 features",
  },
  {
    id: 284,
    title: "Meeting 2",
    date: "2023-04-04",
    startTime: "14:12",
    endTime: "14:23",
    location: "Office",
    description: "Discuss project progress for 8 features",
  },
  {
    id: 370,
    title: "Meeting 30",
    date: "2024-04-20",
    startTime: "8:15",
    endTime: "18:45",
    location: "Office",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 312,
    title: "Meeting 10",
    date: "2024-02-18",
    startTime: "14:34",
    endTime: "15:16",
    location: "Slack",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 282,
    title: "Meeting 6",
    date: "2024-04-21",
    startTime: "12:55",
    endTime: "14:16",
    location: "Office",
    description: "Discuss project progress for 6 features",
  },
  {
    id: 644,
    title: "Meeting 14",
    date: "2023-07-18",
    startTime: "15:31",
    endTime: "13:6",
    location: "Zoom",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 983,
    title: "Meeting 24",
    date: "2023-04-15",
    startTime: "8:50",
    endTime: "15:55",
    location: "Zoom",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 30,
    title: "Meeting 18",
    date: "2024-07-14",
    startTime: "8:49",
    endTime: "17:34",
    location: "Slack",
    description: "Discuss project progress for 6 features",
  },
  {
    id: 906,
    title: "Meeting 28",
    date: "2024-09-27",
    startTime: "14:16",
    endTime: "15:41",
    location: "Office",
    description: "Discuss project progress for 8 features",
  },
  {
    id: 729,
    title: "Meeting 2",
    date: "2024-07-19",
    startTime: "12:46",
    endTime: "16:30",
    location: "Slack",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 387,
    title: "Meeting 1",
    date: "2023-01-01",
    startTime: "9:16",
    endTime: "18:38",
    location: "Slack",
    description: "Discuss project progress for 6 features",
  },
  {
    id: 425,
    title: "Meeting 8",
    date: "2023-04-14",
    startTime: "10:53",
    endTime: "18:21",
    location: "Office",
    description: "Discuss project progress for 8 features",
  },
  {
    id: 439,
    title: "Meeting 19",
    date: "2024-01-03",
    startTime: "10:2",
    endTime: "18:21",
    location: "Office",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 221,
    title: "Meeting 6",
    date: "2023-02-27",
    startTime: "17:35",
    endTime: "18:49",
    location: "Office",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 357,
    title: "Meeting 8",
    date: "2023-10-26",
    startTime: "11:59",
    endTime: "12:57",
    location: "Slack",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 735,
    title: "Meeting 24",
    date: "2024-03-04",
    startTime: "15:12",
    endTime: "13:5",
    location: "Zoom",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 565,
    title: "Meeting 22",
    date: "2023-04-26",
    startTime: "10:6",
    endTime: "17:31",
    location: "Office",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 526,
    title: "Meeting 16",
    date: "2024-05-07",
    startTime: "14:20",
    endTime: "17:19",
    location: "Office",
    description: "Discuss project progress for 4 features",
  },
  {
    id: 684,
    title: "Meeting 1",
    date: "2023-04-06",
    startTime: "10:20",
    endTime: "17:3",
    location: "Zoom",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 869,
    title: "Meeting 4",
    date: "2024-06-22",
    startTime: "15:21",
    endTime: "12:27",
    location: "Zoom",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 982,
    title: "Meeting 19",
    date: "2024-12-22",
    startTime: "10:39",
    endTime: "18:20",
    location: "Office",
    description: "Discuss project progress for 4 features",
  },
  {
    id: 212,
    title: "Meeting 30",
    date: "2023-05-26",
    startTime: "11:4",
    endTime: "14:57",
    location: "Slack",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 731,
    title: "Meeting 24",
    date: "2024-06-22",
    startTime: "8:17",
    endTime: "18:42",
    location: "Zoom",
    description: "Discuss project progress for 8 features",
  },
  {
    id: 52,
    title: "Meeting 3",
    date: "2023-07-24",
    startTime: "16:46",
    endTime: "16:8",
    location: "Slack",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 573,
    title: "Meeting 20",
    date: "2023-02-19",
    startTime: "17:35",
    endTime: "18:36",
    location: "Slack",
    description: "Discuss project progress for 4 features",
  },
  {
    id: 341,
    title: "Meeting 9",
    date: "2023-11-14",
    startTime: "17:39",
    endTime: "13:18",
    location: "Slack",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 666,
    title: "Meeting 4",
    date: "2024-06-14",
    startTime: "12:22",
    endTime: "15:13",
    location: "Office",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 488,
    title: "Meeting 24",
    date: "2024-07-01",
    startTime: "11:56",
    endTime: "18:21",
    location: "Zoom",
    description: "Discuss project progress for 6 features",
  },
  {
    id: 695,
    title: "Meeting 23",
    date: "2024-11-26",
    startTime: "15:57",
    endTime: "18:48",
    location: "Slack",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 867,
    title: "Meeting 14",
    date: "2024-08-03",
    startTime: "15:12",
    endTime: "14:43",
    location: "Slack",
    description: "Discuss project progress for 7 features",
  },
  {
    id: 945,
    title: "Meeting 3",
    date: "2023-03-20",
    startTime: "17:10",
    endTime: "18:36",
    location: "Office",
    description: "Discuss project progress for 6 features",
  },
  {
    id: 399,
    title: "Meeting 18",
    date: "2024-08-17",
    startTime: "14:27",
    endTime: "18:36",
    location: "Office",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 683,
    title: "Meeting 19",
    date: "2023-07-12",
    startTime: "15:7",
    endTime: "18:47",
    location: "Office",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 373,
    title: "Meeting 2",
    date: "2024-12-17",
    startTime: "15:29",
    endTime: "18:59",
    location: "Slack",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 181,
    title: "Meeting 29",
    date: "2023-09-11",
    startTime: "16:7",
    endTime: "14:13",
    location: "Zoom",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 314,
    title: "Meeting 7",
    date: "2023-09-01",
    startTime: "10:26",
    endTime: "12:28",
    location: "Zoom",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 784,
    title: "Meeting 3",
    date: "2023-01-13",
    startTime: "16:26",
    endTime: "18:47",
    location: "Slack",
    description: "Discuss project progress for 7 features",
  },
  {
    id: 234,
    title: "Meeting 13",
    date: "2023-11-18",
    startTime: "12:36",
    endTime: "17:59",
    location: "Zoom",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 82,
    title: "Meeting 27",
    date: "2024-03-27",
    startTime: "12:17",
    endTime: "17:39",
    location: "Slack",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 736,
    title: "Meeting 12",
    date: "2023-09-03",
    startTime: "9:26",
    endTime: "15:17",
    location: "Office",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 967,
    title: "Meeting 30",
    date: "2023-09-25",
    startTime: "8:30",
    endTime: "13:15",
    location: "Zoom",
    description: "Discuss project progress for 8 features",
  },
  {
    id: 107,
    title: "Meeting 26",
    date: "2023-01-02",
    startTime: "12:10",
    endTime: "18:32",
    location: "Slack",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 750,
    title: "Meeting 15",
    date: "2023-03-03",
    startTime: "11:16",
    endTime: "14:8",
    location: "Office",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 541,
    title: "Meeting 26",
    date: "2023-05-13",
    startTime: "16:4",
    endTime: "18:30",
    location: "Slack",
    description: "Discuss project progress for 7 features",
  },
  {
    id: 556,
    title: "Meeting 10",
    date: "2024-06-21",
    startTime: "16:47",
    endTime: "17:57",
    location: "Zoom",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 903,
    title: "Meeting 28",
    date: "2023-06-16",
    startTime: "13:18",
    endTime: "17:41",
    location: "Office",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 342,
    title: "Meeting 16",
    date: "2024-09-28",
    startTime: "17:35",
    endTime: "15:53",
    location: "Slack",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 821,
    title: "Meeting 24",
    date: "2024-12-28",
    startTime: "11:13",
    endTime: "16:19",
    location: "Office",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 702,
    title: "Meeting 18",
    date: "2023-09-08",
    startTime: "11:12",
    endTime: "15:11",
    location: "Slack",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 274,
    title: "Meeting 19",
    date: "2024-01-20",
    startTime: "10:16",
    endTime: "13:6",
    location: "Slack",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 680,
    title: "Meeting 29",
    date: "2024-09-18",
    startTime: "12:10",
    endTime: "12:28",
    location: "Slack",
    description: "Discuss project progress for 6 features",
  },
  {
    id: 907,
    title: "Meeting 30",
    date: "2023-12-17",
    startTime: "13:36",
    endTime: "17:18",
    location: "Zoom",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 458,
    title: "Meeting 16",
    date: "2024-07-02",
    startTime: "10:55",
    endTime: "15:4",
    location: "Slack",
    description: "Discuss project progress for 6 features",
  },
  {
    id: 564,
    title: "Meeting 21",
    date: "2023-01-02",
    startTime: "16:40",
    endTime: "16:6",
    location: "Slack",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 316,
    title: "Meeting 6",
    date: "2024-12-21",
    startTime: "11:21",
    endTime: "17:41",
    location: "Slack",
    description: "Discuss project progress for 7 features",
  },
  {
    id: 857,
    title: "Meeting 10",
    date: "2024-01-09",
    startTime: "13:38",
    endTime: "18:6",
    location: "Office",
    description: "Discuss project progress for 4 features",
  },
  {
    id: 501,
    title: "Meeting 11",
    date: "2024-04-22",
    startTime: "10:57",
    endTime: "16:9",
    location: "Office",
    description: "Discuss project progress for 8 features",
  },
  {
    id: 925,
    title: "Meeting 14",
    date: "2024-12-27",
    startTime: "17:11",
    endTime: "12:33",
    location: "Zoom",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 838,
    title: "Meeting 10",
    date: "2024-06-09",
    startTime: "8:49",
    endTime: "18:0",
    location: "Slack",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 639,
    title: "Meeting 9",
    date: "2024-09-14",
    startTime: "12:3",
    endTime: "18:11",
    location: "Slack",
    description: "Discuss project progress for 8 features",
  },
  {
    id: 779,
    title: "Meeting 28",
    date: "2024-11-03",
    startTime: "17:42",
    endTime: "14:5",
    location: "Office",
    description: "Discuss project progress for 7 features",
  },
  {
    id: 283,
    title: "Meeting 16",
    date: "2024-01-15",
    startTime: "13:29",
    endTime: "15:42",
    location: "Office",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 674,
    title: "Meeting 22",
    date: "2023-10-24",
    startTime: "15:46",
    endTime: "15:49",
    location: "Office",
    description: "Discuss project progress for 4 features",
  },
  {
    id: 746,
    title: "Meeting 20",
    date: "2023-12-10",
    startTime: "11:43",
    endTime: "14:13",
    location: "Zoom",
    description: "Discuss project progress for 7 features",
  },
  {
    id: 965,
    title: "Meeting 23",
    date: "2024-11-16",
    startTime: "16:43",
    endTime: "15:38",
    location: "Office",
    description: "Discuss project progress for 6 features",
  },
  {
    id: 214,
    title: "Meeting 1",
    date: "2024-07-21",
    startTime: "10:54",
    endTime: "15:44",
    location: "Office",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 460,
    title: "Meeting 27",
    date: "2023-08-07",
    startTime: "10:37",
    endTime: "15:34",
    location: "Zoom",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 996,
    title: "Meeting 5",
    date: "2023-05-05",
    startTime: "14:56",
    endTime: "16:26",
    location: "Office",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 289,
    title: "Meeting 15",
    date: "2024-01-26",
    startTime: "8:36",
    endTime: "18:53",
    location: "Slack",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 668,
    title: "Meeting 29",
    date: "2023-05-09",
    startTime: "16:42",
    endTime: "17:38",
    location: "Slack",
    description: "Discuss project progress for 4 features",
  },
  {
    id: 795,
    title: "Meeting 10",
    date: "2023-12-10",
    startTime: "15:18",
    endTime: "14:58",
    location: "Slack",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 540,
    title: "Meeting 29",
    date: "2024-09-11",
    startTime: "11:50",
    endTime: "17:7",
    location: "Zoom",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 259,
    title: "Meeting 25",
    date: "2024-05-04",
    startTime: "17:4",
    endTime: "17:26",
    location: "Slack",
    description: "Discuss project progress for 8 features",
  },
  {
    id: 867,
    title: "Meeting 29",
    date: "2024-09-17",
    startTime: "15:7",
    endTime: "18:52",
    location: "Zoom",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 72,
    title: "Meeting 18",
    date: "2023-02-05",
    startTime: "13:19",
    endTime: "18:51",
    location: "Zoom",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 345,
    title: "Meeting 16",
    date: "2024-03-01",
    startTime: "9:6",
    endTime: "18:20",
    location: "Office",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 49,
    title: "Meeting 8",
    date: "2024-01-01",
    startTime: "14:14",
    endTime: "16:31",
    location: "Zoom",
    description: "Discuss project progress for 4 features",
  },
  {
    id: 955,
    title: "Meeting 16",
    date: "2023-06-05",
    startTime: "13:34",
    endTime: "17:12",
    location: "Office",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 228,
    title: "Meeting 22",
    date: "2024-04-04",
    startTime: "12:20",
    endTime: "14:21",
    location: "Slack",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 328,
    title: "Meeting 3",
    date: "2024-03-04",
    startTime: "12:55",
    endTime: "18:18",
    location: "Slack",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 188,
    title: "Meeting 5",
    date: "2023-08-25",
    startTime: "11:55",
    endTime: "11:8",
    location: "Office",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 380,
    title: "Meeting 11",
    date: "2023-04-26",
    startTime: "9:55",
    endTime: "14:18",
    location: "Zoom",
    description: "Discuss project progress for 2 features",
  },
  {
    id: 847,
    title: "Meeting 21",
    date: "2024-06-10",
    startTime: "17:11",
    endTime: "18:31",
    location: "Office",
    description: "Discuss project progress for 10 features",
  },
  {
    id: 4,
    title: "Meeting 11",
    date: "2023-11-18",
    startTime: "10:41",
    endTime: "17:52",
    location: "Zoom",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 460,
    title: "Meeting 10",
    date: "2024-10-09",
    startTime: "16:0",
    endTime: "14:18",
    location: "Zoom",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 399,
    title: "Meeting 22",
    date: "2023-11-17",
    startTime: "10:28",
    endTime: "13:37",
    location: "Slack",
    description: "Discuss project progress for 9 features",
  },
  {
    id: 319,
    title: "Meeting 19",
    date: "2024-07-16",
    startTime: "17:58",
    endTime: "18:29",
    location: "Office",
    description: "Discuss project progress for 1 features",
  },
  {
    id: 545,
    title: "Meeting 6",
    date: "2023-12-17",
    startTime: "12:19",
    endTime: "18:35",
    location: "Office",
    description: "Discuss project progress for 3 features",
  },
  {
    id: 737,
    title: "Meeting 18",
    date: "2023-11-12",
    startTime: "11:29",
    endTime: "18:55",
    location: "Office",
    description: "Discuss project progress for 5 features",
  },
  {
    id: 466,
    title: "Meeting 7",
    date: "2023-06-25",
    startTime: "17:58",
    endTime: "15:8",
    location: "Zoom",
    description: "Discuss project progress for 8 features",
  },
  {
    id: 48,
    title: "Meeting 7",
    date: "2024-02-06",
    startTime: "13:1",
    endTime: "15:47",
    location: "Zoom",
    description: "Discuss project progress for 1 features",
  },
];
function DashboardItem() {
  return (
    <section
      className={`w-full h-screen p-5 flex flex-col gap-5 overflow-y-auto`}
    >
      {/* Title of the screen */}
      {/* BreadCrumb */}
      {/* eg : Home > More > Components > Breadcrumb */}
      <h1 className="text-2xl font-sans font-semibold text-neutral-950 w-full ">
        Dashboard
      </h1>

      {/* Start Main Content for dashboard */}
      <section className={cn(staticStyle.section)}>
        {/* Start Static for dashboard */}
        <div
          id="salutation"
          className="w-full inline-flex items-center justify-between "
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">
              Good to see you again,{" "}
              <span className="underline decoration-dotted underline-offset-4">
                John Doe
              </span>
              <span className="text-2xl">👋</span>
            </h1>
            <span className="text-base font-medium  text-neutral-500">
              You came 15 minutes early today
            </span>
          </div>
          <div>
            {/* time to start your day */}
            <div className="inline-flex gap-5 ">
              <div className="inline-flex gap-5 items-center">
                <span className="w-10 h-10 bg-[#0A7E22]/20 flex items-center justify-center rounded-md">
                  <TbArrowBarToLeft className="text-3xl text-[#0A7E22]" />
                </span>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-base font-medium text-neutral-900 ">
                    8:00 AM
                  </h1>
                  <span className="text-base text-neutral-400">Punch in</span>
                </div>
              </div>
              <div className="inline-flex gap-5 items-center">
                <span className="w-10 h-10 bg-[#FD314D]/20 flex items-center justify-center rounded-md">
                  <TbArrowBarToRight className="text-3xl text-[#FD314D]" />
                </span>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-base font-medium text-neutral-900">
                    8:00 PM
                  </h1>
                  <span className="text-base text-neutral-400">Punch out</span>
                </div>
              </div>
            </div>
            {/* time to end your day */}
          </div>
        </div>
        {/* End Static for dashboard */}
      </section>
      {/* End Main Content for dashboard */}

      {/* Statics */}
      <section className={cn(staticStyle.section, `px-8 py-4 divide-x`)}>
        {/* Count all the patients */}
        <StaticsComp
          title="Total Patients"
          total={100}
          assisted={85}
          rejected={15}
        />
        {/* Count all the patients in online online patients treated */}
        <StaticsComp
          title="Online Patients"
          total={100}
          assisted={85}
          rejected={15}
          className="px-10"
        />
        {/* Count all the patients in scheduled to be treated in the office  */}
        <StaticsComp
          title="Scheduled Patients"
          total={100}
          assisted={85}
          rejected={15}
          className="px-10"
        />
      </section>

      {/* Schedules of today */}
      <section className={cn(staticStyle.section, "flex-col gap-5 px-8 py-4")}>
        <h1 className="text-xl font-sans font-semibold text-neutral-950 w-full">
          Today's Schedule
        </h1>
        <DataTable columns={columns} data={schedules} />
      </section>
    </section>
  );
}

function StaticsComp({
  title,
  total,
  assisted,
  rejected,
  className,
}: {
  title: string;
  total: number;
  assisted: number;
  rejected: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `flex flex-col item-start justify-between space-y-4`,
        className
      )}
    >
      <h1 className="text-xl font-sans font-semibold text-neutral-950 w-full">
        {title}
      </h1>
      <h1 className="text-4xl font-semibold text-blues-600 w-full tabular-nums font-Roboto">
        {total}
      </h1>
      <div className="inline-flex gap-5 justify-start">
        <div className="space-x-3 text-base">
          <span className="font-medium text-neutral-600">Assisted</span>
          <span className="font-medium text-blues-600 tabular-nums font-Roboto">
            {assisted}
          </span>
        </div>
        <div className="space-x-3 text-base">
          <span className="font-medium text-neutral-600">Rejected</span>
          <span className="font-medium text-red-600 tabular-nums font-Roboto">
            {rejected}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DashboardItem;
