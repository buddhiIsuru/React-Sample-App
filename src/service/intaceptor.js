
import Cookie from "js-cookie";

const result = {
    status: 200,
    data: null
}

export const httpGET = async (url) => {
    let token = await Cookie.get('token');
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    }).then((response) => response.json())
        .then((responseJson) => {
            return {
                ...result,
                status: responseJson['error'] ? 500 : 200 ,
                data: responseJson
            }
        })
        .catch((error) => {
            return {
                ...result,
                status: 500,
                data: error,
            }
        })
}

export const httpPOST = async (url, body, requestOptions) => {
    let token = await Cookie.get('token');
    return fetch(url, requestOptions ?
        {...requestOptions}
        :
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(body)
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            return {
                ...result,
                status: responseJson['error'] ? 500 : 200,
                data: responseJson
            }
        })
        .catch((error) => {
            return {
                ...result,
                status: 500,
                data: error,
            }
        })
}
