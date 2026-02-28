import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewListing() {

    const navigate = useNavigate();
    const [loading , setLoading] = useState(false);
    const [imagePreview , setImagePreview] = useState(null);
    const [currentStep , setCurrentStep] = useState(1);
    const [formData , setFormData] = useState({
        title:"",
        description:"",
        location:"",
        country:"",
        price: 0,
    })


    const HandleSubmit = async (e) =>{
        e.preventDefault();

        setLoading(true);

        try{
            const data = new FormData();
            data.append("title", formData.title);
            data.append("description", formData.description);
            data.append("location", formData.location);
            data.append("country", formData.country);
            data.append("price", formData.price);
            })


        } catch(err){
            console.error("Error creating listing:", err);
        }
    }

  return(
    <form action="">
        <input type="text" placeholder="Title" ></input>
        <input type="text" placeholder="Description" ></input>
        <input type="text" placeholder="Location" ></input>
        <input type="text" placeholder="Country" ></input>
        <input type="number" placeholder="Price" ></input>
        <input type="file" placeholder="Image" ></input>
        <button type="submit">Create Listing</button>
    </form>
  )
}
