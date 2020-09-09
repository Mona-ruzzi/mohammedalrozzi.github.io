//this is the tracking for Italy
Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: [
        '24','25','26','27','28','29',
        '1/03','2','3','4','5','6',
        '7','8','9','10/03','11','12',
        '13','14','15','16','17','18',
        '19', '20/03', '21', '22', '23', '24',
        '25', '26','27', '28','29','30',
        '31', '01/04', '2', '3', '4', '5'
      ],
      datasets: [
        {
          label: 'intensive care',
          backgroundColor: '#4cab92',

          data: [
            26, 35, 36, 56, 64, 105,
            140, 166, 229, 295, 351, 462,
            567, 650, 733, 877, 1028, 1153,
            1328, 1518, 1672, 1851, 2060, 2257,
            2498, 2655, 2857, 3009, 3204, 3396,
            3489, 3612, 3732, 3856, 3906, 3981,
            4023, 4035, 4053, 4068, 3994, 3977,
          ]
        },
        {
          label: 'Deaths',
          backgroundColor: '#5fb58a',
          data: [
                7, 10, 12, 17, 21, 29,
                34, 52, 79, 107, 148, 197,
                233, 366, 463, 631, 827, 1016,
                1266, 1441, 1809, 2158, 2503, 2978,
                3405, 4032, 4825, 5476, 6077, 6820,
                7503, 8165, 9134, 10023, 10779, 11591,
                12428, 13155, 13915, 14681,15362, 15887,

          ]
        },
        {
          label: 'recovered',
          backgroundColor: '#70c082',
          data: [
            1, 1, 3, 45, 46, 50,
            83, 149, 160, 276, 414, 523,
            589, 622, 724, 1004, 1045, 1258,
            1439, 1966, 2335, 2749, 2941, 4025,
            4440, 5129, 6072, 7024, 7432, 8326,
            9362, 10361, 10950, 12384, 13030, 14620,
            15729, 16847, 18278, 19758,20996, 21815,

          ]
        },
        {
          label: 'total hospitalized',
          backgroundColor: '#7ecb7a',
          data: [
            127, 150, 164, 304, 409, 506,
            779, 908, 1263, 1641, 2141, 2856,
            3218, 4207, 5049, 5915, 6866, 7803,
            8754, 9890, 11335, 12876, 14954, 16620,
            18255, 18675, 20565, 22855, 23896, 25333,
            26601, 28365, 29761, 30532, 31292, 31776,
            32215, 32438, 32593, 32809,33004, 32926

          ]
        },
        {
          label: 'Current positive',
          backgroundColor: '#7ecb7a',
          data: [
            221, 311, 385, 588, 821, 1049,
            1577, 1835, 2263, 2706, 3296, 3916,
            5061, 6387, 7985, 8514, 10590, 12839,
            14955, 17750, 20603, 23073, 26062, 28710,
            33190, 37860, 42681, 46638, 50418, 54030,
            57521, 62013, 66414, 70065, 73880, 75528,
            77635, 80572, 83049, 85388,88274, 91246,

          ]
        },
        {
          label: 'Total cases',
          backgroundColor: '#8bd670',
          data: [
            229, 322, 400, 650, 888, 1128,
            1694, 2036, 2502, 3089, 3858, 4636,
            5883, 7375, 9172, 10149, 12462, 15113,
            17660, 21157, 24747, 27980, 31506, 35713,
            41035, 47021, 53578, 59138, 63927, 69176,
            74386, 80539, 86498, 92472, 97689, 101739,
            105792, 110574, 115242, 119827,124632, 128948
          ]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }

})

var vm = new Vue({
  el: '.app_Chart',
  data: {
    message: 'Increase in cases-Italy(1)'
  }
})

//Gaza work
//this is the tracking for Gaza
Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted() {
    this.renderChart({
      labels: [
        '27/8', '28', '29', '31', '01/09', '02',
        '03', '04', '05', '06', '07','08','09'
      ],
      datasets: [
        
        {
          label: 'Deaths',
          backgroundColor: '#5fb58a',
          data: [
            3,3,3,4,5,5,5,5,5,7,8,9,9,

          ]
        },
        {
          label: 'Recovered cases',
          backgroundColor: '#70c082',
          data: [
            72,72,72,72,76,76,76,89,89,89,89,89,114,

          ]
        },
        
        {
          label: 'Current positive',
          backgroundColor: '#7ecb7a',
          data: [
            117,146,182,280,319,402,500,603,713,873,1054,1171,1233,

          ]
        },
        {
          label: 'Total cases',
          backgroundColor: '#8bd670',
          data: [
            192,221,257,356,400,483,581,697,807,969,1151,1269,1356,
          ]
        },
        {
          label: 'Daily infection',
          backgroundColor: '#70c082',
          data: [
            77,31,36,69,44,84,98,116,110,162,182,118,87,

          ]
        },
        {
          label: 'Daily tests',
          backgroundColor: '#70c082',
          data: [
            , , , 670,1078 ,1281 ,1421 ,1578 ,1562 ,1266 ,1857 , 1464,1587

          ]
        },
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }

})

var vm = new Vue({
  el: '.app_Chart_gaza',
  data: {
    message: 'Cases in Gaza'
  }
})

//this is the tracking for Spain
Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted() {
    this.renderChart({
      labels: [
        '7', '8', '9', '10', '11', '12', '13',
        '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27',
        '28','29','30', '31','01', '02','3',
        '4', '5', '6','7','8'

             ],
      datasets: [
        {
          label: 'Deaths',
          backgroundColor: 'rgba(0, 187, 240, 0.8)',
          data: [
            0, 28, 36, 48, 84, 120, 134,
            285, 306, 491, 598, 767, 982, 1326,
            1720, 2182, 2696, 3434, 4089, 4858, 5632,
            6528, 7340, 8189, 9053, 10003, 10935, 11744,
            12418, 13055, 13798, 14555, 15238
          ]
        },
        {
          label: 'in hospitals',
          backgroundColor: 'rgba(76, 171, 146, 0.8)',
          data: [
          0, 0, 0, 236, 399, 1858, 2120,
          3096, 3435, 5136, 5759, 7619, 10418, 13282,
          15554, 18374, 22762, 26960, 31912, 36293, 40630,
          43397, 46617, 49243, 51418, 54113, 56637, 57612,
          58744, 59662, 63093,63516, 66579
          ]
        },
        {
          label: 'Total cases',
          backgroundColor: 'rgba(139, 214, 112, 0.8)',
          data: [
            526, 1006, 1606, 2117, 2929, 4130, 5844,
            7698, 9149, 11178, 13716, 17147, 19980, 24926,
            28572, 33089, 39673, 47610, 56188, 64059, 72248,
            78797, 85195, 94417, 102136, 110238, 117710, 124736,
            130759, 135032, 140510, 146690, 152446
          ]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }

})

var vm = new Vue({
  el: '.app_Chart_Spain',
  data: {
    message: 'Increase in cases-Spain(2)'
  }
})

//this is the tracking for the UK
Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted() {
    this.renderChart({
      labels: [
        '5',
        '6', '7', '8', '9', '10/03', '11', '12',
        '13', '14', '15', '16', '17', '18', '19',
        '20/03', '21', '22', '23', '24', '25', '26',
        '27', '28','29', '30', '31','01/04', '02',
        '3', '4', '5','6','7','8','9',
        '10', '11','12','13','14','15', '16',
        '17','18','19'

      ],
      datasets: [
        {
          label: 'Deaths',
          backgroundColor: '#4cab92',
          data: [
            1,
            2, 2, 3, 5, 6, 8, 8,
            10, 21, 35, 55, 71, 103, 144,
            177, 233, 281, 335, 422, 463, 578,
            759, 1019, 1228, 1408, 1789, 2352, 2921,
            3605, 4313, 4934, 5373, 6159, 7097, 7978,
            8958, 9875, 10612, 11329, 12107, 12868, 13729,
            14576, 15464,16060,

          ]
        },
        {
          label: 'recovered',
          backgroundColor: '#63c78e',
          data: [

          ]
        },
        {
          label: 'Total cases',
          backgroundColor: '#8bd670',
          data: [
            114,
            160, 206, 271, 321, 373, 456, 590,
            797, 1061, 1391, 1543, 1950, 2626, 3269,
            3983, 5018, 5683, 6650, 8077, 9529, 11658,
            14543, 17089, 19522, 22141, 25150, 29474, 33718,
            38168, 41903, 47817, 51608, 55242, 60733, 65077,
            70272, 78095,null,null,null,null,null,
            null, null, 120067

          ]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }

})

var vm = new Vue({
  el: '.app_Chart_UK',
  data: {
    message: 'Cases in the UK(2)'
  }
})

//this is the tracking for Umbria
Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: [
        '24','25','26','27','28','29',
        '1/03','2','3','4','5','6',
        '7','8','9','10/03','11','12',
        '13','14','15','16','17','18',
        '19','20/03','21','22','23', '24',
        '25', '26','27', '28', '29', '30',
        '31', '01/04', '02','3', '4'
      ],
      datasets: [
        {
          label: 'dimessi_guariti',
          backgroundColor: '#1d3e53',
          data: [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 2, 2, 2, 3,
            3, 4, 4, 4, 4,
            4, 5, 5, 5, 5,
            5, 12, 39, 43, 95,
            184, 190, 194, 205, 220,
            242,
          ]
        },
        {
          label: 'deceduti',
          backgroundColor: '#27495d',
          data: [
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
            0, 0, 0, 1, 1,
            1, 1, 1, 2, 2,
            7, 10, 16, 16, 19,
            19, 20, 21, 28, 31,
            33, 37, 37, 38, 39, 
            41
          ]
        },
        {
          label: 'terapia_intensiva',
          backgroundColor: '#315468',
          data: [
            0, 0, 0, 0, 0,
            0, 0, 0, 1, 1,
            1, 2, 2, 2, 2,
            2, 5, 8, 10, 11,
            13, 15, 21, 21, 21,
            24, 29, 35, 42, 43,
            44, 46, 46, 44, 46,
            47, 43, 45,47,48,
            44,
          ]
        },
        {
          label: 'nuovi_attualmente_positivi',
          backgroundColor: '#3a6073',
          data: [
            0, 0, 0, 0, 0,
            0, 2, 0, 6, 1,
            0, 7, 8, 2, 2,
            9, 7, 18, 11, 30,
            36, 20, 33, 49, 87,
            56, 63, 53, 56, 68,
            62, 84, 54, 74, -1,
            -63, 27, 17, 33, 51,
            31,

          ]
        },
        {
          label: 'ricoverati_con_sintomi',
          backgroundColor: '#446c7e',
          data: [
            0, 0, 0, 0, 0,
            0, 0, 0, 1, 1,
            1, 2, 2, 2, 4,
            8, 7, 8, 11, 21,
            25, 30, 36, 54, 69,
            75, 92, 97, 106, 105,
            123, 144, 149, 159, 166,
            173, 176, 173,171, 165,
            167,
          ]
        },

        {
          label: 'totale_ospedalizzati',
          backgroundColor: '#4e7889',
          data: [
            0, 0, 0, 0, 0,
            0, 0, 0, 2, 2,
            2, 4, 4, 4, 6,
            10, 12, 16, 21, 32,
            38, 45, 57, 75, 90,
            99, 121, 132, 148, 148,
            167, 190, 195, 203, 212,
            220, 219, 218,218, 213,
            211,
          ]
        },
        {
          label: 'isolamento_domiciliare',
          backgroundColor: '#588594',
          data: [
            0, 0, 0, 0, 0,
            0, 2, 2, 6, 7,
            7, 12, 20, 22, 22,
            27, 32, 46, 52, 71,
            101, 114, 135, 166, 238,
            285, 326, 368, 408, 476,
            519, 580, 629, 695, 685,
            614, 632, 646,667, 707,
            716,
          ]
        },
        {
          label: 'totale_attualmente_positivi',
          backgroundColor: '#6291a0',
          data: [
            0, 0, 0, 0, 0,
            0, 2, 2, 8, 9,
            9, 16, 24, 26, 28,
            37, 44, 62, 73, 103,
            139, 159, 192, 241, 328,
            384, 447, 500, 556, 624,
            686, 770, 824, 898, 897,
            834, 851, 864,885, 920,
            927,
          ]
        },
        {
          label: 'totale_casi',
          backgroundColor: '#6d9eab',
          data: [
            0, 0, 0, 0, 0,
            0, 2, 2, 8, 9,
            9, 16, 24, 26, 28,
            37, 46, 64, 76, 107,
            143, 164, 197, 247, 334,
            395, 462, 521, 577, 648,
            710, 802, 884, 969, 1023,
            1051, 1078, 1095,1128, 1179,
            1210,

          ]
        },
        {
          label: 'tamponi',
          backgroundColor: '#77abb7',
          data: [
            0, 8, 8, 8, 8,
            31, 35, 35, 45, 58,
            88, 110, 134, 168, 183,
            260, 340, 458, 576, 748,
            965, 1093, 1323, 1601, 1954,
            2303, 2712, 3135, 3561, 4108,
            4707, 5428, 6137, 7028, 7685,
            8150, 8685, 9080, 9737, 10614,
            11809
          ]
        },
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }

})

var vm = new Vue({
  el: '.app_Chart_Umbria',
  data: {
    message: 'Increase in cases-Umbria(3)'
  }
})

//this is the tracking for Israel//
Vue.component('line-chart', {
  extends: VueChartJs.Line,
  mounted() {
    this.renderChart({
      labels: [
        '26/01', '27', '28', '29', '30','31', '1/03',
        '2', '3', '4', '5', '6', '7', '8', 
        '9', '10/02', '11', '12', '13', '14', '15', 
        '16', '17', '18', '19', '20/02', '21', '22', 
        '23', '24', '25', '26/02', '27', '28', '29', 
        '1/03', '2', '3', '4', '5', '6', '7', 
        '8', '9', '10/03', '11', '12', '13', '14', 
        '15', '16', '17', '18', '19', '20/03', '21', 
        '22', '23', '24','25','26', '27','28', 
        '29', '30', '31', '01/04', '02', '03', '4', 
        '5', '6',

      ],
      datasets: [
        {
          label: 'Total cases',
          backgroundColor: '#4cab92',
          data: [
            null, null, null, null, null, null, null, 
            null, null, null, null, null, null, null, 
            null, null, null, null, null, null, null, 
            null, null, null, null, null, 2, 2, 
            2, 2, 2, 3, 5, 7, 10, 
            12, 12, 15, 16, 20, 22, 37, 
            39, 59, 77, 99, 130, 164, 200, 
            253, 318, 421, 524, 677, 838, 943, 
            1207, 1552, 2000, 2463, 3011, 3404, 3824, 
            4316, 4782, 5523, 6168, 6901, 7531, 7989, 
            8618, 8974,



          ]
        },
        {
          label: 'total tests',
          backgroundColor: '#8bd670',
          data: [
            3, 4, 4, 7, 11, 11, 11, 
            17, 23, 29, 29, 29, 29, 29, 
            68, 97, 172, 210, 247, 275, 277, 
            305, 348, 393, 429, 457, 472, 485, 
            560, 618, 722, 845, 979, 1094, 1252, 
            1412, 1585, 1811, 1934, 2111, 2413, 2800, 
            3275, 3863, 4381, 4892, 5614, 6399, 7044, 
            8186, 9464, 11599, 14255, 16758, 19401, 21375, 
            24734, 28599, 33666, 38906, 44461, 49475, 54436, 
            60925, 66606, 74457, 82670, 91752, 101655, 108302, 
            117581, 124831,

          ]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }

})

var vm = new Vue({
  el: '.app_Chart_israel',
  data: {
    message: 'Increase in cases-Israel(4)'
  }
})
//new italy//
Vue.component('bar-chart', {
  extends: VueChartJs.Bar,
  mounted() {
    this.renderChart({
      labels: [
        '24', '25', '26', '27', '28', '29',
        '1/03', '2', '3', '4', '5', '6',
        '7', '8', '9', '10/03', '11', '12',
        '13', '14', '15', '16', '17', '18',
        '19', '20/03', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30',
        '31', '01/04', '2', '3', '4', '5',
        '6', '7', '8', '9', '10/04', '11', 
        '12',
        '13', '14', '15', '16', '17', '18',
        '19', '20/04', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30', '01/05', 
        '2', '3', '4', '5'
      ],
      datasets: [
        {
          label: 'Deaths',
          backgroundColor: 'rgba(20, 10, 12, 0.2)',
          data: [
            0, 3, 2, 5, 4, 8, 5, 18, 27, 28, 41, 49, 36, 133, 97, 168, 196, 189, 250, 175, 368, 349, 345, 475, 427, 627, 793, 651, 601, 743, 683, 662, 969, 889, 756, 812, 837, 727, 760, 766, 681, 525, 636, 604, 542, 610, 570, 619, 431, 566, 602, 578, 525, 575, 482, 433, 454, 534, 437, 464, 420, 415, 260, 333, 382, 323, 285, 269, 474, 174, 195
          ]
        },
        {
          label: 'recovered',
          backgroundColor: 'rgba(200, 10, 12, 0.2)',
          data: [

          ]
        },
        {
          label: 'Total cases',
          backgroundColor: 'rgba(100, 10, 12, 0.2)',
          data: [

          ]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }

})

var vm = new Vue({
  el: '.app_Chart_new',
  data: {
    message: 'The curve in Italy'
  }
})