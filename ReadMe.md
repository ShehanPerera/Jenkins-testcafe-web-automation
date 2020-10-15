# ReadMe

## Setup guide

1. npm install
2. Create .env file inside mSpace dir and add following vairables

```
MSPACE_URL=https://da-mspace.hsenidmobile.com
MONGO_URL=mongodb://172.16.3.184:27017/
MYSQL_HOST=172.16.3.184
MYSQL_USER=user
MYSQL_PASSWORD=password
```
3. Create directory named as reports 

##  Running test scenarios

##### 1.Running in Chrome browser
`npm run testChrome`

##### 2.Running with headless browser
`npm run testHeadLess`

##### 3. Running with percy integration
Before running you have to export percy token
`npm run testPercy`

## Generate Reports
After running test scenarios to generate reports execute the following script
`npm run generateHtmlReport`
html report will generate inside reports/combiled
