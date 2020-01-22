
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"firstname" VARCHAR (80),
	"lastname" VARCHAR (80),
	"email" VARCHAR (100),
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "tracks" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (80),
	"artist_id" INT REFERENCES "artists",
	"genre" VARCHAR (80),
	"mood" VARCHAR (80),
	"path" VARCHAR (80)
);

CREATE TABLE "downloads" (
	"id" SERIAL PRIMARY KEY,
	"customer_id" INT REFERENCES "user",
	"track_id" INT REFERENCES "tracks"
);

CREATE TABLE "artists" (
	"id" SERIAL PRIMARY KEY,
	"stage_name" VARCHAR (80),
	"profile_pic" VARCHAR (80),
	"bio" VARCHAR (2000),
	"email" VARCHAR (100)
);

INSERT INTO "tracks" ("title", "artist_id", "genre", "mood", "path")
				VALUES ('Dark Horse', 2, 'Hip-Hop', 'Chill', 'https://dmf-bucket.s3.us-east-2.amazonaws.com/Dark+Horse+w%3A+Taylor+DONE.wav');