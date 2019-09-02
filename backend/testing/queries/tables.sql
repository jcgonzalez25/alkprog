USE jello;


DROP TABLE testevent IF EXISTS;
CREATE TABLE testevent(
    title VARCHAR(255),
    bill_type VARCHAR(255),
    client_type VARCHAR(255),
    client VARCHAR(255),
    therapist VARCHAR(255),
    location VARCHAR(255),
    newLocation VARCHAR(255),
    newCategory VARCHAR(255),
    selectedDate DATE,
    endSelectedDate DATE
);