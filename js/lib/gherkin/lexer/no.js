
/* line 1 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */
;(function() {


/* line 117 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */



/* line 11 "js/lib/gherkin/lexer/no.js" */
const _lexer_actions = [
	0, 1, 0, 1, 1, 1, 2, 1, 
	3, 1, 4, 1, 5, 1, 6, 1, 
	7, 1, 8, 1, 9, 1, 10, 1, 
	11, 1, 14, 1, 15, 1, 16, 1, 
	17, 1, 18, 1, 19, 1, 20, 1, 
	21, 2, 2, 16, 2, 11, 0, 2, 
	12, 13, 2, 15, 0, 2, 15, 1, 
	2, 15, 14, 2, 15, 17, 2, 16, 
	4, 2, 16, 5, 2, 16, 6, 2, 
	16, 7, 2, 16, 8, 2, 16, 14, 
	2, 18, 19, 2, 20, 0, 2, 20, 
	1, 2, 20, 14, 2, 20, 17, 3, 
	3, 12, 13, 3, 9, 12, 13, 3, 
	10, 12, 13, 3, 11, 12, 13, 3, 
	12, 13, 16, 3, 15, 12, 13, 4, 
	2, 12, 13, 16, 4, 15, 0, 12, 
	13
];

const _lexer_key_offsets = [
	0, 0, 19, 37, 38, 39, 43, 48, 
	53, 58, 63, 67, 71, 73, 74, 75, 
	76, 77, 78, 79, 80, 81, 82, 83, 
	84, 85, 86, 87, 88, 89, 90, 92, 
	97, 104, 109, 110, 111, 112, 113, 114, 
	115, 116, 117, 118, 119, 120, 121, 122, 
	123, 124, 125, 126, 127, 128, 142, 144, 
	146, 148, 150, 152, 154, 156, 158, 160, 
	162, 164, 166, 168, 170, 172, 190, 191, 
	192, 193, 194, 195, 196, 197, 198, 199, 
	200, 215, 217, 219, 221, 223, 225, 227, 
	229, 231, 233, 235, 237, 239, 241, 243, 
	245, 247, 249, 251, 253, 255, 257, 259, 
	261, 263, 265, 267, 269, 271, 273, 275, 
	277, 279, 281, 283, 285, 287, 289, 291, 
	293, 295, 297, 299, 301, 303, 305, 307, 
	309, 311, 314, 316, 318, 320, 322, 324, 
	326, 328, 331, 333, 335, 337, 338, 339, 
	340, 341, 342, 343, 344, 345, 346, 357, 
	359, 361, 363, 365, 367, 369, 371, 373, 
	375, 377, 379, 381, 383, 385, 387, 389, 
	391, 393, 395, 397, 399, 401, 403, 405, 
	407, 409, 411, 413, 415, 417, 419, 421, 
	423, 425, 427, 429, 431, 433, 436, 438, 
	440, 442, 444, 446, 448, 450, 452, 454, 
	456, 458, 460, 462, 464, 466, 468, 470, 
	472, 474, 476, 479, 481, 483, 484, 485, 
	486, 487, 488, 489, 490, 491, 492, 493, 
	500, 502, 504, 506, 508, 510, 512, 514, 
	516, 517, 518, 519, 520, 521, 522, 523, 
	524, 525, 527, 528, 529, 530, 531, 532, 
	533, 534, 536, 537, 538, 554, 556, 558, 
	560, 562, 564, 566, 568, 570, 572, 574, 
	576, 578, 580, 582, 584, 586, 588, 590, 
	592, 594, 596, 598, 600, 602, 604, 606, 
	608, 610, 612, 614, 616, 618, 620, 622, 
	624, 626, 628, 630, 632, 634, 636, 638, 
	640, 642, 644, 646, 648, 650, 652, 654, 
	656, 658, 660, 662, 664, 667, 669, 671, 
	673, 675, 677, 679, 681, 684, 686, 688, 
	689, 690, 694, 700, 703, 705, 711, 729, 
	731, 733, 735, 737, 739, 741, 743, 745, 
	747, 749, 751, 753, 755, 757, 759, 761, 
	763, 766, 768, 770, 772, 774, 776, 778, 
	780, 781, 782
];

const _lexer_trans_keys = [
	10, 32, 34, 35, 37, 42, 64, 65, 
	66, 69, 71, 77, 78, 79, 83, 124, 
	239, 9, 13, 10, 32, 34, 35, 37, 
	42, 64, 65, 66, 69, 71, 77, 78, 
	79, 83, 124, 9, 13, 34, 34, 10, 
	32, 9, 13, 10, 32, 34, 9, 13, 
	10, 32, 34, 9, 13, 10, 32, 34, 
	9, 13, 10, 32, 34, 9, 13, 10, 
	32, 9, 13, 10, 32, 9, 13, 10, 
	13, 10, 95, 70, 69, 65, 84, 85, 
	82, 69, 95, 69, 78, 68, 95, 37, 
	32, 10, 10, 13, 13, 32, 64, 9, 
	10, 9, 10, 13, 32, 64, 11, 12, 
	10, 32, 64, 9, 13, 98, 115, 116, 
	114, 97, 107, 116, 32, 83, 99, 101, 
	110, 97, 114, 105, 111, 58, 10, 10, 
	10, 32, 35, 37, 42, 64, 69, 71, 
	77, 78, 79, 83, 9, 13, 10, 95, 
	10, 70, 10, 69, 10, 65, 10, 84, 
	10, 85, 10, 82, 10, 69, 10, 95, 
	10, 69, 10, 78, 10, 68, 10, 95, 
	10, 37, 10, 32, 10, 32, 34, 35, 
	37, 42, 64, 65, 66, 69, 71, 77, 
	78, 79, 83, 124, 9, 13, 97, 107, 
	103, 114, 117, 110, 110, 58, 10, 10, 
	10, 32, 35, 37, 42, 64, 65, 69, 
	71, 77, 78, 79, 83, 9, 13, 10, 
	95, 10, 70, 10, 69, 10, 65, 10, 
	84, 10, 85, 10, 82, 10, 69, 10, 
	95, 10, 69, 10, 78, 10, 68, 10, 
	95, 10, 37, 10, 32, 10, 98, 10, 
	115, 10, 116, 10, 114, 10, 97, 10, 
	107, 10, 116, 10, 32, 10, 83, 10, 
	99, 10, 101, 10, 110, 10, 97, 10, 
	114, 10, 105, 10, 111, 10, 58, 10, 
	103, 10, 101, 10, 110, 10, 115, 10, 
	107, 10, 97, 10, 112, 10, 105, 10, 
	116, 10, 116, 10, 101, 10, 110, -61, 
	10, -91, 10, 10, 114, 10, 103, -61, 
	10, 99, -91, 10, 10, 101, 10, 110, 
	10, 97, 10, 114, 10, 105, 10, 111, 
	10, 58, 109, 10, 97, 10, 108, 103, 
	107, 101, 110, 115, 107, 97, 112, 58, 
	10, 10, 10, 32, 35, 37, 64, 65, 
	66, 69, 83, 9, 13, 10, 95, 10, 
	70, 10, 69, 10, 65, 10, 84, 10, 
	85, 10, 82, 10, 69, 10, 95, 10, 
	69, 10, 78, 10, 68, 10, 95, 10, 
	37, 10, 98, 10, 115, 10, 116, 10, 
	114, 10, 97, 10, 107, 10, 116, 10, 
	32, 10, 83, 10, 99, 10, 101, 10, 
	110, 10, 97, 10, 114, 10, 105, 10, 
	111, 10, 58, 10, 97, 10, 107, 10, 
	103, 10, 114, 10, 117, 10, 110, 10, 
	110, 10, 103, 107, 10, 101, 10, 110, 
	10, 115, 10, 107, 10, 97, 10, 112, 
	10, 115, 10, 101, 10, 109, 10, 112, 
	10, 108, 10, 101, 10, 114, 10, 99, 
	10, 101, 10, 110, 10, 97, 10, 114, 
	10, 105, 10, 111, 10, 58, 109, 10, 
	97, 10, 108, 115, 101, 109, 112, 108, 
	101, 114, 58, 10, 10, 10, 32, 35, 
	69, 124, 9, 13, 10, 103, 10, 101, 
	10, 110, 10, 115, 10, 107, 10, 97, 
	10, 112, 10, 58, 105, 116, 116, 101, 
	110, -61, -91, 114, 103, -61, 99, -91, 
	101, 110, 97, 114, 105, 111, 58, 109, 
	10, 10, 10, 32, 35, 37, 42, 64, 
	65, 66, 69, 71, 77, 78, 79, 83, 
	9, 13, 10, 95, 10, 70, 10, 69, 
	10, 65, 10, 84, 10, 85, 10, 82, 
	10, 69, 10, 95, 10, 69, 10, 78, 
	10, 68, 10, 95, 10, 37, 10, 32, 
	10, 98, 10, 115, 10, 116, 10, 114, 
	10, 97, 10, 107, 10, 116, 10, 32, 
	10, 83, 10, 99, 10, 101, 10, 110, 
	10, 97, 10, 114, 10, 105, 10, 111, 
	10, 58, 10, 97, 10, 107, 10, 103, 
	10, 114, 10, 117, 10, 110, 10, 110, 
	10, 103, 10, 101, 10, 110, 10, 115, 
	10, 107, 10, 97, 10, 112, 10, 105, 
	10, 116, 10, 116, 10, 101, 10, 110, 
	-61, 10, -91, 10, 10, 114, 10, 103, 
	-61, 10, 99, -91, 10, 10, 101, 10, 
	110, 10, 97, 10, 114, 10, 105, 10, 
	111, 10, 58, 109, 10, 97, 10, 108, 
	97, 108, 32, 124, 9, 13, 10, 32, 
	92, 124, 9, 13, 10, 92, 124, 10, 
	92, 10, 32, 92, 124, 9, 13, 10, 
	32, 34, 35, 37, 42, 64, 65, 66, 
	69, 71, 77, 78, 79, 83, 124, 9, 
	13, 10, 103, 10, 101, 10, 110, 10, 
	115, 10, 107, 10, 97, 10, 112, 10, 
	58, 10, 105, 10, 116, 10, 116, 10, 
	101, 10, 110, -61, 10, -91, 10, 10, 
	114, 10, 103, -61, 10, 99, -91, 10, 
	10, 101, 10, 110, 10, 97, 10, 114, 
	10, 105, 10, 111, 187, 191, 0
];

const _lexer_single_lengths = [
	0, 17, 16, 1, 1, 2, 3, 3, 
	3, 3, 2, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 2, 3, 
	5, 3, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 12, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 16, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	13, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 3, 2, 2, 2, 2, 2, 2, 
	2, 3, 2, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 9, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 3, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 3, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 5, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 2, 1, 1, 1, 1, 1, 1, 
	1, 2, 1, 1, 14, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 3, 2, 2, 2, 
	2, 2, 2, 2, 3, 2, 2, 1, 
	1, 2, 4, 3, 2, 4, 16, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	3, 2, 2, 2, 2, 2, 2, 2, 
	1, 1, 0
];

const _lexer_range_lengths = [
	0, 1, 1, 0, 0, 1, 1, 1, 
	1, 1, 1, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	1, 1, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 1, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 1, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 1, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 1, 1, 0, 0, 1, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0
];

const _lexer_index_offsets = [
	0, 0, 19, 37, 39, 41, 45, 50, 
	55, 60, 65, 69, 73, 76, 78, 80, 
	82, 84, 86, 88, 90, 92, 94, 96, 
	98, 100, 102, 104, 106, 108, 110, 113, 
	118, 125, 130, 132, 134, 136, 138, 140, 
	142, 144, 146, 148, 150, 152, 154, 156, 
	158, 160, 162, 164, 166, 168, 182, 185, 
	188, 191, 194, 197, 200, 203, 206, 209, 
	212, 215, 218, 221, 224, 227, 245, 247, 
	249, 251, 253, 255, 257, 259, 261, 263, 
	265, 280, 283, 286, 289, 292, 295, 298, 
	301, 304, 307, 310, 313, 316, 319, 322, 
	325, 328, 331, 334, 337, 340, 343, 346, 
	349, 352, 355, 358, 361, 364, 367, 370, 
	373, 376, 379, 382, 385, 388, 391, 394, 
	397, 400, 403, 406, 409, 412, 415, 418, 
	421, 424, 428, 431, 434, 437, 440, 443, 
	446, 449, 453, 456, 459, 462, 464, 466, 
	468, 470, 472, 474, 476, 478, 480, 491, 
	494, 497, 500, 503, 506, 509, 512, 515, 
	518, 521, 524, 527, 530, 533, 536, 539, 
	542, 545, 548, 551, 554, 557, 560, 563, 
	566, 569, 572, 575, 578, 581, 584, 587, 
	590, 593, 596, 599, 602, 605, 609, 612, 
	615, 618, 621, 624, 627, 630, 633, 636, 
	639, 642, 645, 648, 651, 654, 657, 660, 
	663, 666, 669, 673, 676, 679, 681, 683, 
	685, 687, 689, 691, 693, 695, 697, 699, 
	706, 709, 712, 715, 718, 721, 724, 727, 
	730, 732, 734, 736, 738, 740, 742, 744, 
	746, 748, 751, 753, 755, 757, 759, 761, 
	763, 765, 768, 770, 772, 788, 791, 794, 
	797, 800, 803, 806, 809, 812, 815, 818, 
	821, 824, 827, 830, 833, 836, 839, 842, 
	845, 848, 851, 854, 857, 860, 863, 866, 
	869, 872, 875, 878, 881, 884, 887, 890, 
	893, 896, 899, 902, 905, 908, 911, 914, 
	917, 920, 923, 926, 929, 932, 935, 938, 
	941, 944, 947, 950, 953, 957, 960, 963, 
	966, 969, 972, 975, 978, 982, 985, 988, 
	990, 992, 996, 1002, 1006, 1009, 1015, 1033, 
	1036, 1039, 1042, 1045, 1048, 1051, 1054, 1057, 
	1060, 1063, 1066, 1069, 1072, 1075, 1078, 1081, 
	1084, 1088, 1091, 1094, 1097, 1100, 1103, 1106, 
	1109, 1111, 1113
];

const _lexer_indicies = [
	2, 1, 3, 4, 5, 6, 7, 8, 
	9, 10, 11, 12, 13, 14, 15, 16, 
	17, 1, 0, 2, 1, 3, 4, 5, 
	6, 7, 8, 9, 10, 11, 12, 13, 
	14, 15, 16, 1, 0, 18, 0, 19, 
	0, 20, 19, 19, 0, 23, 22, 24, 
	22, 21, 27, 26, 28, 26, 25, 27, 
	26, 29, 26, 25, 27, 26, 30, 26, 
	25, 32, 31, 31, 0, 2, 33, 33, 
	0, 35, 36, 34, 2, 0, 37, 0, 
	38, 0, 39, 0, 40, 0, 41, 0, 
	42, 0, 43, 0, 44, 0, 45, 0, 
	46, 0, 47, 0, 48, 0, 49, 0, 
	50, 0, 51, 0, 0, 52, 54, 55, 
	53, 0, 0, 0, 0, 56, 57, 58, 
	57, 57, 60, 59, 56, 2, 61, 7, 
	61, 0, 62, 0, 63, 0, 64, 0, 
	65, 0, 66, 0, 67, 0, 68, 0, 
	69, 0, 70, 0, 71, 0, 72, 0, 
	73, 0, 74, 0, 75, 0, 76, 0, 
	77, 0, 78, 0, 80, 79, 82, 81, 
	82, 83, 84, 85, 86, 84, 87, 88, 
	89, 90, 91, 92, 83, 81, 82, 93, 
	81, 82, 94, 81, 82, 95, 81, 82, 
	96, 81, 82, 97, 81, 82, 98, 81, 
	82, 99, 81, 82, 100, 81, 82, 101, 
	81, 82, 102, 81, 82, 103, 81, 82, 
	104, 81, 82, 105, 81, 82, 106, 81, 
	82, 107, 81, 109, 108, 110, 111, 112, 
	113, 114, 115, 116, 117, 118, 119, 120, 
	121, 122, 123, 108, 0, 124, 0, 125, 
	0, 126, 0, 127, 0, 128, 0, 129, 
	0, 130, 0, 131, 0, 133, 132, 135, 
	134, 135, 136, 137, 138, 139, 137, 140, 
	141, 142, 143, 144, 145, 146, 136, 134, 
	135, 147, 134, 135, 148, 134, 135, 149, 
	134, 135, 150, 134, 135, 151, 134, 135, 
	152, 134, 135, 153, 134, 135, 154, 134, 
	135, 155, 134, 135, 156, 134, 135, 157, 
	134, 135, 158, 134, 135, 159, 134, 135, 
	160, 134, 135, 161, 134, 135, 162, 134, 
	135, 163, 134, 135, 164, 134, 135, 165, 
	134, 135, 166, 134, 135, 167, 134, 135, 
	168, 134, 135, 169, 134, 135, 170, 134, 
	135, 171, 134, 135, 172, 134, 135, 173, 
	134, 135, 174, 134, 135, 175, 134, 135, 
	176, 134, 135, 177, 134, 135, 161, 134, 
	135, 178, 134, 135, 179, 134, 135, 180, 
	134, 135, 181, 134, 135, 182, 134, 135, 
	183, 134, 135, 177, 134, 135, 184, 134, 
	135, 185, 134, 135, 186, 134, 135, 187, 
	134, 135, 186, 134, 188, 135, 134, 189, 
	135, 134, 135, 186, 134, 135, 186, 134, 
	190, 135, 191, 134, 186, 135, 134, 135, 
	192, 134, 135, 193, 134, 135, 194, 134, 
	135, 195, 134, 135, 196, 134, 135, 197, 
	134, 135, 161, 198, 134, 135, 199, 134, 
	135, 177, 134, 200, 201, 0, 202, 0, 
	203, 0, 204, 0, 205, 0, 206, 0, 
	207, 0, 208, 0, 210, 209, 212, 211, 
	212, 213, 214, 215, 214, 216, 217, 218, 
	219, 213, 211, 212, 220, 211, 212, 221, 
	211, 212, 222, 211, 212, 223, 211, 212, 
	224, 211, 212, 225, 211, 212, 226, 211, 
	212, 227, 211, 212, 228, 211, 212, 229, 
	211, 212, 230, 211, 212, 231, 211, 212, 
	232, 211, 212, 233, 211, 212, 234, 211, 
	212, 235, 211, 212, 236, 211, 212, 237, 
	211, 212, 238, 211, 212, 239, 211, 212, 
	240, 211, 212, 241, 211, 212, 242, 211, 
	212, 243, 211, 212, 244, 211, 212, 245, 
	211, 212, 246, 211, 212, 247, 211, 212, 
	248, 211, 212, 249, 211, 212, 250, 211, 
	212, 251, 211, 212, 252, 211, 212, 253, 
	211, 212, 254, 211, 212, 255, 211, 212, 
	256, 211, 212, 249, 211, 212, 257, 258, 
	211, 212, 259, 211, 212, 260, 211, 212, 
	261, 211, 212, 262, 211, 212, 263, 211, 
	212, 249, 211, 212, 264, 211, 212, 265, 
	211, 212, 266, 211, 212, 267, 211, 212, 
	268, 211, 212, 269, 211, 212, 249, 211, 
	212, 270, 211, 212, 271, 211, 212, 272, 
	211, 212, 273, 211, 212, 274, 211, 212, 
	275, 211, 212, 276, 211, 212, 250, 277, 
	211, 212, 278, 211, 212, 249, 211, 279, 
	0, 280, 0, 281, 0, 282, 0, 283, 
	0, 284, 0, 285, 0, 286, 0, 288, 
	287, 290, 289, 290, 291, 292, 293, 292, 
	291, 289, 290, 294, 289, 290, 295, 289, 
	290, 296, 289, 290, 297, 289, 290, 298, 
	289, 290, 299, 289, 290, 300, 289, 290, 
	301, 289, 302, 0, 303, 0, 304, 0, 
	305, 0, 304, 0, 306, 0, 307, 0, 
	304, 0, 304, 0, 308, 309, 0, 304, 
	0, 310, 0, 311, 0, 312, 0, 313, 
	0, 314, 0, 315, 0, 316, 317, 0, 
	319, 318, 321, 320, 321, 322, 323, 324, 
	325, 323, 326, 327, 328, 329, 330, 331, 
	332, 333, 322, 320, 321, 334, 320, 321, 
	335, 320, 321, 336, 320, 321, 337, 320, 
	321, 338, 320, 321, 339, 320, 321, 340, 
	320, 321, 341, 320, 321, 342, 320, 321, 
	343, 320, 321, 344, 320, 321, 345, 320, 
	321, 346, 320, 321, 347, 320, 321, 348, 
	320, 321, 349, 320, 321, 350, 320, 321, 
	351, 320, 321, 352, 320, 321, 353, 320, 
	321, 354, 320, 321, 355, 320, 321, 356, 
	320, 321, 357, 320, 321, 358, 320, 321, 
	359, 320, 321, 360, 320, 321, 361, 320, 
	321, 362, 320, 321, 363, 320, 321, 364, 
	320, 321, 348, 320, 321, 365, 320, 321, 
	366, 320, 321, 367, 320, 321, 368, 320, 
	321, 369, 320, 321, 370, 320, 321, 364, 
	320, 321, 371, 320, 321, 372, 320, 321, 
	373, 320, 321, 374, 320, 321, 375, 320, 
	321, 376, 320, 321, 364, 320, 321, 377, 
	320, 321, 378, 320, 321, 379, 320, 321, 
	380, 320, 321, 379, 320, 381, 321, 320, 
	382, 321, 320, 321, 379, 320, 321, 379, 
	320, 383, 321, 384, 320, 379, 321, 320, 
	321, 385, 320, 321, 386, 320, 321, 387, 
	320, 321, 388, 320, 321, 389, 320, 321, 
	390, 320, 321, 348, 391, 320, 321, 392, 
	320, 321, 364, 320, 393, 0, 77, 0, 
	394, 395, 394, 0, 398, 397, 399, 400, 
	397, 396, 0, 402, 403, 401, 0, 402, 
	401, 398, 404, 402, 403, 404, 401, 398, 
	405, 406, 407, 408, 409, 410, 411, 412, 
	413, 414, 415, 416, 417, 418, 419, 405, 
	0, 82, 420, 81, 82, 421, 81, 82, 
	422, 81, 82, 423, 81, 82, 424, 81, 
	82, 425, 81, 82, 426, 81, 82, 107, 
	81, 82, 427, 81, 82, 428, 81, 82, 
	429, 81, 82, 430, 81, 82, 429, 81, 
	431, 82, 81, 432, 82, 81, 82, 429, 
	81, 82, 429, 81, 433, 82, 434, 81, 
	429, 82, 81, 82, 435, 81, 82, 436, 
	81, 82, 437, 81, 82, 438, 81, 82, 
	439, 81, 82, 426, 81, 440, 0, 1, 
	0, 441, 0
];

const _lexer_trans_targs = [
	0, 2, 2, 3, 12, 14, 28, 31, 
	34, 70, 140, 232, 235, 237, 240, 241, 
	321, 352, 4, 5, 6, 7, 7, 7, 
	8, 7, 7, 7, 8, 9, 10, 11, 
	2, 11, 12, 2, 13, 15, 16, 17, 
	18, 19, 20, 21, 22, 23, 24, 25, 
	26, 27, 354, 29, 30, 30, 2, 13, 
	32, 33, 2, 32, 31, 33, 35, 36, 
	37, 38, 39, 40, 41, 42, 43, 44, 
	45, 46, 47, 48, 49, 50, 51, 52, 
	53, 52, 53, 53, 2, 54, 68, 327, 
	335, 338, 340, 343, 344, 55, 56, 57, 
	58, 59, 60, 61, 62, 63, 64, 65, 
	66, 67, 2, 69, 2, 2, 3, 12, 
	14, 28, 31, 34, 70, 140, 232, 235, 
	237, 240, 241, 321, 71, 72, 73, 74, 
	75, 76, 77, 78, 79, 80, 79, 80, 
	80, 2, 81, 95, 96, 113, 120, 123, 
	125, 128, 129, 82, 83, 84, 85, 86, 
	87, 88, 89, 90, 91, 92, 93, 94, 
	2, 69, 97, 98, 99, 100, 101, 102, 
	103, 104, 105, 106, 107, 108, 109, 110, 
	111, 112, 114, 115, 116, 117, 118, 119, 
	121, 122, 95, 124, 126, 127, 130, 131, 
	132, 133, 134, 135, 136, 137, 138, 139, 
	141, 213, 142, 143, 144, 145, 146, 147, 
	148, 149, 150, 149, 150, 150, 2, 151, 
	165, 182, 189, 203, 152, 153, 154, 155, 
	156, 157, 158, 159, 160, 161, 162, 163, 
	164, 2, 166, 167, 168, 169, 170, 171, 
	172, 173, 174, 175, 176, 177, 178, 179, 
	180, 181, 69, 183, 184, 185, 186, 187, 
	188, 190, 196, 191, 192, 193, 194, 195, 
	197, 198, 199, 200, 201, 202, 204, 205, 
	206, 207, 208, 209, 210, 211, 212, 214, 
	215, 216, 217, 218, 219, 220, 221, 222, 
	223, 222, 223, 223, 2, 224, 225, 226, 
	227, 228, 229, 230, 231, 69, 233, 234, 
	28, 236, 238, 239, 242, 243, 244, 245, 
	246, 247, 248, 249, 250, 319, 251, 252, 
	251, 252, 252, 2, 253, 267, 268, 285, 
	292, 299, 302, 304, 307, 308, 254, 255, 
	256, 257, 258, 259, 260, 261, 262, 263, 
	264, 265, 266, 2, 69, 269, 270, 271, 
	272, 273, 274, 275, 276, 277, 278, 279, 
	280, 281, 282, 283, 284, 286, 287, 288, 
	289, 290, 291, 293, 294, 295, 296, 297, 
	298, 300, 301, 267, 303, 305, 306, 309, 
	310, 311, 312, 313, 314, 315, 316, 317, 
	318, 320, 321, 322, 323, 325, 326, 324, 
	322, 323, 324, 322, 325, 326, 3, 12, 
	14, 28, 31, 34, 70, 140, 232, 235, 
	237, 240, 241, 321, 328, 329, 330, 331, 
	332, 333, 334, 336, 337, 68, 339, 341, 
	342, 345, 346, 347, 348, 349, 350, 351, 
	353, 0
];

const _lexer_trans_actions = [
	39, 0, 47, 3, 1, 0, 25, 1, 
	25, 25, 25, 25, 25, 25, 25, 25, 
	31, 0, 0, 0, 47, 5, 41, 119, 
	41, 0, 29, 111, 29, 29, 0, 7, 
	95, 0, 0, 103, 21, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 50, 0, 99, 19, 
	0, 23, 107, 23, 44, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 50, 
	124, 0, 47, 0, 71, 29, 77, 77, 
	77, 77, 77, 77, 77, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 15, 15, 27, 115, 53, 50, 
	27, 56, 50, 56, 56, 56, 56, 56, 
	56, 56, 56, 59, 0, 0, 0, 0, 
	0, 0, 0, 0, 50, 124, 0, 47, 
	0, 65, 29, 77, 77, 77, 77, 77, 
	77, 77, 77, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	11, 11, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 50, 124, 0, 47, 0, 62, 29, 
	77, 77, 77, 77, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 9, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 9, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 50, 
	124, 0, 47, 0, 74, 77, 0, 0, 
	0, 0, 0, 0, 0, 17, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 50, 124, 
	0, 47, 0, 68, 29, 77, 77, 77, 
	77, 77, 77, 77, 77, 77, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 13, 13, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 33, 33, 47, 33, 
	80, 0, 0, 35, 0, 0, 86, 83, 
	37, 89, 83, 89, 89, 89, 89, 89, 
	89, 89, 89, 92, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0
];

const _lexer_eof_actions = [
	0, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39
];

const lexer_start = 1;
const lexer_first_final = 354;
const lexer_error = 0;

const lexer_en_main = 1;


/* line 120 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

/* line 121 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

/* line 122 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

var Lexer = function(listener) {
  // Check that listener has the required functions
  var events = ['comment', 'tag', 'feature', 'background', 'scenario', 'scenario_outline', 'examples', 'step', 'py_string', 'row', 'eof'];
  for(e in events) {
    var event = events[e];
    if(typeof listener[event] != 'function') {
      "Error. No " + event + " function exists on " + JSON.stringify(listener);
    }
  }
  this.listener = listener;  
};

Lexer.prototype.scan = function(data) {
  var ending = "\n%_FEATURE_END_%";
  if(typeof data == 'string') {
    data = this.stringToBytes(data + ending);
  } else if(typeof Buffer != 'undefined' && Buffer.isBuffer(data)) {
    // Node.js
    var buf = new Buffer(data.length + ending.length);
    data.copy(buf, 0, 0);
    new Buffer(ending).copy(buf, data.length, 0);
    data = buf;
  }
  var eof = pe = data.length;
  var p = 0;

  this.line_number = 1;
  this.last_newline = 0;

  
/* line 677 "js/lib/gherkin/lexer/no.js" */
{
	  this.cs = lexer_start;
} /* JSCodeGen::writeInit */

/* line 153 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */
  
/* line 684 "js/lib/gherkin/lexer/no.js" */
{
	var _klen, _trans, _keys, _ps, _widec, _acts, _nacts;
	var _goto_level, _resume, _eof_trans, _again, _test_eof;
	var _out;
	_klen = _trans = _keys = _acts = _nacts = null;
	_goto_level = 0;
	_resume = 10;
	_eof_trans = 15;
	_again = 20;
	_test_eof = 30;
	_out = 40;
	while (true) {
	_trigger_goto = false;
	if (_goto_level <= 0) {
	if (p == pe) {
		_goto_level = _test_eof;
		continue;
	}
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	}
	if (_goto_level <= _resume) {
	_keys = _lexer_key_offsets[ this.cs];
	_trans = _lexer_index_offsets[ this.cs];
	_klen = _lexer_single_lengths[ this.cs];
	_break_match = false;
	
	do {
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + _klen - 1;

	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + ( (_upper - _lower) >> 1 );

	        if ( data[p] < _lexer_trans_keys[_mid]) {
	           _upper = _mid - 1;
	        } else if ( data[p] > _lexer_trans_keys[_mid]) {
	           _lower = _mid + 1;
	        } else {
	           _trans += (_mid - _keys);
	           _break_match = true;
	           break;
	        };
	     } /* while */
	     if (_break_match) { break; }
	     _keys += _klen;
	     _trans += _klen;
	  }
	  _klen = _lexer_range_lengths[ this.cs];
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + (_klen << 1) - 2;
	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + (((_upper-_lower) >> 1) & ~1);
	        if ( data[p] < _lexer_trans_keys[_mid]) {
	          _upper = _mid - 2;
	         } else if ( data[p] > _lexer_trans_keys[_mid+1]) {
	          _lower = _mid + 2;
	        } else {
	          _trans += ((_mid - _keys) >> 1);
	          _break_match = true;
	          break;
	        }
	     } /* while */
	     if (_break_match) { break; }
	     _trans += _klen
	  }
	} while (false);
	_trans = _lexer_indicies[_trans];
	 this.cs = _lexer_trans_targs[_trans];
	if (_lexer_trans_actions[_trans] != 0) {
		_acts = _lexer_trans_actions[_trans];
		_nacts = _lexer_actions[_acts];
		_acts += 1;
		while (_nacts > 0) {
			_nacts -= 1;
			_acts += 1;
			switch (_lexer_actions[_acts - 1]) {
case 0:
/* line 6 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.content_start = p;
    this.current_line = this.line_number;
    this.start_col = p - this.last_newline - (this.keyword+':').length;
  		break;
case 1:
/* line 12 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.current_line = this.line_number;
    this.start_col = p - this.last_newline;
  		break;
case 2:
/* line 17 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.content_start = p;
  		break;
case 3:
/* line 21 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    var con = this.unindent(
      this.start_col, 
      this.bytesToString(data.slice(this.content_start, this.next_keyword_start-1)).replace(/(\r?\n)?([\t ])*$/, '').replace(/\\\"\\\"\\\"/mg, '"""')
    );
    this.listener.py_string(con, this.current_line); 
  		break;
case 4:
/* line 29 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    p = this.store_keyword_content('feature', data, p, eof);
  		break;
case 5:
/* line 33 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    p = this.store_keyword_content('background', data, p, eof);
  		break;
case 6:
/* line 37 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    p = this.store_keyword_content('scenario', data, p, eof);
  		break;
case 7:
/* line 41 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    p = this.store_keyword_content('scenario_outline', data, p, eof);
  		break;
case 8:
/* line 45 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    p = this.store_keyword_content('examples', data, p, eof);
  		break;
case 9:
/* line 49 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.step(this.keyword, con, this.current_line);
  		break;
case 10:
/* line 54 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.comment(con, this.line_number);
    this.keyword_start = null;
  		break;
case 11:
/* line 60 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.tag(con, this.line_number);
    this.keyword_start = null;
  		break;
case 12:
/* line 66 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.line_number++;
  		break;
case 13:
/* line 70 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.last_newline = p + 1;
  		break;
case 14:
/* line 74 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.keyword_start = this.keyword_start || p;
  		break;
case 15:
/* line 78 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.keyword = this.bytesToString(data.slice(this.keyword_start, p)).replace(/:$/, '');
    this.keyword_start = null;
  		break;
case 16:
/* line 83 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.next_keyword_start = p;
  		break;
case 17:
/* line 87 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    p = p - 1;
    current_row = [];
    this.current_line = this.line_number;
  		break;
case 18:
/* line 93 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.content_start = p;
  		break;
case 19:
/* line 97 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    current_row.push(con.replace(/\\\|/, "|").replace(/\\n/, "\n").replace(/\\\\/, "\\"));
  		break;
case 20:
/* line 102 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    this.listener.row(current_row, this.current_line);
  		break;
case 21:
/* line 106 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw "Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/aslakhellesoy/gherkin/lexingerror for more information.";
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 900 "js/lib/gherkin/lexer/no.js" */
			} /* action switch */
		}
	}
	if (_trigger_goto) {
		continue;
	}
	}
	if (_goto_level <= _again) {
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	p += 1;
	if (p != pe) {
		_goto_level = _resume;
		continue;
	}
	}
	if (_goto_level <= _test_eof) {
	if (p == eof) {
	__acts = _lexer_eof_actions[ this.cs];
	__nacts =  _lexer_actions[__acts];
	__acts += 1;
	while (__nacts > 0) {
		__nacts -= 1;
		__acts += 1;
		switch (_lexer_actions[__acts - 1]) {
case 21:
/* line 106 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw "Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/aslakhellesoy/gherkin/lexingerror for more information.";
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 939 "js/lib/gherkin/lexer/no.js" */
		} /* eof action switch */
	}
	if (_trigger_goto) {
		continue;
	}
}
	}
	if (_goto_level <= _out) {
		break;
	}
	}
	}

/* line 154 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/no.js.rl" */
};

Lexer.prototype.bytesToString = function(bytes) {
  if(typeof bytes.write == 'function') {
    // Node.js
    return bytes.toString('utf-8');
  } else {
    var result = "";
    for(var b in bytes) {
      result += String.fromCharCode(bytes[b]);
    }
    return result;
  }
};

Lexer.prototype.stringToBytes = function(string) {
  var bytes = [];
  for(var i = 0; i < string.length; i++) {
    bytes[i] = string.charCodeAt(i);
  }
  return bytes;
};

Lexer.prototype.unindent = function(startcol, text) {
  startcol = startcol || 0;
  return text.replace(new RegExp('^[\t ]{0,' + startcol + '}', 'gm'), ''); 
};

Lexer.prototype.store_keyword_content = function(event, data, p, eof) {
  var end_point = (!this.next_keyword_start || (p == eof)) ? p : this.next_keyword_start;
  var content = this.unindent(this.start_col + 2, this.bytesToString(data.slice(this.content_start, end_point))).trimRight();
  var content_lines = content.split("\n")
  var name = content_lines.shift() || "";
  name = name.trim();
  var description = content_lines.join("\n");
  this.listener[event](this.keyword, name, description, this.current_line);
  var nks = this.next_keyword_start;
  this.next_keyword_start = null;
  return nks ? nks - 1 : p;
};

Lexer.prototype.current_line_content = function(data, p) {
  var rest = data.slice(this.last_newline, -1);
  var end = rest.indexOf(10) || -1;
  return this.bytesToString(rest.slice(0, end)).trim();
};

if(typeof exports != 'undefined') {
  exports.Lexer = Lexer;
}
if(typeof window != 'undefined') {
  window.Lexer = Lexer;
}

})();