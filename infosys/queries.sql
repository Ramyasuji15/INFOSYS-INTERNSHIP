-- Insert sample data into Register table
INSERT INTO Register (Username, Password) 
VALUES 
    ('test_user', SHA2('test_password', 256)), -- User with hashed password
    ('jane_doe', SHA2('secure_password', 256));

-- Insert sample data into User_Detail table
INSERT INTO User_Detail (User_id, Full_name, Policy_name, Age, Phone_Number, Gender, Payment_type, Address) 
VALUES 
    (1, 'John Doe', 'Life Insurance', 30, '1234567890', 'Male', 'card', '123 Main St'),
    (2, 'Jane Doe', 'Health Insurance', 28, '0987654321', 'Female', 'cash', '456 Elm St');

-- Insert sample data into Agent table
INSERT INTO Agent (Agent_name, Email, Phone, Specialization, Status) 
VALUES 
    ('Agent Smith', 'smith@example.com', '9876543210', 'Life Insurance', 'Active'),
    ('Agent Johnson', 'johnson@example.com', '5432167890', 'Health Insurance', 'Active');

-- Insert sample data into Agent_Availability table
INSERT INTO Agent_Availability (Agent_id, Available_date, Day_of_week, Start_time, End_time, Is_available) 
VALUES 
    (1, '2024-10-24', 'Monday', '09:00:00', '17:00:00', TRUE),
    (1, '2024-10-25', 'Tuesday', '09:00:00', '17:00:00', TRUE),
    (2, '2024-10-24', 'Wednesday', '10:00:00', '16:00:00', TRUE);

-- Insert sample data into Agent_AI_Prediction table
INSERT INTO Agent_AI_Prediction (Agent_id, Prediction_Date, Prediction_Start_time, Prediction_End_time, Prediction_confident) 
VALUES 
    (1, '2024-10-25', '09:00:00', '17:00:00', 95.50),
    (2, '2024-10-26', '10:00:00', '16:00:00', 90.00);

