// src/Restaurant/BookingsManagement.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function BookingsManagement() {
  const [search, setSearch] = useState("");
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: "Dikshya Adhikari",
      email: "dikshya@gmail.com",
      phone: "+977 9801234567",
      date: "2025-02-10",
      time: "7:30 PM",
      guests: 2,
      table: "Table 5",
    },
    {
      id: 2,
      customerName: "Aashutosh K.C.",
      email: "aashutosh@gmail.com",
      phone: "+977 9812345678",
      date: "2025-02-12",
      time: "8:00 PM",
      guests: 4,
      table: "Table 8",
    },
  ]);

  const filteredBookings = bookings.filter((booking) =>
    booking.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Bookings Management</h1>
      <input
        type="text"
        placeholder="Search by customer name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <p className="text-gray-600">No bookings found.</p>
        ) : (
          filteredBookings.map((booking) => (
            <Link
              to={`/restaurant/customer-details/${booking.id}`}
              key={booking.id}
              className="block p-4 transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800">{booking.customerName}</h3>
              <p className="text-gray-600">{booking.email}</p>
              <p className="text-gray-600">{booking.phone}</p>
              <p className="text-gray-600">{booking.date} at {booking.time}</p>
              <p className="text-gray-600">{booking.guests} guests, {booking.table}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default BookingsManagement;