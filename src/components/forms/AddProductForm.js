import {useState} from 'react'

export default function AddProducrForm(props) {    
    const [product, setProduct] = useState( 'name' )
    const [price, setPrice] = useState( 1 )
    const [campaign, setCampaign] = useState( 'campaign' )

    return (
        <form className="side-form">
                <h3> Add product </h3>
    
                <h6> Product's name </h6>
                <input  type="text" 
                        onChange={ e=>setProduct(e.target.value) }
                        value={product} />
                
                <h6> Product's price </h6>
                <input  type="number"
                        onChange={ e=>setPrice(e.target.value) }
                        value={price} />
    
                <h6> Product's campaign </h6>
                <input  type="text" 
                        onChange={ e=>setCampaign(e.target.value) }
                        value={campaign} />
    
                <button type="submit" onClick={handleSubmit}> Add </button>
        </form>        
        )

    function handleSubmit(event) {
        event.preventDefault()
        let copy_db = [...props.Products_db]
        let newRecord = { ID: Number(copy_db[copy_db.length-1].ID + 1) }
        let isComplete = true

        product.split(" ").join("").length > 0 ? newRecord.product = product : isComplete = false
        campaign.split(" ").join("").length > 0 ? newRecord.campaign = campaign : isComplete = false
        price > 0 ? newRecord.price = price : isComplete = false
        
        if(isComplete){
                copy_db.push(newRecord)
                props.setProducts_db(copy_db)
                props.setForm(0)
        }
        else(
                alert('Empty or not allowed values')
        )
    }
}    
