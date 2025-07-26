import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const COUNTRIES = [
  { name: 'India', states: ['Delhi', 'Maharashtra', 'Karnataka'] },
  { name: 'USA', states: ['California', 'Texas', 'New York'] },
  { name: 'Canada', states: ['Ontario', 'Quebec', 'British Columbia'] },
];
const CITIES = {
  Delhi: ['New Delhi', 'Dwarka', 'Rohini'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
  California: ['Los Angeles', 'San Francisco', 'San Diego'],
  Texas: ['Houston', 'Dallas', 'Austin'],
  'New York': ['New York City', 'Buffalo', 'Rochester'],
  Ontario: ['Toronto', 'Ottawa', 'Hamilton'],
  Quebec: ['Montreal', 'Quebec City', 'Laval'],
  'British Columbia': ['Vancouver', 'Victoria', 'Richmond'],
};

const DB_NAME = 'LeafyBlendsCheckout';
const STORE_NAME = 'userInfo';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveUserInfo(data) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put({ ...data, id: 1 });
    tx.oncomplete = resolve;
    tx.onerror = reject;
  });
}

async function getUserInfo() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(1);
    req.onsuccess = () => resolve(req.result);
    req.onerror = reject;
  });
}

export default function Checkout() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    country: '',
    state: '',
    city: '',
  });
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getUserInfo().then((data) => {
      if (data) {
        setForm(data);
        if (data.country) {
          const countryObj = COUNTRIES.find(c => c.name === data.country);
          setStates(countryObj ? countryObj.states : []);
        }
        if (data.state) {
          setCities(CITIES[data.state] || []);
        }
      }
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (name === 'country') {
      const countryObj = COUNTRIES.find(c => c.name === value);
      setStates(countryObj ? countryObj.states : []);
      setForm(prev => ({ ...prev, state: '', city: '' }));
      setCities([]);
    }
    if (name === 'state') {
      setCities(CITIES[value] || []);
      setForm(prev => ({ ...prev, city: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveUserInfo(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
    // router.push('/next-step'); // Uncomment for next step navigation
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout - User Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Mobile</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Country</label>
          <select name="country" value={form.country} onChange={handleChange} required className="w-full border px-3 py-2 rounded">
            <option value="">Select Country</option>
            {COUNTRIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">State</label>
          <select name="state" value={form.state} onChange={handleChange} required className="w-full border px-3 py-2 rounded" disabled={!states.length}>
            <option value="">Select State</option>
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">City</label>
          <select name="city" value={form.city} onChange={handleChange} required className="w-full border px-3 py-2 rounded" disabled={!cities.length}>
            <option value="">Select City</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors font-semibold">Next</button>
        {saved && <div className="text-green-600 mt-2">Saved!</div>}
      </form>
    </div>
  );
} 