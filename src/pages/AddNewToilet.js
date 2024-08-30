import React from 'react'
import sendRequest from '../utils/sendRequest';

export default function AddNewToilet() {
    const AddNewToilet = async () => {
        console.log("Inside AddNewToilet function");
        try {
            const response = await sendRequest("/add-new-toilet", 
            {
                "ToiletName": "Test Toilet #1",
                "ToiletDescription": "Test Toilet #1 Desc",
                "ToiletAddressLine1": "Ghatkopar",
                "ToiletAddressLine2": "",
                "ToiletCity": "Mumbai",
                "ToiletState": "MH",
                "ToiletPincode": "400077",
                "ToiletGender": "All",
                "ToiletRating": 4,
                "ToiletCharges": 0,
                "ToiletComments": "Clean and well-maintained.",
                "ToiletBuildDate": null
            },
                "POST", {})

            console.log("response: ", response);
        } catch (error) {

        }
    }

    return (
        <>
            <div>AddNewToilet</div>
            <button onClick={AddNewToilet}>Add New</button>
        </>
    )
}