import requests
import os
import json
API_URL = os.getenv('API_URL')
API_KEY = os.getenv('API_KEY')


headers = {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
}

class EmailApiError(Exception):
    pass

def handler(event,context):
    print("### EVENT")
    print(json.dumps(event))
    
    content = event['body']
  

    
    result = requests.post(url=API_URL, json=json.loads(content), headers=headers)
    
    
    print("### API RESULT")
    print(result.json())
    
    try:
        message = result.json()['body']
        
        
        return {
        'statusCode': result.status_code,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      
        },
        'body': json.dumps({
            "emailApiResponse": message
            }),
        
    }
    except KeyError as e:
        
            
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        
            },
            'body': json.dumps({
                "emailApiResponse": result.json()
                    
                }),
            
        }


