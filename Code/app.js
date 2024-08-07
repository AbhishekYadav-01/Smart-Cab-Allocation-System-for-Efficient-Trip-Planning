document.addEventListener('DOMContentLoaded', () => {
  function showLogin(role) {
    document.getElementById('admin-login').style.display = role === 'admin' ? 'block' : 'none';
    document.getElementById('employee-login').style.display = role === 'employee' ? 'block' : 'none';
  }

  const adminButton = document.getElementById('admin-button');
  const employeeButton = document.getElementById('employee-button');
  const adminLoginForm = document.getElementById('admin-login-form');
  const employeeLoginForm = document.getElementById('employee-login-form');

  if (adminButton) {
    adminButton.addEventListener('click', () => showLogin('admin'));
  }

  if (employeeButton) {
    employeeButton.addEventListener('click', () => showLogin('employee'));
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('admin-username').value;
      const password = document.getElementById('admin-password').value;

      if (username === 'admin' && password === 'p') {
        document.getElementById('auth').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('trip-management').style.display = 'block';
        document.getElementById('allocated-cabs').style.display = 'block';
        showAllocatedCabs(); 
      } else {
        alert('Login failed');
      }
    });
  }

  if (employeeLoginForm) {
    employeeLoginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('employee-username').value;
      const password = document.getElementById('employee-password').value;

      if (username === 'employee' && password === 'p') {
        document.getElementById('auth').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('trip-management').style.display = 'none';
        document.getElementById('cab-allocation').style.display = 'block';
        document.getElementById('book-trip-link').style.display = 'block';
      } else {
        alert('Login failed');
      }
    });
  }

  const trips = [
    { cabNumber: 'RJ19PB001', seats: 25, from: 'Sardarpura', to: 'IITJ', time: '15:00', fromLat: 26.2800, fromLng: 73.0100, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19UB001', seats: 7, from: 'AIIMS', to: 'IITJ', time: '11:00', fromLat: 26.2445, fromLng: 73.0095, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB002', seats: 40, from: 'AIIMS', to: 'IITJ', time: '14:00', fromLat: 26.2445, fromLng: 73.0095, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB003', seats: 40, from: 'MBM', to: 'IITJ', time: '11:00', fromLat: 26.2831, fromLng: 73.0371, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB004', seats: 40, from: 'MBM', to: 'IITJ', time: '12:00', fromLat: 26.2831, fromLng: 73.0371, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB005', seats: 40, from: 'MBM', to: 'IITJ', time: '13:00', fromLat: 26.2831, fromLng: 73.0371, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB006', seats: 40, from: 'MBM', to: 'IITJ', time: '14:00', fromLat: 26.2831, fromLng: 73.0371, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB007', seats: 40, from: 'MBM', to: 'IITJ', time: '15:00', fromLat: 26.2831, fromLng: 73.0371, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB008', seats: 40, from: 'MBM', to: 'IITJ', time: '16:00', fromLat: 26.2831, fromLng: 73.0371, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB009', seats: 40, from: 'MBM', to: 'IITJ', time: '17:00', fromLat: 26.2831, fromLng: 73.0371, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB023', seats: 40, from: 'Paota', to: 'IITJ', time: '11:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB057', seats: 40, from: 'Paota', to: 'IITJ', time: '15:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB028', seats: 40, from: 'Paota', to: 'IITJ', time: '16:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB019', seats: 40, from: 'Paota', to: 'IITJ', time: '17:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB034', seats: 40, from: 'Paota', to: 'IITJ', time: '12:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB035', seats: 40, from: 'Paota', to: 'IITJ', time: '13:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB026', seats: 40, from: 'Paota', to: 'IITJ', time: '14:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB057', seats: 40, from: 'Paota', to: 'IITJ', time: '15:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB028', seats: 40, from: 'Paota', to: 'IITJ', time: '16:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB019', seats: 40, from: 'Paota', to: 'IITJ', time: '17:00', fromLat: 26.2826, fromLng: 73.0313, toLat: 26.4499, toLng: 74.6723 },
    { cabNumber: 'RJ19PB004', seats: 50, from: 'Sardarpura', to: 'IITJ', time: '21:00', fromLat: 26.2800, fromLng: 73.0100, toLat: 26.4499, toLng: 74.6723 }
  ];
  

  let bookedTrips = []; 
  let allocatedCabs = []; 
  function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
  }

  function showAllTrips() {
    console.log('Showing all trips');
    const uniqueTrips = {};
    trips.forEach(trip => {
      const key = `${trip.from}-${trip.to}-${trip.time}`;
      if (!uniqueTrips[key]) {
        uniqueTrips[key] = { ...trip, cabs: 1 };
      } else {
        uniqueTrips[key].cabs += 1;
      }
    });

    return Object.values(uniqueTrips).map(trip => `From: ${trip.from}, To: ${trip.to}, Time: ${trip.time}, Cabs: ${trip.cabs}`).join('<br>');
  }

  function showTrips(from, to, time) {
    console.log('Showing trips:', from, to, time);
    const availableTrips = trips.filter(trip => trip.from === from && trip.to === to && trip.time === time);
    console.log('Available trips:', availableTrips);
    if (availableTrips.length > 0) {
      const uniqueTrips = {};
      availableTrips.forEach(trip => {
        const key = `${trip.from}-${trip.to}-${trip.time}`;
        if (!uniqueTrips[key]) {
          uniqueTrips[key] = { ...trip, cabs: 1 };
        } else {
          uniqueTrips[key].cabs += 1;
        }
      });

      return Object.values(uniqueTrips).map(trip => `From: ${trip.from}, To: ${trip.to}, Time: ${trip.time}, Cabs remaining: ${trip.cabs}`).join('<br>');
    } else {
      return 'No available trips.';
    }
  }

  function bookTrip(from, to, time) {
    console.log('Booking trip:', from, to, time);
    const availableTrips = trips.filter(trip => trip.from === from && trip.to === to && trip.time === time);
    console.log('Available trips for booking:', availableTrips);
    if (availableTrips.length > 0) {
      const trip = availableTrips[0]; 
      bookedTrips.push({
        cabNumber: trip.cabNumber,
        from: trip.from,
        to: trip.to,
        time: trip.time
      });
      const index = trips.indexOf(trip);
      if (index > -1) {
        trips.splice(index, 1);
      }
      localStorage.setItem('bookedTrips', JSON.stringify(bookedTrips));
      return `Booked trip with Cab Number: ${trip.cabNumber}. Cabs remaining: ${availableTrips.length - 1}`;
    } else {
      return 'No available trips or cabs.';
    }
  }

  function showBookedTrips() {
    const savedBookedTrips = localStorage.getItem('bookedTrips');
    if (savedBookedTrips) {
      bookedTrips = JSON.parse(savedBookedTrips);
    }
    console.log('Booked trips:', bookedTrips);
    
    if (bookedTrips.length > 0) {
      return bookedTrips.map(trip => `Cab Number: ${trip.cabNumber}, From: ${trip.from}, To: ${trip.to}, Time: ${trip.time}`).join('<br>');
    } else {
      return 'No trips booked yet.';
    }
  }

  function handleShowTrips() {
    const from = prompt('Enter starting location:');
    const to = prompt('Enter destination:');
    const time = prompt('Enter time (HH:MM):');
    const result = showTrips(from, to, time);
    document.getElementById('trip-info').innerHTML = result;
  }

  function handleBookTrip() {
    const from = prompt('Enter starting location:');
    const to = prompt('Enter destination:');
    const time = prompt('Enter time (HH:MM):');
    const result = bookTrip(from, to, time);
    document.getElementById('trip-info').innerHTML = result;
  }

  function handleShowBookedTrips() {
    const result = showBookedTrips();
    document.getElementById('booked-trip-info').innerHTML = result;
  }

  const combinedCabs = [
    { id: 1, location: { name: 'Sardarpura', lat: 26.2800, lng: 73.0100 }, isAvailable: true, isInUse: false },
    { id: 2, location: { name: 'AIIMS', lat: 26.2445, lng: 73.0095 }, isAvailable: false, isInUse: true },
    { id: 3, location: { name: 'MBM', lat: 26.2831, lng: 73.0371 }, isAvailable: true, isInUse: false },
    { id: 4, location: { name: 'Paota', lat: 26.2826, lng: 73.0313 }, isAvailable: false, isInUse: true },
  ];
  
  
  window.allocateCab = function allocateCab() {
    const currentLocation = document.getElementById('current-location').value;
    const destination = document.getElementById('destination-location').value;
  
    let nearestCab = null;
    let minDistance = Infinity;
  
    for (const cab of combinedCabs) {
      if (cab.isAvailable) {
        const distance = getDistance(cab.location.lat, cab.location.lng, trips.find(trip => trip.from === currentLocation).fromLat, trips.find(trip => trip.from === currentLocation).fromLng);
        if (distance < minDistance) {
          minDistance = distance;
          nearestCab = cab;
        }
      }
    }
  
    if (nearestCab) {
      nearestCab.isAvailable = false;
      nearestCab.isInUse = true;
      const allocatedCabInfo = {
        id: nearestCab.id,
        location: nearestCab.location.name,
        currentLocation: currentLocation,
        destination: destination,
        distance: minDistance.toFixed(2)
      };
      allocatedCabs.push(allocatedCabInfo); 
      localStorage.setItem('allocatedCabs', JSON.stringify(allocatedCabs)); 
      document.getElementById('cab-info').innerText = `Allocated Cab ID: ${nearestCab.id}, Distance of Cab from here : ${minDistance.toFixed(2)} km, Current Location of Cab : ${nearestCab.location.name}, Current Location: ${currentLocation}, Destination: ${destination}`;
    } else {
      document.getElementById('cab-info').innerText = 'No available cabs';
    }
  }
  
  function showAllocatedCabs() {
    const savedAllocatedCabs = localStorage.getItem('allocatedCabs');
    if (savedAllocatedCabs) {
      allocatedCabs = JSON.parse(savedAllocatedCabs);
    }
    const allocatedCabsInfo = allocatedCabs.map(cab => `Cab ID: ${cab.id}, Current Location of Cab: ${cab.location}, Current Location: ${cab.currentLocation}, Destination: ${cab.destination}`).join('<br>');
    document.getElementById('allocated-cabs-info').innerHTML = allocatedCabsInfo || 'No cabs allocated yet';
  }
  
  window.showAllTrips = showAllTrips;
  window.showTrips = showTrips;
  window.showBookedTrips = showBookedTrips;
  window.bookTrip = bookTrip;
  window.showAllocatedCabs = showAllocatedCabs;
  
  setInterval(() => {
    combinedCabs.forEach(cab => {
      const locations = ['Sardarpura', 'AIIMS', 'MBM', 'Paota'];
      cab.location.name = locations[Math.floor(Math.random() * locations.length)];
    });
  }, 5000); 
  
});




