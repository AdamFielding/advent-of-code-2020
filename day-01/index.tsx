const inputEntries = [
  1834,
  1546,
  1119,
  1870,
  1193,
  1198,
  1542,
  1944,
  1817,
  1249,
  1361,
  1856,
  1258,
  1425,
  1835,
  1520,
  1792,
  1130,
  2004,
  1366,
  1549,
  1347,
  1507,
  1699,
  1491,
  1557,
  1865,
  1948,
  1199,
  1229,
  1598,
  1756,
  1643,
  1306,
  1838,
  1157,
  1745,
  1603,
  1972,
  1123,
  1963,
  1759,
  1118,
  1526,
  1695,
  1661,
  1262,
  1117,
  1844,
  1922,
  1997,
  1630,
  1337,
  1721,
  1147,
  1848,
  1476,
  1975,
  1942,
  1569,
  1126,
  1313,
  1449,
  1206,
  1722,
  1534,
  1706,
  1596,
  1700,
  1811,
  906,
  1666,
  1945,
  1271,
  1629,
  1456,
  1316,
  1636,
  1884,
  1556,
  1317,
  1393,
  1953,
  1658,
  2005,
  1252,
  1878,
  1691,
  60,
  1872,
  386,
  1369,
  1739,
  1460,
  1267,
  1935,
  1992,
  1310,
  1818,
  1320,
  1437,
  1486,
  1205,
  1286,
  1670,
  1577,
  1237,
  1558,
  1937,
  1938,
  1656,
  1220,
  1732,
  1647,
  1857,
  1446,
  1516,
  1450,
  1860,
  1625,
  1377,
  1312,
  1588,
  1895,
  1967,
  1567,
  1582,
  1428,
  1415,
  1731,
  1919,
  1651,
  1597,
  1982,
  1576,
  1172,
  1568,
  1867,
  1660,
  1754,
  1227,
  1121,
  1733,
  537,
  1809,
  1322,
  1876,
  1665,
  1124,
  1461,
  1888,
  1368,
  1235,
  1479,
  1529,
  1148,
  1996,
  1939,
  1340,
  1531,
  1438,
  1897,
  1152,
  1321,
  1770,
  897,
  1750,
  1111,
  1772,
  1615,
  1798,
  1359,
  1470,
  1610,
  1362,
  1973,
  1892,
  1830,
  599,
  1341,
  1681,
  1572,
  1873,
  42,
  1246,
  1447,
  1800,
  1524,
  1214,
  1784,
  1664,
  1882,
  1989,
  1797,
  1211,
  1170,
  1854,
  1287,
  1641,
  1760,
];

type Entry = number;

const multiplyEntries = (entries: Entry[]): Entry =>
  entries.reduce((acc, entry) => acc * entry, 1);

const addEntires = (entries: Entry[]): Entry =>
  entries.reduce((acc, entry) => acc + entry, 0);

const go = (
  entries: Entry[],
  ogEntries: Entry[],
  matchingEntries: Entry[],
  desiredResult: number,
  numberOfMatches: number
): Entry[] => {
  const [entry, ...newEntries] = entries;
  const newMatchingEntries = [entry, ...matchingEntries];
  const total = addEntires(newMatchingEntries);

  if (
    total === desiredResult &&
    newMatchingEntries.length === numberOfMatches
  ) {
    return newMatchingEntries;
  }

  if (entries.length <= 0) {
    const [_, ...newOgEntries] = ogEntries;
    return go(newOgEntries, newOgEntries, [], desiredResult, numberOfMatches);
  }

  if (newMatchingEntries.length >= numberOfMatches) {
    return go(
      newEntries,
      ogEntries,
      matchingEntries,
      desiredResult,
      numberOfMatches
    );
  }

  if (total < desiredResult) {
    return go(
      newEntries,
      ogEntries,
      newMatchingEntries,
      desiredResult,
      numberOfMatches
    );
  }

  return go(
    newEntries,
    ogEntries,
    matchingEntries,
    desiredResult,
    numberOfMatches
  );
};

const findMatchingEntries = (
  entries: Entry[],
  desiredResult: number,
  numberOfMatches: number
): Entry[] => {
  return go(entries, entries, [], desiredResult, numberOfMatches);
};

const matchedEntries = findMatchingEntries(inputEntries, 2020, 3);
console.log(multiplyEntries(matchedEntries));
