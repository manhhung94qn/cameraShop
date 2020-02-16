const express = require('express');
const router = express.Router();

const data = require('../configs/address.json');
const getListCity = ()=>{
    return data.map(x=>{
        return {
            name: x.name,
            id: x.id
        }
    });
};

const getListDistrictById = (id)=>{
    let city = data.find(x=>x.id == id);
    return city.districts.map(x=>{
        return {
            id: x.id,
            name: x.name
        }
    }) || [];
}

const getListWardByCityAndDistrictId = (cityId, districtId) => {
    let city = data.find(x=>x.id == cityId);
    let district = city.districts.find(x=>x.id = districtId);
    return district.wards.map(x=>{
        return {
            id: x.id,
            name: `${x.prefix} ${x.name}`
        }
    })
}

console.log( getListWardByCityAndDistrictId(1,1) );
