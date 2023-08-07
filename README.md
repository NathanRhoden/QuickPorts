# QuickPorts - Find your local EV Charging terminal.

![alt text](/screenshots/Qp-Main.PNG)

# Deployment 
The App is available here -> [QuickPorts!](https://www.quickports.co.uk/) 


# What is Quickports?

QuickPorts is a simple Web app which allows users to find electric vehicle charging 
terminals across the UK. Users also have the ability to retrieve directions to 
the charging terminal of thier choosing by map.

# Languages Used 

BackEnd : 
* MySQL - Database
* SpringBoot (Java) - Server
* AWS RDS
* AWS EC2 

#

Frontend : 
* React JS (JavaScript)
* HTML
* CSS
* JavaScript (ES6)
* AWS Amplify


# Completed task

The user can search for EV charging terminals by postcode. The are also able to change 
the search radius.The app will be shown all of the available terminals within the search
radius. Infomration about the terminal is also displayed.

![alt text](/screenshots/postcode-search.PNG)

Directions from the postcode Lng and Lat coordinates to the selected charging terminal 
are displayed when the user chooses to route to that terminal. The directions have been made possible through the use of the Mapbox js gl api.

![alt text](/screenshots/qp-directions.PNG)


# Key Learning 
The main learning points for myself while building QuickPorts was firstly creating the backend. Springboot handles alot of the database query work for you but there were many instances where I had to build a custom query which improved my SQL ability and understanding.

A major point of the project was figuring out how to determine the distance between
the the starting point and the ending point and writing the logic to remove points which were not relevant. This is quite technical as the distance between two points on the earth are determined by a great circle equation . Luckily the a geospatical pacakge (SimpleLatLng) assisted me in calucalating the distances which I could then use to deteremine the relevant points.

I was able to use React js to build the frondend. I was able to utilise the frameworks strength of creating 
reusable components that I could use through the client application. Most notable the Card components.


# Future Aims 

* Write Unit Tests to check that code works as intended.
* Imporve the organizational structure of the project.
* Improve the webapp by adding a personal login feature so users can add their own charge points

