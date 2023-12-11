# Project Overview

This project aims to develop an interactive web application that simulates the operations of an automated package delivery point/locker system. The application consists of a user system, a driver system, and a locker system. The application will be designed to demonstrate the complete workflow of an express delivery system, encompassing all stages from sending to receiving packages.

## Detailed Description

The project focuses on the creation of a web-based application that is designed to provide a comprehensive representation of the entire process of a courier system, covering the entire process of a package from dispatch to receipt. The application is divided into three main parts:
User System: This interface allows customers to send, track package status and record package data.
Driver System: This part of the application is designed to help delivery personnel manage package deliveries, including package status updates and locker allocations.
Locker system: simulates a physical automatic locker that stores packages. Packages can be stored or taken out of the locker by entering a pickup code or delivery code.

## Technology Stack

+ Front-End: React
+ Back-End: SpringBoot
+ Databases: H2 (Development), PostgreSQL (Production)
+ Deployment: GitHub, Heroku

## Team Contributions

- Xier Peng:
    - Developed the driver page UI.
    - Crafted Auth, User, Parcel, and Locker APIs.
    - Conducted API integration tests.

- Yingzhi Zhang:
    - Designed the User, Locker, and form page UI.
    - Integrated User, Locker, and form pages with the back-end API.
    - Participated in React testing.

## Application Architecture & Database Structure

### Backend Plan

Core Components
1. User Management Service
  + Manages Consumer and Driver user accounts.
  + Key endpoints include user registration, authentication, and deletion.
2. Parcel Management Service
  + Handles parcel information, history, and statuses.
  + Provides endpoints for fetching user parcel history, creating new parcels, and updating parcel information.
3. Locker Management Service
  + Manages parcel lockers and their cabinets.
  + Endpoints allow for fetching locker information, free cabinets, and opening cabinets.
4. Notification Service
  + Sends email notifications to users.
  + Includes an endpoint for sending email notifications.
5.Parcel Generator Robot
  + A backend script that generates parcels at defined intervals.

Design:

1.Authentication Logic
  + Implements JWT or session-based authentication for secure user sessions.
2.Parcel Creation & Allocation Logic
  + Allocates new parcels to free cabinets in selected lockers.
3.Cabinet Opening Logic
  + Validates codes and opens the corresponding cabinet for parcel pickup or delivery.

**Notice**: for more information, refer to our documentation on Application Architecture & Database Structure.(https://bytetype.github.io/document)


### UI Plan

Home page: The home page is the locker simulation page. Users can select the locker they want to interact with and enter the shipping code or pickup code to simulate the locker function.
Login page: Users can register as a member through this page, and then log in to the website to obtain permission to send packages and track the status of packages.
Details page: Displays detailed information about the package, such as sender and recipient information, package status, package time data, etc.
User panel: The user panel is divided into sending packages and package information list functions. Users can create their own delivery package through the delivery form in the user panel, and view all package information in their account in the package information list.

## Installation and Usage

Local Setup:

+ Clone or download both front-end and back-end repositories.
+ Launch back-end with gradlew bootDevelopRun.
+ Initiate front-end with npm start.

Accessing Remotely:

+ Visit our live application at ByteType Web Application: https://bytetype.github.io/alchemists/

## Test Plan

Test plan link: https://oamk-my.sharepoint.com/:w:/g/personal/t1zhyi00_students_oamk_fi/EfVieZBaI9xFikNflA3ikgwBtKZkg4hSDsJo3onSJQ0o7Q?e=nEyKmy
