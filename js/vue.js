new Vue({
    el: "#table",
    data: {
        message: "Detailed information",
        tags: ['Date', 'Region', 'Daily infection', 'Accum. infection', 'Death_daily', 'Death_total', 'Daily Recovered', 'Total Recovered',
            'Active cases', 'Test_daily', 'Test Accumulative'],
        info_general: {
            Oct18: ['18-10-2020', 'Gaza', 119, 4645, 1, 27, 63, 2800, 1818, 1787, 1787 + 84850 ,],

            Oct17: ['17-10-2020', 'Gaza', 86, 4526, 0, 26, 85, 2737, 1763, 1836,1836+ 1853 + 1866 + 1695 + 1547 + 1525 + 903 + 73625,],
            Oct16: ['16-10-2020', 'Gaza', 74, 4440, 0, 26, 50, 2652, 1762, 1853, 1853+ 1866+1695 + 1547 + 1525 + 903 + 73625,],
            Oct15: ['15-10-2020', 'Gaza', 81, 4366, 0, 26, 80, 2602, 1738, 1866, 1866+1695 + 1547 + 1525 + 903 + 73625,],
            Oct14: ['14-10-2020', 'Gaza', 110, 4285, 0, 26, 95, 2522, 1737, 1695, 1695+1547+1525 + 903 + 73625,],
            Oct13: ['13-10-2020', 'Gaza', 73, 4175, 0, 26, 37, 2427, 1722, 1547, 1547+1525 + 903 + 73625,],
            Oct12: ['12-10-2020', 'Gaza', 118, 4102, 2, 26, 40, 2390, 1686, 1525, 1525+903 + 73625,],
            Oct11: ['11-10-2020', 'Gaza', 87, 3984, 0, 24, 47, 2350, 1610, 903, 903 + 73625,],
            Oct10: ['10-10-2020', 'Gaza', 58, 3897, 0, 24, 45, 2303, 1570, 1661, 1661 + 1743 + 1586 + 2327 + 2068 + 1877 + 2030 + 1784 + 1905 + 2057 + 1457 + 53130,],
            Oct09: ['09-10-2020', 'Gaza', 88, 3839, 0, 24, 74, 2258, 1557, 1743, 1743 + 1586 + 2327 + 2068 + 1877+ 2030 + 1784 + 1905 + 2057 + 1457 + 53130,],
            Oct08: ['08-10-2020', 'Gaza', 51, 3751, 1, 24, 53, 2184, 1543, 1586, 1586 + 2327 + 2068 + 1877 + 2030 + 1784 + 1905 + 2057 + 1457 + 53130,],
            Oct07: ['07-10-2020', 'Gaza', 127, 3700, 0, 23, 60, 2131, 1546, 2327, 2327 + 2068 + 1877+ 2030 + 1784 + 1905 + 2057 + 1457 + 53130,],
            Oct06: ['06-10-2020', 'Gaza', 146, 3573, 0, 23, 70, 2071, 1479, 2068, 2068 + 1877+ 2030 + 1784 + 1905 + 2057 + 1457 + 53130,],
            Oct05: ['05-10-2020', 'Gaza', 73, 3427, 1, 23, 65, 2001, 1403, 1877, 1877+2030 + 1784 + 1905 + 2057 + 1457 + 53130,],
            Oct04: ['04-10-2020', 'Gaza', 56, 3354, 0, 22, 76, 1936, 1396, 2030, 2030+1784 + 1905 + 2057 + 1457 + 53130,],
            Oct03: ['03-10-2020', 'Gaza', 114, 3298, 0, 22, 95, 1860, 1416, 1784, 1784+1905 + 2057 + 1457 + 53130,],
            Oct02: ['02-10-2020', 'Gaza', 109, 3184, 0, 22, 110, 1756, 1397, 1905,1905+ 2057 + 1457 + 53130,],
            Oct01: ['01-10-2020', 'Gaza', 127, 3075, 1, 22, 60, 1655, 1398, 2057, 2057+1457 + 53130,],
            Sep30: ['30-09-2020', 'Gaza', 37, 2948, 0, 21, 125, 1595, 1332, 1457, 1457 + 53130,],
            Sep29: ['29-09-2020', 'Gaza', 85, 2911, 0, 21, 150, 1470, 1420, 2028, 2028 + 1810 + 2243 + 2073 + 682 + 2035 + 2099 + 33602 + 1948 + 4610,],
            Sep28: ['28-09-2020', 'Gaza', 35, 2826, 0, 21, 145, 1320, 1485, 1810, 1810 + 2243 + 2073 + 682 + 2035 + 2099 + 33602 + 1948 + 4610,],
            Sep27: ['27-09-2020', 'Gaza', 66, 2791, 2, 21, 115, 1175, 1595, 2243, 2243 + 2073 + 682 + 2035 + 2099 + 33602 + 1948 + 4610,],
            Sep26: ['26-09-2020', 'Gaza', 67, 2725, 2, 19, 120, 1060, 1646, 2073, 2073 + 682 + 2035 + 2099 + 33602 + 1948 + 4610,],
            Sep25: ['25-09-2020', 'Gaza', 45, 2658, 0, 17, 90, 940, 1701, 682, 682 + 2035 + 2099 + 33602 + 1948 + 4610,],
            Sep24: ['24-09-2020', 'Gaza', 95, 2613, 0, 17, 112, 850, 1746, 2035, 2035 + 2099 + 33602 + 1948 + 4610,],
            Sep23: ['23-09-2020', 'Gaza', 73, 2518, 0, 17, 90, 738, 1763, 2099, 2099 + 33602 + 1948 + 4610,],
            Sep22: ['22-09-2020', 'Gaza', 45, 2445, 0, 17, 95, 648, 1780, 1948, 33602 + 1948 + 4610,],
            Sep21: ['21-09-2020', 'Gaza', 42, 2400, 0, 17, 37, 553, 1830, 1952, 33602 + 4610,],
            Sep20: ['20-09-2020', 'Gaza', 45, 2358, 0, 17, 30, 516, 1825, 2122, 31650 + 4610 ,],
            Sep19: ['19-09-2020', 'Gaza', 90, 2313, 0, 17, 18, 486, 1810, 1281, 29528 + 4610,],
            Sep18: ['18-09-2020', 'Gaza', 47, 2223, 1, 17, 48, 468, 1738, 1443, 28247 + 4610 ,],
            Sep17: ['17-09-2020', 'Gaza', 76, 2176, 0, 16, 64, 420, 1740, 1372, 26804 + 4610,],
            Sep16: ['16-09-2020', 'Gaza', 94, 2100, 1, 16, 53, 356, 1728, 1653, 25432 + 4610,],
            Sep15: ['15-09-2020', 'Gaza', 79, 2006, 0, 15, 60, 303, 1688, 1590, 23779 + 4610,],
            Sep14: ['14-09-2020', 'Gaza', 108, 1927, 0, 15, 27, 243, 1669, 1582, 22189 + 4610,],
            Sep13: ['13-09-2020', 'Gaza', 100, 1819, 2, 15, 60, 216, 1588, 1417, 20607 + 4610,],
            Sep12: ['12-09-2020', 'Gaza', 88, 1719, 2, 13, 42, 156, 1550, 1707, 19190 + 4610,],
            Sep11: ['11-09-2020', 'Gaza', 80, 1631, 1, 11, 0, 114, 1506, 1813, 17483 + 4610,],
            Sep10: ['10-09-2020', 'Gaza', 195, 1551, 1, 10, 0, 114, 1427, 1906, 15670 + 4610,],
            Sep09: ['09-09-2020', 'Gaza', 87, 1356, 0, 9, 25, 114, 1233, 1587, 13764 + 4610 ,],
            Sep08: ['08-09-2020', 'Gaza', 118, 1269, 1, 9, 0, 89, 1171, 1464, 12177 + 4610,],
            Sep07: ['07-09-2020', 'Gaza', 182, 1151, 1, 8, 0, 89, 1054, 1857, 10713 + 4610,],
            Sep06: ['06-09-2020', 'Gaza', 162, 969, 2, 7, 0, 89, 873, 1266, 8856 + 4610,],
            Sep05: ['05-09-2020', 'Gaza', 110, 807, 0, 5, 0, 89, 713, 1562, 7590 + 4610 ,],
            Sep04: ['04-09-2020', 'Gaza', 116, 697, 0, 5, 13, 89, 603, 1578, 6028 + 4610 ,],
            Sep03: ['03-09-2020', 'Gaza', 98, 581, 0, 5, 0, 76, 500, 1421, 4450+4610,],
            Sep02: ['02-09-2020', 'Gaza', 84, 483, 0, 5, 0, 76, 402, 1281, 3029+4610 ,],
            Sep01: ['01-09-2020', 'Gaza', 44, 400, 1, 5, 4, 76, 319, 1078, 1748+4610,],
            Aug31: ['31-08-2020', 'Gaza', 69, 356, 4, 4, 0, 72, 280, 670, ,],
            Aug30: ['30-08-2020', '*', , , , , , , , ,],
            Aug29: ['29-08-2020', 'Gaza', 36, 257, 1, 3, 0, 72, 182, , ,],
            Aug28: ['28-08-2020', 'Gaza', 31, 221, , 3, , 0, 146, , ,],
            Aug27: ['27-08-2020', 'Gaza', 77, 192, , 3, , '72*', 117, , '4610*',],

        }
    }
})