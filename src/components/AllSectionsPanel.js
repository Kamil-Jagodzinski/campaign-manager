import './sections.css'
import SingleSection from './SingleSection'
import CampaignsIcon from '../images/campaign.png'
import ProductsIcon from '../images/box.png'
import campaigns from '../data/Campaigns.js'
import products from '../data/Products.js'


export default function AllSectionsPanel(props) {

    return (
    <div  id='all-sections'>
        <SingleSection  sectionName='Campaigns' sectionIcon={CampaignsIcon} 
                        cells={campaignsCells}  rows={campaigns} 
                        activeID = {props.activeID}   setActiveID = {props.setActiveID}
                        setForm = {props.setForm}
                        addNumber = {4} editNumber = {2}
                        isLoggedIn={props.isLoggedIn}/>

        <SingleSection  sectionName='Products'      sectionIcon={ProductsIcon}
                        cells={productsCells}       rows={products}
                        activeID = {props.activeID} setActiveID = {props.setActiveID}
                        setForm = {props.setForm}
                        addNumber = {5} editNumber = {3}
                        isLoggedIn={props.isLoggedIn}/>
    </div >
)}    

const campaignsCells = ['ID', 'Campaign', 'Keywords', 'Bid amount', 'Campaign fund', 'Status', 'Town', 'Radius' ];
const productsCells = ['ID', 'Product', 'Price', 'Campaign'];
