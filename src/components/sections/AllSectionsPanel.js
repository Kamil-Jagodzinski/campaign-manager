import '../../styles/sections.css'
import SingleSection from './SingleSection'
import CampaignsIcon from '../../images/campaign.png'
import ProductsIcon from '../../images/box.png'

export default function AllSectionsPanel(props) {

    return (
    <div  id='all-sections'>
        <SingleSection  sectionName='Campaigns' sectionIcon={CampaignsIcon} 
                        cells={campaignsCells}  rows={props.Campaigns_db} 
                        activeID = {props.activeID}   setActiveID = {props.setActiveID}
                        setForm = {props.setForm}   updateDB = {props.setCampaigns_db}
                        addNumber = {4} editNumber = {2} selectedForm = {props.selectedForm}
                        isLoggedIn={props.isLoggedIn}/>

        <SingleSection  sectionName='Products'      sectionIcon={ProductsIcon}
                        cells={productsCells}       rows={props.Products_db}
                        activeID = {props.activeID} setActiveID = {props.setActiveID}
                        setForm = {props.setForm}   updateDB = {props.setProducts_db}
                        addNumber = {5} editNumber = {3} selectedForm = {props.selectedForm}
                        isLoggedIn={props.isLoggedIn}/>
    </div >
)}    

const campaignsCells = ['ID', 'Campaign', 'Keywords', 'Bid amount', 'Campaign fund', 'Status', 'Town', 'Radius' ];
const productsCells = ['ID', 'Product', 'Price', 'Campaign'];
