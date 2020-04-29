#/usr/bin/python3

"""
Author: Tai Kersten
Description: This pulls from Klaytn-scope 
             the address of validators
"""

import requests
import time
import json

REGISTERED_NETWORKS = {
  "cypress" : "https://scope-api.klaytn.com",
  "baobab"  : "https://baobab-api.scope.klaytn.com"
}

PAGES_TO_SAMPLE = 10000

NETWORK_TYPE = "cypress"

request_frame = "/api/blocks?page={_page_num}"

TARGET_FILE = "{net_type}_validators_{time}.json".format(net_type=NETWORK_TYPE, time=int(time.time()))


print("Will write to: %s" % TARGET_FILE)

prop_list = []

for i in range(PAGES_TO_SAMPLE):
    try:
        query_frame = request_frame.format(_page_num = i + 1)
        query = REGISTERED_NETWORKS[NETWORK_TYPE] + query_frame
        resp = requests.get(query) 
        print(resp.json())  
        proposers = list(set([prop.get("proposer") for prop in resp.json().get("result").get("blocks")]))
        prop_list.extend(proposers)

    except:
        break

filtered_props = list(set(prop_list))

with open(TARGET_FILE,"w") as my_fil:
    my_fil.write(json.dumps({"proposers" : filtered_props, "number": len(filtered_props)}))
