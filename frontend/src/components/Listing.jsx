import React from "react";

function Listing({listing, onDelete}) {
    const formattedDate = new Date(listing.created_at).toLocaleDateString("de-DE")

    return <div className="block">
        <table className="width-100">
            <tbody>
                <tr>
                    <th>#ID</th>
                    <td>{listing.id}</td>
                </tr>
                <tr>
                    <th>Title</th>
                    <td>{listing.title}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{listing.desc}</td>
                </tr>
                <tr>
                    <th>Street</th>
                    <td>{listing.addr_street}</td>
                </tr>
                <tr>
                    <th>Number</th>
                    <td>{listing.addr_number}</td>
                </tr>
                <tr>
                    <th>Zip code</th>
                    <td>{listing.addr_postcode}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{listing.addr_city}</td>
                </tr>
                <tr>
                    <th>State</th>
                    <td>{listing.addr_region}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{listing.addr_country}</td>
                </tr>
                <tr>
                    <th>Latitude</th>
                    <td>{listing.addr_lat}</td>
                </tr>
                <tr>
                    <th>Longitude</th>
                    <td>{listing.addr_lng}</td>
                </tr>
                <tr>
                    <th>Created</th>
                    <td>{formattedDate}</td>
                </tr>
            </tbody>
        </table>
        <button className="delete-button" onClick={() => onDelete(listing.id)}>Delete</button>
    </div>
}

export default Listing