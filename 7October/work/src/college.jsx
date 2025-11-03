import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";


const GET_COUNTRY = gql
    `query GET_COUNTRY($code: ID!){
    countries{  
        code
        name
        capital
        currency
    languages{
            name
        }
    }
}`


function CountryList() {

    const { loading, error, data } = useQuery(GET_COUNTRY, {
        variables: { code: 'IN' }
    });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    const country = data.country;

    console.log(data, "data");

    return (
        <div style={{ padding: "20px" }}>
            <p><strong>Capital: </strong>{country.capital}</p>
            <p><strong>Currency: </strong>{country.currency}</p>
            <p><strong>LAnguage: </strong>{country.language.map(val => val.name).join(", ")}</p>
        </div >
    );
}

export default CountryList;