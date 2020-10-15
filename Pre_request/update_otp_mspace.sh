#!/bin/bash
while true; do
mysql -uuser -ppassword  -e "UPDATE common_admin.user SET  msisdn_verification_code='123456' where username='testcafeuser';"
myql -uuser -ppassword  -e "UPDATE common_admin.user SET last_password_updated_date='2018-10-09 12:56:08' where username='testcafeuser'";
  sleep 1;
done

