import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    '&:hover': {
      fill: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="3600.000000pt"
      height="3600.000000pt"
      viewBox="0 0 3600.000000 3600.000000"
      preserveAspectRatio="xMidYMid meet"
      className={classes.svgHover}
    >
      <g
        transform="translate(0.000000,3600.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M17455 35993 c-3691 -107 -7168 -1298 -10130 -3471 -758 -556 -1441
-1147 -2136 -1849 -578 -584 -1067 -1147 -1556 -1793 -1402 -1852 -2422 -3936
-3023 -6175 -294 -1096 -483 -2231 -565 -3395 -31 -445 -39 -701 -39 -1250 0
-548 8 -803 39 -1250 220 -3146 1238 -6122 2990 -8735 977 -1458 2173 -2774
3540 -3896 1417 -1163 3019 -2110 4718 -2788 2899 -1158 6085 -1535 9202
-1091 3005 429 5837 1611 8265 3448 2195 1662 3976 3799 5215 6257 1257 2495
1905 5234 1905 8055 0 3099 -783 6095 -2298 8790 -524 931 -1142 1828 -1836
2665 l-141 169 -5 -46 -5 -46 -127 151 c-490 587 -1206 1322 -1740 1787 -48
41 -87 78 -87 82 -1 4 8 8 20 10 15 2 -19 36 -152 148 -2581 2175 -5669 3564
-8994 4044 -983 142 -2097 207 -3060 179z m-8550 -4353 c106 -12 163 -29 266
-81 192 -96 214 -202 213 -1019 -1 -431 -22 -2088 -30 -2353 l-5 -158 782 3
782 3 -7 -85 c-28 -344 -37 -518 -43 -817 l-6 -342 -71 -5 c-39 -3 -386 -13
-771 -22 -385 -9 -701 -17 -701 -17 -1 -1 -10 -231 -19 -512 -15 -446 -17
-691 -11 -1940 4 -786 11 -1767 16 -2179 l10 -748 47 -87 c387 -717 798 -1336
1412 -2130 l111 -144 0 -108 0 -109 -531 0 -531 0 -131 112 c-173 147 -421
364 -522 457 -179 165 -777 756 -865 854 l-94 106 -55 -62 c-263 -296 -946
-946 -1403 -1334 l-156 -133 -531 0 -531 0 0 109 0 108 142 184 c280 363 494
660 730 1014 l240 360 -333 3 c-184 1 -343 0 -354 -3 -11 -3 -83 -79 -160
-168 -143 -166 -722 -751 -967 -978 -144 -134 -458 -411 -621 -547 l-97 -82
-530 0 -530 0 0 110 0 110 88 112 c330 421 707 952 995 1403 l96 150 5 720 c7
1141 25 2347 36 2510 62 904 349 1782 789 2415 80 116 271 314 406 423 112 89
408 287 590 395 300 176 806 396 1422 618 64 23 123 70 123 98 0 26 -24 50
-60 59 -23 6 -1635 -28 -2532 -54 -316 -9 -418 -9 -457 1 -104 25 -185 106
-217 218 -14 46 -15 108 -8 467 l7 414 125 153 c689 841 1493 1651 2333 2350
l175 146 227 11 c125 6 341 11 480 12 138 1 293 4 342 8 139 12 789 12 890 1z
m20020 -1 c44 -5 117 -12 163 -16 l83 -6 162 -135 c807 -674 1484 -1330 2120
-2056 l147 -169 0 -493 0 -493 -43 -53 c-55 -67 -89 -87 -184 -103 -90 -16
-761 -34 -1297 -36 -193 -1 -432 -4 -531 -8 l-180 -6 -7 -165 c-4 -91 -11
-410 -17 -710 -5 -300 -14 -682 -20 -850 -28 -787 -32 -1042 -25 -1637 l7
-623 425 0 c234 0 563 -7 731 -15 168 -8 490 -19 715 -25 225 -5 412 -13 415
-16 3 -3 8 -743 10 -1643 3 -1633 3 -1638 -17 -1678 -19 -36 -82 -102 -100
-103 -4 -1 -27 -5 -52 -10 -119 -25 -553 -37 -2010 -56 -302 -4 -404 -8 -475
-21 -52 -10 -137 -17 -200 -17 -60 1 -256 1 -435 2 -179 1 -383 6 -455 12 -71
5 -236 15 -365 20 -129 6 -302 17 -385 26 -135 15 -237 15 -990 5 -462 -6
-893 -13 -959 -16 l-119 -6 7 48 c27 209 56 917 56 1378 0 288 14 781 26 925
l6 76 84 21 c314 82 561 335 652 670 l26 98 9 895 c5 492 9 963 10 1045 1 116
-3 165 -17 215 -32 117 -75 215 -132 301 l-56 84 26 200 c15 110 33 260 41
334 15 156 -2 133 180 243 295 178 788 402 1327 603 291 109 349 146 318 205
-10 19 -20 20 -172 20 -89 0 -303 -5 -477 -10 -174 -6 -506 -11 -738 -13
l-422 -2 -6 60 c-114 1059 -468 2073 -1012 2900 -168 256 -307 435 -557 722
l-37 43 368 4 c202 3 708 10 1123 16 859 12 825 12 1650 11 338 0 660 3 715 8
142 12 794 12 890 0z m-10330 -1525 c399 -47 817 -174 1317 -398 79 -35 276
-128 438 -206 743 -359 937 -430 1405 -510 281 -48 673 -65 926 -40 617 61
1158 301 1608 715 145 133 279 158 452 84 46 -20 46 -21 92 -137 202 -510 401
-1257 482 -1808 46 -318 56 -455 62 -846 3 -207 3 -384 0 -392 -5 -13 -12 -13
-49 4 -24 10 -73 26 -111 36 -61 15 -70 21 -102 63 -93 128 -297 288 -470 371
-270 129 -541 186 -840 177 -244 -7 -359 -41 -469 -138 -60 -53 -138 -170
-162 -242 -26 -78 -22 -179 9 -257 15 -35 25 -65 24 -65 -34 -18 -152 -111
-199 -158 -145 -143 -259 -358 -286 -541 l-7 -46 -215 -4 c-249 -4 -397 -27
-608 -95 -109 -35 -124 -37 -129 -23 -3 10 -21 55 -39 101 -116 291 -380 568
-676 709 -143 68 -267 102 -461 127 l-48 6 45 50 c121 135 114 339 -19 539
-86 130 -196 199 -397 250 -200 50 -342 64 -653 64 -345 0 -540 -20 -855 -90
-269 -60 -585 -188 -765 -310 -97 -65 -127 -92 -160 -140 -95 -140 89 -227
595 -279 129 -13 277 -23 790 -55 94 -5 -127 -7 -625 -3 -689 4 -781 3 -870
-12 -427 -71 -825 -365 -1019 -754 -37 -73 -90 -212 -106 -278 -9 -37 -15 -43
-43 -47 -40 -6 -1638 -59 -1641 -54 -2 2 1 35 5 73 5 39 11 201 15 360 5 228
3 355 -12 595 -26 422 -24 780 4 965 49 319 150 602 325 920 72 129 73 131
287 345 467 468 877 783 1324 1016 610 317 1200 433 1831 358z m753 -3501
c-16 -2 -40 -2 -55 0 -16 2 -3 4 27 4 30 0 43 -2 28 -4z m1308 -264 c228 -31
483 -168 639 -341 102 -113 188 -255 241 -396 l24 -62 -20 -37 c-37 -70 -21
-155 39 -206 l32 -27 -4 -637 c-3 -538 -6 -648 -20 -703 -91 -377 -360 -683
-716 -816 -157 -59 -203 -64 -588 -64 -725 -1 -2491 21 -2573 31 -225 27 -444
143 -626 331 -168 173 -265 370 -293 598 -6 41 -11 363 -11 715 -2 543 0 651
13 710 94 430 427 764 857 862 71 16 521 27 1800 42 1046 12 1122 12 1206 0z
m4562 -70 c41 -11 87 -26 103 -34 36 -19 37 -32 9 -297 -46 -435 -107 -826
-210 -1343 -120 -608 -168 -902 -197 -1222 l-17 -193 -31 0 c-16 0 -136 5
-265 10 -129 5 -381 14 -560 20 l-325 10 -22 26 c-44 49 -188 302 -284 499
-115 237 -187 415 -281 699 l-69 209 3 136 3 136 85 17 c132 27 378 48 549 48
174 0 298 -17 409 -54 72 -25 176 -78 187 -97 10 -15 57 -10 77 8 22 20 23 44
2 86 -89 173 -303 296 -589 337 -224 31 -483 -21 -660 -134 l-55 -36 0 80 c0
63 3 80 14 80 21 0 74 47 91 81 33 63 13 125 -60 184 -44 37 -45 39 -45 97 0
170 77 357 194 473 133 132 253 174 521 182 305 9 1218 20 1285 15 36 -2 98
-12 138 -23z m483 -466 c33 -97 38 -162 49 -603 14 -582 0 -1407 -25 -1495
-52 -186 -189 -353 -365 -444 -79 -42 -195 -79 -207 -67 -15 14 47 565 98 876
28 174 84 448 125 620 43 181 171 768 226 1038 l42 204 19 -38 c11 -21 28 -62
38 -91z m-3004 -388 c2 -1 8 -174 14 -386 12 -448 6 -412 160 -894 167 -517
232 -683 399 -1015 122 -241 134 -281 127 -414 -7 -134 -35 -238 -101 -371
-154 -311 -480 -563 -909 -705 -58 -19 -71 -27 -82 -53 -15 -36 -3 -82 25 -97
49 -26 293 -2 455 45 246 71 463 202 655 395 113 113 184 213 250 353 58 123
86 219 100 351 10 90 9 130 -6 237 l-5 36 238 11 c131 7 326 14 433 17 107 3
251 8 319 11 l123 5 -6 -83 c-6 -81 -11 -188 -41 -963 -32 -802 -90 -1380
-185 -1846 -279 -1361 -1162 -2593 -2388 -3328 -647 -389 -1366 -638 -2147
-746 -476 -65 -1089 -73 -1590 -19 -755 81 -1507 283 -2211 594 -154 68 -461
221 -587 292 -75 42 -95 49 -124 45 -44 -8 -44 -7 -50 -55 -5 -38 -4 -41 54
-88 44 -36 74 -73 113 -139 183 -310 482 -769 682 -1044 251 -346 474 -609
727 -861 650 -646 1317 -982 2252 -1135 185 -30 453 -62 596 -71 94 -6 104 -9
108 -28 2 -12 11 -88 20 -171 9 -82 38 -339 66 -570 27 -231 72 -618 100 -860
65 -570 97 -785 169 -1145 65 -325 70 -360 100 -665 36 -367 88 -589 155 -661
40 -42 64 -43 109 -4 71 63 96 200 74 413 -8 75 -13 137 -11 137 2 0 59 -41
128 -90 108 -79 137 -107 228 -218 250 -306 466 -613 571 -812 69 -132 188
-427 254 -631 163 -504 242 -977 242 -1455 0 -384 -57 -657 -207 -1000 -237
-542 -708 -1036 -1273 -1337 -365 -195 -833 -328 -1345 -383 -219 -23 -657
-24 -895 0 -638 62 -1269 223 -1974 503 -857 341 -1760 861 -2518 1451 -1062
825 -1960 1869 -2447 2842 -230 461 -335 772 -363 1077 -18 196 -6 271 61 393
70 127 183 296 267 400 94 117 261 280 380 371 210 161 593 379 771 438 56 19
297 46 314 35 14 -8 -112 -550 -191 -825 -55 -188 -53 -288 6 -366 30 -39 66
-43 89 -10 33 47 195 576 279 912 346 1385 526 3017 597 5425 25 877 18 4202
-10 4365 -5 28 -8 51 -7 52 0 0 40 -8 88 -19 81 -19 90 -19 112 -5 28 19 42
67 27 95 -6 12 -65 41 -153 77 -699 283 -1211 655 -1577 1145 -257 343 -420
741 -488 1187 -21 139 -24 499 -4 633 45 315 160 604 331 832 177 236 347 346
589 380 133 19 448 16 553 -5 529 -106 1004 -538 1274 -1162 57 -130 76 -151
123 -134 32 13 41 26 41 66 0 48 -37 235 -71 351 l-29 103 34 142 c19 78 40
169 47 201 l13 59 110 -7 c341 -19 791 -28 1174 -22 l424 6 -3 -477 c-2 -497
0 -530 42 -697 62 -245 191 -469 379 -657 200 -200 422 -318 714 -381 121 -25
63 -25 1576 -9 1315 15 1487 20 1625 55 236 60 433 169 613 340 201 192 333
424 398 698 16 64 18 154 23 752 l6 679 75 24 c160 49 399 90 565 96 63 2 226
-3 232 -8z m-10208 -4065 c187 -249 347 -436 576 -668 l150 -153 -245 3 c-135
2 -309 -1 -387 -6 -226 -14 -271 9 -330 167 l-33 87 0 477 0 476 91 -134 c50
-74 130 -186 178 -249z m17181 -3116 c481 -1 1258 -7 1727 -13 900 -12 1032
-19 1116 -60 55 -27 149 -117 175 -167 47 -93 47 -102 46 -914 -1 -805 -4
-911 -59 -2525 -52 -1496 -56 -1694 -56 -2710 1 -1609 -21 -1937 -166 -2520
-156 -629 -354 -997 -738 -1379 -324 -322 -634 -513 -1061 -655 -594 -198
-1266 -277 -1899 -224 -158 13 -340 17 -873 18 l-674 1 -63 89 c-160 224 -288
357 -500 521 -720 556 -1541 1014 -2738 1526 -884 377 -1697 665 -2400 848
l-88 23 -45 -21 c-24 -12 -49 -22 -54 -22 -6 0 -43 28 -83 61 -85 72 -205 155
-252 175 -19 8 -59 14 -89 14 -54 0 -55 0 -60 33 -19 110 -212 2044 -236 2352
-6 77 -17 216 -26 309 -8 93 -13 179 -10 192 14 56 404 350 696 524 324 194
864 436 1420 636 106 38 144 57 178 87 23 22 42 45 42 52 0 14 -38 50 -61 58
-10 3 -284 -3 -610 -14 -327 -10 -731 -19 -899 -19 -168 -1 -442 -5 -610 -9
-168 -5 -306 -8 -307 -7 -1 1 -20 202 -42 446 -22 245 -43 473 -46 506 l-6 62
73 12 c124 20 401 79 525 110 967 248 1796 713 2492 1395 346 339 621 682 852
1061 71 115 99 154 114 154 31 0 135 -54 180 -93 48 -42 88 -112 110 -193 15
-53 16 -205 16 -1494 -1 -1291 -6 -1595 -27 -1745 -14 -107 -27 -697 -31
-1415 -3 -627 0 -950 16 -1530 27 -959 30 -1049 42 -1150 35 -293 242 -609
471 -718 278 -133 622 -200 978 -189 261 8 408 45 645 164 184 92 254 142 381
268 107 105 187 213 244 324 34 68 69 242 80 401 6 80 29 345 53 590 39 417
42 465 42 760 -1 180 -6 356 -12 410 -30 240 -36 494 -24 1025 10 412 10 644
0 1115 -12 560 -23 1841 -23 2610 0 390 6 442 72 572 118 237 345 305 962 291
135 -4 639 -7 1120 -9z m-20785 -94 c396 -10 842 -24 990 -29 782 -30 1464
-32 1730 -6 152 15 237 17 545 11 201 -3 594 -9 874 -13 l509 -6 -7 -466 c-13
-890 -32 -1600 -61 -2236 -19 -401 -45 -878 -53 -970 l-7 -70 -1210 -1 c-1337
-1 -3006 -20 -3073 -35 -85 -18 -176 -76 -211 -132 -25 -41 -42 -152 -31 -202
12 -52 62 -100 145 -139 119 -56 156 -64 345 -70 96 -4 240 -11 320 -16 80 -5
244 -9 365 -10 274 0 937 26 1026 41 59 11 71 10 105 -7 27 -13 46 -33 62 -64
l22 -44 0 -594 c0 -577 -1 -594 -20 -633 -22 -43 -64 -73 -121 -89 -22 -6
-392 -12 -940 -15 -497 -3 -951 -8 -1009 -11 -152 -9 -195 -30 -236 -119 -83
-177 46 -366 294 -430 50 -13 94 -15 200 -11 76 3 488 9 917 15 429 5 1041 14
1360 20 1409 25 1418 25 1413 11 -2 -7 -91 -43 -198 -79 -107 -37 -267 -96
-355 -131 -188 -75 -591 -274 -720 -355 -143 -90 -309 -220 -434 -341 l-116
-111 -380 -123 c-1230 -397 -2533 -891 -3140 -1190 -524 -259 -810 -455 -1136
-780 -248 -248 -422 -469 -594 -754 -84 -140 -226 -415 -290 -561 -21 -49 -42
-94 -46 -98 -7 -9 -274 71 -504 150 -222 77 -473 216 -665 370 -129 102 -278
280 -382 455 -162 273 -373 948 -403 1288 -3 41 -13 138 -22 215 -25 210 -22
542 5 785 34 302 97 633 168 878 63 216 261 654 389 857 140 223 336 436 720
783 394 356 809 604 1485 889 264 111 792 301 875 315 15 2 20 11 20 33 l0 30
-125 -1 c-69 0 -539 -7 -1045 -14 -1029 -16 -1961 -19 -2046 -7 -71 10 -123
43 -172 110 -36 48 -38 56 -33 102 3 28 11 138 18 245 15 242 14 1784 -2 2240
-5 173 -13 441 -17 595 -7 319 -7 317 71 394 40 39 51 44 113 52 142 18 417
28 988 34 527 6 1798 36 2265 55 331 13 746 10 1465 -10z"
        />
        <path
          d="M18816 25570 c-175 -20 -369 -74 -520 -144 -83 -38 -235 -133 -278
-174 -37 -34 -38 -85 -3 -108 22 -15 30 -14 97 1 370 85 763 124 1058 105 251
-16 441 -55 662 -136 73 -27 79 -28 94 -12 16 16 15 20 -26 72 -151 196 -388
332 -665 381 -112 20 -314 27 -419 15z"
        />
        <path
          d="M12932 24614 c-74 -19 -150 -58 -215 -110 -160 -125 -258 -352 -244
-564 10 -148 44 -220 103 -220 33 0 50 28 68 112 55 252 204 428 362 428 122
0 228 -35 298 -100 91 -84 111 -172 111 -480 0 -124 -2 -281 -3 -350 -4 -137
12 -221 61 -332 60 -136 185 -278 322 -367 88 -57 123 -62 158 -20 28 34 20
64 -42 168 -86 142 -125 240 -141 353 -11 74 -5 130 30 288 31 139 39 422 16
559 -72 428 -324 653 -728 650 -57 0 -127 -7 -156 -15z"
        />
        <path
          d="M19436 21450 c-107 -28 -228 -120 -304 -234 -62 -92 -90 -174 -103
-299 -23 -221 36 -477 164 -709 116 -212 353 -476 536 -596 259 -170 530 -258
832 -269 237 -9 425 26 605 111 131 62 204 115 327 235 199 194 330 399 377
592 22 86 22 86 60 98 65 19 86 55 56 96 -10 13 -24 18 -55 17 -24 -1 -41 3
-41 9 0 45 -93 109 -160 109 -45 0 -111 -31 -136 -63 l-20 -25 -111 37 c-131
45 -338 145 -555 270 -164 94 -184 106 -492 314 -215 146 -404 244 -546 283
-78 21 -122 26 -245 29 -82 3 -167 0 -189 -5z m250 -281 c154 -21 283 -82 710
-335 137 -81 317 -182 399 -224 219 -112 510 -214 685 -242 l80 -12 0 -62 c0
-79 -29 -192 -75 -288 l-37 -77 -81 6 c-400 31 -671 120 -847 278 -83 75 -138
98 -254 107 -202 17 -474 114 -651 233 -80 54 -187 158 -241 233 -24 34 -52
65 -60 68 -35 13 13 157 75 228 38 43 102 76 168 88 27 4 49 8 50 9 1 0 36 -4
79 -10z m-204 -748 c62 -26 273 -142 369 -202 172 -107 257 -138 399 -144 96
-4 129 -14 270 -78 163 -73 419 -135 682 -163 87 -10 158 -21 158 -25 0 -4
-34 -39 -76 -78 -136 -127 -275 -205 -452 -253 -92 -25 -310 -29 -432 -8 -394
67 -743 337 -950 733 -38 73 -110 251 -110 273 0 4 61 -19 142 -55z"
        />
        <path
          d="M13094 9926 c-23 -23 -34 -43 -34 -63 0 -17 50 -130 118 -268 725
-1465 1741 -2608 2947 -3314 155 -91 583 -306 800 -401 1210 -532 2269 -702
3149 -505 543 122 1001 447 1255 890 120 210 192 491 210 821 29 541 -103
1130 -385 1714 -41 85 -85 165 -96 177 -42 45 -137 24 -159 -34 -8 -21 0 -44
52 -145 155 -306 264 -697 314 -1123 17 -150 20 -462 4 -585 -43 -346 -165
-621 -373 -838 -271 -283 -649 -442 -1216 -514 -157 -20 -692 -17 -890 5 -811
90 -1507 294 -2220 651 -951 476 -1760 1158 -2417 2037 -311 416 -623 920
-852 1377 -33 66 -71 128 -83 136 -39 27 -86 20 -124 -18z"
        />
      </g>
    </svg>
  );
};