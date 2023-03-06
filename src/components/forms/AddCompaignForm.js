import towns_DB from '../../data/Towns'
import {useState} from 'react'

export default function AddCompaignForm(props) {    
    const [campaign, setCampaign] = useState( 'name' )
    const [keywords, setKeywords] = useState( 'Keywords' )
    const [bidAmount, setBidAmount] = useState( 1 )
    const [campaignFund, setCampaignFund] = useState( 1 )
    const [status, setStatus] = useState( 'on' )
    const [town, setTown] = useState( 'Warsaw' )
    const [radius, setRadius] = useState( 0 )

    return (
    <form className="side-form">
            <h3> Add new campaign </h3>

            <h6> Campaign's name </h6>
            <input  type="text" 
                    onChange={ e=>setCampaign(e.target.value) }
                    value={campaign} />

            <h6> Keywords </h6>
            <input  type="text"
                    onChange={ e=>setKeywords(e.target.value) }
                    value={keywords} />
            
            <h6> Bid amount </h6>
            <input  type="number" min={1}
                    onChange={ e=>setBidAmount(e.target.value) }
                    value={bidAmount} />

            <h6> Campaign fund </h6>
            <input  type="number" min={1}
                    onChange={ e=>setCampaignFund(e.target.value) }
                    value={campaignFund} />

            <h6> Campaign status  </h6>
            <select name="status" id="status" value={status}
                    onChange={ e=>setStatus(e.target.value) }>
                 <option value="On" key='On'>  On </option>
                 <option value="Off" key='Off'> Off </option>
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
            <input  type="number" min={0}
                    onChange={ e=>setRadius(e.target.value) }
                    value={radius} />

            <button type="submit" onClick={handleSubmit}> Add </button>
    </form>        
    )

    function handleSubmit(event) {
        event.preventDefault()
        let copy_db = [...props.Campaigns_db]
        let newRecord = { ID: Number(copy_db[copy_db.length-1].ID + 1) }
        let isComplete = true

        campaign.split(" ").join("").length > 0 ? newRecord.campaign = campaign : isComplete = false
        keywords.split(" ").join("").length > 0 ? newRecord.keywords = keywords : isComplete = false
        bidAmount > 0 ? newRecord.bidAmount = Number(bidAmount) : isComplete = false
        campaignFund > 0 ? newRecord.campaignFund = Number(campaignFund) : isComplete = false
        newRecord.status = status
        newRecord.town = town
        radius >= 0 ? newRecord.radius = Number(radius) : isComplete = false

        if(isComplete){
                copy_db.push(newRecord)
                props.setCampaigns_db( copy_db )
                props.setForm(0)
        }
        else(
                alert('Empty or not allowed values')
        )
    }
}    
