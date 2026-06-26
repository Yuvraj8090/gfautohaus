// Shared vehicle inventory data
const vehiclesData = [
  {
    id: 20489017,
    make: "SKODA",
    model: "Octavia Combi 2.0 TDI Style 4x4 DSG",
    year: 2015,
    price: 9900,
    body: "Estate",
    fuel: "Diesel",
    drive: "AWD",
    km: "160'700 km",
    power: "184 PS (135 kW)",
    transmission: "Automatic",
    images: [
      "https://images.autoscout24.ch/public/listing/17/20489017/341897558.jpeg?w=768",
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 20449076,
    make: "TESLA",
    model: "Model S 85",
    year: 2016,
    price: 11900,
    body: "Sedan",
    fuel: "Electric",
    drive: "RWD",
    km: "170'950 km",
    power: "388 PS (285 kW)",
    transmission: "Automatic",
    images: [
      "https://images.autoscout24.ch/public/listing/76/20449076/629103606.jpg?w=768",
      "https://images.unsplash.com/photo-1560958089-b8a63dd52183?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1571127236794-81c1e7df0e1f?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 20449064,
    make: "VW",
    model: "Golf 1.4 TSI Comfortline DSG",
    year: 2013,
    price: 8900,
    body: "Hatchback",
    fuel: "Petrol",
    drive: "FWD",
    km: "157'098 km",
    power: "140 PS (103 kW)",
    transmission: "Automatic",
    images: [
      "https://images.autoscout24.ch/public/listing/64/20449064/2041456300.jpg?w=768",
      "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 20449049,
    make: "JEEP",
    model: "Cherokee Limited 2.4",
    year: 2016,
    price: 7900,
    body: "SUV",
    fuel: "Petrol",
    drive: "AWD",
    km: "179'300 km",
    power: "177 PS (130 kW)",
    transmission: "Automatic",
    images: [
      "https://images.autoscout24.ch/public/listing/49/20449049/547251284.jpg?w=768",
      "https://images.unsplash.com/photo-1605559424843-9e4c3febda46?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 20386265,
    make: "SEAT",
    model: "Leon ST 1.8 TSI FR DSG",
    year: 2014,
    price: 10900,
    body: "Estate",
    fuel: "Petrol",
    drive: "FWD",
    km: "108'500 km",
    power: "180 PS (132 kW)",
    transmission: "Automatic",
    images: [
      "https://images.autoscout24.ch/public/listing/265/20386265/1304556399.JPG?w=768",
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 20381317,
    make: "BMW",
    model: "M440i xDrive Cabriolet",
    year: 2021,
    price: 45900,
    body: "Convertible",
    fuel: "Mild Hybrid Petrol",
    drive: "AWD",
    km: "76'500 km",
    power: "374 PS (275 kW)",
    transmission: "Automatic",
    images: [
      "https://images.autoscout24.ch/public/listing/317/20381317/121115819.jpg?w=768",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 30501731,
    make: "TESLA",
    model: "Model 3 Long Range Dual Motor",
    year: 2019,
    price: 16900,
    body: "Sedan",
    fuel: "Electric",
    drive: "AWD",
    km: "144'500 km",
    power: "462 PS (340 kW)",
    transmission: "Automatic",
    images: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1560958089-b8a63dd52183?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1571127236794-81c1e7df0e1f?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 30501732,
    make: "MERCEDES-BENZ",
    model: "A 170 Classic Edition",
    year: 2008,
    price: 4900,
    body: "Hatchback",
    fuel: "Petrol",
    drive: "FWD",
    km: "145'900 km",
    power: "115 PS (85 kW)",
    transmission: "Manual",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1548012435-b35ed87cc1fc?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 30501733,
    make: "BMW",
    model: "i7 xDrive 60 M Sport",
    year: 2022,
    price: 74900,
    body: "Sedan",
    fuel: "Electric",
    drive: "AWD",
    km: "42'000 km",
    power: "544 PS (400 kW)",
    transmission: "Automatic",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 30501734,
    make: "TESLA",
    model: "Model X 100 D Performance",
    year: 2017,
    price: 24900,
    body: "SUV",
    fuel: "Electric",
    drive: "AWD",
    km: "161'300 km",
    power: "772 PS (568 kW)",
    transmission: "Automatic",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1560958089-b8a63dd52183?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c3febda46?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1571127236794-81c1e7df0e1f?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 30501735,
    make: "PORSCHE",
    model: "Macan Turbo PDK",
    year: 2015,
    price: 43900,
    body: "SUV",
    fuel: "Petrol",
    drive: "AWD",
    km: "75'500 km",
    power: "400 PS (294 kW)",
    transmission: "Automatic",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c3febda46?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 30501736,
    make: "BMW",
    model: "X5 xDrive 48V 30d M Sport",
    year: 2024,
    price: 72900,
    body: "SUV",
    fuel: "Mild Hybrid Diesel",
    drive: "AWD",
    km: "61'500 km",
    power: "286 PS (210 kW)",
    transmission: "Automatic",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c3febda46?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 30501737,
    make: "LAND ROVER",
    model: "Range Rover Velar P 250 S",
    year: 2018,
    price: 26900,
    body: "SUV",
    fuel: "Petrol",
    drive: "AWD",
    km: "114'500 km",
    power: "250 PS (184 kW)",
    transmission: "Automatic",
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c3febda46?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 30501738,
    make: "VW",
    model: "Tiguan 2.0TSI R 4Motion DSG",
    year: 2023,
    price: 39900,
    body: "SUV",
    fuel: "Petrol",
    drive: "AWD",
    km: "27'500 km",
    power: "319 PS (235 kW)",
    transmission: "Automatic",
    images: [
      "https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c3febda46?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=768&q=80"
    ]
  },
  {
    id: 30501739,
    make: "FIAT",
    model: "500 1.0 N3 MildHybrid Lounge",
    year: 2023,
    price: 13900,
    body: "Hatchback",
    fuel: "Mild Hybrid Petrol",
    drive: "FWD",
    km: "37'996 km",
    power: "70 PS (51 kW)",
    transmission: "Manual",
    images: [
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b83ad45?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=768&q=80",
      "https://images.unsplash.com/photo-1548012435-b35ed87cc1fc?auto=format&fit=crop&w=768&q=80"
    ]
  }
];

// LocalStorage management for vehicles
function getVehiclesFromStorage() {
  const stored = localStorage.getItem('gfautohaus_vehicles');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return vehiclesData;
}

function saveVehiclesToStorage(vehicles) {
  localStorage.setItem('gfautohaus_vehicles', JSON.stringify(vehicles));
}

function resetVehiclesToDefault() {
  saveVehiclesToStorage(vehiclesData);
}

function initializeVehicles() {
  if (!localStorage.getItem('gfautohaus_vehicles')) {
    saveVehiclesToStorage(vehiclesData);
  }
}

// Initialize on load
initializeVehicles();
