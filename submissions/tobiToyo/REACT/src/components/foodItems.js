
import refuelCiti from "../images/image1.svg";
import express from "../images/image2.svg";
import crunch from "../images/image3.svg";
import kingBuckImg from "../images/image4.svg";

const foodItems = [
        {id: 1, food: "King-Bucket" , price: 5000, img: kingBuckImg, quantity: 0 }, 
        {id: 2, food: "Zinger" , price: 3600, img: kingBuckImg, quantity: 0 }, 
        {id: 3, food: "Chicken-Strips" , price: 1450, img: kingBuckImg, quantity: 0 }, 
        {id: 4, food: "Yamilicious" , price: 900, img: kingBuckImg, quantity: 0 },
        {id: 5, food: "Refuel-Max" , price: 1200, img: refuelCiti, quantity: 0 },
        {id: 6, food: "Express-Meal" , price: 2000, img: express, quantity: 0 },
        {id: 7, food: "Citizen-Meal" , price: 1500, img: refuelCiti, quantity: 0 },
        {id: 8, food: "Crunchy-Wings" , price: 1750, img:crunch, quantity: 0 }
];

export default foodItems;