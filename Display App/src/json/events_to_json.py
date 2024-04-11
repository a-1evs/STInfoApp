import csv
import json
 
# src\json\csv_to_json.py
# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
    # create a dictionary
    data = {"Sunday": [], "Monday":[], "Tuesday":[], "Wednesday":[], "Thursday":[]}
    
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        # Convert each row into a dictionary 
        # and add it to data
        event_index = 0
        event_list = []
        for rows in csvReader:
            weekday = rows['\ufeff"Event Day"']
            if weekday not in data.keys():
                continue
            
            event = {}
            event["Day"] = rows['\ufeff"Event Day"']
            event["Name"] = rows["Event Name"]
            
            staff_list_raw =  rows["Staff Names"].split('\n')
            staff_list = []
            for item in staff_list_raw:
                if len(item) < len('First Name: , Last Name:'):
                    continue
                name = item.split(': ')[1].split(',')[0] + ' ' + item.split(': ')[2]
                staff_list.append(name)
            event["Staff"] = staff_list
            event["Type"] = rows["Event Type"]
            event["Location"] =  rows["Location"]
            event["Description"] = rows['Event Description']       
            
            data[weekday].append(event)
            
       

        
    # Open a json writer, and use the json.dumps() 
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))
         
# Driver Code
 
# Decide the two file paths according to your 
# computer system
name = "test"
csvFilePath = f'src/csv/{name}.csv'
jsonFilePath = r'src/json/events.json'
 
# Call the make_json function
make_json(csvFilePath, jsonFilePath)