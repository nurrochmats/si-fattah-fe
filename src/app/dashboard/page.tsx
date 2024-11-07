// src/app/dashboard/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Employee {
  id_karyawan: number;
  id_badge: string;
  nama_karyawan: string;
  created_at: string;
  [key: string]: any; // Untuk properti lain yang tidak digunakan
}

const DashboardPage: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const token = "12|MkjyZEOwQQvzle8nTidNZX7NHdFxCPgP3cPjlT0m182f148d"; // Bearer token

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/master_data_karyawan", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Data retrieved:", result); // Log untuk debug
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading ke false setelah data selesai diambil
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full bg-blue-700 text-white py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <h1 className="text-3xl font-bold">Company Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Tabel Data Karyawan */}
      <section className="w-full bg-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Employee Data</h2>
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ID Karyawan</th>
                  <th className="py-2 px-4 border-b">ID Badge</th>
                  <th className="py-2 px-4 border-b">Nama Karyawan</th>
                  <th className="py-2 px-4 border-b">Created At</th>
                </tr>
              </thead>
              <tbody>
                {data.map((employee) => (
                  <tr key={employee.id_karyawan}>
                    <td className="py-2 px-4 border-b">{employee.id_karyawan}</td>
                    <td className="py-2 px-4 border-b">{employee.id_badge}</td>
                    <td className="py-2 px-4 border-b">{employee.nama_karyawan}</td>
                    <td className="py-2 px-4 border-b">{new Date(employee.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-blue-700 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardPage;
