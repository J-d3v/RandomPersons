'use client';
import useFetch from '../hook/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch('https://randomuser.me/api/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data available.</p>;

  return (
    <div>
      <h1>User Data</h1>
      <p>Name: {data.name.first} {data.name.last}</p>
      <p>Email: {data.email}</p>
      <p>Date of Birth: {data.dob.date}</p>
      <p>Phone: {data.phone}</p>
      <p>Location: {data.location.street.number} {data.location.street.name}</p>
      <p>Password: {data.login.password}</p>
    </div>
  );
};

export default Home;