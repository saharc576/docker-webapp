# docker-webapp
## This is a simple web app, hello-wrold style => Docker hands on

### Server is written in nodejs and runs inside a container which has been built using a Dockerfile.
### It only handles simple get request on port 8080.
### To run the app:
  1. Make sure you have docker installed
  2. Get inside docker-webapp directory and run "docker build -t saharcohen/webapp ." (saharcohen/webapp is the tag and can be replaced)
  3. Now that we have built the image, run "docker run -p 8080:8080 --name mywebapp saharcohen/webapp"
  4. Enter http://localhost:8080/ in your own machine, and see the result.
