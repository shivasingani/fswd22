import React from 'react';
import {useParams,useSearchParams} from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1> Welcome Home </h1>
        </div>
    );
}

export function AboutUs() {
    return (
        <div>
            <h1> Welcome to AboutUs page</h1>
        </div>
    );
}

export function ContactUs() {
    return (
        <div>
            <h1> Welcome to ContactUs page</h1>
        </div>
    );
}

export function ITHome() {
    return (
        <div>
            <h1> Welcome to IT Home page</h1>
        </div>
    );
}

export function PageNotFound() {
    return (
        <div>
            <h3> Sorry, could not find the resource you are looking for</h3>
        </div>
    );
}

export function GetOrder() {

    let {orderId,name} = useParams();
    return (
        <div>
            <h3> Hi {name}, Welcome to Order Page!</h3>
            <h6> your order number is: {orderId} </h6>
        </div>
    );
}

export function OrderQuery() {

    let [order] = useSearchParams();
    console.log(order.get('order'));
    console.log(order.get('name'));
    return (
        <div>
            <h3> Welcome to Order Query Page!</h3>
            <h6> your order from query string is: {order.get('order')} </h6>
        </div>
    );
}