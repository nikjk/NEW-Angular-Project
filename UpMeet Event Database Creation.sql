CREATE DATABASE UpmeetEventDB;
USE UpmeetEventDB; 
   
     CREATE TABLE Events (
     EventId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	 EventName nvarchar(50),
     EventDescription nvarchar(Max),     
     CreatedBy nvarchar(30),
     CreatedDate datetime, 
	 EventStartDate datetime,
	 EventEndDate datetime,
	 EventType nvarchar(50),
	 EventLocation nvarchar(50),
	 Price decimal,
	 );

	 DROP TABLE dbo.Favorites;

	CREATE TABLE Favorites (
	FavoriteId int NOT NULL IDENTITY(1,1)  PRIMARY KEY,
    Userid int,
    Eventid int,    
    IsFavorite bit
   
);

CREATE TABLE Users (
	UserId int NOT NULL IDENTITY(1,1)  PRIMARY KEY,
    UserName nvarchar(40)
   
);
     


INSERT INTO Events(EventName, EventDescription, CreatedBy, CreatedDate, EventStartDate, EventEndDate, EventType, EventLocation, Price)
VALUES 
('Art Exhibition', 'Explore a diverse collection of contemporary art pieces', 'Emily Brown', '2023-05-20', '2023-06-10', '2023-06-30', 'Art', 'Gallery XYZ', 10.99),
('Sports Tournament', 'Compete in various sports disciplines and win exciting prizes', 'Mike Anderson', '2023-05-18', '2023-07-01', '2023-07-03', 'Sports', 'Sports Complex', 15.99),
('Food Festival', 'Indulge in a culinary journey with a wide range of delicious cuisines', 'Sophia Wilson', '2023-05-15', '2023-08-05', '2023-08-06', 'Food', 'Downtown Square', 5.99),
('Business Conference', 'Network with industry professionals and gain insights from top speakers', 'David Roberts', '2023-05-12', '2023-09-20', '2023-09-22', 'Business', 'Conference Center', 199.99),
('Film Screening', 'Enjoy a movie night with screenings of critically acclaimed films', 'Olivia Johnson', '2023-05-10', '2023-07-20', '2023-07-25', 'Film', 'Cinema Hall', 12.99),
('Fitness Workshop', 'Participate in fitness sessions and learn about healthy lifestyle practices', 'Daniel Miller', '2023-05-07', '2023-06-25', '2023-06-25', 'Fitness', 'Gymnasium', 29.99),
('Fashion Show', 'Witness the latest fashion trends on the runway', 'Ava Thompson', '2023-05-05', '2023-08-15', '2023-08-15', 'Fashion', 'Event Hall', 50.00),
('Technology Hackathon', 'Collaborate with fellow programmers and build innovative solutions', 'Liam Davis', '2023-05-02', '2023-07-10', '2023-07-12', 'Technology', 'Tech Hub', 0.00),
('Literary Seminar', 'Engage in discussions on literature and writing techniques', 'Mia Adams', '2023-04-30', '2023-06-05', '2023-06-05', 'Literature', 'Library Auditorium', 5.00),
('Gardening Workshop', 'Learn about gardening tips and techniques from expert horticulturists', 'Noah Wilson', '2023-04-27', '2023-07-08', '2023-07-08', 'Gardening', 'Botanical Gardens', 19.99);


