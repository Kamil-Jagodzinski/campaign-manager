import towns_DB from '../../data/Towns'
import {useState} from 'react'

export default function EditCompaignForm(props) {
        console.log( props.compID )
    let copy_db = [...props.Campaigns_db]
    let idx = copy_db.findIndex( (camp) => camp.ID === Number(props.ID) ) 

    const [campaign, setCampaign] = useState( copy_db[idx].campaign )
    const [keywords, setKeywords] = useState( copy_db[idx].keywords )
    const [bidAmount, setBidAmount] = useState( copy_db[idx].bidAmount )
    const [campaignFund, setCampaignFund] = useState( copy_db[idx].campaignFund )
    const [status, setStatus] = useState( copy_db[idx].status )
    const [town, setTown] = useState( copy_db[idx].town )
    const [radius, setRadius] = useState( copy_db[idx].radius )

    return (
    <form className="side-form">
            <h3> Edit campaign </h3>

            <h6> Campaign's name </h6>
            <input  type="text" 
                    onChange={ e=>setCampaign(e.target.value) }
                    value={campaign} />

            <h6> Keywords </h6>
            <input  type="text"
                    onChange={ e=>setKeywords(e.target.value) }
                    value={keywords} />
            
            <h6> Bid amount </h6>
            <input  type="number"
                    onChange={ e=>setBidAmount(e.target.value) }
                    value={bidAmount} />

            <h6> Campaign fund </h6>
            <input  type="number"
                    onChange={ e=>setCampaignFund(e.target.value) }
                    value={campaignFund} />

            <h6> Campaign status  </h6>
            <select name="status" id="status" value={status}
                    onChange={ e=>setStatus(e.target.value) }>
                <option value="Active" key='Active'>  Active </option>
                <option value="Off" key='Off'> Off </option>
                <option value="Waiting" key='Waiting'> Waiting </option>
                <option value="Suspended" key='Suspended'> Suspended </option>
            </select>

            <h6> Town </h6>
            <select name="town" id="town" value={town}
                    onChange={ e=>setTown(e.target.value) }>
                {
                    towns_DB.map( (town) =>
                        <option value={town} key={town}> {town} </option>
                    )
                }
            </select>
            
            <h6> Campaign radius [km] </h6>
            <input  type="number"
                    onChange={ e=>setRadius(e.target.value) }
                    value={radius} />

            <button type="submit" onClick={handleSubmit}> Confirm </button>
    </form>        
    )

    function handleSubmit(event) {
        event.preventDefault()
        console.log( copy_db )
        copy_db[idx].campaign = campaign
        copy_db[idx].keywords = keywords
        copy_db[idx].bidAmount = bidAmount
        copy_db[idx].campaignFund = campaignFund
        copy_db[idx].status = status
        copy_db[idx].town = town
        copy_db[idx].radius = radius
        props.setCampaigns_db(copy_db)
        console.log('done')
    }
}    
