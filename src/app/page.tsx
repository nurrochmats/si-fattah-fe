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

      {/* Pengajuan Klaim Section */}
      <section className="flex flex-col md:flex-row items-center py-40 px-8">
        <div className="md:w-1/2 flex justify-center relative w-[700px] h-[600px]">
          <Image src="/image 4.png" alt="Si Fatah Illustration" layout="fill" objectFit="contain" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-7xl font-bold text-gray-800">Pengajuan Klaim</h2>
          <p className='text-gray-600 text-2xl'>Berfungsi sebagai pusat informasi bagi pengguna untuk memantau dan mengelola pengajuan klaim. Terdapat ringkasan klaim yang mencakup detail tanggal pengajuan, jumlah yang diajukan, serta jenis klaim. Dashboard ini dirancang untuk memberikan visibilitas yang jelas dan real-time kepada user, sehingga memudahkan pemantauan serta mempercepat tindak lanjut dari klaim yang sedang diproses.</p>
          {/* <Link href="#" className="inline-block bg-blue-500 text-gray px-4 py-2 rounded">Get Started</Link> */}
        </div>
      </section>

      {/* Restitusi Karyawan Section */}
      <section className="flex flex-col md:flex-row items-center py-40 px-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-7xl font-bold text-gray-800">Kepesertaan Anggota BPJS</h2>
          <p className='text-gray-600 text-2xl'>Di dalam menu ini, user dapat melihat data keanggotaan karyawan, seperti nomor BPJS, jenis kepesertaan (BPJS Kesehatan atau Ketenagakerjaan), status aktif atau tidak aktif, serta informasi terkait iuran dan riwayat pembayaran.</p>
          {/* <Link href="#" className="inline-block bg-blue-500 text-gray px-4 py-2 rounded">Get Started</Link> */}
        </div>
        <div className="md:w-1/2 flex justify-center relative w-[700px] h-[600px]">
          <Image src="/Illustration.png" alt="Si Fatah Illustration" layout="fill" objectFit="contain" />
        </div>
      </section>

      {/* Restitusi Karyawan Section */}
      <section className="flex flex-col md:flex-row items-center py-40 px-8">
        <div className="md:w-1/2 flex justify-center relative w-[700px] h-[600px]">
          <Image src="/Image container.png" alt="Si Fatah Illustration" layout="fill" objectFit="contain" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-7xl font-bold text-gray-800">Ekses</h2>
          <p className='text-gray-600 text-2xl'>Pada menu ini, user dapat melihat rincian ekses yang harus ditanggung karyawan karena biaya pengobatan yang melebihi plafon yang ditetapkan atau tidak tercakup dalam asuransi. Dashboard ini menampilkan informasi detail tentang jumlah ekses, tanggal klaim, serta alasan penolakan dari asuransi.</p>
        </div>
      </section>

      {/* <section className="flex flex-col md:flex-row items-center bg-[#9C2A2E] text-white py-40 px-8"> */}
      <section className="flex flex-col items-center text-center bg-[#9C2A2E] text-white py-40 px-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold">Berkas Restitusi Pengobatan dari Rumah Sakit</h1>
          <p className='text-xl'>Melalui menu ini, pengguna dapat melihat status pengajuan restitusi yang berasal dari rumah sakit, termasuk berkas yang telah diterima, sedang diverifikasi, atau yang masih memerlukan kelengkapan.</p>
          <button className="bg-blue-500 px-4 py-2 rounded font-semibold text-white hover:bg-blue-600 transition duration-200">
            Try It
          </button>
        </div>
      </section>

      {/* Restitusi Karyawan Section */}
      <section className="flex flex-col md:flex-row items-center py-40 px-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-7xl font-bold text-gray-800">Master Data</h2>
          <p className='text-gray-600 text-2xl'>Menu Dashboard Master Data Karyawan pada aplikasi Si Fatah berfungsi sebagai pusat informasi yang menampilkan data lengkap mengenai karyawan.</p>
        </div>
        <div className="md:w-1/2 flex justify-center relative w-[700px] h-[600px]">
          <Image src="/Image 8.png" alt="Si Fatah Illustration" layout="fill" objectFit="contain" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#82C6B7] py-10 px-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        
        {/* Section Kiri */}
        <div className="space-y-2 max-w-md">
          <h3 className="text-2xl font-bold">SI FATAH <span className="text-sm font-normal">v.01</span></h3>
          <p className="text-sm font-semibold">Sistem Informasi Fasilitas dan Kesehatan</p>
          <p className="text-sm">
            Si Fatah (Sistem Informasi Fasilitas dan Kesehatan) adalah aplikasi yang dikembangkan untuk mendukung Unit Kerja Asuransi dan Kesejahteraan Pegawai dalam menjalankan tugas sehari-hari.
          </p>
        </div>

        {/* Section Tengah - Logo Partner */}
        <div className="flex space-x-8">
          {/* <Image src="/Logo PT Pupuk Kujang png 1.png" alt="BUMN Logo" width={80} height={80} />
          <Image src="/pupuk-indonesia-logo.png" alt="Pupuk Indonesia Logo" width={80} height={80} />
          <Image src="/pupuk-kujang-logo.png" alt="Pupuk Kujang Logo" width={80} height={80} /> */}
        </div>

        {/* Section Kanan */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Apakah ada saran?</h4>
          <p className="text-sm">
            Berikan saran untuk Si Fatah untuk pengembangan yang lebih baik lagi ke depannya.
          </p>
          <button className="bg-blue-500 px-4 py-2 rounded font-semibold text-white hover:bg-blue-600 transition duration-200">
            Beri Saran Di Sini
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-8 pt-4 text-center text-sm text-white flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <span>🌐 English</span>
          <Link href="/terms" className="hover:underline">Terms & privacy</Link>
          <Link href="/security" className="hover:underline">Security</Link>
          <Link href="/status" className="hover:underline">Status</Link>
          <span>&copy;2024 Si Fatah.</span>
        </div>
        
        <div className="flex space-x-4">
          <Link href="#" className="hover:underline">Facebook Icon</Link>
          <Link href="#" className="hover:underline">Twitter Icon</Link>
          <Link href="#" className="hover:underline">LinkedIn Icon</Link>
        </div>
      </div>
    </footer>
    </main>
  );
}
