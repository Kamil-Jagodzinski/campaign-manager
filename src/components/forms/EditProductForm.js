import {useState} from 'react'

export default function EditCompaignForm(props) {
    let copy_db = [...props.Products_db]
    let idx = copy_db.findIndex( (camp) => camp.ID === Number(props.ID) ) 
    const [product, setProduct] = useState( copy_db[idx].product )
    const [price, setPrice] = useState( copy_db[idx].price )
    const [campaign, setCampaign] = useState( copy_db[idx].campaign )

    return (
    <form className="side-form">
            <h3> Edit product </h3>

            <h6> Product's name </h6>
            <input  type="text" 
                    onChange={ e=>setProduct(e.target.value) }
                    value={product} />
            
            <h6> Product's price </h6>
            <input  type="number" min={1}
                    onChange={ e=>setPrice(e.target.value) }
                    value={price} />

            <h6> Product's campaign </h6>
            <input  type="text" 
                    onChange={ e=>setCampaign(e.target.value) }
                    value={campaign} />

            <button type="submit" onClick={handleSubmit}> Confirm </button>
    </form>        
    )

    function handleSubmit(event) {
        event.preventDefault()
        let isComplete = true

        product.split(" ").join("").length > 0 ? copy_db[idx].product = product : isComplete = false
        campaign.split(" ").join("").length > 0 ? copy_db[idx].campaign = campaign : isComplete = false
        price > 0 ? copy_db[idx].price = price : isComplete = false
        
        if(isComplete){
                props.setProducts_db(copy_db)
                props.setForm(0)
        }
        else(
                alert('Empty or not allowed values')
        )
    }
}    

