import { useState, useEffect } from "react"
import api from "../api";
import "../styles/Listing.css"
import Listing from "../components/Listing"
import {Helmet} from "react-helmet-async"

function Listings() {
    const [listings, setListings] = useState([])
    const [title, setTitle] = useState("Test_Title")
    const [addr_street, setAddr_street] = useState("Test_Street")
    const [addr_number, setAddr_number] = useState("Test_Number")
    const [addr_postcode, setAddr_postcode] = useState("Test_Postcode")
    const [addr_city, setAddr_city] = useState("Test_City")
    const [addr_region, setAddr_region] = useState("Test_Region")
    const [addr_country, setAddr_country] = useState("Test_Country")
    const [addr_lat, setAddr_lat] = useState("Test_Lat")
    const [addr_lng, setAddr_lng] = useState("Test_Lng")
    const [desc, setDesc] = useState("Test_Desc")

    useEffect(() => {
        getListings()
    },[])


    const getListings = () => {
        api
            .get("/api/listings/")
            .then((res) => res.data)
            .then((data) => {setListings(data); console.log(data)})
            .catch((err) => alert(err));
    }

    const deleteListing = (id) => {
        api
            .delete(`/api/listings/delete/${id}/`)
            .then((res) => {
                if(res.status === 204) alert("Listing deleted!");
                else alert("Failed to delete Listing.");
                getListings();
            })
            .catch((err) => alert(err));
    }

    const createListing = (e) => {
        e.preventDefault()
        api
            .post("/api/listings/", {desc, title, addr_street, addr_number, addr_postcode, addr_city, addr_region, addr_country, addr_lat, addr_lng})
            // .post("/api/listings/", {desc, title, addr_street, addr_postcode})
            .then((res) => {
                if(res.status === 201) alert("Listing created!");
                else alert("Failed to create Listing.");
                getListings();
            })
            .catch((err) => alert(err));
    }

    return <>
        <Helmet>
            <title>Listings</title>
            <meta name="description" content="Listing Archive" />
            <link rel="canonical" href="/listings" />
        </Helmet>
        <div className="container">
            <h2>Listings</h2>
            {listings.map((listing) => (
                <Listing listing={listing} onDelete={deleteListing} key={listing.id}/>
            ))}
        </div>
        <div className="container">
            <h2>Create a Listing</h2>
            <form onSubmit={createListing}>
                <label htmlFor="title">Title:</label>
                <br />
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    required 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                    // defaultValue={"Test_Title"}
                />


                            
                <label htmlFor="addr_street">Street:</label>
                <br />
                <input 
                    type="text" 
                    name="addr_street" 
                    id="addr_street" 
                    required 
                    onChange={(e) => setAddr_street(e.target.value)} 
                    value={addr_street}
                    // defaultValue="Test_Street"
                />          
                <label htmlFor="addr_number">Number:</label>
                <br />
                <input 
                    type="text" 
                    name="addr_number" 
                    id="addr_number" 
                    required 
                    onChange={(e) => setAddr_number(e.target.value)} 
                    value={addr_number}
                    // defaultValue="Test_Number"
                />
                <label htmlFor="addr_postcode">Zip code:</label>
                <br />
                <input 
                    type="text" 
                    name="addr_postcode" 
                    id="addr_postcode" 
                    required 
                    onChange={(e) => setAddr_postcode(e.target.value)} 
                    value={addr_postcode}
                    // defaultValue="Test_Postcode"
                />
                <label htmlFor="addr_city">City:</label>
                <br />
                <input 
                    type="text" 
                    name="addr_city" 
                    id="addr_city" 
                    required 
                    onChange={(e) => setAddr_city(e.target.value)} 
                    value={addr_city}
                    // defaultValue="Test_City"
                />
                <label htmlFor="addr_region">State:</label>
                <br />
                <input 
                    type="text" 
                    name="addr_region" 
                    id="addr_region" 
                    required 
                    onChange={(e) => setAddr_region(e.target.value)} 
                    value={addr_region}
                    // defaultValue="Test_State"
                />
                <label htmlFor="addr_country">Country:</label>
                <br />
                <input 
                    type="text" 
                    name="addr_country" 
                    id="addr_country" 
                    required 
                    onChange={(e) => setAddr_country(e.target.value)} 
                    value={addr_country}
                    // defaultValue="Test_Country"
                />
                <div className="flex block">
                    <div className="flex1">
                        <label htmlFor="addr_lat">Latitude:</label>
                        <br />
                        <input 
                            type="text" 
                            name="addr_lat" 
                            id="addr_lat" 
                            required 
                            onChange={(e) => setAddr_lat(e.target.value)} 
                            value={addr_lat}
                            // defaultValue="Test_Lan"
                        />
                    </div>
                    <div className="flex1">
                        <label htmlFor="addr_lng">Longitude:</label>
                        <br />
                        <input 
                            type="text" 
                            name="addr_lng" 
                            id="addr_lng" 
                            required 
                            onChange={(e) => setAddr_lng(e.target.value)} 
                            value={addr_lng}
                            // defaultValue="Test_Lng"
                        />
                    </div>
                </div>




                <label htmlFor="desc">Description:</label>
                <br />
                <textarea 
                    name="desc" 
                    id="desc" 
                    cols="30" 
                    rows="10" 
                    required 
                    onChange={(e) => setDesc(e.target.value)} 
                    value={desc}
                    // defaultValue="Test_Desc"
                />
                <br />
                <input 
                    type="submit" 
                    value="Submit" 
                />
            </form>
        </div>
        
    </>
}

export default Listings