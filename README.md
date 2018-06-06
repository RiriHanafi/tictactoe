# tictactoe
Final Project

1.	Topik : Tic Tac Toe 
2.	Penjelasan Game
a.	Logic Game
Permainan antara Pemain 1 (dengan tanda “X”) dan Pemain 2 (dengan tanda “O”).
Pada setiap gilirannya, masing2 pemain hanya mempunyai satu kesempatan untuk menempatkan tandanya.
Pemenang adalah pemain yang dapat membuat deret dari 3 tandanya, baik vertical, horizontal maupun diagonal.
Karena yang berhasil membuat deret pertama kali akan menjadi pemenang (maka masing2 pemain akan berusaha menghalangi lawannya untuk membuat deret tersebut).
Jika tidak ada pemain yang berhasil membuat deret dari 3 tandanya, maka permainan dianggap seri.
Pemain 2 digantikan oleh program/komputer.

b.	Layout
Layoutnya sederhana, berupa bujursangkar yang dibagi menjadi 9 bagian (3 x 3 bagian). Biasanya bujursangkar tersebut tidak mempunyai tepian, hanya garis tengah yang membagi masing2 bagian tersebut.

c.	Proses Game
Kesempatan pertama diberikan kepada pemain dengan tanda “X”.
Game dimulai oleh Pemain dengan tanda “X”, yang boleh menempatkan tandanya dimana pun di dalam kotak/bagian yang berada di dalam bujursangkar tersebut diatas, setelah Pemain 1 menempatkan tandanya, maka Pemain 2 (dengan fungsi random komputer) dengan tanda “O” akan menempatkan tandanya dimana pun di dalam kotak/bagian yang berada di dalam bujursangkar tersebut. Demikian seterusnya sampai salah satu pemain berhasil untuk membuat deret dari 3 angkanya atau ketika semua bagian di dalam bujursangkar terpenuhi oleh tanda2 yang diisi oleh masing2 pemain.
Pada setiap gilirannya, masing2 pemain hanya mempunyai satu kesempatan untuk menempatkan tandanya. Bagian yang sudah diisi oleh salah satu pemain, tidak dapat diisi oleh pemain lainnya.
Setelah langkah pertama ==>Cek posisi “X”, maka bagian tersebut tidak dapat diisi lagi.
Setelah langkah kedua ==>Cek kombinasi posisi “X” atau "O" apakah sudah memenuhi kombinasi deret yang dapat dinyatakan sebagai pemenang. Ada 8 kombinasi posisi untuk memenuhi kategori menang.
Jika belum ada pemenang, lanjutkan permainan sampai kombinasi deret terpenuhi atau semua posisi sudah terisi.

d.	Finish
Ketika salah satu pemain dapat membuat deret dari 3 tandanya, baik vertical, horizontal, maupun diagonal, maka dia akan dinyatakan sebagai pemenang dan permainan selesai.
Atau ketika semua bagian di dalam bujursangkar terpenuhi oleh tanda2 yang diisi oleh masing2 pemain dan permainan selesai tanpa ada pemenang atau seri.
