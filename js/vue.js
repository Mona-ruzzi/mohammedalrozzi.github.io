new Vue({
    el: "#table",
    data: {
        message: "Detailed information",
        tags: ['Date', 'Region', 'Daily infection', 'Accum. infection', 'Death_daily', 'Death_total', 'Daily Recovered', 'Total Recovered',
            'Active cases', 'Test_daily', 'Test Accumulative'],
        info_general: {
            Sep27: ['27-09-2020', 'Gaza', 66, 2791, 2, 21, 115, 1175, 1595, 2243, 2243 + 2073+682 + 2035 + 2099 + 33602 + 1948,],
            Sep26: ['26-09-2020', 'Gaza', 67, 2725, 2, 19, 120, 1060, 1646, 2073, 2073+ 682 + 2035 + 2099 + 33602 + 1948,],

            Sep25: ['25-09-2020', 'Gaza', 45, 2658, 0, 17, 90, 940, 1701, 682, 682+2035 + 2099 + 33602 + 1948,],
            Sep24: ['24-09-2020', 'Gaza', 95, 2613, 0, 17, 112, 850, 1746, 2035, 2035+2099 + 33602 + 1948,],
            Sep23: ['23-09-2020', 'Gaza', 73, 2518, 0, 17, 90, 738, 1763, 2099, 2099+ 33602 + 1948,],
            Sep22: ['22-09-2020', 'Gaza', 45, 2445, 0, 17, 95, 648, 1780, 1948, 33602+1948,],
            Sep21: ['21-09-2020', 'Gaza', 42, 2400,0 , 17, 37, 553, 1830, 1952, 33602,],
            Sep20: ['20-09-2020', 'Gaza', 45, 2358, 0, 17, 30, 516, 1825, 2122, 31650 ,],
            Sep19: ['19-09-2020', 'Gaza', 90, 2313, 0, 17, 18, 486, 1810, 1281, 29528 ,],
            Sep18: ['18-09-2020', 'Gaza', 47, 2223, 1, 17, 48, 468, 1738, 1443, 28247 ,],
            Sep17: ['17-09-2020', 'Gaza', 76, 2176, 0, 16, 64, 420, 1740, 1372, 26804,],
            Sep16: ['16-09-2020', 'Gaza', 94, 2100, 1, 16, 53, 356, 1728, 1653, 25432,],
            Sep15: ['15-09-2020', 'Gaza', 79, 2006, 0, 15, 60, 303, 1688, 1590, 23779,],
            Sep14: ['14-09-2020', 'Gaza', 108, 1927, 0, 15, 27, 243, 1669, 1582, 22189 ,],
            Sep13: ['13-09-2020', 'Gaza', 100, 1819, 2, 15, 60, 216, 1588, 1417, 20607,],
            Sep12: ['12-09-2020', 'Gaza', 88, 1719, 2, 13, 42, 156, 1550, 1707, 19190,],
            Sep11: ['11-09-2020', 'Gaza', 80, 1631, 1, 11, 0, 114, 1506, 1813, 17483,],
            Sep10: ['10-09-2020', 'Gaza', 195, 1551, 1, 10, 0, 114, 1427, 1906, 15670,],
            Sep09: ['09-09-2020', 'Gaza', 87, 1356, 0, 9, 25, 114, 1233, 1587, 13764 ,],
            Sep08: ['08-09-2020', 'Gaza', 118, 1269, 1, 9, 0, 89, 1171, 1464, 12177,],
            Sep07: ['07-09-2020', 'Gaza', 182, 1151, 1, 8, 0, 89, 1054, 1857, 10713,],
            Sep06: ['06-09-2020', 'Gaza', 162, 969, 2, 7, 0, 89, 873, 1266, 8856,],
            Sep05: ['05-09-2020', 'Gaza', 110, 807, 0, 5, 0, 89, 713, 1562, 7590 ,],
            Sep04: ['04-09-2020', 'Gaza', 116, 697, 0, 5, 13, 89, 603, 1578, 6028 ,],
            Sep03: ['03-09-2020', 'Gaza', 98, 581, 0, 5, 0, 76, 500, 1421, 4450,],
            Sep02: ['02-09-2020', 'Gaza', 84, 483, 0, 5, 0, 76, 402, 1281, 3029 ,],
            Sep01: ['01-09-2020', 'Gaza', 44, 400, 1, 5, 4, 76, 319, 1078, 1748,],
            Aug31: ['31-08-2020', 'Gaza', 69, 356, 4, 4, 0, 72, 280, 670, ,],
            Aug30: ['30-08-2020', '*', , , , , , , , ,],
            Aug29: ['29-08-2020', 'Gaza', 36, 257, 1, 3, 0, 72, 182, , ,],
            Aug28: ['28-08-2020', 'Gaza', 31, 221, , 3, , 0, 146, , ,],
            Aug27: ['27-08-2020', 'Gaza', 77, 192, , 3, , '72*', 117, , ,],



        }
    }
})