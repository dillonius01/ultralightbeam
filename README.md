# ultralightbeam
Simple Node server to share files

## wat?
One day, I needed to share a large file with a colleague. It was too large to send as an email attachment, and uploading to a cloud storage service was a hassle.
With that in mind, I created this simple Node app that uses the `http` and `fs` modules to create a readable stream from anywhere within my home directory.

## Usage
Clients make a `GET` request to `http://localhost:8080/file/FILEPATH`, and the file at that path will be sent back via FTP.
