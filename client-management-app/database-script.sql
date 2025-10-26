CREATE DATABASE client_management;

USE client_management;

CREATE TABLE clients (
  client_id INT AUTO_INCREMENT PRIMARY KEY,
  client_name VARCHAR(100) NOT NULL,
  project_name VARCHAR(100),
  contact_email VARCHAR(100)
);

CREATE TABLE meetings (
  meeting_id INT AUTO_INCREMENT PRIMARY KEY,
  client_id INT,
  meeting_date DATE,
  topic VARCHAR(200),
  FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

INSERT INTO clients (client_name, project_name, contact_email)
VALUES 
('Anna Architect', 'Urban Homes', 'anna@example.com'),
('John Doe', 'Skyline Tower', 'john@example.com');

INSERT INTO meetings (client_id, meeting_date, topic)
VALUES
(1, '2025-10-28', 'Project kickoff'),
(2, '2025-11-05', 'Design review');
