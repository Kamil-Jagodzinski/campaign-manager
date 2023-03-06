import {useState} from 'react'

export default function EditCompaignForm(props) {
    let copy_db = [...props.Products_db]
    let idx = copy_db.findIndex( (camp) => camp.ID === Number(props.ID) ) 
    const [product, setProduct] = useState( copy_db[idx].product )
    const [price, setPrice] = useState( copy_db[idx].product )
    const [campaign, setCampaign] = useState( copy_db[idx].product )

    return (
    <form className="side-form">
            <h3> Edit campaign </h3>

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

            <button type="submit" onClick={handleSubmit}> Confirm </button>
    </form>        
    )

    function handleSubmit(event) {
        event.preventDefault()
        console.log( copy_db )
        copy_db[idx].product = campaign
        copy_db[idx].price = price
        copy_db[idx].campaign = campaign
        props.setCampaigns_db(copy_db)
        console.log('done')
    }
}    
