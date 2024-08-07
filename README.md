# Smart Cab Allocation System for Efficient Trip Planning

This project is a Smart Cab Allocation System designed to efficiently manage cab trips, optimize cab allocation, and integrate real-time location data. The system includes functionalities for both admin and employee roles, allowing admins to manage trips and employees to allocate cabs for their needs.Employee can book cab for instant trip as well as planned for any time in future's trips.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

1. **Admin's Cab Allocation Optimization:**
    - Develop an algorithm to suggest the best cab based on proximity to the trip start location.
    - Integrate real-time location data for cabs and trip start locations.
    - Test the algorithm's effectiveness in minimizing travel distance and improving overall trip efficiency.

2. **Employee's Cab Search Optimization:**
    - Enhance the user experience for employees searching for cabs by suggesting nearby cabs that are currently in use.
    - Evaluate the system's effectiveness in providing quick and relevant cab suggestions for employees.

3. **Real-Time Location Data Integration:**
    - Establish a robust system for real-time tracking of cab locations.
    - Integrate location data into the cab allocation algorithm to provide up-to-date suggestions.
    - Address potential challenges such as data latency or inaccuracies to maintain system reliability.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AbhishekYadav-01/Smart-Cab-Allocation-System-for-Efficient-Trip-Planning.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Smart-Cab-Allocation-System-for-Efficient-Trip-Planning
    ```

3. Open the project in your preferred code editor.

4. To run the project locally, you need to serve it using a local web server. If you have Python installed, you can use the following commands:

    - For Python 3.x:

        ```bash
        python -m http.server 8000
        ```

    - For Python 2.x:

        ```bash
        python -m SimpleHTTPServer 8000
        ```

5. Open your web browser and navigate to `http://localhost:8000` to view the application.



## Usage

1. **Admin Login:**
    - Username: `admin`
    - Password: `p`
    - Admins can manage trips and view booked/allocated cabs.

2. **Employee Login:**
    - Username: `employee`
    - Password: `p`
    - Employees can book cabs by providing their current location and destination.

3. **Allocating Cabs:**
    - Employees can enter their current location and destination to allocate the nearest available cab.
    - The system will display the allocated cab details including the cab ID, distance, current location, and destination.

4. **Managing Trips:**
    - Admins can view all trips, booked trips, and allocated cabs from the dashboard.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES5, ES6)
- Front-end libraries and frameworks
