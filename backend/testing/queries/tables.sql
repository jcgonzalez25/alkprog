USE jello;
DROP TABLE IF EXISTS testevent;
CREATE TABLE testevent(
    title VARCHAR(255),
    bill_type VARCHAR(255),
    client_type VARCHAR(255),
    client VARCHAR(255),
    therapist VARCHAR(255),
    location VARCHAR(255),
    category VARCHAR(255),
    start DATE,
    end DATE
);