import requests
import json
#exercise2


search_query = "hilarious"
rating = "g"
api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

# Construct the URL string using f-strings
url = f"https://api.giphy.com/v1/gifs/search?q={search_query}&rating={rating}&api_key={api_key}"
'       https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'

# Print the URL
print(url)
response = requests.get(url)

print(response.status_code)
if response.status_code==200:
    data = response.json()
gifs_with_height_gt_100 = [gif for gif in data['data'] if int(gif['images']['original']['height']) > 100]
    # Print or do something with the filtered GIFs
for gif in gifs_with_height_gt_100:
        print(gif)
    