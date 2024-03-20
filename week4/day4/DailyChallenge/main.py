import psycopg2
import requests
import config

country = requests.get("https://restcountries.com/v3.1/all")
print(country.text)


# try: 

#     conn = psycopg2.connect(
#             host = config.HOSTNAME,
#             user = config.USERNAME,
#             password = config.PASSWORD,
#             database="dcw4d4"

#         )
#     conn.autocommit = True
#     cursor = conn.cursor()
    
#     # cursor.execute("CREATE DATABASE dcw4d4")
    
#     # cursor.execute("CREATE TABLE country (name VARCHAR(100), capital VARCHAR(100), flag VARCHAR(100), subregion VARCHAR(100), population VARCHAR(100))")
    
#     # conn.commit() 
#     all_rows = cursor.fetchall() 
#     for row in all_rows:
#         print(row)
    
# except psycopg2.Error as e:
#     print('Error connectiong: ', e)
   
# finally:
#     if conn:
#         cursor.close()
#         conn.close()
        
