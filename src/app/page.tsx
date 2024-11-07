import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 bg-orange-600">
        <div className="flex items-center gap-4">
          <Image src="/Logo PT Pupuk Kujang png 1.png" alt="PKC Logo" width={150} height={150} />
          <div className="text-white font-extrabold text-4xl tracking-wide drop-shadow-lg">
            Si Fatah
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-yellow-500 px-4 py-2 rounded font-semibold text-white hover:bg-yellow-600 transition duration-200">
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center bg-green-500 text-white py-40 px-8 custom-bg">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-8xl font-bold">Get More Done with Si Fatah!</h1>
          <p className='text-2xl'>Si Fatah (Sistem Informasi Fasilitas dan Kesehatan) adalah aplikasi yang dikembangkan untuk mendukung Unit Kerja Asuransi dan Kesejahteraan Pegawai dalam menjalankan tugas sehari-hari. Aplikasi ini dirancang untuk mempermudah pengelolaan klaim asuransi, proses reimburse, pengajuan kelengkapan kerja, dan berbagai kebutuhan administratif lainnya.</p>
        </div>
        <div className="md:w-1/2 flex justify-center relative w-[700px] h-[600px]">
          <Image src="/image 3.png" alt="Si Fatah Illustration" layout="fill" objectFit="contain" />
        </div>
      </section>

      {/* Restitusi Karyawan Section */}
      <section className="flex flex-col md:flex-row items-center py-40 px-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-7xl font-bold text-gray-800">Restitusi Karyawan</h2>
          <p className='text-gray-600 text-2xl'>Melalui menu ini, user dapat mengajukan restitusi pengobatan secara cepat, memeriksa status pengajuan, serta melengkapi dokumen yang diperlukan. Fiturnya membantu mengotomatisasi berbagai langkah dalam proses restitusi, sehingga meminimalkan kesalahan dan mempermudah proses pengajuan restitusi. Dengan adanya menu ini, pekerjaan terkait pengelolaan restitusi pengobatan menjadi lebih mudah, terstruktur, dan efisien.</p>
        </div>
        <div className="md:w-1/2 flex justify-center relative w-[700px] h-[600px]">
          <Image src="/image 5.png" alt="Si Fatah Illustration" layout="fill" objectFit="contain" />
        </div>
      </section>

      {/* Restitusi Karyawan Section */}
      <section className="flex flex-col md:flex-row items-center py-40 px-8">
        <div className="md:w-1/2 flex justify-center relative w-[400px] h-[300px]">
          <Image src="/logo-pkc.png" alt="Si Fatah Illustration" layout="fill" objectFit="contain" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-7xl font-bold text-gray-800">Pengajuan Klaim</h2>
          <p className='text-gray-600'>Berfungsi sebagai pusat informasi bagi pengguna untuk memantau dan mengelola pengajuan klaim. Terdapat ringkasan klaim yang mencakup detail tanggal pengajuan, jumlah yang diajukan, serta jenis klaim. Dashboard ini dirancang untuk memberikan visibilitas yang jelas dan real-time kepada user, sehingga memudahkan pemantauan serta mempercepat tindak lanjut dari klaim yang sedang diproses.</p>
          {/* <Link href="#" className="inline-block bg-blue-500 text-gray px-4 py-2 rounded">Get Started</Link> */}
        </div>
      </section>

      {/* Restitusi Karyawan Section */}
      <section className="flex flex-col md:flex-row items-center py-40 px-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-7xl font-bold text-gray-800">Kepesertaan Anggota BPJS</h2>
          <p className='text-gray-600'>Di dalam menu ini, user dapat melihat data keanggotaan karyawan, seperti nomor BPJS, jenis kepesertaan (BPJS Kesehatan atau Ketenagakerjaan), status aktif atau tidak aktif, serta informasi terkait iuran dan riwayat pembayaran.</p>
          {/* <Link href="#" className="inline-block bg-blue-500 text-gray px-4 py-2 rounded">Get Started</Link> */}
        </div>
        <div className="md:w-1/2 flex justify-center relative w-[400px] h-[300px]">
          <Image src="/logo-pkc.png" alt="Si Fatah Illustration" layout="fill" objectFit="contain" />
        </div>
      </section>

      {/* Restitusi Karyawan Section */}
      <section className="flex flex-col md:flex-row items-center py-40 px-8">
        <div className="md:w-1/2 flex justify-center relative w-[400px] h-[300px]">
          <Image src="/logo-pkc.png" alt="Si Fatah Illustration" layout="fill" objectFit="contain" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-7xl font-bold text-gray-800">Ekses</h2>
          <p className='text-gray-600'>Pada menu ini, user dapat melihat rincian ekses yang harus ditanggung karyawan karena biaya pengobatan yang melebihi plafon yang ditetapkan atau tidak tercakup dalam asuransi. Dashboard ini menampilkan informasi detail tentang jumlah ekses, tanggal klaim, serta alasan penolakan dari asuransi.</p>
        </div>
      </section>
    </main>
  );
}
