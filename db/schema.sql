CREATE DATABASE quiz_watch;
\c quiz_watch

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username TEXT,
password_digest TEXT
);

CREATE TABLE fashcards (
id SERIAL PRIMARY KEY,
user_id INT,
question TEXT,
hint TEXT,
answer TEXT,
answered_correctly INT,
answered_incorrectly INT
);

CREATE TABLE quiz_reminders (
id SERIAL PRIMARY KEY,
user_id INT,
flashcard_id INT,
hour INT,
minute INT,
seconds INT,
day TEXT,
date INT,
month TEXT,
year INT
);

-- NOTES:
-- Remove table data without dropping the table, better than DELETE as it resets the table auto-increment value:
TRUNCATE TABLE table_name;