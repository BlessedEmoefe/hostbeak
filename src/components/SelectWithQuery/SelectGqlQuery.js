import React from 'react';
import {gql, useQuery} from "@apollo/client";
import Select from "../Select/Select";
import {Container} from "./style";

const batchs = gql`
    query batches {
        batches {
            stream
            _id
        }
    }
`
const format = (data) => {
  return data.map(res =>  ({name:res["stream"], value:res._id}))
}
const SelectGqlQuery = (props) => {
  const {loading, error, data} = useQuery(batchs, {
    fetchPolicy: "network-only",
  })
  return (
    <>
      <Container hasBorder={loading || error}>
      {loading ? <div>Loading...</div> : error ? <div>Error getting {props.placeholder}</div>:
        <Select options={format(data.batches)} {...props}/>}
    </Container>
    
    </>
   
);
};


export default SelectGqlQuery;
